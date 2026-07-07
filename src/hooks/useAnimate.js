import { useEffect } from 'react';

export function useAnimate() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.anim-flip, .anim-bottom');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}