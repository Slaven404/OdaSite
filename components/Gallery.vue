<template>
  <div>
    <div :key="offset" class="images-container fade-in-image">
      <div class="main">
        <img @click="index = 0 + offset" :src="images[0 + offset]" alt="" />
      </div>
      <div v-if="images[1 + offset]" class="left">
        <img @click="index = 1 + offset" :src="images[1 + offset]" alt="" />
      </div>
      <div v-if="images[2 + offset]" class="right">
        <img @click="index = 2 + offset" :src="images[2 + offset]" alt="" />
      </div>
      <div v-if="images[3 + offset]" class="bottom">
        <img @click="index = 3 + offset" :src="images[3 + offset]" alt="" />
      </div>
    </div>
    <div class="pagination" v-if="images.length > 4">
      <div
        v-for="(n, key) in PageNumber"
        :key="key"
        :class="offset == (n - 1) * 4 ? 'selected' : ''"
        @click="selectPage(n)"
      >
        {{ n }}
      </div>
    </div>
    <client-only placeholder="Loading...">
      <VueGallerySlideshow
        :images="images"
        :index="index"
        @close="index = null"
      >
      </VueGallerySlideshow>
    </client-only>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  components: {
    VueGallerySlideshow,
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      offset: 0,
      index: null,
    }
  },
  computed: {
    PageNumber() {
      return Math.ceil(this.images.length / 4)
    },
  },
  methods: {
    selectPage(n) {
      this.offset = (n - 1) * 4
    },
    one() {
      this.offset = 0
    },
    two() {
      this.offset = 4
    },
  },
}
</script>

<style lang="scss">
.vgs__container {
  height: 80vh;
}
</style>
<style lang="scss" scoped>
.selected {
  border: 2px solid white !important;
}
.pagination {
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);

  div {
    border: 2px solid rgba(0, 0, 0, 0);

    cursor: pointer;
    padding: 5px 10px;
    margin: 5px;
    color: white;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
  }
}
.images-container {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: calc(100% - 100px);
  max-width: 1400px;
  margin: auto;
  position: relative;
  display: grid;
  gap: 4px;
  grid-template-areas:
    'main main left right'
    'main main bottom bottom';
  @media (max-width: 920px) {
    grid-template-areas:
      'main  left '
      'right   bottom';
  }

  img {
    cursor: pointer;

    width: 100%;
    max-height: 244px;
    height: 100%;
    object-fit: cover;
    transition: 0.33s ease-in;
    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      -moz-transform: scale3d(1.05, 1.05, 1.05);
      -o-transform: scale3d(1.05, 1.05, 1.05);
      -ms-transform: scale3d(1.05, 1.05, 1.05);
    }
  }
}
.main,
.bottom,
.left,
.right {
  @media (max-width: 920px) {
  }
}
.main {
  grid-area: main;
  padding-bottom: 4px;
  @media (max-width: 920px) {
    padding-bottom: 0;
  }
  img {
    max-height: 500px !important;
    height: 100%;
    @media (max-width: 920px) {
      max-height: 244px !important;
    }
  }
}
.bottom {
  grid-area: bottom;
}
.left {
  grid-area: left;
}
.right {
  grid-area: right;
}
</style>
