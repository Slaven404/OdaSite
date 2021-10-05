<template>
  <div class="intro" @mouseover="addEvent" @mouseleave="removeEvent">
    <div class="left" @click="prew">
      <font-awesome-icon class="icon" icon="chevron-left" />
    </div>
    <div class="intro-center">
      <div class="intro-title">
        {{ json[imgIndex].title }}
      </div>
      <div class="intro-adress">
        {{ json[imgIndex].adress }}
      </div>

      <div class="intro-content">
        {{ json[imgIndex].description }}
      </div>
    </div>
    <div class="right" @click="next">
      <font-awesome-icon class="icon" icon="chevron-right" />
    </div>
    <div class="bg-image zoom-image">
      <img :src="bgImage" alt="Bad connection or error loading image" />
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
      interval: 0,
    }
  },

  computed: {
    bgImage() {
      return this.json[this.imgIndex].image
    },
  },
  methods: {
    arrowHanlder(e) {
      if (e.keyCode === 37) {
        this.prew()
      }
      if (e.keyCode === 39) {
        this.next()
      }
    },
    prew() {
      this.imgIndex--
      if (this.imgIndex < 0) {
        this.imgIndex = this.json.length - 1
      }
      this.imagesTimer()
    },
    next() {
      this.imgIndex++
      if (this.imgIndex > this.json.length - 1) {
        this.imgIndex = 0
      }
      this.imagesTimer()
    },
    imagesTimer() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.next()
      }, 10000)
    },
    removeEvent() {
      window.removeEventListener('keyup', this.arrowHanlder)
    },
    addEvent() {
      window.addEventListener('keyup', this.arrowHanlder)
    },
  },

  mounted() {
    this.addEvent()
    this.imagesTimer()
  },
  destroyed() {
    clearInterval(this.interval)
    this.removeEvent()
  },
}
</script>

<style lang="scss" scoped>
.intro {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  height: calc(100vh - 100px);
  margin-bottom: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
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
      font-weight: 600;
      animation-name: bgBlur;
      animation-timing-function: ease-in-out;
      animation-duration: 0.33s;
      backdrop-filter: blur(5px);
      color: white;
      @media (max-width: 920px) {
      }
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
  width: 100%;
  img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    height: calc(100vh - 100px);
  }
}
.intro-center {
  text-shadow: 2px 1px #000000;
  display: flex;
  z-index: 2;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  padding: 50px 300px;

  @media (max-width: 1400px) {
    padding: 50px;
  }
  @media (max-width: 660px) {
    padding: 10px;
  }
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
  @media (max-width: 920px) {
    .intro-title,
    .intro-content,
    .intro-adress {
      margin: 10px 10px;
    }
  }
}
.left,
.right {
  z-index: 2;
  text-shadow: 2px 1px #000000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  cursor: pointer;
  @media (max-width: 660px) {
    min-width: 40px;
  }
}
</style>
