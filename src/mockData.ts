import type { Doctor, PDFDocument } from './types';

export const doctorDatabase: Doctor[] = [
  {
    regNo: "MP-1042",
    nameEn: "Dr. Sandeep Sharma",
    nameHi: "डॉ. संदीप शर्मा",
    degree: "BHMS, MD (Homeopathy)",
    universityEn: "LNCT University, Bhopal",
    universityHi: "एलएनसीटी विश्वविद्यालय, भोपाल",
    year: 2018,
    statusEn: "Active & Certified",
    statusHi: "सक्रिय और प्रमाणित"
  },
  {
    regNo: "MP-8763",
    nameEn: "Dr. Priya Patel",
    nameHi: "डॉ. प्रिया पटेल",
    degree: "BHMS",
    universityEn: "Govt. Homeopathy Medical College, Bhopal",
    universityHi: "शासकीय होम्योपैथी चिकित्सा महाविद्यालय, भोपाल",
    year: 2020,
    statusEn: "Active & Certified",
    statusHi: "सक्रिय और प्रमाणित"
  },
  {
    regNo: "MP-3451",
    nameEn: "Dr. Rajesh Verma",
    nameHi: "डॉ. राजेश वर्मा",
    degree: "MD (Homeopathy)",
    universityEn: "Barkatullah University, Bhopal",
    universityHi: "बरकतउल्ला विश्वविद्यालय, भोपाल",
    year: 2015,
    statusEn: "Active & Certified",
    statusHi: "सक्रिय और प्रमाणित"
  },
  {
    regNo: "MP-5592",
    nameEn: "Dr. Shalini Singh",
    nameHi: "डॉ. शालिनी सिंह",
    degree: "BHMS, DHMS",
    universityEn: "Jiwaji University, Gwalior",
    universityHi: "जीवाजी विश्वविद्यालय, ग्वालियर",
    year: 2012,
    statusEn: "Active & Certified",
    statusHi: "सक्रिय और प्रमाणित"
  }
];

