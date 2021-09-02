<template>
  <div>
    <div class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="1400"
            height="700"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=zlatibor&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>

          <!-- <a href="https://123movies-to.org"></a><br />
          ><a href="https://www.embedgooglemap.net">embed map html</a> -->
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
