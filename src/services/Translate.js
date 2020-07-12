import id from '@/resources/lang/id.json';
import en from '@/resources/lang/en.json';

export default {
  getTranslation() {
    let lang = localStorage.getItem('lang');
    if (typeof lang === 'undefined' || lang == null) {
      lang = 'id';
    }
    switch (lang) {
      case 'id':
        return id;
      case 'en':
        return en;
      default:
        throw new Error('unknown lang');
    }
  },
  translate(translation, key) {
    try {
      let value = translation;
      const keys = key.split(/\./);
      for (let i = 0; i < keys.length; i += 1) {
        const k = keys[i];
        if (!k) return '';
        value = value[k];
      }

      if (value == null || value === '') {
        return key;
      }
      return value;
    } catch (err) {
      return key;
    }
  },
};
