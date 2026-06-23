import React, { useState } from 'react';
import type { LanguageType } from '../../types';

interface ModalAuthProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageType;
  t: (key: string) => string;
}

export const ModalAuth: React.FC<ModalAuthProps> = ({
  isOpen,
  onClose,
  language,
  t
}) => {
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authTab === 'login') {
      alert(language === 'en' 
        ? `Success: Welcome back, ${loginUser || 'Doctor'}! Launching council workspace.` 
        : `सफलता: स्वागत है, ${loginUser || 'डॉक्टर'}! काउंसिल डैशबोर्ड खुल रहा है।`
      );
      onClose();
    } else {
      if (password !== confirmPassword) {
        alert(language === 'en' ? 'Error: Passwords do not match!' : 'त्रुटि: पासवर्ड मेल नहीं खाते!');
        return;
      }
      alert(language === 'en' 
        ? `Success: Profile created for ${fullname}! Please log in.` 
        : `सफलता: ${fullname} के लिए प्रोफ़ाइल बनाई गई! कृपया लॉगिन करें।`
      );
      setAuthTab('login');
    }
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{t('auth_title')}</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="auth-tabs">
            <button 
              className={`auth-tab-btn ${authTab === 'login' ? 'active' : ''}`}
              onClick={() => setAuthTab('login')}
            >
              {t('tab_auth_login')}
            </button>
            <button 
              className={`auth-tab-btn ${authTab === 'register' ? 'active' : ''}`}
              onClick={() => setAuthTab('register')}
            >
              {t('tab_auth_register')}
            </button>
          </div>
          
          {authTab === 'login' ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('frm_lbl_username')}</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder={language === 'en' ? "Enter registration username..." : "रजिस्ट्रेशन उपयोगकर्ता नाम दर्ज करें..."} 
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label>{t('frm_lbl_password')}</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder={language === 'en' ? "Enter password..." : "पासवर्ड दर्ज करें..."} 
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  required 
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', fontSize: '0.8rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                  <input type="checkbox" /> <span>{t('frm_lbl_remember')}</span>
                </label>
                <a href="#" style={{ color: 'var(--primary)', fontWeight: 700 }}>{t('frm_lbl_forgot')}</a>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.7rem' }}>
                {t('btn_sign_in')}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('frm_lbl_fullname')}</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder={language === 'en' ? "Full name..." : "पूरा नाम..."} 
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('frm_lbl_email')}</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="doctor@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('frm_lbl_mobile')}</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    pattern="[0-9]{10}"
                    placeholder="10-digit number" 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('frm_lbl_new_pass')}</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('frm_lbl_confirm_pass')}</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.7rem' }}>
                {t('btn_create_profile')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
