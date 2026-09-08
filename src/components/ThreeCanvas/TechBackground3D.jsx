import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './TechBackground3D.css';

export default function TechBackground3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 1024;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // 2. Perspective Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Master Group for 3D background network
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Layer Groups for Parallax Depth
    const bgGroup = new THREE.Group();     // Background: distant particles
    const midGroup = new THREE.Group();    // Midground: 3D network constellation
    masterGroup.add(bgGroup);
    masterGroup.add(midGroup);

    // Scale and Initial positioning (further 5% reduced size)
    const initialScale = isMobile ? 0.767 : 0.9476;
    masterGroup.scale.set(initialScale, initialScale, initialScale);
    const baseX = isMobile ? 0 : 5;
    masterGroup.position.set(baseX, 0, 0);

    // Requested Node Color (#1ABADD / RGB: 26, 186, 222)
    const colorNodePrimary = new THREE.Color(0x1ABADD);
    const colorNodeSecondary = new THREE.Color(0x0096C7);
    // Connecting Line Color (#A8B4BC / RGB: 168, 180, 188)
    const colorLine = new THREE.Color(0xA8B4BC);

    // --- A. BACKGROUND LAYER: Distant Particles ---
    const bgParticleCount = isMobile ? 140 : 320;
    const bgGeo = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(bgParticleCount * 3);
    for (let i = 0; i < bgParticleCount * 3; i += 3) {
      bgPositions[i] = (Math.random() - 0.5) * 170;
      bgPositions[i + 1] = (Math.random() - 0.5) * 140;
      bgPositions[i + 2] = (Math.random() - 0.5) * 100 - 50;
    }
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    const bgMat = new THREE.PointsMaterial({
      color: colorNodePrimary,
      size: 1.26,
      transparent: true,
      opacity: 0.50,
      blending: THREE.AdditiveBlending,
    });
    const bgPoints = new THREE.Points(bgGeo, bgMat);
    bgGroup.add(bgPoints);

    // --- B. MIDGROUND LAYER: 3D Network Constellation in #1ABADD ---
    const particleCount = isMobile ? 120 : 260;
    const nodeGeometrySmall = new THREE.SphereGeometry(0.5866, 16, 16);
    const nodeGeometryLarge = new THREE.SphereGeometry(1.128, 20, 20);
    
    const nodeMaterialPrimary = new THREE.MeshBasicMaterial({
      color: colorNodePrimary,
      transparent: true,
      opacity: 0.95,
    });
    const nodeMaterialSecondary = new THREE.MeshBasicMaterial({
      color: colorNodeSecondary,
      transparent: true,
      opacity: 0.90,
    });

    const nodes = [];
    const nodePositions = [];
    const rangeX = isMobile ? 52.25 : 85.5;
    const rangeY = isMobile ? 76 : 123.5;
    const rangeZ = isMobile ? 38 : 57;

    for (let i = 0; i < particleCount; i++) {
      const isKeyNode = i % 5 === 0;
      const geo = isKeyNode ? nodeGeometryLarge : nodeGeometrySmall;
      const mat = i % 2 === 0 ? nodeMaterialPrimary : nodeMaterialSecondary;
      
      const mesh = new THREE.Mesh(geo, mat);
      
      let x = (Math.random() - 0.5) * rangeX * 1.425;
      let y = (Math.random() - 0.5) * rangeY;
      let z = (Math.random() - 0.5) * rangeZ;

      // Keep center space open for text legibility (5% closer)
      if (Math.abs(x) < 17.1 && Math.abs(y) < 17.1) {
        x += (x >= 0 ? 17.1 : -17.1);
      }

      mesh.position.set(x, y, z);
      mesh.userData = {
        originX: x,
        originY: y,
        originZ: z,
        speedX: (Math.random() - 0.5) * 0.03,
        speedY: (Math.random() - 0.5) * 0.03,
        speedZ: (Math.random() - 0.5) * 0.03,
        pulseOffset: Math.random() * Math.PI * 2,
      };

      midGroup.add(mesh);
      nodes.push(mesh);
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Dynamic Connecting Mesh Lines in Navigation Blue (5% reduced connection density)
    const maxDistance = isMobile ? 12.35 : 16.15;
    const maxLineSegments = particleCount * 4.56;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineColors = new Float32Array(maxLineSegments * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMesh = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.665,
      })
    );
    midGroup.add(lineMesh);

    // Dynamic Parallax Variables
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Tracking
    let scrollProgress = 0;
    let currentScrollY = 0;
    const handleScroll = () => {
      currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        scrollProgress = currentScrollY / totalHeight;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      const newMobile = window.innerWidth < 1024;
      const targetBase = newMobile ? 0 : 5;
      const newScale = newMobile ? 0.767 : 0.9476;
      masterGroup.scale.set(newScale, newScale, newScale);
      masterGroup.position.x = targetBase * (1 - scrollProgress * 1.4);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = ((currentTime || performance.now()) - startTime) * 0.001;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Animate Midground Network Nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const ud = node.userData;

          node.position.x = ud.originX + Math.sin(elapsedTime * 0.7 + ud.pulseOffset) * 2.0;
          node.position.y = ud.originY + Math.cos(elapsedTime * 0.6 + ud.pulseOffset) * 2.0;
          node.position.z = ud.originZ + Math.sin(elapsedTime * 0.5 + ud.pulseOffset) * 1.6;

          nodePositions[i].copy(node.position);
        }

        // Dynamically update connecting lines in Navigation Blue
        let lineIdx = 0;
        const colorArray = lineMesh.geometry.attributes.color.array;
        const posArray = lineMesh.geometry.attributes.position.array;

        for (let i = 0; i < nodes.length && lineIdx < maxLineSegments; i++) {
          for (let j = i + 1; j < nodes.length && lineIdx < maxLineSegments; j++) {
            const dist = nodePositions[i].distanceTo(nodePositions[j]);
            if (dist < maxDistance) {
              const alpha = (1 - dist / maxDistance) * 0.8075;
              const idx6 = lineIdx * 6;

              posArray[idx6] = nodePositions[i].x;
              posArray[idx6 + 1] = nodePositions[i].y;
              posArray[idx6 + 2] = nodePositions[i].z;

              posArray[idx6 + 3] = nodePositions[j].x;
              posArray[idx6 + 4] = nodePositions[j].y;
              posArray[idx6 + 5] = nodePositions[j].z;

              colorArray[idx6] = colorLine.r * alpha;
              colorArray[idx6 + 1] = colorLine.g * alpha;
              colorArray[idx6 + 2] = colorLine.b * alpha;

              colorArray[idx6 + 3] = colorLine.r * alpha;
              colorArray[idx6 + 4] = colorLine.g * alpha;
              colorArray[idx6 + 5] = colorLine.b * alpha;

              lineIdx++;
            }
          }
        }

        lineMesh.geometry.setDrawRange(0, lineIdx * 2);
        lineMesh.geometry.attributes.position.needsUpdate = true;
        lineMesh.geometry.attributes.color.needsUpdate = true;

        bgPoints.rotation.y = elapsedTime * 0.025;
      }

      // Parallax Motion
      bgGroup.position.x = currentMouseX * 2.2;
      bgGroup.position.y = -currentMouseY * 2.2;

      midGroup.position.x = currentMouseX * 6.0;
      midGroup.position.y = -currentMouseY * 6.0;

      // Master Group Scroll Transformation
      const currentBase = isMobile ? 0 : 5;
      masterGroup.position.x = currentBase * (1 - scrollProgress * 1.4);
      masterGroup.position.y = scrollProgress * 42;
      masterGroup.position.z = -scrollProgress * 12;

      masterGroup.rotation.y = elapsedTime * 0.035 + scrollProgress * Math.PI * 1.6;
      masterGroup.rotation.x = scrollProgress * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      bgGeo.dispose();
      bgMat.dispose();
      nodeGeometrySmall.dispose();
      nodeGeometryLarge.dispose();
      nodeMaterialPrimary.dispose();
      nodeMaterialSecondary.dispose();
      lineGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="tech-bg-3d-canvas-container" ref={mountRef} aria-hidden="true" />;
}
