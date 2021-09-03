// const admin = require('firebase-admin');

// const serviceAccount = require('./firebaseConfig/firebase-admin.json');

const getId = (lang) => {
  switch (lang) {
    case 'ka':
      return '611cdd0a2aa80036126bc781';
    default:
      return '611cdee7076a223676ad4afa';
  }
};

module.exports = {
  locales: ['en', 'ka'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: async (lang, _ns) => {
    const res = await fetch(`https://api.jsonbin.io/b/${getId(lang)}/latest`);
    return res.json();
  },
};
