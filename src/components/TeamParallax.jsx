import { useEffect } from 'react';

const TeamParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-element floating-element-1">🌟</div>
      <div className="parallax-element floating-element-2">💡</div>
      <div className="parallax-element floating-element-3">🚀</div>
      <div className="parallax-element floating-element-4">🎯</div>
    </div>
  );
};

export default TeamParallax;
