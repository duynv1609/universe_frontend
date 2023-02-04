<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.dashboard.index.title')" class="capitalize" />
    </PageHeader>
    <v-divider></v-divider>
    <PageBody>
      <PageSection>
        <v-card class="mt-5 mb-8" color="#fff">
          <v-card-text>
            <v-row>
              <v-col v-for="i in 4" :key="i" cols="3" sm="3" md="3">
                <v-card
                  class="rounded-card mx-auto mt-5"
                  max-width="340"
                  color="#2f80ed"
                >
                  <v-card-title>Unique views this year</v-card-title>
                  <v-flex>
                    <v-card-title class="mb-5"
                      >5 210
                      <v-icon class="pl-30">mdi-star</v-icon>
                    </v-card-title>
                  </v-flex>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </PageSection>
      <PageSection>
        <div v-for="i in 30" :key="i" class="text-6xl uppercase">
          {{ $t('pages.blank.just_blank_page_with_title') }}
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
.rounded-card {
  border-radius: 24px;
}
</style>