export const documentDatabase: Record<string, PDFDocument> = {
  fee_details: {
    titleEn: "Department Fee Details (2026)",
    titleHi: "विभाग शुल्क विवरण (2026)",
    contentEn: `
      <h3>OFFICIAL FEES NOTIFICATION SCHEDULE</h3>
      <p>Pursuant to notification order MPSHC/REG/2026/F-02, the fee structure for registered homeopathic practitioners is detailed below:</p>
      <table class="pdf-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Government Fee</th>
            <th>Portal Charge</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Provisional Registration</td>
            <td>₹ 1,000</td>
            <td>₹ 50</td>
            <td>₹ 1,050</td>
          </tr>
          <tr>
            <td>Permanent Registration</td>
            <td>₹ 3,000</td>
            <td>₹ 50</td>
            <td>₹ 3,050</td>
          </tr>
          <tr>
            <td>Revision of Registration (Renewal)</td>
            <td>₹ 1,500</td>
            <td>₹ 50</td>
            <td>₹ 1,550</td>
          </tr>
          <tr>
            <td>Duplicate Certificate Reprint</td>
            <td>₹ 500</td>
            <td>₹ 50</td>
            <td>₹ 550</td>
          </tr>
        </tbody>
      </table>
      <p>Note: All payments must be made online via debit/credit card, internet banking, or authorized MPOnline kiosk centers. Fees once paid are non-refundable.</p>
    `,
    contentHi: `
      <h3>आधिकारिक शुल्क अधिसूचना अनुसूची</h3>
      <p>अधिसूचना आदेश MPSHC/REG/2026/F-02 के अनुसार, पंजीकृत होम्योपैथिक चिकित्सकों के लिए शुल्क संरचना नीचे दी गई है:</p>
      <table class="pdf-table">
        <thead>
          <tr>
            <th>सेवा का नाम</th>
            <th>सरकारी शुल्क</th>
            <th>पोर्टल शुल्क</th>
            <th>कुल शुल्क</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>अस्थायी (प्रोविजनल) पंजीकरण</td>
            <td>₹ 1,000</td>
            <td>₹ 50</td>
            <td>₹ 1,050</td>
          </tr>
          <tr>
            <td>स्थायी (परमानेंट) पंजीकरण</td>
            <td>₹ 3,000</td>
            <td>₹ 50</td>
            <td>₹ 3,050</td>
          </tr>
          <tr>
            <td>पंजीकरण का पुनरीक्षण (नवीनीकरण)</td>
            <td>₹ 1,500</td>
            <td>₹ 50</td>
            <td>₹ 1,550</td>
          </tr>
          <tr>
            <td>डुप्लिकेट प्रमाण पत्र पुनर्मुद्रण</td>
            <td>₹ 500</td>
            <td>₹ 50</td>
            <td>₹ 550</td>
          </tr>
        </tbody>
      </table>
      <p>नोट: सभी शुल्कों का भुगतान डेबिट/क्रेडिट कार्ड, इंटरनेट बैंकिंग, या अधिकृत एमपीऑनलाइन कियोस्क केंद्रों के माध्यम से ऑनलाइन किया जाना अनिवार्य है। भुगतान किया गया शुल्क वापस नहीं किया जाएगा।</p>
    `
  },
  affidavit_revision: {
    titleEn: "Affidavit Form Structure for Profile Revision",
    titleHi: "प्रोफ़ाइल पुनरीक्षण के लिए शपथ पत्र प्रारूप",
    contentEn: `
      <h3>AFFIDAVIT DEED TEMPLATE</h3>
      <p><i>(To be executed on a Non-Judicial Stamp Paper of Rs. 100/- duly notarized)</i></p>
      <p>I, the undersigned, do hereby solemnly affirm and state as follows:</p>
      <p>1. That I am a qualified homeopathic doctor having obtained degree/diploma from University/College Board registered under the Central Council of Homeopathy / MP Homeopathy Act 1976.</p>
      <p>2. That my current registration details on the MPOnline portal show discrepancies in my (Degree Name/Passing Year/University Name/Husband/Father's Name).</p>
      <p>3. That I request the Madhya Pradesh State Homeopathy Council to modify my profile records to accurately display: ________________________.</p>
      <p>4. That I verify all credentials uploaded for proof are authentic, original, and true, and that I accept legal accountability for any falsifications detected.</p>
      <p style="margin-top:2rem;"><b>Verification:</b> Solemnly affirmed at Bhopal on this ____ day of ____________ 2026.</p>
    `,
    contentHi: `
      <h3>शपथ पत्र प्रारूप</h3>
      <p><i>(₹ 100/- के गैर-न्यायिक स्टांप पेपर पर निष्पादित और नोटरीकृत किया जाए)</i></p>
      <p>मैं, अधोहस्ताक्षरी, सत्यनिष्ठा से प्रतिज्ञा करता हूँ और निम्नानुसार बयान करता हूँ:</p>
      <p>१. यह कि मैं एक योग्य होम्योपैथिक चिकित्सक हूँ जिसने केंद्रीय होम्योपैथी परिषद / मप्र होम्योपैथी अधिनियम 1976 के तहत पंजीकृत विश्वविद्यालय/कॉलेज बोर्ड से डिग्री/डिप्लोमा प्राप्त किया है।</p>
      <p>२. यह कि एमपीऑनलाइन पोर्टल पर मेरे वर्तमान पंजीकरण विवरण में विसंगतियां हैं (डिग्री का नाम/उत्तीर्ण वर्ष/विश्वविद्यालय का नाम/पति/पिता का नाम)।</p>
      <p>३. यह कि मैं मध्य प्रदेश राज्य होम्योपैथी परिषद से अपने प्रोफाइल रिकॉर्ड को निम्नानुसार संशोधित करने का अनुरोध करता हूँ: ________________________।</p>
      <p>४. यह कि मैं सत्यापित करता हूँ कि प्रमाण के रूप में अपलोड किए गए सभी दस्तावेज प्रामाणिक, मूल और सत्य हैं, और मैं किसी भी गलत जानकारी के पाए जाने पर कानूनी जिम्मेदारी स्वीकार करता हूँ।</p>
      <p style="margin-top:2rem;"><b>सत्यापन:</b> आज दिनांक ____ माह ____________ वर्ष 2026 को भोपाल में सत्यनिष्ठा से सत्यापित किया गया।</p>
    `
  },
  circular_instructions: {
    titleEn: "Circular: Data Correction & Online Applications Guidelines",
    titleHi: "परिपत्र: डेटा सुधार एवं ऑनलाइन आवेदन दिशानिर्देश",
    contentEn: `
      <h3>CIRCULAR ADVISORY & DIRECTIONS</h3>
      <p><b>Subject:</b> Correction guidelines before applying for the Revision of Registration (Renewal) for 2025-2026.</p>
      <p>1. All registered Homeopathic Medical Practitioners are directed to review their academic parameters (passing year, university name, spelling layout) before submitting the renewal fee transactions.</p>
      <p>2. If any data correction is required, practitioners must send an request email to <b>homoeopathycouncils@yahoo.com</b> along with clear digital scans of original marksheets and provisional certificates BEFORE initiating online process.</p>
      <p>3. The Council registry will update records in the database within 48 working hours, post which the applicant can proceed to complete transactions online.</p>
      <p>4. Kiosk operators are instructed to verify applicant Identity Cards and original degrees before submitting applications from public portals.</p>
    `,
    contentHi: `
      <h3>परिपत्र और निर्देश</h3>
      <p><b>विषय:</b> वर्ष 2025-2026 के लिए पंजीकरण के पुनरीक्षण (नवीनीकरण) के लिए आवेदन करने से पूर्व डेटा सुधार संबंधी दिशानिर्देश।</p>
      <p>१. सभी पंजीकृत होम्योपैथिक चिकित्सा चिकित्सकों को निर्देशित किया जाता है कि वे नवीनीकरण शुल्क का भुगतान करने से पहले अपने शैक्षणिक मापदंडों (उत्तीर्ण वर्ष, विश्वविद्यालय का नाम, वर्तनी प्रारूप) की समीक्षा करें।</p>
      <p>२. यदि किसी डेटा सुधार की आवश्यकता है, तो चिकित्सकों को ऑनलाइन प्रक्रिया शुरू करने से पहले मूल अंकपत्रों और अनंतिम प्रमाणपत्रों के स्पष्ट डिजिटल स्कैन के साथ <b>homoeopathycouncils@yahoo.com</b> पर एक अनुरोध ईमेल भेजना होगा।</p>
      <p>३. परिषद कार्यालय ४८ कार्य घंटों के भीतर डेटाबेस में रिकॉर्ड अपडेट कर देगा, जिसके बाद आवेदक ऑनलाइन प्रक्रिया को पूरा करने के लिए आगे बढ़ सकते हैं।</p>
      <p>४. कियोस्क संचालकों को निर्देशित किया जाता है कि वे सार्वजनिक पोर्टल से आवेदन जमा करने से पहले आवेदक के पहचान पत्र और मूल डिग्री का सत्यापन करें।</p>
    `
  }
};

