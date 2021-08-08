<template>
  <div class="intro">
    <div class="left" @click="prew">L</div>
    <div class="intro-center">
      <div class="intro-title">
        {{ json[imgIndex].title }}
      </div>
      <div class="intro-adress"></div>

      <div class="intro-content">
        {{ json[imgIndex].description }}
      </div>
    </div>
    <div class="right" @click="next">R</div>
    <div class="bg-image">
      <img :src="bgImage" alt="" />
    </div>
  </div>
</template>

<script>
import json from '../static/texts/intro.json'
export default {
  data() {
    return {
      imgIndex: 0,
      json: json,
    }
  },
  computed: {
    bgImage() {
      return `./images/${this.json[this.imgIndex].image}.jpg`
    },
  },
  methods: {
    prew() {
      this.imgIndex--
      if (this.imgIndex < 0) {
        this.imgIndex = 4
      }
    },
    next() {
      this.imgIndex++
      if (this.imgIndex > 4) {
        this.imgIndex = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  width: 1020px;
  height: 650px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  //   background-image: url('@/assets/images/footer.jpg');
  background-position: bottom;
  color: white;
  position: relative;
  z-index: 2;
  &:hover {
    .left,
    .right,
    .intro-content,
    .intro-title,
    .intro-adress {
      animation-name: bgBlur;
      animation-timing-function: ease-in-out;
      animation-duration: 0.33s;
      backdrop-filter: blur(5px);
      color: white;
    }
  }
}
@keyframes bgBlur {
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(5px);
  }
}
.bg-image {
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;

  img {
    width: 1020px;
    height: 650px;
    position: absolute;
    object-fit: cover;
  }
}
.intro-center {
  text-shadow: 2px 1px #000000;
  display: flex;
  z-index: 2;

  flex-direction: column;
  justify-content: center;
  padding: 50px;
  .intro-title {
    padding: 0 5px;
    background-color: #00000020;
    font-size: 22px;
    font-weight: 500;
    margin: 10px 50px;
  }
  .intro-adress {
    padding: 0 5px;

    background-color: #00000020;
    font-size: 18px;
    margin: 10px 50px;
  }
  .intro-content {
    padding: 0 5px;

    background-color: #00000020;
    margin: 10px 50px;
  }
}
.left,
.right {
  z-index: 2;
  text-shadow: 2px 1px #000000;
  // background-color: #00000020;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  cursor: pointer;
}
</style>
