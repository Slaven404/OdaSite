<template>
  <div class="location-container">
    <div class="location">
      <div class="description" style="margin-bottom: 20px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div class="content">
        <!-- <img src="@/assets/images/marker.png" alt="" /> -->
        <div>
          <font-awesome-icon class="icon" icon="bus" />
        </div>
        <div class="short">Autobuska stanica 300 m</div>
      </div>
      <div class="content">
        <!-- <img src="@/assets/images/marker.png" alt="" /> -->
        <div>
          <font-awesome-icon class="icon" icon="shopping-cart" />
        </div>
        <div class="short">Tržni centar 150 m</div>
      </div>
      <div class="content">
        <!-- <img src="@/assets/images/marker.png" alt="" /> -->
        <div>
          <font-awesome-icon class="icon" icon="water" />
        </div>
        <div class="short">Jezero 800 m</div>
      </div>
      <div class="content">
        <!-- <img src="@/assets/images/marker.png" alt="" /> -->

        <div>
          <font-awesome-icon class="icon" icon="parking" />
        </div>
        <div class="short">Parking 1000 m</div>
      </div>
    </div>
    <div class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.3591552324826!2d19.690565602253066!3d43.72723558392807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47582ff55912f42f%3A0xb16d87d45a7670fa!2sRujanska%2C%20Zlatibor%2C%20Serbia!5e0!3m2!1sen!2sus!4v1630780536176!5m2!1sen!2sus"
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
  <!-- src="https://maps.google.com/maps?q=rujanska&t=&z=14&ie=UTF8&iwloc=&output=embed" -->

  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.3591552324826!2d19.690565602253066!3d43.72723558392807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47582ff55912f42f%3A0xb16d87d45a7670fa!2sRujanska%2C%20Zlatibor%2C%20Serbia!5e0!3m2!1sen!2sus!4v1630780536176!5m2!1sen!2sus"
 width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
</template>

<script>
export default {}
</script>

<style lang="scss">
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 400px;
  height: 350px;
  border-radius: 10px;
  @media (max-width: 820px) {
    width: 300px;
    height: 300px;
  }
}
.mapouter {
  position: relative;
  text-align: right;
  width: 400px;
  height: 350px;
  border-radius: 10px;
  @media (max-width: 820px) {
    width: 300px;
    height: 300px;
  }
}
</style>
<style lang="scss" scoped>
.icon {
  font-size: 30px;
  margin-right: 50px;
}
.location-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1400px;
  margin: auto;
  // background: whitesmoke;
  background: transparent;
  // background: rgba(125, 125, 125, 0.2);
  @media (max-width: 660px) {
    flex-direction: column;
    .location {
      width: 100%;
    }
  }
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
    @media (max-width: 920px) {
      margin-right: 10px;
      margin-left: 10px;
    }
    @media (max-width: 820px) {
      width: 40px;
      height: 40px;
    }
  }
  .short {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    color: orange;
    background-color: white;
    border-radius: 5px;
    min-width: 250px;
    @media (max-width: 920px) {
      padding: 10px 5px;
    }
    @media (max-width: 820px) {
      min-width: 200px;
    }
  }
}
.map {
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 350px;
  margin: 30px auto;
  @media (max-width: 820px) {
    width: 300px;
    height: 300px;
    margin: 20px auto;
  }
}
</style>
