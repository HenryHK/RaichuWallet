import LocalizedStrings from 'react-localization';
import { AsyncStorage } from 'react-native';
import { DangerZone } from 'expo';
import { AppStorage } from '../class';
const { Localization } = DangerZone;
let strings;

// first-time loading sequence
(async () => {
  // finding out whether lang preference was saved
  let lang = await AsyncStorage.getItem(AppStorage.LANG);
  if (lang) {
    strings.setLanguage(lang);
    return;
  }

  if (Localization.getCurrentLocaleAsync) {
    let locale = await Localization.getCurrentLocaleAsync();
    if (locale) {
      console.log('current locale:', locale);
      if (locale === 'en' || locale === 'zh_cn') {
        strings.setLanguage(locale);
      } else {
        strings.setLanguage('en');
      }
    }
  }
})();

strings = new LocalizedStrings({
  en: require('./en.js'),
  zh_cn: require('./zh_cn.js'),
});

strings.saveLanguage = lang => AsyncStorage.setItem(AppStorage.LANG, lang);

module.exports = strings;
