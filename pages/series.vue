<script lang="ts" setup>
import { useCounter } from '~/stores/counter';
import { useIdentity } from '~/stores/identity';
import { capitalize } from '~/utils/str';

// composable
const { t } = useLang();

// compiler macro
definePageMeta({
  layout: 'page',
});
useHead(() => ({
  title: capitalize(t('pages.series.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.series.description'),
    },
  ],
}));

const counter = useCounter();
const identity = useIdentity();
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.series.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageSectionTitle :text="$t('pages.series.counter')" class="capitalize" />
        <div class="">
          <div class="mb-2">Counter : {{ counter.count }}</div>
          <div
            class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"
          >
            <Button
              class="w-full md:w-auto capitalize"
              type="secondary"
              size="sm"
              :text="$t('pages.series.increment')"
              @click.prevent="counter.increment"
            />
            <Button
              class="w-full md:w-auto"
              type="secondary"
              size="sm"
              :text="`${$t('pages.series.increment')} 2x`"
              @click.prevent="counter.increment2x"
            />
            <Button
              class="w-full md:w-auto capitalize"
              type="secondary"
              size="sm"
              :text="$t('pages.series.decrement')"
              @click.prevent="counter.decrement"
            />
            <Button
              class="w-full md:w-auto capitalize"
              type="secondary"
              size="sm"
              :text="$t('pages.series.reset')"
              @click.prevent="counter.reset"
            />
          </div>
        </div>
      </PageSection>
      <PageSection>
        <PageSectionTitle :text="$t('pages.series.identity')" class="capitalize" />
        <div class="mb-2">
          <span class="capitalize">{{ $t('pages.series.full_name') }} : </span>
          <span>{{ identity.fullName }}</span>
        </div>
        <div class="mb-2">
          <div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <FormTextInput v-model="identity.firstName" size="md" class="w-full md:w-1/3" />
            <FormTextInput v-model="identity.lastName" size="md" class="w-full md:w-1/3" />
            <Button
              class="capitalize w-full md:w-auto"
              :text="$t('pages.series.reset')"
              type="secondary"
              size="md"
              @click.prevent="identity.reset"
            />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
