<template>
  <div class="location-container">
    <div class="location">
      <div class="section">Lokacija apartmana</div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div class="content">
        <img src="@/assets/images/marker.png" alt="" />
        <div>Autobuska stanica 300 m</div>
      </div>
      <div class="content">
        <img src="@/assets/images/marker.png" alt="" />
        <div>Tržni centar 150 m</div>
      </div>
      <div class="content">
        <img src="@/assets/images/marker.png" alt="" />
        <div>Jezero 800 m</div>
      </div>
      <div class="content">
        <img src="@/assets/images/marker.png" alt="" />
        <div>Parking 1000 m</div>
      </div>
    </div>
    <div class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=zlatibor&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://123movies-to.org"></a><br />
          ><a href="https://www.embedgooglemap.net">embed map html</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
.mapouter {
  position: relative;
  text-align: right;
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
</style>
<style lang="scss" scoped>
.location-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.location {
  width: 50%;
  display: flex;
  flex-direction: column;
}
// .section {
//   font-size: 18px;
//   letter-spacing: 2px;
//   color: orange;
//   font-weight: 500;
//   padding: 10px 50px;
// }
// .description {
//   padding: 20px 50px;
//   text-align: justify;
// }
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
    margin-right: 50px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    color: orange;
    background-color: white;
    border-radius: 5px;
    min-width: 250px;
  }
}
.map {
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  margin: 50px;
}
</style>
