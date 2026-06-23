import React from 'react';
import type { LanguageType } from '../../types';
import { documentDatabase } from '../../data/mockData';

interface ModalPdfProps {
  isOpen: boolean;
  onClose: () => void;
  pdfKey: string | null;
  language: LanguageType;
}

export const ModalPdf: React.FC<ModalPdfProps> = ({
  isOpen,
  onClose,
  pdfKey,
  language
}) => {
  if (!isOpen || !pdfKey || !documentDatabase[pdfKey]) return null;

  const doc = documentDatabase[pdfKey];
  const title = language === 'en' ? doc.titleEn : doc.titleHi;
  const content = language === 'en' ? doc.contentEn : doc.contentHi;

  return (
    <div className="pdf-modal active" onClick={onClose}>
      <div className="pdf-container" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-toolbar">
          <div className="pdf-title-info">
            <i className="fa-solid fa-file-pdf"></i>
            <span>{title}</span>
          </div>
          <div className="pdf-actions">
            <i className="fa-solid fa-magnifying-glass-plus pdf-action-icon" title="Zoom In" onClick={() => alert('Zoom In')}></i>
            <i className="fa-solid fa-magnifying-glass-minus pdf-action-icon" title="Zoom Out" onClick={() => alert('Zoom Out')}></i>
            <i className="fa-solid fa-download pdf-action-icon" title="Download Notice" onClick={() => alert('Starting download file...')}></i>
            <i className="fa-solid fa-print pdf-action-icon" title="Print File" onClick={() => window.print()}></i>
            <button className="pdf-close" onClick={onClose}>&times;</button>
          </div>
        </div>
        <div className="pdf-body">
          <div className="pdf-paper">
            <div className="pdf-header-seal">
              <img src="/logo.png" alt="Seal Emblem" style={{ height: '50px', marginBottom: '0.4rem' }} />
              <h2>{language === 'en' ? 'MADHYA PRADESH STATE COUNCIL OF HOMEOPATHY' : 'मध्य प्रदेश राज्य होम्योपैथी परिषद'}</h2>
              <p>{language === 'en' ? 'Vindhyachal Bhavan, Bhopal (M.P.)' : 'विंध्याचल भवन, भोपाल (म.प्र.)'}</p>
            </div>
            
            <div className="pdf-meta-line">
              <span>Ref No: MPSHC/REG/2026/041</span>
              <span>Date: 12-May-2026</span>
            </div>
            
            <div 
              className="pdf-content-text"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            
            <div className="pdf-sign-area">
              <div>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'normal', marginBottom: '0.4rem' }}>D. Kumar</p>
                <p>{language === 'en' ? 'Registrar / Executive Officer' : 'रजिस्ट्रार / कार्यकारी अधिकारी'}</p>
                <p>{language === 'en' ? 'State Council of Homeopathy, M.P.' : 'राज्य होम्योपैथी परिषद, म.प्र.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
