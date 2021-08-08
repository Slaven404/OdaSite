<template>
  <div class="trip-container">
    <div class="section">Organizovanje izleta</div>
    <div class="content" :class="right ? 'grid-col-2-1' : ''">
      <div v-if="!right" class="image-container">
        <div class="stars">
          <div class="star" v-for="(n, key) in 5" :key="key">
            <img src="@/assets/images/marker.png" alt="" />
          </div>
        </div>
        <div class="image-content">
          <div class="image-control">
            <div>
              <div class="left">L</div>
              <img src="@/assets/images/apartman1.jpg" alt="" />
              <div class="right">L</div>
            </div>
            <div class="dots">
              <div class="dot" v-for="(n, key) in 3" :key="key">
                <img src="@/assets/images/marker.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <div v-if="right" class="image-container">
        <div class="stars">
          <div class="star" v-for="(n, key) in 5" :key="key">
            <img src="@/assets/images/marker.png" alt="" />
          </div>
        </div>
        <div class="image-content">
          <div class="image-control">
            <div>
              <div class="left">L</div>
              <img src="@/assets/images/apartman1.jpg" alt="" />
              <div class="right">L</div>
            </div>
            <div class="dots">
              <div class="dot" v-for="(n, key) in 3" :key="key">
                <img src="@/assets/images/marker.png" alt="" />
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
  },
}
</script>

<style lang="scss" scoped>
.grid-col-2-1 {
  grid-template-columns: 2fr 1fr !important;
  .description > div {
    padding: 0 180px 0 50px !important;
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
  max-width: 1100px;
  padding: 0 50px;
  background: whitesmoke;
  margin: 20px auto;
}
.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
// .section {
//   font-size: 18px;
//   letter-spacing: 2px;
//   color: orange;
//   font-weight: 500;
//   padding: 10px 50px;
// }
.image-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 400px;
}
.image-content {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 400px;
}
.image-control {
  position: absolute;
  top: 10px;
  left: 0;
  width: 450px;
  height: 350px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  flex-direction: column;

  img {
    width: 450px;
    height: 350px;
  }
  div {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
}
.left {
  background: wheat;
  height: 100%;
  border-radius: 10px 0 0 10px;
}
.right {
  background: wheat;
  height: 100%;
  border-radius: 0 10px 10px 0;
}
.description {
  width: 100%;
  background: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px 0;

  div {
    padding: 0 50px 0 180px;
  }
}
.stars {
  display: flex;
  justify-content: flex-start;
  position: relative;
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
.dot {
  display: flex;
  width: 20px;
  height: 20px;
  margin: 5px;
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
