<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

export interface TableItem {
  name: string
  calories: string
}

useMeta({
  title: 'Tổng quan',
})

const items = computed((): TableItem[] => [
  {
    name: 'Frozen Yogurt',
    calories: '159',
  },
  {
    name: 'Ice cream sandwich',
    calories: '237',
  },
  {
    name: 'Eclair',
    calories: '262',
  },
  {
    name: 'Cupcake',
    calories: '305',
  },
  {
    name: 'Gingerbread',
    calories: '356',
  },
])
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <v-row justify="space-around">
        <v-col cols="6">
          <div>
            <PageTitle :text="$t('pages.dashboard.title')" class="capitalize" />
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <NuxtLink to="#" class="main__title-link"> thêm mới </NuxtLink>
        </v-col>
      </v-row>
      <br />
      <v-divider></v-divider>
    </PageHeader>

    <PageSection>
      <v-row>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-2 dashboard-card-custom"
            max-width="340"
            color="#151f30"
          >
            <v-card-title>Tổng Phim</v-card-title>
            <v-flex>
              <v-card-title
                >5 210
                <v-icon class="pl-30" color="#2f80ed">mdi-movie-roll</v-icon>
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-2 dashboard-card-custom"
            max-width="340"
            color="#151f30"
          >
            <v-card-title>Thể Loại</v-card-title>
            <v-flex>
              <v-card-title
                >5 210
                <v-icon class="pl-30" color="#2f80ed">mdi-shape-outline</v-icon>
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-2 dashboard-card-custom"
            max-width="340"
            color="#151f30"
          >
            <v-card-title>Lượt Xem</v-card-title>
            <v-flex>
              <v-card-title
                >5 210
                <v-icon class="pl-30" color="#2f80ed"
                  >mdi-account-eye-outline</v-icon
                >
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
        <v-col cols="3" sm="3" md="3">
          <v-card
            class="rounded-card mx-auto mt-2 dashboard-card-custom"
            max-width="340"
            color="#151f30"
          >
            <v-card-title>Truy Cập</v-card-title>
            <v-flex>
              <v-card-title
                >5 210
                <v-icon class="pl-30" color="#2f80ed"
                  >mdi-database-eye-outline</v-icon
                >
              </v-card-title>
            </v-flex>
          </v-card>
        </v-col>
      </v-row>
    </PageSection>

    <PageSection>
      <v-row>
        <!-- Top phim -->
        <v-col cols="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar color="#151f30">
              <v-btn
                class="icon-color-custom"
                variant="text"
                icon="mdi-movie-open-star-outline"
              ></v-btn>
              TOP PHIM
              <v-spacer></v-spacer>
              <NuxtLink to="#" class="view-more-custom d-block mr-2">
                Xem thêm
              </NuxtLink>
            </v-toolbar>
            <v-divider></v-divider>
            <v-table class="v-table-custom-color">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <!-- end Top phim -->

        <!-- Phim mới cập nhật -->
        <v-col cols="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar color="#151f30">
              <v-btn
                class="icon-color-custom"
                variant="text"
                icon="mdi-movie-open-plus-outline"
              ></v-btn>
              PHIM MỚI
              <v-spacer></v-spacer>
              <NuxtLink to="#" class="view-more-custom d-block mr-2">
                Xem thêm
              </NuxtLink>
            </v-toolbar>
            <v-divider></v-divider>
            <v-table class="v-table-custom-color">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <!-- end Phim mới cập nhật -->

        <!-- Số lượt xem phim -->
        <v-col cols="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar color="#151f30">
              <v-btn
                class="icon-color-custom"
                variant="text"
                icon="mdi-eye-check-outline"
              ></v-btn>
              SỐ LƯỢT XEM
              <v-spacer></v-spacer>
              <NuxtLink to="#" class="view-more-custom d-block mr-2">
                Xem thêm
              </NuxtLink>
            </v-toolbar>
            <v-divider></v-divider>
            <v-table class="v-table-custom-color">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <!-- end Số lượt xem phim -->

        <!--  Đánh giá phim -->
        <v-col cols="6">
          <v-card class="mx-auto" max-width="600">
            <v-toolbar color="#151f30">
              <v-btn
                class="icon-color-custom"
                variant="text"
                icon="mdi-star-outline"
              ></v-btn
              >ĐÁNH GIÁ

              <v-spacer></v-spacer>
              <NuxtLink to="#" class="view-more-custom d-block mr-2">
                Xem thêm
              </NuxtLink>
            </v-toolbar>
            <v-divider></v-divider>
            <v-table class="v-table-custom-color">
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
        <!-- end Đánh giá phim -->
      </v-row>
    </PageSection>
  </PageWrapper>
</template>
