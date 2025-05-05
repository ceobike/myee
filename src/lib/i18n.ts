import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      home: '首页',
      about: '关于我们',
      history: '发展历程',
      development: '企业发展',
      honor: '公司荣誉',
      culture: '企业文化',
      products: '产品中心',
      productDetail: '产品详情',
      solutions: '解决方案',
      solutionDetail: '解决方案详情',
      news: '新闻中心',
      newsDetail: '新闻详情',
      service: '服务支持',
      technical: '技术服务',
      aftersale: '售后服务',
      aftersale2: '售后支持2',
      contact: '联系我们',
      recruit: '招聘信息',
      viewMore: '查看更多',
      en: '英文',
      zh: '中文',
      intro: '（占位页面/内容，后续完善）',
    },
  },
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      history: 'History',
      development: 'Development',
      honor: 'Honor',
      culture: 'Culture',
      products: 'Products',
      productDetail: 'Product Detail',
      solutions: 'Solutions',
      solutionDetail: 'Solution Detail',
      news: 'News',
      newsDetail: 'News Detail',
      service: 'Service',
      technical: 'Technical',
      aftersale: 'After-sale',
      aftersale2: 'After-sale 2',
      contact: 'Contact',
      recruit: 'Recruit',
      viewMore: 'View More',
      en: 'EN',
      zh: 'CN',
      intro: '(Page placeholder/Content to be completed)',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
