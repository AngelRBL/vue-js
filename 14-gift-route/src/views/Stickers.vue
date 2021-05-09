<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Stickers</h1>
    <search @accion="getStickers" />
    <hr />
    <loading v-if="load"/>
    <div class="row">
      <div
        class="col-12 col-lg-3"
        style="display: flex; flex-direction: column; align-items: center;"
        v-for="sticker in stickers"
        key="stiker.id"
      >
        <sticker-card :data="sticker" class="m-3 w-75" />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import StickerCard from "../components/StickerCard.vue";
import Search from "../components/Search.vue";
export default {
  components: { Search, Loading, StickerCard },
  data: () => ({
    stickers: {},
    load: false,
  }),
  created() {
    this.getStickers();
  },
  methods: {
    async getStickers(search = "goku") {
      const key = "7OgxdE19PwGKKYSibsFARRy4wXZTUe1u";

      this.load = true;

      const { data } = await this.axios.get(
        `https://api.giphy.com/v1/stickers/search?q=${search}&api_key=${key}`
      );

      this.stickers = data.data;

      this.load = false;
    },
  },
};
</script>
