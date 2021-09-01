<template>
  <div>
    <div class="images-container">
      <div class="main">
        <img :src="images[0 + offset]" alt="" />
      </div>
      <div v-if="images[1 + offset]" class="left">
        <img :src="images[1 + offset]" alt="" />
      </div>
      <div v-if="images[2 + offset]" class="right">
        <img :src="images[2 + offset]" alt="" />
      </div>
      <div v-if="images[3 + offset]" class="bottom">
        <img :src="images[3 + offset]" alt="" />
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

      <!-- <div :class="offset == 4 ? 'selected' : ''" @click="two">2</div> -->
    </div>
  </div>
</template>

<script>
export default {
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
