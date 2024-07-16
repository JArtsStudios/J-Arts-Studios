function selectPlan(plan, price) {
    alert(`You have selected the ${plan} plan which costs $${price}`);
}



const translations = {
    en: {
        letsTalk: "LET'S TALK",
        development: "DEVELOPMENT",
        experiences: "EXPERIENCES",
        support247: "SUPPORT 24/7",
        supportText: "At J.Arts Studios, we offer free support <br> for the first two years to ensure your website runs smoothly. <br> Our team is available to resolve any technical issues and <br> perform necessary updates. We are committed to providing high <br> quality service and guaranteed satisfaction.",
        basic: "Basic",
        standard: "Standard",
        premium: "Premium",
        ultimate: "Ultimate",
        basicFeature1: "Basic web design",
        basicFeature2: "Responsive layout",
        basicFeature3: "Email support",
        standardFeature1: "Basic web design",
        standardFeature2: "Responsive layout",
        standardFeature3: "24/7 support",
        premiumFeature1: "All features of Standard",
        premiumFeature2: "Advanced SEO",
        premiumFeature3: "Custom designs",
        ultimateFeature1: "All features of Premium",
        ultimateFeature2: "Priority support",
        ultimateFeature3: "Free updates",
        choosePlan: "Choose Plan",
        inspiration: "A world of inspiration and magic, exploring with love for development"
    },
    es: {
        letsTalk: "HABLEMOS",
        development: "DESARROLLO",
        experiences: "EXPERIENCIAS",
        support247: "SOPORTE 24/7",
        supportText: "En J.Arts Studios, ofrecemos soporte gratuito <br> durante los primeros dos años para asegurar que su sitio web funcione sin problemas. <br> Nuestro equipo está disponible para resolver cualquier problema técnico y <br> realizar actualizaciones necesarias. Estamos comprometidos a brindar un servicio de alta <br> calidad y satisfacción garantizada.",
        basic: "Básico",
        standard: "Estándar",
        premium: "Premium",
        ultimate: "Ultimate",
        basicFeature1: "Diseño web básico",
        basicFeature2: "Diseño adaptable",
        basicFeature3: "Soporte por correo",
        standardFeature1: "Diseño web básico",
        standardFeature2: "Diseño adaptable",
        standardFeature3: "Soporte 24/7",
        premiumFeature1: "Todas las características de Estándar",
        premiumFeature2: "SEO avanzado",
        premiumFeature3: "Diseños personalizados",
        ultimateFeature1: "Todas las características de Premium",
        ultimateFeature2: "Soporte prioritario",
        ultimateFeature3: "Actualizaciones gratuitas",
        choosePlan: "Elegir Plan",
        inspiration: "Un mundo de inspiración y magia, explorando con amor por el desarrollo"
    },
    jp: {
        letsTalk: "話しましょう",
        development: "開発",
        experiences: "経験",
        support247: "24/7サポート",
        supportText: "J.Arts Studiosでは、ウェブサイトがスムーズに動作するように、最初の2年間は無料でサポートを提供しています。 <br> 技術的な問題の解決と必要な更新を行うために、私たちのチームは利用可能です。 高品質なサービスと満足を保証することをお約束します。",
        basic: "基本",
        standard: "標準",
        premium: "プレミアム",
        ultimate: "究極",
        basicFeature1: "基本的なウェブデザイン",
        basicFeature2: "レスポンシブレイアウト",
        basicFeature3: "メールサポート",
        standardFeature1: "基本的なウェブデザイン",
        standardFeature2: "レスポンシブレイアウト",
        standardFeature3: "24/7サポート",
        premiumFeature1: "標準のすべての機能",
        premiumFeature2: "高度なSEO",
        premiumFeature3: "カスタムデザイン",
        ultimateFeature1: "プレミアムのすべての機能",
        ultimateFeature2: "優先サポート",
        ultimateFeature3: "無料の更新",
        choosePlan: "プランを選ぶ",
        inspiration: "開発への愛とともに、魔法のような探検のインスピレーションの世界"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.innerHTML = translations[lang][element.getAttribute('data-lang')];
    });
}
