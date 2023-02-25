<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

useMeta({
  title: 'Catalog',
})
</script>
<script lang="ts">
export default {
  data() {
    return {
      dialogDelete: false,
      dialogStatus: false,
      url: null,
      newImage: null,
    }
  },
  methods: {
    previewFiles(event) {
      const file = event.target.files[0]

      const theReader = new FileReader()
      // Nhớ sử dụng async/await để chờ khi đã convert thành công image sang base64 thì mới bắt đầu gán cho biến newImage
      // đây là 1 kinh nghiệm của mình khi upload multiple ảnh
      theReader.onloadend = async () => {
        this.newImage = await theReader.result
      }
      theReader.readAsDataURL(file)
    },
  },
}
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
                  <input
                    type="text"
                    class="form__input"
                    placeholder="Name Vi"
                  />
                </div>
              </v-col>

              <v-col cols="12">
                <div class="form__group">
                  <input
                    type="text"
                    class="form__input"
                    placeholder="Name En"
                  />
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
