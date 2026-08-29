import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Unobserve once revealed to keep it natural and avoid repeat flashing
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll, .section-header, .service-card, .portfolio-card, .team-card, .why-card, .career-accordion-item, .contact-card-box');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
