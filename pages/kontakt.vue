<template>
  <div>
    <div class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <client-only>
            <iframe
              :width="mapWidth"
              :height="mapHeight"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11532.176347136447!2d19.711290372996793!3d43.73041099977893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzQ5LjEiTiAxOcKwNDMnMDkuNiJF!5e0!3m2!1sen!2sus!4v1631721377966!5m2!1sen!2sus"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </client-only>
          <!-- src="https://maps.google.com/maps?q=zlatibor&t=&z=13&ie=UTF8&iwloc=&output=embed" -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mapWidth() {
      if (process.browser) {
        if (window.innerWidth <= 820) {
          return '300'
        }
        if (window.innerWidth <= 1100) {
          return '700'
        }
        if (window.innerWidth <= 1400) {
          return '1000'
        }

        return '1400'
      }
      return '1400'
    },
    mapHeight() {
      if (process.browser) {
        if (window.innerWidth <= 820) {
          return '300'
        }

        if (window.innerWidth <= 1100) {
          return '400'
        }
        if (window.innerWidth <= 1400) {
          return '500'
        }
        return '700'
      }
      return '700'
    },
  },
}
</script>

<style lang="scss" scoped>
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 1400px;
  height: 700px;
  border-radius: 10px;
  margin: auto;
  @media (max-width: 1400px) {
    width: 1000px;
    height: 500px;
  }
  @media (max-width: 1100px) {
    width: 700px;
    height: 400px;
  }
  @media (max-width: 820px) {
    width: 300px;
    height: 300px;
  }
}
.mapouter {
  position: relative;
  text-align: right;
  width: 1400px;
  height: 700px;
  border-radius: 10px;
  @media (max-width: 1400px) {
    width: 1000px;
    height: 500px;
  }
  @media (max-width: 1100px) {
    width: 700px;
    height: 400px;
  }
  @media (max-width: 820px) {
    width: 300px;
    height: 300px;
  }
}
.map {
  padding: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 1100px) {
    margin-top: 50px;
  }
}
</style>
