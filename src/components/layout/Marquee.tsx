import React from 'react';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="announcement-banner" role="alert">
      <div className="container" style={{ overflow: 'hidden' }}>
        <div className="marquee-content">
          {text}
        </div>
      </div>
    </div>
  );
};
