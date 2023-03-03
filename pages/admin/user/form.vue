<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});

useMeta({
  title: 'User',
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
  methods: {
    previewFiles(event) {
      const file = event.target.files[0];

      const theReader = new FileReader();
      // Nhớ sử dụng async/await để chờ khi đã convert thành công image sang base64 thì mới bắt đầu gán cho biến newImage
      // đây là 1 kinh nghiệm của mình khi upload multiple ảnh
      theReader.onloadend = async () => {
        this.newImage = await theReader.result;
      };
      theReader.readAsDataURL(file);
    },
  },
};
</script>

<template>
  <v-row>
    <!-- main title -->
    <v-col cols="12">
      <div class="main__title">
        <h2>User</h2>
      </div>
      <form action="#" class="form">
        <v-row>
          <v-col md="3" class="form__cover">
            <v-row>
              <v-col md="12" sm="6">
                <div class="form__img">
                  <label for="form__img-upload">Upload Avatar</label>
                  <input
                    id="form__img-upload"
                    name="form__img-upload"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    @change="previewFiles($event)"
                  />
                  <img id="form__img" :src="newImage || ''" alt=" " />
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col md="9" class="form__content">
            <v-row>
              <v-col cols="12">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Username" />
                </div>
              </v-col>

              <v-col cols="12">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="First Name" />
                </div>
              </v-col>

              <v-col cols="12">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Last Name" />
                </div>
              </v-col>

              <v-col sm="6">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Phone Number" />
                </div>
              </v-col>

              <v-col sm="6">
                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Email" />
                </div>
              </v-col>

              <v-col sm="12">
                <v-radio-group inline>
                  <v-radio value="active" label="Active"></v-radio>
                  <v-radio label="Inactive" value="inactive"></v-radio>
                </v-radio-group>
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
