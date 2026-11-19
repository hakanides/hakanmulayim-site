import type { Lang } from '../i18n/ui';

export interface ResearchItem { kind: string; title: string; with: string; venue: string; note: string; pdf?: string }
export interface ResearchContent {
  intro: string;
  interestsHeading: string;
  interests: string[];
  items: ResearchItem[];
  mathHeading: string;
  mathIntro: string;
  math: { title: string; detail: string; period: string }[];
}

export const research: Record<Lang, ResearchContent> = {
  tr: {
    intro: 'Araştırmalarım mikroekonomi teorisi ile ulaşım ve kent ekonomisinin kesişiminde yer alıyor: market design ve discrete choice modelleri.',
    interestsHeading: 'İlgi alanları',
    interests: ['Microeconomic theory', 'Game theory', 'Industrial organization', 'Matching and market design', 'Transportation and urban economics'],
    items: [
      { kind: 'Devam eden proje', title: 'Time vs. Money Under Conscription: A Hybrid Choice Analysis of Turkey’s Paid Military Service', with: 'Dört kişilik ekip, ECON 635 Discrete Choice Methods', venue: 'Sabancı Üniversitesi, Güz 2025',
        note: 'Altı aylık standart hizmet ile üç haftalık bedelli muafiyet arasındaki tercihi, gizli tutumların zaman ve maliyet duyarlılığını kaydırdığı bir hybrid choice (ICLV) modeliyle inceleyerek zamanın değerini tahmin etmeyi amaçlar. Tahmin Biogeme (Python) ile sürüyor.' },
    ],
    mathHeading: 'Matematik geçmişi',
    mathIntro: 'Ekonomiye geçmeden önce low-dimensional topology ve homological methods üzerine çalıştım.',
    math: [
      { title: 'Khovanov homology', detail: 'Lisans bitirme projesi (danışman: Mustafa Topkara), Mimar Sinan GSÜ.', period: '2023 – 2024' },
      { title: 'Exotic discs in the 4-ball', detail: 'Directed Reading Program Turkey (mentor: Eylem Zeliha Yıldız, Duke). Konuşma: Bahar Mathematics Meeting, İstanbul Üniversitesi.', period: '2022' },
      { title: 'Okuma seminerleri ve lisansüstü dersler', detail: 'Galatasaray Üniversitesi: persistent homology, Young’s lattices, modular groupoids and braids; Homological Algebra ve Real Algebraic Curves dersleri (dinleyici).', period: '2021 – 2022' },
      { title: 'Nesin Matematik Köyü', detail: 'Yaz ve kış programlarında burslu öğrenci; Antalya Algebra Days XXII; GGTI Workshops (Gökova) ve Young Topologists Meeting (Münster) katılımı.', period: '2017 – 2024' },
    ],
  },
  en: {
    intro: 'My research sits at the intersection of microeconomic theory and transportation and urban economics: market design and discrete choice models.',
    interestsHeading: 'Interests',
    interests: ['Microeconomic theory', 'Game theory', 'Industrial organization', 'Matching and market design', 'Transportation and urban economics'],
    items: [
      { kind: 'Ongoing project', title: 'Time vs. Money Under Conscription: A Hybrid Choice Analysis of Turkey’s Paid Military Service', with: 'Team of four, ECON 635 Discrete Choice Methods', venue: 'Sabancı University, Fall 2025',
        note: 'Proposes a hybrid choice (ICLV) specification of the choice between six-month standard service and a three-week paid exemption to estimate the value of time, with latent attitudes shifting time and cost sensitivities. Estimation in Biogeme (Python) is in progress.' },
    ],
    mathHeading: 'Mathematics background',
    mathIntro: 'Before moving to economics I worked on low-dimensional topology and homological methods.',
    math: [
      { title: 'Khovanov homology', detail: 'Undergraduate graduation project (advisor: Mustafa Topkara), Mimar Sinan Fine Arts University.', period: '2023 – 2024' },
      { title: 'Exotic discs in the 4-ball', detail: 'Directed Reading Program Turkey (mentor: Eylem Zeliha Yıldız, Duke). Talk at the Bahar Mathematics Meeting, Istanbul University.', period: '2022' },
      { title: 'Reading seminars and graduate courses', detail: 'Galatasaray University: persistent homology, Young’s lattices, modular groupoids and braids; audited Homological Algebra and Real Algebraic Curves.', period: '2021 – 2022' },
      { title: 'Nesin Mathematics Village', detail: 'Scholarship student in summer and winter programs; Antalya Algebra Days XXII; GGTI workshops (Gökova) and the Young Topologists Meeting (Münster).', period: '2017 – 2024' },
    ],
  },
};
