<template>
  <div>
    <div class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="1400"
            height="700"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.3591552324826!2d19.690565602253066!3d43.72723558392807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47582ff55912f42f%3A0xb16d87d45a7670fa!2sRujanska%2C%20Zlatibor%2C%20Serbia!5e0!3m2!1sen!2sus!4v1630780536176!5m2!1sen!2sus"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>

          <!-- src="https://maps.google.com/maps?q=zlatibor&t=&z=13&ie=UTF8&iwloc=&output=embed" -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
}
</style>
