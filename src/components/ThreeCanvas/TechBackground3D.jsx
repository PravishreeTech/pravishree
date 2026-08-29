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
    const particleCount = isMobile ? 120 : 260;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all 3D network elements
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Scale and Initial positioning
    const initialScale = isMobile ? 0.85 : 1.05;
    networkGroup.scale.set(initialScale, initialScale, initialScale);

    const baseX = isMobile ? 0 : 15;
    networkGroup.position.set(baseX, 0, 0);

    // Color Palette
    const colorCyan = new THREE.Color(0x00B4D8);
    const colorBlue = new THREE.Color(0x0077B6);
    const colorLight = new THREE.Color(0x90E0EF);
    const colorCore = new THREE.Color(0x023E8A);

    // 1. Core Network Nodes (Spheres with varied sizes spread across full depth & height)
    const nodeGeometrySmall = new THREE.SphereGeometry(0.65, 14, 14);
    const nodeGeometryLarge = new THREE.SphereGeometry(1.15, 16, 16);
    
    const nodeMaterialCyan = new THREE.MeshBasicMaterial({
      color: colorCyan,
      transparent: true,
      opacity: 0.95,
    });

    const nodeMaterialBlue = new THREE.MeshBasicMaterial({
      color: colorBlue,
      transparent: true,
      opacity: 0.9,
    });

    const nodes = [];
    const nodePositions = [];
    const rangeX = isMobile ? 45 : 75;
    const rangeY = isMobile ? 70 : 110;
    const rangeZ = isMobile ? 40 : 55;

    for (let i = 0; i < particleCount; i++) {
      const isKeyNode = i % 6 === 0;
      const geo = isKeyNode ? nodeGeometryLarge : nodeGeometrySmall;
      const mat = isKeyNode ? nodeMaterialCyan : (i % 2 === 0 ? nodeMaterialCyan : nodeMaterialBlue);
      
      const mesh = new THREE.Mesh(geo, mat);
      const x = (Math.random() - 0.5) * rangeX * 1.5;
      const y = (Math.random() - 0.5) * rangeY;
      const z = (Math.random() - 0.5) * rangeZ;

      mesh.position.set(x, y, z);
      mesh.userData = {
        originX: x,
        originY: y,
        originZ: z,
        speedX: (Math.random() - 0.5) * 0.035,
        speedY: (Math.random() - 0.5) * 0.035,
        speedZ: (Math.random() - 0.5) * 0.035,
        pulseOffset: Math.random() * Math.PI * 2,
      };

      networkGroup.add(mesh);
      nodes.push(mesh);
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // 2. Connecting Mesh Lines
    const maxDistance = isMobile ? 12 : 16;
    const maxLineSegments = particleCount * 4;
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
        opacity: 0.45,
      })
    );
    networkGroup.add(lineMesh);

    // 3. Central Geometric Tech Core & Orbiting Rings
    // Central 3D Icosahedron Lattice
    const icoGeo = new THREE.IcosahedronGeometry(11, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: colorCyan,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    networkGroup.add(icoMesh);

    // Orbiting Tech Ring 1
    const ringGeo1 = new THREE.TorusGeometry(18, 0.28, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: colorLight,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    networkGroup.add(ring1);

    // Orbiting Tech Ring 2
    const ringGeo2 = new THREE.TorusGeometry(26, 0.22, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: colorBlue,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    networkGroup.add(ring2);

    // Secondary Floating Orbit Structure
    const ringGeo3 = new THREE.TorusGeometry(34, 0.18, 16, 64);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: colorCyan,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.position.y = -35;
    ring3.rotation.x = Math.PI / 2.5;
    networkGroup.add(ring3);

    // Outer Octahedron Halo
    const octGeo = new THREE.OctahedronGeometry(16, 0);
    const octMat = new THREE.MeshBasicMaterial({
      color: colorCore,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    networkGroup.add(octMesh);

    // Mouse Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Tracking across full document height
    let scrollProgress = 0;
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        scrollProgress = window.scrollY / totalHeight;
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
      const targetBase = newMobile ? 0 : 15;
      const newScale = newMobile ? 0.85 : 1.05;
      networkGroup.scale.set(newScale, newScale, newScale);
      networkGroup.position.x = targetBase * (1 - scrollProgress * 1.5);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = ((currentTime || performance.now()) - startTime) * 0.001;

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Rotate geometry rings & core
        ring1.rotation.z = elapsedTime * 0.09;
        ring1.rotation.x = Math.PI / 3 + elapsedTime * 0.05;
        ring2.rotation.y = elapsedTime * 0.07;
        ring3.rotation.z = -elapsedTime * 0.05;
        icoMesh.rotation.x = elapsedTime * 0.12;
        icoMesh.rotation.y = elapsedTime * 0.14;
        octMesh.rotation.z = elapsedTime * 0.06;
        octMesh.rotation.x = elapsedTime * 0.08;

        // Animate individual node positions
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const ud = node.userData;

          node.position.x = ud.originX + Math.sin(elapsedTime * 0.8 + ud.pulseOffset) * 2.2;
          node.position.y = ud.originY + Math.cos(elapsedTime * 0.7 + ud.pulseOffset) * 2.2;
          node.position.z = ud.originZ + Math.sin(elapsedTime * 0.5 + ud.pulseOffset) * 1.6;

          nodePositions[i].copy(node.position);
        }

        // Dynamically update connecting lines
        let lineIdx = 0;
        const colorArray = lineMesh.geometry.attributes.color.array;
        const posArray = lineMesh.geometry.attributes.position.array;

        for (let i = 0; i < nodes.length && lineIdx < maxLineSegments; i++) {
          for (let j = i + 1; j < nodes.length && lineIdx < maxLineSegments; j++) {
            const dist = nodePositions[i].distanceTo(nodePositions[j]);
            if (dist < maxDistance) {
              const alpha = 1 - dist / maxDistance;
              const idx6 = lineIdx * 6;

              posArray[idx6] = nodePositions[i].x;
              posArray[idx6 + 1] = nodePositions[i].y;
              posArray[idx6 + 2] = nodePositions[i].z;

              posArray[idx6 + 3] = nodePositions[j].x;
              posArray[idx6 + 4] = nodePositions[j].y;
              posArray[idx6 + 5] = nodePositions[j].z;

              colorArray[idx6] = colorCyan.r * alpha;
              colorArray[idx6 + 1] = colorCyan.g * alpha;
              colorArray[idx6 + 2] = colorCyan.b * alpha;

              colorArray[idx6 + 3] = colorBlue.r * alpha;
              colorArray[idx6 + 4] = colorBlue.g * alpha;
              colorArray[idx6 + 5] = colorBlue.b * alpha;

              lineIdx++;
            }
          }
        }

        lineMesh.geometry.setDrawRange(0, lineIdx * 2);
        lineMesh.geometry.attributes.position.needsUpdate = true;
        lineMesh.geometry.attributes.color.needsUpdate = true;
      }

      // Scroll & Parallax Transformations across all sections
      const currentBase = isMobile ? 0 : 15;
      networkGroup.position.x = currentBase * (1 - scrollProgress * 1.4) + currentMouseX * 5;
      networkGroup.position.y = scrollProgress * 45 - currentMouseY * 4;
      networkGroup.position.z = -scrollProgress * 12;

      networkGroup.rotation.y = elapsedTime * 0.04 + scrollProgress * Math.PI * 1.8 + currentMouseX * 0.25;
      networkGroup.rotation.x = scrollProgress * 0.4 + currentMouseY * 0.2;

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

      nodeGeometrySmall.dispose();
      nodeGeometryLarge.dispose();
      nodeMaterialCyan.dispose();
      nodeMaterialBlue.dispose();
      lineGeometry.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      octGeo.dispose();
      octMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div className="tech-bg-3d-canvas-container" ref={mountRef} aria-hidden="true" />;
}
