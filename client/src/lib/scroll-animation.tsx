import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillFill = entry.target as HTMLElement;
          const width = skillFill.getAttribute('data-width');
          skillFill.style.width = '0%';
          setTimeout(() => {
            skillFill.style.width = width + '%';
          }, 300);
        }
      });
    }, observerOptions);

    skillBars.forEach((bar) => {
      skillObserver.observe(bar);
    });

    return () => {
      observer.disconnect();
      skillObserver.disconnect();
    };
  }, []);
}
