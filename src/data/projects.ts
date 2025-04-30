
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
    featured: true
  },
  // Additional projects to complete the list...
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
    featured: false
  }
];
