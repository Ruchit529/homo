import React, { useState } from 'react';
import type { LanguageType, FormDataState } from '../../types';

interface ModalServiceProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  language: LanguageType;
  t: (key: string) => string;
}

export const ModalService: React.FC<ModalServiceProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  language,
  t
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [formData, setFormData] = useState<FormDataState>({
    firstName: '', lastName: '', fatherName: '', dob: '', address: '',
    degree: '', university: '', passingYear: '', internshipHospital: '',
    declared: false
  });

  if (!isOpen) return null;

  const handleNextStep = (current: number, next: number) => {
    let isValid = true;
    if (current === 1) {
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.fatherName.trim() || !formData.dob || !formData.address.trim()) {
        isValid = false;
      }
    } else if (current === 2) {
      if (!formData.degree || !formData.university.trim() || !formData.passingYear) {
        isValid = false;
      }
    }

    if (!isValid) {
      alert(language === 'en' ? 'Please fill out all required fields.' : 'कृपया सभी आवश्यक फ़ील्ड भरें।');
      return;
    }
    setStep(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.declared) {
      alert(language === 'en' ? 'You must declare detail verification.' : 'आपको घोषणा सत्यापित करनी होगी।');
      return;
    }
    const randomRef = 'MPH-' + Math.floor(1000000 + Math.random() * 9000000);
    setRefId(randomRef);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{serviceTitle}</h3>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {!submitted ? (
            <>
              <div className="step-indicator">
                <div className={`step-dot ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                  {step > 1 ? <i className="fa-solid fa-check"></i> : '1'}
                </div>
                <div className={`step-dot ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>
                  {step > 2 ? <i className="fa-solid fa-check"></i> : '2'}
                </div>
                <div className={`step-dot ${step === 3 ? 'active' : ''}`}>3</div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="form-step active">
                    <h4 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', color: 'var(--primary)' }}>
                      {t('form_step1_header')}
                    </h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label>{t('lbl_app_fname')} *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label>{t('lbl_app_lname')} *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required 
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>{t('lbl_app_father')} *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.fatherName}
                          onChange={(e) => setFormData(prev => ({ ...prev, fatherName: e.target.value }))}
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label>{t('lbl_app_dob')} *</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          value={formData.dob}
                          onChange={(e) => setFormData(prev => ({ ...prev, dob: e.target.value }))}
                          required 
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>{t('lbl_app_address')} *</label>
                      <textarea 
                        className="form-control" 
                        rows={2} 
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                        required
                      ></textarea>
                    </div>
                    <div className="form-actions">
                      <button type="button" className="btn btn-primary" onClick={() => handleNextStep(1, 2)}>{t('btn_next')}</button>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="form-step active">
                    <h4 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', color: 'var(--primary)' }}>
                      {t('form_step2_header')}
                    </h4>
                    <div className="form-group">
                      <label>{t('lbl_app_degree')} *</label>
                      <select 
                        className="form-control" 
                        value={formData.degree}
                        onChange={(e) => setFormData(prev => ({ ...prev, degree: e.target.value }))}
                        required
                      >
                        <option value="">{t('opt_select')}</option>
                        <option value="BHMS">BHMS (Bachelor of Homeopathic Medicine and Surgery)</option>
                        <option value="DHMS">DHMS (Diploma in Homeopathic Medicine and Surgery)</option>
                        <option value="MD">MD (Homeopathy)</option>
                      </select>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>{t('lbl_app_university')} *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="e.g. Barkatullah University, Bhopal" 
                          value={formData.university}
                          onChange={(e) => setFormData(prev => ({ ...prev, university: e.target.value }))}
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label>{t('lbl_app_year')} *</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          min={1970} 
                          max={2026} 
                          value={formData.passingYear}
                          onChange={(e) => setFormData(prev => ({ ...prev, passingYear: e.target.value }))}
                          required 
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>{t('lbl_app_intern')}</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. Govt. Homeopathic Hospital, Bhopal" 
                        value={formData.internshipHospital}
                        onChange={(e) => setFormData(prev => ({ ...prev, internshipHospital: e.target.value }))}
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>{t('btn_prev')}</button>
                      <button type="button" className="btn btn-primary" onClick={() => handleNextStep(2, 3)}>{t('btn_next')}</button>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="form-step active">
                    <h4 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--primary-light)', paddingBottom: '0.4rem', color: 'var(--primary)' }}>
                      {t('form_step3_header')}
                    </h4>
                    <div className="form-group">
                      <label>{t('lbl_doc_degree')} *</label>
                      <input type="file" className="form-control" accept=".pdf" required />
                    </div>
                    <div className="form-group">
                      <label>{t('lbl_doc_id')} *</label>
                      <input type="file" className="form-control" accept=".pdf" required />
                    </div>
                    <div className="form-group" style={{ marginTop: '1.2rem' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontWeight: 600, fontSize: '0.8rem' }}>
                        <input 
                          type="checkbox" 
                          checked={formData.declared}
                          onChange={(e) => setFormData(prev => ({ ...prev, declared: e.target.checked }))}
                          required 
                          style={{ marginTop: '0.15rem' }} 
                        />
                        <span>{t('lbl_declare')}</span>
                      </label>
                    </div>
                    <div className="form-actions">
                      <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>{t('btn_prev')}</button>
                      <button type="submit" className="btn btn-primary">{t('btn_submit_app')}</button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="success-screen">
              <div className="success-icon"><i className="fa-solid fa-clipboard-check"></i></div>
              <h4>{t('succ_title')}</h4>
              <p>{t('succ_desc')}</p>
              <div className="success-reference">{refId}</div>
              <p style={{ fontSize: '0.8rem', marginTop: '1.2rem' }}>{t('succ_followup')}</p>
              <button className="btn btn-primary" onClick={onClose}>{t('btn_close')}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
