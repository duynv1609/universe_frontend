<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});

useMeta({
  title: 'Thêm mới người dùng',
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
        <h2>Thêm mới người dùng</h2>
      </div>
    </v-col>
  </v-row>
</template>
