<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.cinema.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.cinema.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.cinema.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div v-for="i in 30" :key="i" class="text-6xl uppercase">
          {{ $t('pages.cinema.title') }}
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
