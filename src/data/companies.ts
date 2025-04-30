
export interface Company {
  id: string;
  name: string;
  location: string;
  period: string;
  workType: string;
  role: string;
  description: {
    en: string;
    ar: string;
  };
  projects: string[];
  contributions: {
    en: string[];
    ar: string[];
  };
}

export const companies: Company[] = [
  {
    id: "vega-sds",
    name: "VEGA SDS",
    location: "Turkey",
    period: "2024/May - Present",
    workType: "Remote",
    role: "Developer",
    description: {
      en: "A software development company providing various solutions for clients.",
      ar: "شركة تطوير برمجيات تقدم حلولًا متنوعة للعملاء."
    },
    projects: ["vega-real-estate", "user-cards-redo"],
    contributions: {
      en: [
        "Implemented multi-language support for multiple projects",
        "Developed responsive designs using Tailwind CSS",
        "Set up CI/CD pipelines for efficient deployment"
      ],
      ar: [
        "قمت بتنفيذ دعم متعدد اللغات للعديد من المشاريع",
        "طورت تصميمات متجاوبة باستخدام Tailwind CSS",
        "إعداد خطوط أنابيب CI/CD للنشر الفعال"
      ]
    }
  },
  {
    id: "sheen-value",
    name: "Sheen Value",
    location: "UAE Dubai",
    period: "2022/Apr - 2024/Oct",
    workType: "On Site",
    role: "Team Leader",
    description: {
      en: "A digital agency specializing in web development and digital marketing.",
      ar: "وكالة رقمية متخصصة في تطوير الويب والتسويق الرقمي."
    },
    projects: [
      "sheen-reports",
      "atasi-website",
      "qyam-center", 
      "gsh-cargo", 
      "ilhem-taher-website", 
      "wigglz-website", 
      "gatecard-website", 
      "ivory-website", 
      "sheen-ecommerce-website", 
      "sheen-ecommerce-dashboard", 
      "nyc-insurance-website", 
      "nyc-insurance-dashboard"
    ],
    contributions: {
      en: [
        "Led a team of 5 frontend developers, providing mentorship and code reviews",
        "Established coding standards and best practices for the frontend team",
        "Implemented CI/CD workflows that reduced deployment issues by 35%",
        "Conducted regular technical training sessions for junior developers",
        "Created reusable component libraries that increased development efficiency"
      ],
      ar: [
        "قدت فريقًا من 5 مطورين للواجهة الأمامية، وقدمت التوجيه ومراجعات الكود",
        "وضعت معايير البرمجة وأفضل الممارسات لفريق الواجهة الأمامية",
        "نفذت سير عمل CI/CD التي قللت من مشاكل النشر بنسبة 35%",
        "أجريت جلسات تدريب تقنية منتظمة للمطورين المبتدئين",
        "أنشأت مكتبات مكونات قابلة لإعادة الاستخدام زادت من كفاءة التطوير"
      ]
    }
  },
  {
    id: "chi",
    name: "CHI",
    location: "Damascus",
    period: "2020/March - 2022/Apr",
    workType: "Hybrid",
    role: "Developer",
    description: {
      en: "A digital services company focusing on web and mobile application development.",
      ar: "شركة خدمات رقمية تركز على تطوير تطبيقات الويب والهاتف المحمول."
    },
    projects: ["dal-ecommerce", "world-medicine"],
    contributions: {
      en: [
        "Developed accessible e-commerce platforms with focus on usability for users with disabilities",
        "Implemented secure payment gateways for multiple projects",
        "Optimized website performance leading to 40% faster load times",
        "Designed and developed API integrations with third-party services",
        "Created comprehensive documentation for codebase and API usage"
      ],
      ar: [
        "طورت منصات التجارة الإلكترونية التي يمكن الوصول إليها مع التركيز على قابلية الاستخدام للمستخدمين ذوي الإعاقة",
        "نفذت بوابات دفع آمنة لمشاريع متعددة",
        "حسنت أداء الموقع مما أدى إلى أوقات تحميل أسرع بنسبة 40%",
        "صممت وطورت تكاملات API مع خدمات الطرف الثالث",
        "أنشأت وثائق شاملة لقاعدة الكود واستخدام API"
      ]
    }
  },
  {
    id: "protech-group",
    name: "ProTech Group/ProSoft",
    location: "Damascus",
    period: "2021/July - 2022/Feb",
    workType: "On Site",
    role: "Developer",
    description: {
      en: "A technology company specializing in mobile applications and web solutions.",
      ar: "شركة تقنية متخصصة في تطبيقات الجوال وحلول الويب."
    },
    projects: ["medpocket", "payless"],
    contributions: {
      en: [
        "Built responsive admin panels for mobile applications",
        "Developed real-time tracking features using WebSockets",
        "Created intuitive dashboards with data visualization using ChartJS",
        "Implemented secure user authentication and authorization systems",
        "Optimized API calls for improved application performance"
      ],
      ar: [
        "بنيت لوحات إدارة متجاوبة لتطبيقات الجوال",
        "طورت ميزات التتبع في الوقت الفعلي باستخدام WebSockets",
        "أنشأت لوحات معلومات بديهية مع تصور البيانات باستخدام ChartJS",
        "نفذت أنظمة مصادقة وتفويض المستخدم الآمنة",
        "حسنت استدعاءات API لتحسين أداء التطبيق"
      ]
    }
  }
];
