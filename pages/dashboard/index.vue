<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

useMeta({
  title: 'Dashboard',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <v-row justify="space-around">
        <v-col cols="6">
          <div class="main__title">
            <PageTitle :text="$t('pages.dashboard.title')" class="capitalize" />
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <NuxtLink to="#" class="main__title-link">
            <v-btn
              class="ma-2"
              :loading="loading"
              :disabled="loading"
              color="secondary"
              @click="loader = 'loading'"
            >
              add item
            </v-btn>
          </NuxtLink>
        </v-col>
      </v-row>
    </PageHeader>
    <PageSection>
      <v-row>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-5"
            max-width="340"
            color="#2f80ed"
          >
            <v-card-title>Tổng Số Phim</v-card-title>
            <v-flex>
              <v-card-title class="mb-5"
                >5 210
                <v-icon class="pl-30">mdi-star</v-icon>
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-5"
            max-width="340"
            color="#2f80ed"
          >
            <v-card-title>Thể Loại</v-card-title>
            <v-flex>
              <v-card-title class="mb-5"
                >5 210
                <v-icon class="pl-30">mdi-star</v-icon>
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-5"
            max-width="340"
            color="#2f80ed"
          >
            <v-card-title>Lượt Xem Phim</v-card-title>
            <v-flex>
              <v-card-title class="mb-5"
                >5 210
                <v-icon class="pl-30">mdi-star</v-icon>
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-5"
            max-width="340"
            color="#2f80ed"
          >
            <v-card-title>Lượt Truy Cập</v-card-title>
            <v-flex>
              <v-card-title class="mb-5"
                >5 210
                <v-icon class="pl-30">mdi-star</v-icon>
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
      </v-row>
    </PageSection>
  </PageWrapper>
</template>

<style lang="scss">
.rounded-card {
  border-radius: 24px;
}
</style>
