import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
  t: (key: string) => string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ t }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesCount = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const moveSlide = (dir: number) => {
    setSlideIndex(prev => (prev + dir + slidesCount) % slidesCount);
  };

  return (
    <section className="hero-carousel" aria-label="Featured Banner Gallery">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className={`carousel-slide ${slideIndex === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80')" }}>
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
            <div className="slide-content">
              <h2>{t('slide1_title')}</h2>
              <p>{t('slide1_desc')}</p>
              <a href="#services" className="btn btn-primary">{t('slide_btn_apply')}</a>
            </div>
          </div>
        </div>
        
        {/* Slide 2 */}
        <div className={`carousel-slide ${slideIndex === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611081496695-1f95d137b7b1?auto=format&fit=crop&w=1200&q=80')" }}>
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
            <div className="slide-content">
              <h2>{t('slide2_title')}</h2>
              <p>{t('slide2_desc')}</p>
              <a href="#search-doctor" className="btn btn-primary">{t('slide_btn_search')}</a>
            </div>
          </div>
        </div>
        
        {/* Slide 3 */}
        <div className={`carousel-slide ${slideIndex === 2 ? 'active' : ''}`} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80')" }}>
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
            <div className="slide-content">
              <h2>{t('slide3_title')}</h2>
              <p>{t('slide3_desc')}</p>
              <a href="#links" className="btn btn-primary">{t('slide_btn_guidelines')}</a>
            </div>
          </div>
        </div>
      </div>
      
      <button className="carousel-control prev" onClick={() => moveSlide(-1)} aria-label="Previous Slide">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="carousel-control next" onClick={() => moveSlide(1)} aria-label="Next Slide">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      
      <div className="carousel-indicators">
        {[0, 1, 2].map((idx) => (
          <span 
            key={idx} 
            className={`carousel-dot ${slideIndex === idx ? 'active' : ''}`} 
            onClick={() => setSlideIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};
