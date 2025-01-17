<script lang="ts" setup>
// import { it } from 'node:test';
// import { fa } from 'vuetify/lib/locale';
import SignIcon from '@/assets/icons/live.svg';
import DotIcon from '@/assets/icons/dot.svg';

export interface IMenuItem {
  type: 'link' | 'button';
  text: string;
  href?: any;
  route?: any;
  has_icon?: boolean;
}

const { t } = useLang();
const { data: genreList } = useGetGenresList();
// const app = useAppConfig()
const menus = computed((): IMenuItem[] => [
  { type: 'link', text: t('pages.category.nav'), route: { name: 'category' } },
  { type: 'link', text: t('pages.nation.nav'), route: { name: 'nation' } },
  { type: 'link', text: t('pages.series.nav'), route: { name: 'series' } },
  { type: 'link', text: t('pages.movie.nav'), route: { name: 'movie' } },
  { type: 'link', text: t('pages.cartoon.nav'), route: { name: 'cartoon' } },
  { type: 'link', text: t('pages.cinema.nav'), route: { name: 'cinema' }, has_icon: true },
]);
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <!-- <div
          class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"
          >
          <span class="mr-1">
            {{ $t('banners.welcome', { app_name: app.name }) }}
          <Anchor
              class="underline font-bold"
              :text="$t('others.learn_more')"
                href="https://github.com/viandwi24/nuxt3-awesome-starter"
              />
            </span>
          </div> -->
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <v-text-field
          bg-color="#151f30"
          class="w-100 mr-2 rounded-xl max-w-xs"
          placeholder-color="#fff"
          density="compact"
          variant="solo"
          color="#fff"
          label="Tìm kiếm..."
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
        <nav class="text-sm leading-6 font-semibold text-grey-lighten-2" role="navigation">
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in genreList?.data" :key="i">
              <Anchor
                :link="false"
                :to="item.name.en !== 'Genre' ? item.slug : 'genre'"
                class="hover:no-underline hover:text-light-blue-darken-2 uppercase"
              >
                <span class="d-flex align-center">
                  {{ item.name.vi }}
                  <SignIcon v-if="item.name.en === 'Cinema' ? true : false" />
                </span>
                <DotIcon
                  v-if="item.name.en === 'Genre' || item.name.en === 'Nation' ? true : false"
                  class="dot-toggle-svg"
                />
                <!-- <GenreSwitcher /> -->
              </Anchor>
              <!-- <Button v-else-if="item.type === 'button'" :text="item.text" size="xs" class="font-extrabold capitalize"
                  :to="item.route ? item.route : undefined" :href="item.href ? item.href : undefined" /> -->
            </li>
          </ul>
        </nav>
        <div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Anchor
            class="hover:no-underline hover:text-light-blue-darken-2 hover:dark:text-white text-lg flex self-center items-center"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
            title="Github"
          >
            <IconMdi:github-face />
          </Anchor>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
                  >{{ item.text }}
                </Anchor>
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="mt-2">
            <ThemeSwitcher type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          type="secondary"
          title="Github"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        >
          <IconMdi:github-face />
          <span class="ml-1">Github</span>
        </Button>
        <Button text="Close" type="secondary" @click.prevent="toggleOptions(false)" />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
