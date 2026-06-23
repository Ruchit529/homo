import React from 'react';
import type { LanguageType } from '../../types';

interface ServicesSectionProps {
  language: LanguageType;
  serviceCategory: string;
  setServiceCategory: (cat: string) => void;
  onOpenServiceForm: (title: string) => void;
  t: (key: string) => string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  serviceCategory,
  setServiceCategory,
  onOpenServiceForm,
  t
}) => {
  const servicesList = [
    { id: 1, category: 'provisional', titleKey: 'srv1_title', descKey: 'srv1_desc', actionKey: 'srv_action_apply' },
    { id: 2, category: 'permanent', titleKey: 'srv2_title', descKey: 'srv2_desc', actionKey: 'srv_action_apply' },
    { id: 3, category: 'permanent', titleKey: 'srv3_title', descKey: 'srv3_desc', actionKey: 'srv_action_apply' },
    { id: 4, category: 'permanent', titleKey: 'srv4_title', descKey: 'srv4_desc', actionKey: 'srv_action_check' },
    { id: 5, category: 'permanent', titleKey: 'srv5_title', descKey: 'srv5_desc', actionKey: 'srv_action_reprint' },
    { id: 6, category: 'renewal', titleKey: 'srv6_title', descKey: 'srv6_desc', actionKey: 'srv_action_apply' },
    { id: 7, category: 'renewal', titleKey: 'srv7_title', descKey: 'srv7_desc', actionKey: 'srv_action_reprint' }
  ];

  const filteredServices = servicesList.filter(
    srv => serviceCategory === 'all' || srv.category === serviceCategory
  );

  return (
    <section className="section-padding services-section animate-fade-in-up" id="services">
      <div className="container">
        <div className="section-header">
          <h2>{t('services_title')}</h2>
          <p>{t('services_subtitle')}</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="tabs-nav" role="tablist">
          {['all', 'provisional', 'permanent', 'renewal', 'noc', 'idcard'].map((cat) => (
            <button 
              key={cat} 
              className={`tab-btn ${serviceCategory === cat ? 'active' : ''}`}
              onClick={() => setServiceCategory(cat)}
              role="tab"
              aria-selected={serviceCategory === cat}
            >
              {t('tab_' + cat)}
            </button>
          ))}
        </div>
        
        {/* Clickable Grid Cards */}
        <div className="services-grid">
          {filteredServices.map((srv) => (
            <div 
              key={srv.id} 
              className="service-card"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenServiceForm(t(srv.titleKey))}
            >
              <div className="service-icon">
                <i className={`fa-solid ${
                  srv.category === 'provisional' ? 'fa-file-signature' : 
                  srv.category === 'renewal' ? 'fa-rotate' : 'fa-id-card-clip'
                }`}></i>
              </div>
              <h3>{t(srv.titleKey)}</h3>
              <p>{t(srv.descKey)}</p>
              <span className="service-action-btn">
                <span>{t(srv.actionKey)}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          ))}
          
          {filteredServices.length === 0 && (
            <div className="empty-state">
              <i className="fa-solid fa-folder-open"></i>
              <h3>{language === 'en' ? 'No Services Available' : 'कोई सेवा उपलब्ध नहीं है'}</h3>
              <p>{language === 'en' 
                ? 'There are currently no active online services under this category. Please check back later or contact Council support.'
                : 'इस श्रेणी के अंतर्गत वर्तमान में कोई सक्रिय ऑनलाइन सेवा उपलब्ध नहीं है। कृपया बाद में जांचें या परिषद सहायता से संपर्क करें।'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
