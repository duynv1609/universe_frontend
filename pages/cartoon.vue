<script lang="ts" setup>
import { capitalize } from '~/utils/str';

// composable
const { t } = useLang();

// compiler macro
definePageMeta({
  layout: 'page',
});
useHead(() => ({
  title: capitalize(t('pages.cartoon.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.cartoon.description'),
    },
  ],
}));
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.cartoon.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div v-for="i in 30" :key="i" class="text-6xl uppercase">
          {{ $t('pages.cartoon.title') }}
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
