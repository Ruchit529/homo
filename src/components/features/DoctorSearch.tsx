import React from 'react';
import type { LanguageType, Doctor } from '../../types';

interface DoctorSearchProps {
  language: LanguageType;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  searchResult: Doctor | null;
  searchTriggered: boolean;
  handleSearch: () => void;
  t: (key: string) => string;
}

export const DoctorSearch: React.FC<DoctorSearchProps> = ({
  language,
  searchQuery,
  setSearchQuery,
  searchResult,
  searchTriggered,
  handleSearch,
  t
}) => {
  return (
    <section className="section-padding search-section animate-fade-in-up" id="search-doctor">
      <div className="container">
        <div className="section-header">
          <h2>{t('search_title')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)' }}>{t('search_subtitle')}</p>
        </div>
        
        <div className="search-box-container">
          <div className="search-bar">
            <input 
              type="text" 
              className="search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder={language === 'en' ? "Search by Registration ID (e.g. MP-1042) or Doctor's Name..." : "रजिस्ट्रेशन आईडी (जैसे MP-1042) या डॉक्टर के नाम से खोजें..."} 
              aria-label="Search registry database"
            />
            <button className="search-btn" onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>{t('search_btn_text')}</span>
            </button>
          </div>
        </div>
        
        {/* Certification details display */}
        {searchTriggered && (
          <div className="search-results">
            {searchResult ? (
              <div className="doctor-certificate" role="region" aria-label="Practitioner Registration Certificate">
                <div className="cert-header">
                  <div className="cert-seal pulse-element"><i className="fa-solid fa-certificate"></i></div>
                  <h4>{language === 'en' ? 'MADHYA PRADESH STATE COUNCIL OF HOMEOPATHY' : 'मध्य प्रदेश राज्य होम्योपैथी परिषद'}</h4>
                  <p>{language === 'en' ? 'CONSTITUTED UNDER THE M.P. ACT NO. 19 OF 1976' : 'म.प्र. अधिनियम क्रमांक १९, १९७६ के अंतर्गत गठित'}</p>
                </div>
                <div className="cert-body">
                  <p className="cert-statement">
                    {language === 'en' 
                      ? 'This is to certify that the homeopathic practitioner named below is registered in the state registry:'
                      : 'प्रमाणित किया जाता है कि नीचे उल्लेखित होम्योपैथिक चिकित्सक राज्य पंजिका में पंजीकृत है:'}
                  </p>
                  <h3 className="cert-name">{language === 'en' ? searchResult.nameEn : searchResult.nameHi}</h3>
                  <p className="cert-degree">{searchResult.degree}</p>
                  
                  <div className="cert-details-grid">
                    <div className="cert-item">
                      <label>{language === 'en' ? 'Registration ID' : 'पंजीकरण संख्या'}</label>
                      <span style={{ color: 'var(--primary)' }}>{searchResult.regNo}</span>
                    </div>
                    <div className="cert-item">
                      <label>{language === 'en' ? 'Registry Status' : 'पंजीकरण स्थिति'}</label>
                      <span className="cert-status">{language === 'en' ? searchResult.statusEn : searchResult.statusHi}</span>
                    </div>
                    <div className="cert-item">
                      <label>{language === 'en' ? 'Board/University' : 'बोर्ड / विश्वविद्यालय'}</label>
                      <span>{language === 'en' ? searchResult.universityEn : searchResult.universityHi}</span>
                    </div>
                    <div className="cert-item">
                      <label>{language === 'en' ? 'Passing Year' : 'उत्तीर्ण वर्ष'}</label>
                      <span>{searchResult.year}</span>
                    </div>
                  </div>
                </div>
                <div className="cert-footer">
                  <div>
                    <p>{language === 'en' ? 'Official Council Seal' : 'आधिकारिक परिषद सील'}</p>
                    <p style={{ fontSize: '0.6rem', fontWeight: 'normal' }}>{language === 'en' ? 'Verified Digital Record' : 'सत्यापित डिजिटल रिकॉर्ड'}</p>
                  </div>
                  <div className="cert-sign">
                    <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'normal', marginBottom: '0.2rem' }}>D. Kumar</p>
                    <p>{language === 'en' ? 'Registrar Signature' : 'रजिस्ट्रार हस्ताक्षर'}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="cert-error">
                <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}></i>
                {language === 'en' 
                  ? 'No registered homeopathic doctor found matching your query. Please check spellings or Registry ID.'
                  : 'खोज विवरण से मेल खाता हुआ कोई पंजीकृत होम्योपैथिक डॉक्टर नहीं मिला। कृपया वर्तनी या पंजीकरण संख्या की जाँच करें।'}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
