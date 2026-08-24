/**
 * دليل المصادر القانونية السعودية — مصدر البيانات.
 * كل عنصر يحيل مباشرة إلى موقع رسمي حكومي أو مؤسسي.
 * الحقل `verified` يمثل آخر شهر تم فيه التحقق يدويًا من الرابط والوصف.
 */
const CATEGORIES = [
  { id: "statutes", label: "الأنظمة والمدونات واللوائح" },
  { id: "courts",   label: "المحاكم والخدمات القضائية" },
  { id: "agencies", label: "الجهات الرسمية والهيئات المهنية" },
  { id: "forms",    label: "النماذج والصيغ القانونية" },
];

const RESOURCES = [
  {
    name: "بوابة الأنظمة — هيئة الخبراء بمجلس الوزراء",
    url: "https://laws.boe.gov.sa",
    domain: "laws.boe.gov.sa",
    category: "statutes",
    desc: "البوابة الرسمية لنصوص الأنظمة السعودية والمراسيم الملكية وقرارات مجلس الوزراء، بما في ذلك تعديلاتها.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "استطلاع — منصة الاستشارات العامة",
    url: "https://istitlaa.ncc.gov.sa",
    domain: "istitlaa.ncc.gov.sa",
    category: "statutes",
    desc: "منصة تابعة للمركز الوطني للتنافسية تُنشر عبرها مسودات الأنظمة واللوائح لاستطلاع رأي الجمهور قبل اعتمادها.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "المنصة الوطنية — الأنظمة واللوائح",
    url: "https://my.gov.sa/ar/rules",
    domain: "my.gov.sa",
    category: "statutes",
    desc: "فهرس حكومي شامل للأنظمة واللوائح، مصنّف حسب الجهة المُصدرة.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "ناجز — بوابة وزارة العدل الإلكترونية",
    url: "https://najiz.sa",
    domain: "najiz.sa",
    category: "courts",
    desc: "المنصة الرئيسية للتقاضي الإلكتروني: رفع الدعاوى، ومتابعة القضايا، وإتمام المعاملات القضائية عن بُعد.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "وزارة العدل",
    url: "https://www.moj.gov.sa",
    domain: "moj.gov.sa",
    category: "courts",
    desc: "الوزارة المشرفة على النظام القضائي والتوثيق والإدارة القضائية في المملكة.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "ديوان المظالم",
    url: "https://www.bog.gov.sa",
    domain: "bog.gov.sa",
    category: "courts",
    desc: "جهة القضاء الإداري المستقلة المختصة بالفصل في المنازعات ضد الجهات الحكومية والقرارات الإدارية.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "النيابة العامة",
    url: "https://www.pp.gov.sa",
    domain: "pp.gov.sa",
    category: "courts",
    desc: "الجهة المختصة بالتحقيق الجنائي وإحالة القضايا إلى المحاكم المختصة.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "الهيئة السعودية للمحامين",
    url: "https://sba.gov.sa",
    domain: "sba.gov.sa",
    category: "agencies",
    desc: "الهيئة المهنية المنظّمة لممارسة مهنة المحاماة وترخيص المحامين ومعايير المهنة.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "وزارة التجارة",
    url: "https://mc.gov.sa",
    domain: "mc.gov.sa",
    category: "agencies",
    desc: "الجهة المنظّمة للسجل التجاري وشؤون نظام الشركات وحماية المستهلك.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "وزارة الموارد البشرية والتنمية الاجتماعية",
    url: "https://www.hrsd.gov.sa",
    domain: "hrsd.gov.sa",
    category: "agencies",
    desc: "الوزارة المشرفة على نظام العمل وتنظيم التوظيف وآليات تسوية النزاعات العمالية.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "إيجار — المنصة الموحّدة لعقود الإيجار",
    url: "https://ejar.sa",
    domain: "ejar.sa",
    category: "forms",
    desc: "المنصة الرسمية لتوثيق وتسجيل عقود إيجار العقارات، والمعتمدة كسند تنفيذي.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "نافذ — منصة الصكوك التنفيذية",
    url: "https://nafith.sa",
    domain: "nafith.sa",
    category: "forms",
    desc: "منصة تابعة لوزارة العدل لإصدار وإدارة السندات لأمر الإلكترونية وغيرها من الصكوك التنفيذية.",
    verified: "أغسطس ٢٠٢٦",
  },
  {
    name: "قوى — عقد العمل الموحّد",
    url: "https://qiwa.sa",
    domain: "qiwa.sa",
    category: "forms",
    desc: "منصة وزارة الموارد البشرية لإصدار وتوثيق نموذج عقد العمل الموحّد إلكترونيًا.",
    verified: "أغسطس ٢٠٢٦",
  },
];
