<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});

useMeta({
  title: 'Thêm mới phim',
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
  <!-- <main class="main"> -->
  <v-container>
    <v-row>
      <!-- main title -->
      <v-col cols="12">
        <div class="main__title">
          <h2>Thêm mới phim</h2>
        </div>
      </v-col>

      <!-- end main title -->
      <!-- form -->
      <v-col cols="12">
        <form action="#" class="form">
          <v-row>
            <v-col md="3" class="form__cover">
              <v-row>
                <v-col md="12" sm="6">
                  <div class="form__img">
                    <label for="form__img-upload">Upload cover (190 x 270)</label>
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
                    <input type="text" class="form__input" placeholder="Title" />
                  </div>
                </v-col>

                <v-col cols="12">
                  <div class="form__group">
                    <textarea
                      id="text"
                      name="text"
                      class="form__textarea"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </v-col>

                <v-col sm="6" lg="3">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Release year" />
                  </div>
                </v-col>

                <v-col sm="6" lg="3">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Running timed in minutes" />
                  </div>
                </v-col>

                <v-col sm="6" lg="3">
                  <div class="form__group">
                    <v-select
                      label="Chất lượng"
                      :items="['FullHD', 'HD']"
                      variant="solo"
                    ></v-select>
                  </div>
                </v-col>

                <v-col sm="6" lg="3">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Age" />
                  </div>
                </v-col>

                <v-col cols="12">
                  <div class="form__gallery">
                    <label id="gallery1" for="form__gallery-upload">Upload photos</label>
                    <v-file-input
                      id="form__gallery-upload"
                      data-name="#gallery1"
                      name="gallery"
                      class="form__gallery-upload"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      show-size
                      label="File input"
                    ></v-file-input>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <ul class="form__radio">
                <li>
                  <span>Item type:</span>
                </li>
                <li>
                  <input id="type1" type="radio" name="type" checked="" />
                  <label for="type1">Movie</label>
                </li>
                <li>
                  <input id="type2" type="radio" name="type" />
                  <label for="type2">TV Show</label>
                </li>
              </ul>
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col cols="12" lg="6">
                  <div class="form__video">
                    <label id="movie1" for="form__video-upload">Upload video</label>
                    <input
                      id="form__video-upload"
                      data-name="#movie1"
                      name="movie"
                      class="form__video-upload"
                      type="file"
                      accept="video/mp4,video/x-m4v,video/*"
                    />
                  </div>
                </v-col>

                <v-col lg="6">
                  <div class="form__group form__group--link">
                    <input type="text" class="form__input" placeholder="or add a link" />
                  </div>
                </v-col>

                <v-col cols="12">
                  <button type="button" class="form__btn">publish</button>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </form>
      </v-col>
      <!-- end form -->
    </v-row>
  </v-container>
  <!-- </main> -->
</template>
