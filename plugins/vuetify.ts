import { createVuetify } from 'vuetify';
import { en, id, ja, ko, vi, zhHans } from 'vuetify/locale';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'en',
      fallback: 'en',
      messages: { vi, ja, en, id, ko, zhHans },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
