import { useI18n } from 'vue-i18n';

export interface ILocales {
  [key: string]: {
    name: string;
    iso: string;
    flag: string;
  };
}

export const availableLocales: ILocales = {
  vi: {
    name: 'Tiếng Việt',
    iso: 'vi',
    flag: '🇻🇳',
  },
  en: {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  id: {
    name: 'Bahasa',
    iso: 'id',
    flag: '🇮🇩',
  },
  ja: {
    name: '日本語',
    iso: 'ja',
    flag: '🇯🇵',
  },
  ko: {
    name: '한국어',
    iso: 'ko',
    flag: '🇰🇷',
  },
  zh: {
    name: '简体中文',
    iso: 'zh',
    flag: '🇨🇳',
  },
};

export function LanguageManager() {
  // composable
  const { locale } = useI18n();
  const localeUserSetting = useCookie('locale');

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window ? window.navigator.language.substring(0, 2) : 'en';
      return availableLocales[foundLang] ? foundLang : 'en';
    } catch (error) {
      return 'en';
    }
  };
  const getUserLocale = (): string => localeUserSetting.value || getSystemLocale();

  // state
  const localeSetting = useState<string>('locale.setting', () => getUserLocale());

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting;
    locale.value = localeSetting;
  });

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale();
  };
  locale.value = localeSetting.value;

  // lifecycle
  onBeforeMount(() => init());

  return {
    localeSetting,
    init,
  };
}

export function getVuetifyLocale(appLocale: string): string {
  const key = appLocale as keyof typeof availableLocales;

  return availableLocales[key].iso || availableLocales.en.iso;
}
