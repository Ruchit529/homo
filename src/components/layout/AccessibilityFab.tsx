import React, { useState } from 'react';
import type { FontSizeScale, ThemeType } from '../../types';

interface AccessibilityFabProps {
  fontSize: FontSizeScale;
  scaleText: (size: FontSizeScale) => void;
  theme: ThemeType;
  handleHighContrastChange: (checked: boolean) => void;
  t: (key: string) => string;
}

export const AccessibilityFab: React.FC<AccessibilityFabProps> = ({
  fontSize,
  scaleText,
  theme,
  handleHighContrastChange,
  t
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        className="accessibility-fab" 
        onClick={() => setOpen(prev => !prev)}
        aria-label="Accessibility Options Menu"
        style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 99 }}
      >
        <i className="fa-solid fa-universal-access"></i>
      </button>
      <div className={`accessibility-menu ${open ? 'active' : ''}`} style={{ position: 'fixed', bottom: '5rem', right: '1.5rem', zIndex: 99 }}>
        <div className="acc-title">{t('acc_title')}</div>
        <div className="acc-row">
          <label>{t('acc_text_size')}</label>
          <div className="acc-btn-group">
            <button className={`acc-btn ${fontSize === 'small' ? 'active' : ''}`} onClick={() => scaleText('small')}>A-</button>
            <button className={`acc-btn ${fontSize === 'normal' ? 'active' : ''}`} onClick={() => scaleText('normal')}>A</button>
            <button className={`acc-btn ${fontSize === 'large' ? 'active' : ''}`} onClick={() => scaleText('large')}>A+</button>
          </div>
        </div>
        <div className="acc-row">
          <label>{t('acc_high_contrast')}</label>
          <label className="acc-switch">
            <input 
              type="checkbox" 
              checked={theme === 'high-contrast'}
              onChange={(e) => handleHighContrastChange(e.target.checked)}
            />
            <span className="acc-slider"></span>
          </label>
        </div>
      </div>
    </>
  );
};
