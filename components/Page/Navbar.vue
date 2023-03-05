<script lang="ts" setup>
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
      <div class="relative hidden lg:flex items-center ml-auto">
        <!-- Navbar -->
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300 mr-10"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in genreList?.data" :key="i">
              <!-- dropdown -->
              <div v-if="item.slug === 'genre' || item.slug === 'nation'" class="flex items-center">
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
                    class="transition-colors duration-300 flex align-center"
                  >
                    <span
                      class="transition-colors duration-300 hover:no-underline hover:text-light-blue-darken-2 uppercase ml-8"
                      >{{ item.name }}
                    </span>
                    <DotIcon class="dot-toggle-svg" />
                  </ListboxButton>
                  <ListboxOptions
                    v-if="item.children.length > 0"
                    class="columns-3 w-125 p-1 absolute z-50 top-full left-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
                  >
                    <ListboxOption
                      v-for="child in item.children"
                      :key="child.id"
                      :value="child.id"
                      :class="{
                        'flex items-center cursor-pointer pl-5': true,
                      }"
                    >
                      <Anchor
                        :to="child.slug !== 'genre' ? child.slug : 'genre'"
                        class="transition-colors duration-300 hover:no-underline hover:text-light-blue-darken-2 p-2 d-block"
                      >
                        <span class="d-flex align-center">
                          {{ child.name }}
                          <SignIcon v-if="child.slug === 'cinema' ? true : false" />
                        </span>
                        <DotIcon
                          v-if="child.slug === 'genre' || child.slug === 'nation' ? true : false"
                          class="dot-toggle-svg"
                        />
                      </Anchor>
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
              <!-- end dropdown -->
              <Anchor
                v-if="item.slug !== 'genre' && item.slug !== 'nation'"
                :link="false"
                :to="item.slug !== 'genre' ? item.slug : 'genre'"
                class="transition-colors duration-300 hover:no-underline hover:text-light-blue-darken-2 uppercase"
              >
                <span class="d-flex align-center ml-8">
                  {{ item.name }}
                  <SignIcon v-if="item.slug === 'cinema' ? true : false" />
                </span>
              </Anchor>
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
    <!-- <template #options="{ toggleOptions }">
        <ActionSheet @onClose="toggleOptions(false)">
          <ActionSheetBody>
            <ActionSheetHeader text="Menu" />
            <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
              <ul class="flex flex-col">
                <li v-for="(item, i) in menus" :key="i" class="flex w-full" :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }">
                  <Anchor v-if="item.type === 'link'" :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined" class="flex-1 hover:no-underline capitalize">{{ item.text }}
                  </Anchor>
                  <Button v-else-if="item.type === 'button'" :text="item.text" size="xs"
                    class="flex-1 font-extrabold capitalize" :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined" />
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
        </ActionSheet>
      </template> -->
  </BuilderNavbar>
</template>
