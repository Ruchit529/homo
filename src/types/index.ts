export interface Doctor {
  regNo: string;
  nameEn: string;
  nameHi: string;
  degree: string;
  universityEn: string;
  universityHi: string;
  year: number;
  statusEn: string;
  statusHi: string;
}

export interface PDFDocument {
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export interface FormDataState {
  firstName: string;
  lastName: string;
  fatherName: string;
  dob: string;
  address: string;
  degree: string;
  university: string;
  passingYear: string;
  internshipHospital: string;
  declared: boolean;
}

export type ThemeType = 'light' | 'dark' | 'high-contrast';
export type LanguageType = 'en' | 'hi';
export type FontSizeScale = 'small' | 'normal' | 'large';
export type ModalType = 'auth' | 'service' | 'pdf' | null;
export type AuthTabType = 'login' | 'register';