export const translations: Record<string, Record<string, string>> = {
  en: {
    helpdesk: "Helpdesk: 0755 - 6720200",
    council_info: "Bhopal, Madhya Pradesh",
    login_btn: "Login",
    register_btn: "Create Profile",
    header_title: "Madhya Pradesh",
    header_subtitle: "State Council of Homeopathy",
    header_sub_tag: "Statutory Council | Government of Madhya Pradesh",
    nav_about: "About Us",
    nav_services: "Online Services",
    nav_doctor: "Search Doctor",
    nav_links: "Important Links",
    nav_grievance: "Grievance",
    marquee_alert: "During the application for Revision of Registration on the portal by registered homeopathic medical practitioners, if any data correction (such as Diploma / Degree / University Name / Passing Year) is displayed incorrectly, please report the issue to the Council's email address homoeopathycouncils@yahoo.com or call 0755-2552629 to request corrections before completing the application process.",
    badge_statutory: "Statutory Council",
    slide1_title: "Fostering Homeopathic Excellence in M.P.",
    slide1_desc: "Constituted under the MP State Homeopathy Council Act of 1976, regulating medical practices, ensuring standard services, and certifying professional practitioners across Madhya Pradesh.",
    slide_btn_apply: "Apply Online Now",
    badge_digital: "Digital Governance",
    slide2_title: "Seamless Online Registrations & Renewals",
    slide2_desc: "Empowering practitioners with a modern, hassle-free online application portal in collaboration with MPOnline for quick verifications, provisional entries, and certified licenses.",
    slide_btn_search: "Verify Practitioner Directory",
    badge_notice: "Practitioner Alert",
    slide3_title: "Mandatory Registration Revision 2026",
    slide3_desc: "Ensure your details match Council records. For discrepancies in degree, university, or year of passing, please request changes via mail before closing your submissions.",
    slide_btn_guidelines: "View Guidelines",
    stat_practitioners: "Registered Doctors",
    stat_digital: "Online Verification",
    stat_processing: "Avg. Processing Time",
    stat_support: "MPOnline Portal Help",
    about_badge: "About the Council",
    about_title: "Statutory Governance of Homeopathy",
    about_subtitle: "Madhya Pradesh State Homeopathy Council Act 1976",
    about_desc1: "The Madhya Pradesh State Homeopathy Council is a corporate statutory body established under the provisions of the MP State Homeopathy Council Act of 1976. The Council maintains the central register of homeopathy practitioners, validates academic qualifications, and handles licensing workflows.",
    about_desc2: "The State Government appoints Administrators under Section 40(2) of the Act to oversee Council affairs. The Registrar operates as the Chief Executive Officer responsible for digital credentials, verification systems, and official certifications.",
    about_feat1: "Maintain Practitioner Registry",
    about_feat2: "Validate Educational Qualifications",
    about_feat3: "Provisional/Permanent Licenses",
    about_feat4: "Ethics & Policy Compliance",
    reg_name: "Dr. Nisanth Nambison",
    reg_title: "Registrar & Chief Executive Officer",
    reg_desc: "Responsible for administrative operations, practitioner profile validations, and registration credentials within the MP Council.",
    timeline_title_1976: "Legislative Foundation Act (1976)",
    timeline_desc_1976: "Constitutes the Madhya Pradesh State Homeopathy Council to regulate medical registration systems.",
    timeline_title_1978: "State Administration Assumption (1978)",
    timeline_desc_1978: "State assumed control under Sec 40(2) on 03-August-1978. Under Secretary Shri M.K. Khare was appointed first Administrator.",
    timeline_title_1996: "Service & Officer Rules (1996)",
    timeline_desc_1996: "Official Gazette publication of Officer and Servant Recruitment and service conditions rules, subsequently amended in August 2013.",
    timeline_title_present: "Current Council Leadership",
    timeline_desc_present: "Managed by AYUSH Administrator Shri Sanjay Mishra (IAS) and Registrar Dr. Nisanth Nambison.",
    services_badge: "E-Governance Suite",
    services_title: "Available Online Services",
    services_subtitle: "Choose the appropriate card below to register, request renewals, or download documents online.",
    tab_all: "All Services",
    tab_provisional: "Provisional Registration",
    tab_permanent: "Permanent Registration",
    tab_renewal: "Renewal/Revision",
    tab_noc: "NOC Certificate",
    tab_idcard: "Identity Card",
    srv1_title: "Provisional Registration",
    srv1_desc: "Apply for temporary licensing during internship periods or before formal qualification verifications.",
    srv_action_apply: "Apply Now",
    srv2_title: "Apply for Permanent Registration",
    srv2_desc: "Request permanent registration for homeopathic practicing credentials under standard Council regulations.",
    srv3_title: "Duplicate Permanent Registration",
    srv3_desc: "Request a duplicate copy of your permanent registration certificate in case of loss or damage.",
    srv4_title: "Check Application Status",
    srv4_desc: "Check the real-time evaluation status and query letters for submitted permanent applications.",
    srv_action_check: "Check Status",
    srv5_title: "Duplicate Permanent Receipt",
    srv5_desc: "Reprint transaction receipts for standard permanent registration applications processed on the portal.",
    srv_action_reprint: "Reprint Receipt",
    srv6_title: "Revision of Registration (Renewal)",
    srv6_desc: "File revision and renewal requests for expiring homeopathy certificates to maintain clinical registry active.",
    srv7_title: "Duplicate Receipt for Renewal",
    srv7_desc: "Download or view billing duplicates for renewal applications processed on the portal.",
    search_badge: "Public Registry Search",
    search_title: "Know Your Homeopathic Doctor",
    search_subtitle: "Verify the credential status and validity of homeopathic practitioners registered under the MP State Council.",
    search_btn_text: "Search",
    links_badge: "Circulars & Instructions",
    links_title: "Important Documents & Circulars",
    links_subtitle: "View official guides, affidavit templates, and registration fee structures approved by the State Government.",
    lnk1_title: "Department Fee Details",
    lnk_pdf_size: "PDF Document",
    lnk_action_view: "View Notice",
    lnk2_title: "Affidavit for Revision",
    lnk3_title: "Circular & Instructions",
    acc_title: "Accessibility Tools",
    acc_text_size: "Text Size Scaling",
    acc_high_contrast: "High Contrast Mode",
    auth_title: "Portal Authentication",
    tab_auth_login: "Sign In",
    tab_auth_register: "Create Profile",
    frm_lbl_username: "Username / Profile ID",
    frm_lbl_password: "Password",
    frm_lbl_remember: "Remember Me",
    frm_lbl_forgot: "Forgot Password?",
    btn_sign_in: "Sign In to Dashboard",
    frm_lbl_fullname: "Full Name (As in Marksheets)",
    frm_lbl_email: "Email Address",
    frm_lbl_mobile: "Mobile Number",
    frm_lbl_new_pass: "New Password",
    frm_lbl_confirm_pass: "Confirm Password",
    btn_create_profile: "Register Profile",
    form_step1_header: "Step 1: Personal Profile Details",
    lbl_app_fname: "First Name",
    lbl_app_lname: "Last Name",
    lbl_app_father: "Father's / Husband's Name",
    lbl_app_dob: "Date of Birth",
    lbl_app_address: "Residential Address",
    btn_next: "Continue",
    form_step2_header: "Step 2: Educational Details",
    lbl_app_degree: "Degree / Diploma Title",
    opt_select: "-- Select Option --",
    lbl_app_university: "University / College Board",
    lbl_app_year: "Year of Passing",
    lbl_app_intern: "Internship Hospital",
    btn_prev: "Back",
    form_step3_header: "Step 3: Document Verification Uploads",
    lbl_doc_degree: "Degree Certificate / Provisional Marks Card (PDF)",
    lbl_doc_id: "ID Proof (Aadhar Card / PAN Card PDF)",
    lbl_declare: "I hereby declare that all details filled above are accurate to the best of my knowledge and conform to MP Homeopathy Council records.",
    btn_submit_app: "Submit Form & Pay Fee",
    succ_title: "Application Submitted Successfully!",
    succ_desc: "Your request has been routed to the Madhya Pradesh State Homeopathy Council registry database. Your application tracking ID is:",
    succ_followup: "Please note down this ID to check your status. A confirmation notification has been sent to your registered mobile and email.",
    btn_close: "Close Form",
    foot_brand: "M.P. Homeopathy Council",
    foot_desc: "Statutory administrative framework constituted under the MP State Homeopathy Act of 1976. Providing registration, standard validation, and licensing solutions across the state of Madhya Pradesh.",
    foot_links_title: "Quick Access",
    foot_lnk_about: "About Council",
    foot_lnk_services: "Online Services",
    foot_lnk_doctor: "Practitioner Search",
    foot_lnk_downloads: "Important Downloads",
    foot_gov_title: "Govt. Portals",
    foot_contact_title: "Council Office",
    foot_address: "Basement Area, Vindhyachal Bhavan, Paschim Khand, Near State Bank of India, Bhopal (M.P.) - 462011",
    foot_copy: "© 2026 Madhya Pradesh State Homeopathy Council. All Rights Reserved.",
    foot_powered: "Powered and Managed by:"
  },
  hi: {
    helpdesk: "सहायता केंद्र: 0755 - 6720200",
    council_info: "भोपाल, मध्य प्रदेश",
    login_btn: "लॉगिन",
    register_btn: "प्रोफ़ाइल बनाएं",
    header_title: "मध्य प्रदेश",
    header_subtitle: "राज्य होम्योपैथी परिषद",
    header_sub_tag: "वैधानिक परिषद | मध्य प्रदेश सरकार",
    nav_about: "हमारे बारे में",
    nav_services: "ऑनलाइन सेवाएं",
    nav_doctor: "चिकित्सक खोजें",
    nav_links: "महत्वपूर्ण लिंक",
    nav_grievance: "शिकायत",
    marquee_alert: "परिषद् में पंजीकृत होम्योपैथीक मेडिकल प्रैक्टिशनर्स द्वारा पोर्टल पर उनके Registration के Revision के लिए अप्लाई के दौरान यदि डाटा में कोई करेक्शन यथा डिप्लोमा / डिग्री / यूनिवर्सिटी का नाम / उत्तीर्ण वर्ष गलत प्रदर्शित हो रहा है तो आवेदन करने की प्रक्रिया पूर्ण करने के पूर्व डाटा में सुधार हेतु कौंसिल के इ-मेल एड्रेस homoeopathycouncils@yahoo.com / दूरभाष नंबर 0755-2552629 पर अपनी समस्या प्रेषित / अवगत कराएं।",
    badge_statutory: "वैधानिक परिषद",
    slide1_title: "म.प्र. में होम्योपैथिक उत्कृष्टता को बढ़ावा देना",
    slide1_desc: "मप्र राज्य होम्योपैथी परिषद अधिनियम 1976 के तहत गठित, चिकित्सा पद्धतियों को विनियमित करना, मानक सेवाएं सुनिश्चित करना और पूरे मध्य प्रदेश में पेशेवर चिकित्सकों को प्रमाणित करना।",
    slide_btn_apply: "अभी ऑनलाइन आवेदन करें",
    badge_digital: "डिजिटल गवर्नेंस",
    slide2_title: "निर्बाध ऑनलाइन पंजीकरण और नवीनीकरण",
    slide2_desc: "त्वरित सत्यापन, अनंतिम प्रविष्टियों और प्रमाणित लाइसेंस के लिए एमपीऑनलाइन के सहयोग से चिकित्सकों को एक आधुनिक, परेशानी मुक्त ऑनलाइन आवेदन पोर्टल के साथ सशक्त बनाना।",
    slide_btn_search: "चिकित्सक निर्देशिका सत्यापित करें",
    badge_notice: "चिकित्सक चेतावनी",
    slide3_title: "अनिवार्य पंजीकरण पुनरीक्षण 2026",
    slide3_desc: "सुनिश्चित करें कि आपके विवरण परिषद के रिकॉर्ड से मेल खाते हैं। डिग्री, विश्वविद्यालय या उत्तीर्ण वर्ष में विसंगतियों के लिए, कृपया अपना आवेदन जमा करने से पहले ईमेल के माध्यम से सुधार का अनुरोध करें।",
    slide_btn_guidelines: "दिशानिर्देश देखें",
    stat_practitioners: "पंजीकृत डॉक्टर",
    stat_digital: "ऑनलाइन सत्यापन",
    stat_processing: "औसत प्रसंस्करण समय",
    stat_support: "एमपीऑनलाइन पोर्टल सहायता",
    about_badge: "परिषद के बारे में",
    about_title: "होम्योपैथी का वैधानिक शासन",
    about_subtitle: "मध्य प्रदेश राज्य होम्योपैथी परिषद अधिनियम 1976",
    about_desc1: "मध्य प्रदेश राज्य होम्योपैथी परिषद एक वैधानिक निकाय है जिसका गठन मध्य प्रदेश राज्य होम्योपैथी परिषद अधिनियम 1976 के प्रावधानों के तहत किया गया है। परिषद केंद्रीय रजिस्टर का रख-रखाव, शैक्षणिक योग्यताओं का सत्यापन और लाइसेंसिंग कार्यप्रवाहों का निष्पादन करती है।",
    about_desc2: "राज्य सरकार परिषद के कार्यों की निगरानी के लिए अधिनियम की धारा 40(2) के तहत प्रशासक नियुक्त करती है। रजिस्ट्रार मुख्य कार्यकारी अधिकारी के रूप में कार्य करते हैं जो डिजिटल क्रेडेंशियल, सत्यापन प्रणाली और प्रमाणन के लिए जिम्मेदार हैं।",
    about_feat1: "चिकित्सक रजिस्टर का रख-रखाव",
    about_feat2: "शैक्षणिक योग्यताओं का सत्यापन",
    about_feat3: "अस्थायी/स्थायी लाइसेंस जारी करना",
    about_feat4: "नैतिकता और नीति अनुपालन",
    reg_name: "डॉ. निशांत नम्बिसन",
    reg_title: "रजिस्ट्रार एवं मुख्य कार्यकारी अधिकारी",
    reg_desc: "मप्र राज्य होम्योपैथी परिषद के समग्र प्रशासनिक कामकाज, चिकित्सक प्रोफाइल सत्यापन और पंजीकरण साख के लिए जिम्मेदार।",
    timeline_title_1976: "वैधानिक स्थापना अधिनियम (१९७६)",
    timeline_desc_1976: "चिकित्सा पंजीकरण प्रणालियों को विनियमित करने के लिए मध्य प्रदेश राज्य होम्योपैथी परिषद का गठन किया गया।",
    timeline_title_1978: "राज्य प्रशासन का नियंत्रण (१९७८)",
    timeline_desc_1978: "३ अगस्त १९७८ को धारा ४०(२) के तहत राज्य ने नियंत्रण लिया। अवर सचिव श्री एम.के. खरे को प्रथम प्रशासक नियुक्त किया गया।",
    timeline_title_1996: "सेवा और भर्ती नियम (१९९६)",
    timeline_desc_1996: "१९९६ में अधिकारी और कर्मचारी सेवा नियमों का राजपत्र प्रकाशन, जिसके बाद अगस्त २०१३ में सेवा शर्तों में संशोधन किया गया।",
    timeline_title_present: "वर्तमान परिषद नेतृत्व",
    timeline_desc_present: "प्रशासक श्री संजय मिश्रा (आईएएस) और रजिस्ट्रार डॉ. निशांत नम्बिसन के कुशल मार्गदर्शन में संचालित।",
    services_badge: "ई-गवर्नेंस सुइट",
    services_title: "उपलब्ध ऑनलाइन सेवाएं",
    services_subtitle: "ऑनलाइन पंजीकरण करने, नवीनीकरण का अनुरोध करने या दस्तावेज डाउनलोड करने के लिए नीचे दिए गए उपयुक्त कार्ड का चयन करें।",
    tab_all: "सभी सेवाएं",
    tab_provisional: "अस्थायी पंजीकरण",
    tab_permanent: "स्थायी पंजीकरण",
    tab_renewal: "नवीनीकरण/संशोधन",
    tab_noc: "एनओसी प्रमाण पत्र",
    tab_idcard: "पहचान पत्र",
    srv1_title: "अस्थायी (प्रोविजनल) पंजीकरण",
    srv1_desc: "इंटर्नशिप अवधि के दौरान या औपचारिक योग्यता सत्यापन से पहले अस्थायी लाइसेंस के लिए आवेदन करें।",
    srv_action_apply: "अभी लागू करें",
    srv2_title: "स्थायी पंजीकरण के लिए आवेदन करें",
    srv2_desc: "मानक परिषद विनियमों के तहत होम्योपैथिक अभ्यास साख के लिए स्थायी पंजीकरण का अनुरोध करें।",
    srv3_title: "डुप्लिकेट स्थायी पंजीकरण",
    srv3_desc: "खो जाने या खराब होने की स्थिति में अपने स्थायी पंजीकरण प्रमाण पत्र की डुप्लिकेट प्रति का अनुरोध करें।",
    srv4_title: "आवेदन की स्थिति जांचें",
    srv4_desc: "जमा किए गए स्थायी आवेदनों के लिए वास्तविक समय मूल्यांकन स्थिति और क्वेरी पत्रों की जांच करें।",
    srv_action_check: "स्थिति जांचें",
    srv5_title: "डुप्लिकेट स्थायी रसीद",
    srv5_desc: "पोर्टल पर संसाधित मानक स्थायी पंजीकरण आवेदनों के लिए लेनदेन रसीदें दोबारा प्रिंट करें।",
    srv_action_reprint: "रसीद दोबारा प्रिंट करें",
    srv6_title: "पंजीकरण का पुनरीक्षण (नवीनीकरण)",
    srv6_desc: "नैदानिक रजिस्ट्री को सक्रिय रखने के लिए समाप्त हो रहे होम्योपैथी प्रमाणपत्रों के लिए पुनरीक्षण और नवीनीकरण अनुरोध दर्ज करें।",
    srv7_title: "नवीनीकरण के लिए डुप्लिकेट रसीद",
    srv7_desc: "पोर्टल पर संसाधित नवीनीकरण आवेदनों के लिए बिलिंग डुप्लिकेट डाउनलोड करें या देखें।",
    search_badge: "सार्वजनिक रजिस्ट्री खोज",
    search_title: "अपने होम्योपैथिक डॉक्टर को जानें",
    search_subtitle: "मप्र राज्य परिषद के तहत पंजीकृत होम्योपैथिक चिकित्सकों की साख स्थिति और वैधता की पुष्टि करें।",
    search_btn_text: "खोजें",
    links_badge: "परिपत्र और निर्देश",
    links_title: "महत्वपूर्ण दस्तावेज और परिपत्र",
    links_subtitle: "राज्य सरकार द्वारा अनुमोदित आधिकारिक गाइड, शपथ पत्र प्रारूप और पंजीकरण शुल्क संरचनाएं देखें।",
    lnk1_title: "विभाग शुल्क विवरण",
    lnk_pdf_size: "पीडीएफ दस्तावेज़",
    lnk_action_view: "सूचना देखें",
    lnk2_title: "पुनरीक्षण के लिए शपथ पत्र",
    lnk3_title: "परिपत्र और निर्देश",
    acc_title: "सुगमता (एक्सेसिबिलिटी) साधन",
    acc_text_size: "टेक्स्ट का आकार बदलें",
    acc_high_contrast: "हाई कंट्रास्ट मोड",
    auth_title: "पोर्टल प्रमाणीकरण",
    tab_auth_login: "साइन इन करें",
    tab_auth_register: "प्रोफ़ाइल बनाएं",
    frm_lbl_username: "उपयोगकर्ता नाम / प्रोफ़ाइल आईडी",
    frm_lbl_password: "पासवर्ड",
    frm_lbl_remember: "मुझे याद रखें",
    frm_lbl_forgot: "पासवर्ड भूल गए?",
    btn_sign_in: "डैशबोर्ड में लॉग इन करें",
    frm_lbl_fullname: "पूरा नाम (अंकपत्रों के अनुसार)",
    frm_lbl_email: "ईमेल पता",
    frm_lbl_mobile: "मोबाइल नंबर",
    frm_lbl_new_pass: "नया पासवर्ड",
    frm_lbl_confirm_pass: "पासवर्ड की पुष्टि करें",
    btn_create_profile: "प्रोफ़ाइल पंजीकृत करें",
    form_step1_header: "चरण 1: व्यक्तिगत विवरण",
    lbl_app_fname: "पहला नाम",
    lbl_app_lname: "अंतिम नाम",
    lbl_app_father: "पिता / पति का नाम",
    lbl_app_dob: "जन्म तिथि",
    lbl_app_address: "आवासीय पता",
    btn_next: "आगे बढ़ें",
    form_step2_header: "चरण 2: शैक्षणिक विवरण",
    lbl_app_degree: "डिग्री / डिप्लोमा का नाम",
    opt_select: "-- विकल्प चुनें --",
    lbl_app_university: "विश्वविद्यालय / कॉलेज बोर्ड",
    lbl_app_year: "उत्तीर्ण वर्ष",
    lbl_app_intern: "इंटर्नशिप अस्पताल",
    btn_prev: "पीछे जाएं",
    form_step3_header: "चरण 3: सत्यापन दस्तावेज अपलोड करें",
    lbl_doc_degree: "Degree प्रमाणपत्र / अनंतिम अंकपत्र (पीडीएफ)",
    lbl_doc_id: "पहचान पत्र (आधार कार्ड / पैन कार्ड पीडीएफ)",
    lbl_declare: "मैं एतद्द्वारा घोषित करता हूँ कि ऊपर भरे गए सभी विवरण मेरी सर्वोत्तम जानकारी के अनुसार सटीक हैं और मप्र होम्योपैथी परिषद के रिकॉर्ड के अनुरूप हैं।",
    btn_submit_app: "फॉर्म जमा करें और शुल्क का भुगतान करें",
    succ_title: "आवेदन सफलतापूर्वक जमा किया गया!",
    succ_desc: "आपका अनुरोध मध्य प्रदेश राज्य होम्योपैथी परिषद रजिस्ट्री डेटाबेस को भेज दिया गया है। आपकी आवेदन ट्रैकिंग आईडी है:",
    succ_followup: "कृपया स्थिति की जांच करने के लिए इस आईडी को नोट कर लें। आपके पंजीकृत मोबाइल और ईमेल पर एक पुष्टिकरण सूचना भेजी गई है।",
    btn_close: "फॉर्म बंद करें",
    foot_brand: "म.प्र. होम्योपैथी परिषद",
    foot_desc: "मप्र राज्य होम्योपैथी अधिनियम 1976 के तहत गठित वैधानिक प्रशासनिक ढांचा। पूरे मध्य प्रदेश राज्य में पंजीकरण, मानक सत्यापन और लाइसेंसिंग समाधान प्रदान करना।",
    foot_links_title: "त्वरित पहुँच",
    foot_lnk_about: "परिषद के बारे में",
    foot_lnk_services: "ऑनलाइन सेवाएं",
    foot_lnk_doctor: "चिकित्सक खोज",
    foot_lnk_downloads: "महत्वपूर्ण डाउनलोड",
    foot_gov_title: "सरकारी पोर्टल",
    foot_contact_title: "परिषद कार्यालय",
    foot_address: "बेसमेंट एरिया, विंध्याचल भवन, पश्चिम खंड, स्टेट बैंक ऑफ इंडिया के पास, भोपाल (म.प्र.) - 462011",
    foot_copy: "© 2026 मध्य प्रदेश राज्य होम्योपैथी परिषद। सर्वाधिकार सुरक्षित।",
    foot_powered: "संचलित और प्रबंधित:"
  }
};
