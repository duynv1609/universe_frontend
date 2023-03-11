<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});

definePageMeta({
  title: 'User List',
});
</script>
<script lang="ts">
export default {
  data() {
    return {
      dialogDelete: false,
      dialogStatus: false,
      url: null,
      newImage: null,
    };
  },
};
</script>

<template>
  <v-row>
    <!-- main title -->
    <v-col cols="12">
      <div class="main__title">
        <h2>User List</h2>
      </div>
    </v-col>
  </v-row>
</template>
