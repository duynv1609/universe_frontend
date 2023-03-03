<script lang="ts" setup>
// import { it } from 'node:test';
// import { fa } from 'vuetify/lib/locale';
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import SignIcon from '@/assets/icons/live.svg';
import DotIcon from '@/assets/icons/dot.svg';
import { IThemeSettingOptions, availableThemes } from '~/utils/theme';
export interface IMenuItem {
  type: 'link' | 'button';
  text: string;
  href?: any;
  route?: any;
  has_icon?: boolean;
}

const { t } = useLang();
const { data: genreList } = useGetGenresList();
// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting');
// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
});
const currentStyle = toRef(props, 'type');
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
    <!-- <template #banner>
      <div class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize">
        <span class="mr-1">
          {{ $t('banners.welcome', { app_name: app.name }) }}
          <Anchor
            class="underline font-bold"
            :text="$t('others.learn_more')"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
          />
        </span>
      </div>
    </template> -->
    <template #menu>
      <!-- <div class="header__content">
        <ul class="header__nav">
          <li class="header__nav-item">
            <a
              id="dropdownMenu2"
              class="header__nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >THỂ LOẠI
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"
                ></path></svg
            ></a>

            <ul class="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu2" style="">
              <li><a href="index.html">Home style 1</a></li>
              <li><a href="index2.html">Home style 2</a></li>
              <li><a href="index3.html">Home style 3</a></li>
            </ul>
          </li>
          <li class="header__nav-item">
            <a
              id="dropdownMenu1"
              class="header__nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >QUỐC GIA
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"
                ></path></svg
            ></a>

            <ul class="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu1">
              <li><a href="catalog.html">Catalog</a></li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenuSub"
                  class="dropdown-item"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Catalog dropdown
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"
                    ></path></svg
                ></a>

                <ul class="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenuSub">
                  <li><a href="category.html">Actions</a></li>
                  <li><a href="category.html">Biography</a></li>
                  <li><a href="category.html">Documentary</a></li>
                  <li><a href="category.html">Horror</a></li>
                </ul>
              </li>
              <li><a href="category.html">Category style 1</a></li>
              <li><a href="category2.html">Category style 2</a></li>
              <li><a href="details.html">Details style 1</a></li>
              <li><a href="details2.html">Details style 2</a></li>
              <li><a href="details3.html">Details style 3</a></li>
            </ul>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="pricing.html">PHIM BỘ</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="pricing.html">PHIM LẺ</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="pricing.html">HOẠT HÌNH</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link header__nav-link--live" href="live.html"
              >PHIM CHIẾU RẠP<svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="4" r="4" fill="#EB5757" fill-opacity="0.5"></circle>
                <g filter="url(#filter0_d)"><circle cx="6" cy="4" r="2" fill="#EB5757"></circle></g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="12"
                    height="12"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs></svg
            ></a>
          </li>
        </ul>

        
      </div> -->
      <div class="relative hidden lg:flex items-center ml-auto">
        <!-- Navbar -->
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300 mr-10"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in genreList?.data" :key="i">
              <!-- dropdown -->
              <div v-if="item.name.en === 'Genre'" class="flex items-center">
                <Listbox
                  v-if="currentStyle === 'dropdown-right-top'"
                  v-model="themeSetting"
                  as="div"
                  class="relative flex items-center"
                >
                  <ListboxLabel class="sr-only">
                    {{ $t('components.theme_switcher.theme') }}
                  </ListboxLabel>
                  <ListboxButton
                    type="button"
                    :title="$t('components.theme_switcher.change_theme')"
                    class="transition-colors duration-300"
                  >
                    <span
                      class="transition-colors duration-300 hover:no-underline hover:text-light-blue-darken-2 uppercase"
                      >{{ item.name.vi }}</span
                    >
                  </ListboxButton>
                  <ListboxOptions
                    class="p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
                  >
                    <ListboxOption
                      v-for="theme in availableThemes"
                      :key="theme.key"
                      :value="theme.key"
                      :class="{
                        'py-2 px-2 flex items-center cursor-pointer': true,
                        'text-sky-500 bg-gray-100 dark:bg-gray-600/30': themeSetting === theme.key,
                        'hover:bg-gray-50 dark:hover:bg-gray-700/30': themeSetting !== theme.key,
                      }"
                    >
                      <span class="text-sm mr-2 flex items-center">
                        <IconUil:sun v-if="theme.key === 'light'" />
                        <IconUil:moon v-else-if="theme.key === 'dark'" />
                        <IconUil:laptop v-else-if="theme.key === 'system'" />
                        <IconUil:clock v-else-if="theme.key === 'realtime'" />
                      </span>
                      {{ theme.text }}
                    </ListboxOption>
                  </ListboxOptions>
                </Listbox>
                <select
                  v-if="currentStyle === 'select-box'"
                  v-model="themeSetting"
                  class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
                >
                  <option v-for="theme in availableThemes" :key="theme.key" :value="theme.key">
                    {{ theme.text }}
                  </option>
                </select>
              </div>
              <!-- dropdown -->
              <Anchor
                v-if="item.id !== 1"
                :link="false"
                :to="item.name.en !== 'Genre' ? item.slug : 'genre'"
                class="transition-colors duration-300 hover:no-underline hover:text-light-blue-darken-2 uppercase"
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
        <!-- Search -->
        <div class="header__actions">
          <v-text-field
            bg-color="#151f30"
            class="w-100 mr-50 rounded-xl max-w-xs"
            placeholder-color="#fff"
            density="compact"
            variant="solo"
            color="#fff"
            label="Tìm kiếm..."
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </div>
        <!-- Switcher -->
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
