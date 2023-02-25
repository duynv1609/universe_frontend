<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});

useMeta({
  title: 'Movie',
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
          <h2>Movie</h2>
        </div>
      </v-col>

      <!-- end main title -->
      <!-- form -->
      <v-col cols="12">
        <form action="#" class="form">
          <v-row>
            <!-- name -->
            <v-col md="6" class="form__content">
              <v-row>
                <v-col cols="12">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Name" />
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="6" class="form__content">
              <v-row>
                <v-col cols="12">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Name En" />
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <!-- end name -->

            <v-col md="12" class="form__content">
              <v-row>
                <!-- slug -->
                <v-col cols="12">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Slug" />
                  </div>
                </v-col>
                <!-- end slug -->

                <!-- poster link -->
                <v-col cols="12">
                  <v-row>
                    <v-col cols="12" lg="6">
                      <div class="form__group form__group--link">
                        <input type="text" class="form__input" placeholder="Poster link" />
                      </div>
                    </v-col>

                    <v-col lg="6">
                      <div class="form__group form__group--link">
                        <input type="text" class="form__input" placeholder="Backdrop link" />
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <!-- end poster link -->

                <!-- trailer url -->
                <v-col cols="12">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Trailer url" />
                  </div>
                </v-col>
                <!-- end trailer url -->

                <!-- description -->
                <v-col cols="6">
                  <div class="form__group">
                    <textarea
                      id="text"
                      name="text"
                      class="form__textarea form__input"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </v-col>

                <v-col cols="6">
                  <div class="form__group">
                    <textarea
                      id="text"
                      name="text"
                      class="form__textarea form__input"
                      placeholder="Description En"
                    ></textarea>
                  </div>
                </v-col>
                <!-- end description -->

                <!-- release year -->
                <v-col sm="4" lg="4">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Release year" />
                  </div>
                </v-col>
                <!-- end release year -->

                <!-- duration -->
                <v-col sm="4" lg="4">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Duration" />
                  </div>
                </v-col>
                <!-- end duration -->

                <!-- episode -->
                <v-col sm="4" lg="4">
                  <div class="form__group">
                    <input type="text" class="form__input" placeholder="Episode" />
                  </div>
                </v-col>
                <!-- end episode -->

                <!-- country -->
                <v-col sm="4" lg="4">
                  <div class="form__group">
                    <v-select label="Country" :items="['FullHD', 'HD']" variant="solo"></v-select>
                  </div>
                </v-col>
                <!-- end country -->
                <v-col sm="4" lg="4">
                  <div class="form__group">
                    <v-select label="Quality" :items="['FullHD', 'HD']" variant="solo"></v-select>
                  </div>
                </v-col>

                <!-- language -->
                <v-col sm="4" lg="4">
                  <div class="form__group">
                    <v-select label="Language" :items="['FullHD', 'HD']" variant="solo"></v-select>
                  </div>
                </v-col>
                <!-- end language -->
              </v-row>
            </v-col>

            <!-- status -->
            <v-col cols="12">
              <ul class="form__radio">
                <li>
                  <span>Status:</span>
                </li>
                <li>
                  <input id="type1" type="radio" name="type" checked="" />
                  <label for="type1">Public</label>
                </li>
                <li>
                  <input id="type2" type="radio" name="type" />
                  <label for="type2">Draft</label>
                </li>
              </ul>
            </v-col>
            <!-- end status -->

            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-row>
                    <v-col sm="6" lg="3">
                      <div class="form__group">
                        <v-btn size="large" color="success"> save </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row justify="end">
                    <v-col sm="6" lg="4">
                      <div class="form__group">
                        <v-btn size="large" color="warning"> Add Episode </v-btn>
                      </div>
                    </v-col>
                  </v-row>
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
