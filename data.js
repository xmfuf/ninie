/**
 * KSA Legal Resources Directory — data source.
 * Each entry links directly to an official government / institutional website.
 * `verified` is the month this URL and description were last checked by hand.
 */
const CATEGORIES = [
  { id: "statutes", label: "Statutes, Codes & Regulations" },
  { id: "courts",   label: "Courts & Judicial Services" },
  { id: "agencies", label: "Official Agencies & Professional Bodies" },
  { id: "forms",    label: "Legal Templates & Forms" },
];

const RESOURCES = [
  {
    name: "Legislation Portal — Bureau of Experts at the Council of Ministers",
    url: "https://laws.boe.gov.sa",
    domain: "laws.boe.gov.sa",
    category: "statutes",
    desc: "Official portal for the text of Saudi laws, royal decrees, and Council of Ministers resolutions, including amendments.",
    verified: "August 2026",
  },
  {
    name: "Istitlaa — Public Consultation Platform",
    url: "https://istitlaa.ncc.gov.sa",
    domain: "istitlaa.ncc.gov.sa",
    category: "statutes",
    desc: "National Competitiveness Center platform where draft laws and regulations are published for public comment before adoption.",
    verified: "August 2026",
  },
  {
    name: "National Portal — Regulations & Legislation",
    url: "https://my.gov.sa/en/rules",
    domain: "my.gov.sa",
    category: "statutes",
    desc: "Government-wide index of regulations and legislation, organized by issuing authority.",
    verified: "August 2026",
  },
  {
    name: "Najiz — Ministry of Justice E-Services",
    url: "https://najiz.sa",
    domain: "najiz.sa",
    category: "courts",
    desc: "Primary e-litigation platform for filing claims, tracking cases, and completing court transactions online.",
    verified: "August 2026",
  },
  {
    name: "Ministry of Justice",
    url: "https://www.moj.gov.sa",
    domain: "moj.gov.sa",
    category: "courts",
    desc: "Ministry overseeing the court system, notarization, and judicial administration in the Kingdom.",
    verified: "August 2026",
  },
  {
    name: "Board of Grievances (Diwan Al Mazalim)",
    url: "https://www.bog.gov.sa",
    domain: "bog.gov.sa",
    category: "courts",
    desc: "Independent administrative judiciary handling disputes against government agencies and administrative decisions.",
    verified: "August 2026",
  },
  {
    name: "Public Prosecution",
    url: "https://www.pp.gov.sa",
    domain: "pp.gov.sa",
    category: "courts",
    desc: "Prosecuting authority responsible for criminal investigation and referral of cases to the courts.",
    verified: "August 2026",
  },
  {
    name: "Saudi Bar Association",
    url: "https://sba.gov.sa",
    domain: "sba.gov.sa",
    category: "agencies",
    desc: "Professional body regulating the practice of law, lawyer licensing, and legal-profession standards.",
    verified: "August 2026",
  },
  {
    name: "Ministry of Commerce",
    url: "https://mc.gov.sa",
    domain: "mc.gov.sa",
    category: "agencies",
    desc: "Regulator for commercial registration, company law matters, and consumer protection.",
    verified: "August 2026",
  },
  {
    name: "Ministry of Human Resources and Social Development",
    url: "https://www.hrsd.gov.sa",
    domain: "hrsd.gov.sa",
    category: "agencies",
    desc: "Ministry administering labor law, employment regulation, and workplace-dispute mechanisms.",
    verified: "August 2026",
  },
  {
    name: "Ejar — Unified Rental Contract Platform",
    url: "https://ejar.sa",
    domain: "ejar.sa",
    category: "forms",
    desc: "Official platform for registering and documenting real-estate lease contracts, recognized as an executive instrument.",
    verified: "August 2026",
  },
  {
    name: "Nafith — Enforcement Instruments Platform",
    url: "https://nafith.sa",
    domain: "nafith.sa",
    category: "forms",
    desc: "Ministry of Justice platform for issuing and managing electronic promissory notes and other enforcement bonds.",
    verified: "August 2026",
  },
  {
    name: "Qiwa — Unified Employment Contract",
    url: "https://qiwa.sa",
    domain: "qiwa.sa",
    category: "forms",
    desc: "Ministry of Human Resources platform for generating and documenting the standard employment contract template.",
    verified: "August 2026",
  },
];
