<script lang="ts">
export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
  },
  setup() {
    const sidebar = ref(null)

    onMounted(() => {
      // const { onScroll } = useSticky(sidebar.value, -1000)
      // setTimeout(() => onScroll(), 50)
    })

    return {
      sidebar,
    }
  },
  data: () => ({
    items: [
      {
        title: 'Catalog',
        active: true,
        icon: 'mdi-tag-outline',
        value: 'catalog',
        items: [
          {
            action: '/admin/catalog/form',
            title: 'Add new',
            icon: 'mdi-playlist-plus',
          },
          {
            action: '/admin/catalog',
            title: 'List',
            icon: 'mdi-list-box-outline',
          },
        ],
      },
      {
        title: 'Movie',
        active: true,
        icon: 'mdi-movie-open',
        value: 'movie',
        items: [
          {
            action: '/admin/movie/form',
            title: 'Add new',
            icon: 'mdi-playlist-plus',
          },
          {
            action: '/admin/movie',
            title: 'List',
            icon: 'mdi-list-box-outline',
          },
        ],
      },
      {
        title: 'User',
        active: true,
        icon: 'mdi-account-group',
        value: 'user',
        items: [
          {
            action: '/admin/user/form',
            title: 'Add new',
            icon: 'mdi-playlist-plus',
          },
          {
            action: '/admin/user',
            title: 'List',
            icon: 'mdi-list-box-outline',
          },
        ],
      },
    ],
  }),
})
</script>

<template>
  <!-- sidebar -->
  <div class="sidebar">
    <!-- sidebar nav -->

    <v-list class="sidebar__nav-item v-theme--light">
      <v-list-item>
        <!-- sidebar logo -->
        <NuxtLink tag="a" class="sidebar__logo" to="/dashboard/catalog">
          <img src="~/assets/images/logo.png" alt="Vu tru film" />
        </NuxtLink>
        <!-- end sidebar logo -->
      </v-list-item>

      <v-list-item>
        <div class="sidebar__user">
          <div class="sidebar__user-img">
            <img src="~/assets/images/user.svg" alt="" />
          </div>

          <div class="sidebar__user-title">
            <span>Admin</span>
            <p>Vũ Trụ</p>
          </div>

          <button class="sidebar__user-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
              />
            </svg>
          </button>
        </div>
      </v-list-item>

      <v-list-item
        prepend-icon="mdi-home"
        title="Dashboard"
        to="/admin"
      ></v-list-item>

      <v-list-group
        v-for="item in items"
        :key="item.value"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="item.title"></v-list-item>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.action"
          :title="subItem.title"
          :prepend-icon="subItem.icon"
          :value="subItem.title"
          :to="subItem.action"
        ></v-list-item>
      </v-list-group>

      <v-list-item class="list-item-sidebar__copyright">
        <!-- sidebar copyright -->
        <div class="sidebar__copyright">
          Copyright © 2022 Vũ Trụ Phim.
          <br />
          All rights reserved. <br />Made with ❤
        </div>
        <!-- end sidebar copyright -->
      </v-list-item>
    </v-list>
    <!--     end sidebar nav -->
  </div>
  <!-- end sidebar -->
</template>
