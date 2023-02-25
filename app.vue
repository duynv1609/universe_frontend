<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <v-theme-provider :theme="theme">
        <v-locale-provider :locale="vuetifyLocale">
          <NuxtLayout>
            <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
            <NuxtPage />
          </NuxtLayout>
        </v-locale-provider>
      </v-theme-provider>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app';
import { ITheme } from './utils/theme';
import { getVuetifyLocale } from '~/utils/lang';

AppSetup();
const theme = useState<ITheme>('theme.current');
const locale = useState<string>('locale.setting');
const app = useAppConfig();
const vuetifyLocale = computed(() => getVuetifyLocale(locale.value));

useHead({
  title: app.name,
  titleTemplate: '%s - Website phim cho cả vũ trụ',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt 3s Awesome Starter',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
});
</script>
