<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});

definePageMeta({
  title: 'Catalog',
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
    <!-- form -->
    <v-col cols="12">
      <!-- main title -->
      <div class="main__title">
        <h2>Catalog</h2>
      </div>
      <!-- end main title -->
      <form action="#" class="form">
        <v-row>
          <v-col md="12" class="form__content">
            <v-row>
              <v-col cols="12">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Name Vi" />
                </div>
              </v-col>

              <v-col cols="12">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Name En" />
                </div>
              </v-col>

              <v-col cols="12">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Slug" />
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <button type="button" class="form__btn">save</button>
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>
