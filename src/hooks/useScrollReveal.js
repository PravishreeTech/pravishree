import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          
          // Animate numeric counters if present
          if (entry.target.classList.contains('stat-counter') || entry.target.querySelector('.stat-counter')) {
            const counters = entry.target.classList.contains('stat-counter') 
              ? [entry.target] 
              : entry.target.querySelectorAll('.stat-counter');
            
            counters.forEach(counter => {
              if (counter.dataset.animated) return;
              counter.dataset.animated = 'true';
              const targetVal = parseFloat(counter.dataset.target);
              const suffix = counter.dataset.suffix || '';
              const prefix = counter.dataset.prefix || '';
              if (!isNaN(targetVal)) {
                let start = 0;
                const duration = 1600;
                const startTime = performance.now();
                
                const updateCounter = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  // easeOutExpo
                  const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                  const currentVal = Math.floor(start + (targetVal - start) * easeProgress);
                  counter.textContent = `${prefix}${currentVal}${suffix}`;
                  if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                  } else {
                    counter.textContent = `${prefix}${targetVal}${suffix}`;
                  }
                };
                requestAnimationFrame(updateCounter);
              }
            });
          }

          // Unobserve to prevent repeat jumps
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const selector = `
      .reveal-on-scroll,
      .reveal-line,
      .reveal-stagger,
      .reveal-stagger-card,
      .reveal-slide-left,
      .reveal-slide-right,
      .reveal-clip,
      .reveal-scale,
      .section-header,
      .service-card,
      .portfolio-card,
      .portfolio-large-card,
      .team-card,
      .advantage-card,
      .career-accordion-item,
      .contact-card-box,
      .process-step-card,
      .why-item-card,
      .tech-category-card
    `;

    const observeAll = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    observeAll();

    // Observe dynamically added DOM nodes (e.g., when changing portfolio filter tabs)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

