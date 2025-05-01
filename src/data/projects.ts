
export interface Project {
  id: string;
  name: string;
  description: {
    en: string;
    ar: string;
  };
  company: string;
  role: string;
  tech: string[];
  url?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "sheen-reports",
    name: "Sheen Reports",
    description: {
      en: "I initiated the development of this website as a suggested solution for simplifying the daily reporting process for employees at Sheen Value.",
      ar: "بدأت تطوير هذا الموقع كحل مقترح لتبسيط عملية التقارير اليومية للموظفين في شين فاليو."
    },
    company: "Sheen Value",
    role: "Supervisor of One Junior Developer",
    tech: [],
    featured: true
  },
  {
    id: "new-energy",
    name: "New Energy Website",
    description: {
      en: "The website is designed to showcase and sell solar supplies offered by the New Energy company.",
      ar: "تم تصميم الموقع لعرض وبيع مستلزمات الطاقة الشمسية التي تقدمها شركة نيو إنيرجي."
    },
    company: "New Energy",
    role: "Developer",
    tech: ["Next.js 13", "Bootstrap5"],
    url: "https://newenergy.sy/",
    image: "/lovable-uploads/b419c78a-f154-4a07-af7e-eb64007e6f04.png",
    featured: true
  },
  {
    id: "mindmovers",
    name: "MindMovers",
    description: {
      en: "An Online Educational System that is used by celebrities to publish their courses in order for people to subscribe to & attend.",
      ar: "نظام تعليمي عبر الإنترنت يستخدمه المشاهير لنشر دوراتهم من أجل اشتراك الناس وحضورها."
    },
    company: "MindMovers",
    role: "Developer & Maintainer",
    tech: ["NextJs 12", "StripeApi", "GraphQL"],
    url: "https://www.mindmovers.com/",
    image: "/lovable-uploads/934241bd-3dd3-4294-99cd-b65e7f9cd0a3.png",
    featured: true
  },
  {
    id: "medpocket",
    name: "MedPocket Personal Assistant",
    description: {
      en: "Medical Assistant that connects end users with pharmacies connects pharmacies with inventories.",
      ar: "مساعد طبي يربط المستخدمين النهائيين مع الصيدليات ويربط الصيدليات مع المخازن."
    },
    company: "ProTech Group/ProSoft",
    role: "Developer of Admin Panel",
    tech: ["DotNetCore6", "RazorPages"],
    url: "https://play.google.com/store/apps/details?id=com.medpocket.app",
    featured: true
  },
  {
    id: "payless",
    name: "PayLess",
    description: {
      en: "A Ridesharing application that matches passengers with drivers that are willing to drive them to a desired destination.",
      ar: "تطبيق مشاركة الرحلات الذي يربط الركاب بالسائقين الراغبين في اصطحابهم إلى الوجهة المطلوبة."
    },
    company: "ProTech Group/ProSoft",
    role: "Developer of Admin Panel",
    tech: ["VueJs", "Google Maps API", "WebSockets", "ChartJs"],
    featured: false
  },
  {
    id: "dal-ecommerce",
    name: "Dal E-Commerce",
    description: {
      en: "E-Commerce System that aids women with disabilities giving them the opportunity to sell their products online.",
      ar: "نظام التجارة الإلكترونية الذي يساعد النساء ذوات الإعاقة ويمنحهن فرصة بيع منتجاتهن عبر الإنترنت."
    },
    company: "CHI",
    role: "Developer of Admin Panel and Supervision over Backend Developer and Mobile Developer",
    tech: ["VueJs 2.6", "Laravel"],
    featured: false
  },
  {
    id: "world-medicine",
    name: "World Medicine",
    description: {
      en: "A promotional website that conveys the ideas and aspirations of World Medicine Co.",
      ar: "موقع ترويجي ينقل أفكار وتطلعات شركة وورلد ميديسن."
    },
    company: "CHI",
    role: "Developer",
    tech: ["Laravel", "Voyager as a CMS", "Laravel Blade Template"],
    url: "https://worldmedicine.com.tr/",
    image: "/lovable-uploads/b6880e41-83c2-4d01-9334-c7e663c9f86b.png",
    featured: false
  },
  {
    id: "vega-real-estate",
    name: "Vega Real Estate",
    description: {
      en: "A generic e-commerce website for real estate companies based in UAE. Supports multi-languages and heavy filtering mechanisms.",
      ar: "موقع إلكتروني للتجارة الإلكترونية العقارية للشركات التي تتخذ من الإمارات العربية المتحدة مقراً لها. يدعم اللغات المتعددة وآليات التصفية المتقدمة."
    },
    company: "VEGA SDS",
    role: "Developer",
    tech: ["Nuxt 13", "Tailwind"],
    featured: true
  },
  {
    id: "user-cards-redo",
    name: "User Cards Re-Do",
    description: {
      en: "A redo for the website of user-card.com that was written in php and laravel. The reason for the re-do is that fixing new bugs was troublesome. The website has currencies, localization and cart system.",
      ar: "إعادة تطوير لموقع user-card.com الذي تم كتابته بـ PHP و Laravel. سبب إعادة التطوير هو أن إصلاح الأخطاء الجديدة كان أمراً صعباً. يحتوي الموقع على نظام للعملات والتوطين والسلة."
    },
    company: "VEGA SDS",
    role: "Developer",
    tech: ["Nuxt 13", "Tailwind"],
    url: "https://store.user-cards.com/en",
    image: "/lovable-uploads/dac77fd3-93fb-49fe-a11f-7c89119ed0df.png",
    featured: false
  },
  {
    id: "atasi-website",
    name: "Atassi Website",
    description: {
      en: "An art gallery for Atassi Family that represent a big archive of work for the family and for many other artists.",
      ar: "معرض فني لعائلة أتاسي يمثل أرشيفاً كبيراً لأعمال العائلة وللعديد من الفنانين الآخرين."
    },
    company: "Sheen Value",
    role: "Frontend Development - Supervision Over Three Junior Developers",
    tech: ["NextJs 13", "Tailwind Css", "Graph QL"],
    url: "https://www.masaarchive.org/",
    image: "/lovable-uploads/2d62d2d9-6354-4da7-b585-308c07377805.png",
    featured: true
  },
  {
    id: "wigglz-website",
    name: "Wigglz Website",
    description: {
      en: "An e-commerce platform specializing in the sale of pet gadgets, ranging from toys to food. Users have the ability to select items for purchase and finalize their transactions with a cash-on-delivery payment option.",
      ar: "منصة للتجارة الإلكترونية متخصصة في بيع مستلزمات الحيوانات الأليفة، بدءاً من الألعاب وحتى الطعام. يمكن للمستخدمين اختيار العناصر للشراء وإتمام معاملاتهم باستخدام خيار الدفع عند الاستلام."
    },
    company: "Sheen Value",
    role: "Supervision Over Two Junior Developers",
    tech: ["NextJs 13", "Tailwind Css"],
    url: "https://wigglz.ae/",
    featured: true
  },
  {
    id: "gatecard-website",
    name: "GateCard Website",
    description: {
      en: "The website is designed for the sale of gift cards from various stores such as Apple, Google Play, and Steam. Users can complete their journey through wallet payment or through e-payment.",
      ar: "تم تصميم الموقع لبيع بطاقات الهدايا من متاجر مختلفة مثل Apple و Google Play و Steam. يمكن للمستخدمين إكمال رحلتهم من خلال الدفع بالمحفظة أو من خلال الدفع الإلكتروني."
    },
    company: "Sheen Value",
    role: "Developer",
    tech: ["Pure Javascript", "JQuery", "Bootstrap5", "MyFatooraApi"],
    url: "https://gatecard.com/",
    image: "/lovable-uploads/94a1d305-0408-4ce3-b7d4-77833cdb8d0c.png",
    featured: false
  },
  {
    id: "alnasr-school",
    name: "Al Nasr School",
    description: {
      en: "Educational institution website featuring comprehensive information about programs, faculty, and student life with full Arabic support.",
      ar: "موقع مؤسسة تعليمية يقدم معلومات شاملة عن البرامج والكادر التعليمي وحياة الطلاب مع دعم كامل للغة العربية."
    },
    company: "Sheen Value",
    role: "Developer",
    tech: ["WordPress", "PHP", "Custom Theme"],
    image: "/lovable-uploads/47f266ba-33fd-4441-b61e-1efb8d15aef4.png",
    featured: false
  },
  {
    id: "blank-store",
    name: "Blank Store",
    description: {
      en: "E-commerce platform offering a diverse range of skincare products with bilingual support and modern user interface.",
      ar: "منصة للتجارة الإلكترونية تقدم مجموعة متنوعة من منتجات العناية بالبشرة مع دعم ثنائي اللغة وواجهة مستخدم حديثة."
    },
    company: "VEGA SDS",
    role: "Frontend Developer",
    tech: ["Vue.js", "Bootstrap", "RESTful API"],
    image: "/lovable-uploads/ef288b4b-f551-448b-90a7-1b2c5a24a5b4.png",
    featured: false
  },
  {
    id: "gsh-logistics",
    name: "GSH Logistics",
    description: {
      en: "Logistics company website offering customs clearance services with comprehensive information about shipping and documentation.",
      ar: "موقع شركة لوجستية تقدم خدمات التخليص الجمركي مع معلومات شاملة حول الشحن والتوثيق."
    },
    company: "Freelance",
    role: "Developer",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/lovable-uploads/fe6c89e4-548d-47a9-8e6a-2023a562fe46.png",
    featured: false
  },
  {
    id: "ilhem-taher",
    name: "Ilhem Taher",
    description: {
      en: "Personal brand website for wellness coach and spiritual guide offering courses and consultation services.",
      ar: "موقع علامة تجارية شخصية لمدرب الصحة والمرشد الروحي يقدم دورات وخدمات استشارية."
    },
    company: "Freelance",
    role: "Lead Developer",
    tech: ["WordPress", "Custom Plugins", "WooCommerce"],
    image: "/lovable-uploads/08e922c8-a7d5-4f66-9aa0-48feca9c6615.png",
    featured: false
  },
  {
    id: "islamic-academy",
    name: "Islamic Academy",
    description: {
      en: "Educational platform offering courses on Islamic studies with comprehensive learning management system.",
      ar: "منصة تعليمية تقدم دورات في الدراسات الإسلامية مع نظام إدارة تعلم شامل."
    },
    company: "CHI",
    role: "Developer",
    tech: ["PHP", "MySQL", "JavaScript", "LMS Integration"],
    image: "/lovable-uploads/f28a839e-e1d3-431a-aa54-796c4f711d9b.png",
    featured: false
  },
  {
    id: "ivory-lounge",
    name: "Ivory Lounge",
    description: {
      en: "Fashion and maternity wear e-commerce platform with elegant design and seamless user experience.",
      ar: "منصة للتجارة الإلكترونية لملابس الأزياء وملابس الحمل بتصميم أنيق وتجربة مستخدم سلسة."
    },
    company: "VEGA SDS",
    role: "Frontend Developer",
    tech: ["React", "Node.js", "Payment Gateway Integration"],
    image: "/lovable-uploads/62fab9a9-2ce4-49e6-8bce-14d56559b50e.png",
    featured: false
  },
  {
    id: "sheikh-website",
    name: "Islamic Scholar Website",
    description: {
      en: "Personal website for an Islamic scholar featuring articles, videos, and Q&A sections with elegant Arabic typography.",
      ar: "موقع شخصي لعالم إسلامي يضم مقالات وفيديوهات وأقسام للأسئلة والأجوبة مع خطوط عربية أنيقة."
    },
    company: "Freelance",
    role: "Developer",
    tech: ["WordPress", "Custom Theme", "Video Integration"],
    image: "/lovable-uploads/436a2cd2-dc3c-4301-96f9-c974e83d9816.png",
    featured: false
  },
  {
    id: "ucare-store",
    name: "UCare Store",
    description: {
      en: "Health and beauty products e-commerce website with product categorization and multilingual support.",
      ar: "موقع للتجارة الإلكترونية لمنتجات الصحة والجمال مع تصنيف المنتجات ودعم متعدد اللغات."
    },
    company: "VEGA SDS",
    role: "Full Stack Developer",
    tech: ["Vue.js", "Laravel", "MySQL"],
    image: "/lovable-uploads/1d46f6b5-aa17-4beb-ba56-499e2ac8733e.png",
    featured: false
  },
  {
    id: "user-cards",
    name: "User Cards",
    description: {
      en: "Digital gift card marketplace offering gift cards from various popular platforms with secure payment options.",
      ar: "سوق بطاقات الهدايا الرقمية التي تقدم بطاقات هدايا من منصات شعبية مختلفة مع خيارات دفع آمنة."
    },
    company: "VEGA SDS",
    role: "Developer",
    tech: ["Vue.js", "Nuxt.js", "Payment Integration"],
    image: "/lovable-uploads/9e1ead77-20c8-4ab5-88e4-cf1cee7431ee.png",
    featured: false
  },
  {
    id: "roomcm",
    name: "RoomCM Furniture",
    description: {
      en: "Furniture e-commerce website with elegant product display and categorization by room types.",
      ar: "موقع للتجارة الإلكترونية للأثاث مع عرض أنيق للمنتجات وتصنيفها حسب أنواع الغرف."
    },
    company: "Freelance",
    role: "Frontend Developer",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/lovable-uploads/b4930455-6e5c-41a4-8425-732a0aa9057b.png",
    featured: false
  },
  {
    id: "masa-archive",
    name: "Masa Archive",
    description: {
      en: "Digital archive for modern Syrian art featuring comprehensive cataloging and search functionality.",
      ar: "أرشيف رقمي للفن السوري الحديث يتميز بفهرسة شاملة ووظائف بحث متطورة."
    },
    company: "Sheen Value",
    role: "Lead Developer",
    tech: ["Next.js", "Database Design", "Digital Archiving"],
    image: "/lovable-uploads/66afdfe9-54ba-43bb-a0a3-088e5d77e224.png",
    featured: false
  }
];
