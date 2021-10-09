<template>
  <div class="trip-container">
    <div class="content" :class="right ? 'grid-col-2-1' : ''">
      <div v-if="!right" class="image-container">
        <div class="image-content">
          <div class="image-control">
            <div class="relative">
              <div class="left" @click="prew">
                <font-awesome-icon class="icon" icon="chevron-left" />
              </div>
              <img
                :src="activeImage"
                alt="Bad connection or error loading image"
              />
              <div class="right" @click="next">
                <font-awesome-icon class="icon" icon="chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <div class="decription-title">
          {{ content.title }}
        </div>
        <div class="decription-content">
          {{ content.text }}
        </div>
      </div>
      <div v-if="right" class="image-container">
        <div class="image-content">
          <div class="image-control">
            <div class="relative">
              <div class="left" @click="prew">
                <font-awesome-icon class="icon" icon="chevron-left" />
              </div>
              <img
                :src="activeImage"
                alt="Bad connection or error loading image"
              />
              <div class="right" @click="next">
                <font-awesome-icon class="icon" icon="chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      default() {
        return []
      },
    },
    content: {
      type: Object,
      default() {
        return {
          text: '',
          title: '',
        }
      },
    },
  },
  data() {
    return {
      imgIndex: 0,
    }
  },

  computed: {
    activeImage() {
      return this.images[this.imgIndex]
    },
  },
  methods: {
    prew() {
      this.imgIndex--
      if (this.imgIndex < 0) {
        this.imgIndex = this.images.length - 1
      }
      this.preloadPrew()
    },
    next() {
      this.imgIndex++
      if (this.imgIndex > this.images.length - 1) {
        this.imgIndex = 0
      }
      this.preloadNext()
    },
    preloadNext() {
      let img = new Image()
      if (this.imgIndex < this.images.length - 1)
        img.src = this.images[this.imgIndex + 1]
    },
    preloadPrew() {
      let img = new Image()
      if (this.imgIndex > 0) img.src = this.images[this.imgIndex - 1]
    },
  },
  mounted() {
    let img = new Image()
    img.src = this.images[this.imgIndex + 1]
    img.src = this.images[this.images.length - 1]
  },
}
</script>

<style lang="scss" scoped>
.decription-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: center;
}
.star-icon {
  color: #ffd700;
  font-size: 20px;
}
.circle-icon {
  color: #191a1c;
  font-size: 8px;
}
.grid-col-2-1 {
  grid-template-columns: 1fr 1fr !important;
  .image-container {
    order: 2;
  }
  .description {
    order: 1;
  }
  @media (max-width: 660px) {
    grid-template-columns: 1fr !important;
    .image-container {
      order: 1;
    }
    .description {
      order: 2;
    }
  }
  .description > div {
    padding-left: 50px !important;
    padding-right: 30% !important;
    @media (max-width: 920px) {
      padding-left: 30px !important;
    }
    @media (max-width: 660px) {
      padding: 0 30px !important;
    }
  }
  .image-container > .image-content > .image-control {
    left: auto;
    right: 0;
  }
}
.trip-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;

  background: transparent;
  margin: 20px auto;
  width: calc(100vw - 100px);
  @media (max-width: 1100px) {
    padding: 0 !important;
  }
}
.content {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
}

.image-container {
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 500px;
  @media (max-width: 920px) {
    min-height: 350px;
  }
  @media (max-width: 820px) {
    min-height: 325px;
  }
}
.image-content {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 500px;
  @media (max-width: 920px) {
    min-height: 350px;
  }
  @media (max-width: 820px) {
    min-height: 325px;
  }
}
.image-control {
  position: absolute;
  top: 10px;
  left: 0;
  width: 125%;
  height: 450px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  flex-direction: column;

  @media (max-width: 920px) {
    height: 300px;
  }
  @media (max-width: 820px) {
    height: 275px;
  }
  @media (max-width: 660px) {
    width: 100%;
  }
  .relative {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    position: relative;
    width: 100%;
    @media (max-width: 660px) {
      width: 100%;
    }
    &:hover {
      .left,
      .right {
        animation-name: bgBlur;
        animation-timing-function: ease-out;
        animation-duration: 0.5s;
        backdrop-filter: blur(3px);
        color: white;
      }
    }
  }
  @keyframes bgBlur {
    from {
      backdrop-filter: blur(0px);
    }
    to {
      backdrop-filter: blur(3px);
    }
  }

  img {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 480px;
    @media (max-width: 920px) {
      height: 300px;
    }
    @media (max-width: 820px) {
      height: 275px;
    }
    @media (max-width: 660px) {
      width: 100%;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
}
.left,
.right {
  background: transparent;
  height: 100%;
  position: absolute;
  cursor: pointer;
  width: 10%;
  justify-content: center;
}
.left {
  border-radius: 10px 0 0 10px;
}
.right {
  right: 0;

  border-radius: 0 10px 10px 0;
}
.description {
  order: 2;
  width: 100%;
  background: rgba(255, 252, 238, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px 0;
  flex-direction: column;

  div {
    padding-right: 50px;
    padding-left: 30% !important;
    @media (max-width: 920px) {
      padding-right: 30px;
    }
    @media (max-width: 660px) {
      padding: 0 30px !important;
    }
  }
}
.stars {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin: auto;
}

.dots {
  display: flex;
  justify-content: flex-start;
  position: relative;
}

.star {
  display: flex;
  width: 25px;
  height: 25px;
  margin: 5px 10px;
  img {
    width: 25px;
    height: 25px;
  }
}
.div-circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: black;
  border: 1px solid black;
}
.dot {
  display: flex;
  width: auto;
  margin: auto;
  height: 20px;
  margin: 5px;
  @media (max-width: 1100px) {
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
