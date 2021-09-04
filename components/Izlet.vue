<template>
  <div class="trip-container">
    <div class="content" :class="right ? 'grid-col-2-1' : ''">
      <div v-if="!right" class="image-container">
        <!-- <div class="stars">
          <div class="star" v-for="(n, key) in 5" :key="key">
            <span>
              <font-awesome-icon class="star-icon" icon="star" />
            </span>
          </div>
        </div> -->
        <div class="image-content">
          <div class="image-control">
            <div class="relative">
              <div class="left" @click="prew">
                <font-awesome-icon class="icon" icon="chevron-left" />
              </div>
              <img :src="activeImage" alt="" />
              <div class="right" @click="next">
                <font-awesome-icon class="icon" icon="chevron-right" />
              </div>
            </div>
            <!-- <div class="dots">
              <div class="dot" v-for="(n, key) in 3" :key="key">
                <div class="div-circle"></div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="description">
        <div class="decription-title">
          {{ content.title }}
        </div>
        <div class="decription-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div v-if="right" class="image-container">
        <!-- <div class="stars">
          <div class="star" v-for="(n, key) in 5" :key="key">
            <span>
              <font-awesome-icon class="star-icon" icon="star" />
            </span>
          </div>
        </div> -->
        <div class="image-content">
          <div class="image-control">
            <div class="relative">
              <div class="left" @click="prew">
                <font-awesome-icon class="icon" icon="chevron-left" />
              </div>
              <img :src="activeImage" alt="" />
              <div class="right" @click="next">
                <font-awesome-icon class="icon" icon="chevron-right" />
              </div>
            </div>
            <!-- <div class="dots">
              <div class="dot" v-for="(n, key) in 3" :key="key">
                <div class="div-circle"></div>
              </div>
            </div> -->
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
    },
    next() {
      this.imgIndex++
      if (this.imgIndex > this.images.length - 1) {
        this.imgIndex = 0
      }
    },
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
  // grid-template-columns: 2fr 1fr !important;
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
    // padding: 0 180px 0 50px !important;
    padding-left: 50px !important;
    padding-right: 30% !important;
    @media (max-width: 920px) {
      padding-left: 30px !important;

      // padding: 0 180px 0 30px !important;
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
  max-width: 1400px;
  // max-width: 1200px;
  padding: 0 50px;
  // background: whitesmoke;
  background: transparent;
  margin: 20px auto;
  @media (max-width: 1100px) {
    padding: 0 !important;
  }
}
.content {
  display: grid;
  // grid-template-columns: 1fr 2fr;
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
  // min-height: 400px;
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
  // min-height: 400px;
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
    // width: 400px;
    height: 300px;
  }
  @media (max-width: 820px) {
    // width: 375px;
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
      // width: 400px;
      height: 300px;
    }
    @media (max-width: 820px) {
      // width: 375px;
      height: 275px;
    }
    @media (max-width: 660px) {
      width: 100%;
    }
  }
  div {
    display: flex;
    align-items: center;
    // padding: 0 10px;
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
  background: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px 0;
  flex-direction: column;

  div {
    // padding: 0 50px 0 180px;
    padding-right: 50px;
    padding-left: 30% !important;
    @media (max-width: 920px) {
      padding-right: 30px;

      // padding: 0 30px 0 180px;
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
    // padding: 0 5px !important;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
