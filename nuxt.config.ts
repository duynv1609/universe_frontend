import IconsResolver from 'unplugin-icons/resolver';
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import vuetify from 'vite-plugin-vuetify';
import svgLoader from 'vite-svg-loader';

// declare module '@nuxt/schema' {
//   interface NuxtConfig {
//     intlify?: IntlifyModuleOptions;
//   }
// }

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // css
  css: [
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/sass/vuetify.min.scss', // to remove important attribute
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue', 'vuetify'],
  },

  // modules
  modules: [
    // 'nuxt-svgo',
    'unplugin-icons/nuxt',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-windicss',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify());
      });
    },
  ],

  // experimental features
  experimental: {
    reactivityTransform: false,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      svgLoader(),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'vi',
      fallbackLocale: 'vi',
      availableLocales: ['vi', 'en', 'id', 'ja', 'ko'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        hostname: '0.0.0.0',
        open: false,
        port: 4000,
      },
    },
    scan: true,
  },

  runtimeConfig: {
    ACCOUNT_PASSWORD_TEST: process.env.NUXT_ACCOUNT_PASSWORD_TEST,
    ACCOUNT_USER_NAME_TEST: process.env.NUXT_ACCOUNT_USER_NAME_TEST,
    API_SECRET: process.env.NUXT_API_SECRET,
    AUTH_SECRET: process.env.NUXT_AUTH_SECRET,
    FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
    FIREBASE_APP_ID: process.env.NUXT_FIREBASE_APP_ID,
    FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.NUXT_FIREBASE_DATABASE_URL,
    FIREBASE_MEASUREMENT_ID: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
    FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
    MODE: process.env.NUXT_MODE,
    public: {
      APP_DOMAIN_NAME: process.env.NUXT_PUBLIC_APP_DOMAIN_NAME,
      APP_DOWNLOAD_URL: process.env.NUXT_PUBLIC_APP_DOWNLOAD_URL,
      APP_NAME: process.env.NUXT_PUBLIC_APP_NAME,
      AUTHOR_LINK: process.env.NUXT_PUBLIC_AUTHOR_LINK,
      AUTHOR_NAME: process.env.NUXT_PUBLIC_AUTHOR_NAME,
      BASE_API_URL: process.env.NUXT_PUBLIC_BASE_API_URL,
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      CUSTOMER_CARE_MAIL: process.env.NUXT_PUBLIC_CUSTOMER_CARE_MAIL,
      CUSTOMER_CARE_PHONE: process.env.NUXT_PUBLIC_CUSTOMER_CARE_PHONE,
      FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
      FIREBASE_APP_ID: process.env.NUXT_FIREBASE_APP_ID,
      FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.NUXT_FIREBASE_DATABASE_URL,
      FIREBASE_MEASUREMENT_ID: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
      FIREBASE_MESSAGING_SENDER_ID: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      MAP_CUSTOM_LAYER: process.env.NUXT_PUBLIC_MAP_CUSTOM_LAYER,
      MAP_DEFAULT_CENTER_POSITION: process.env.NUXT_PUBLIC_MAP_DEFAULT_CENTER_POSITION,
      MAP_DEFAULT_ZOOM: process.env.NUXT_PUBLIC_MAP_DEFAULT_ZOOM,
      MAP_LOCATION_FEET_UNIT: process.env.NUXT_PUBLIC_MAP_LOCATION_FEET_UNIT,
      MAP_LOCATION_METERS_UNIT: process.env.NUXT_PUBLIC_MAP_LOCATION_METERS_UNIT,
      MAP_LOCATION_OUTSIDE_MAP_BOUNDS_MSG:
        process.env.NUXT_PUBLIC_MAP_LOCATION_OUTSIDE_MAP_BOUNDS_MSG,
      MAP_LOCATION_POPUP: process.env.NUXT_PUBLIC_MAP_LOCATION_POPUP,
      MAP_LOCATION_TITLE: process.env.NUXT_PUBLIC_MAP_LOCATION_TITLE,
      MAP_MAX_NATIVE_ZOOM: process.env.NUXT_PUBLIC_MAP_MAX_NATIVE_ZOOM,
      MAP_MAX_ZOOM: process.env.NUXT_PUBLIC_MAP_MAX_ZOOM,
      MAP_MIN_ZOOM: process.env.NUXT_PUBLIC_MAP_MIN_ZOOM,
      MAP_OPENSTREETMAP_LAYER: process.env.NUXT_PUBLIC_MAP_OPENSTREETMAP_LAYER,
      META_CONTENT: process.env.NUXT_PUBLIC_META_CONTENT,
      META_DESCRIPTION: process.env.NUXT_PUBLIC_META_DESCRIPTION,
      META_IMAGE: process.env.NUXT_PUBLIC_META_IMAGE,
      META_KEYWORDS: process.env.NUXT_PUBLIC_META_KEYWORDS,
      META_TITLE: process.env.NUXT_PUBLIC_META_TITLE,
    },
  },
});
