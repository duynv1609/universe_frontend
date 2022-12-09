<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.category.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.category.description'),
    },
  ],
}))
</script>

<template>
  <PageContentRenderer
    path="/page/category"
    :page-title="$t('pages.category.title')"
  />
</template>
