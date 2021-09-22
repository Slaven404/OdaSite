<template>
  <div class="container">
    <div class="section">Izdavanje apartmana</div>
    <div class="title title-logo">
      <img src="@/assets/images/carli-logo.png" alt="" />
      <div style="padding-bottom: 5px">Apartmani "Čarli"</div>
    </div>
    <div class="description">
      Apartman se nalazi u delu Zlatibora - naselje Potoci
    </div>
    <div v-drag-me class="images">
      <img
        class="slika"
        v-for="(i, key) in 8"
        :key="key"
        :src="`./SajtZlatibor/Apartmani/apartman${i}.jpg`"
        alt=""
      />
      <!-- <img src="@/assets/images/apartman1.jpg" alt="" />
      <img src="@/assets/images/apartman1.jpg" alt="" />
      <img src="@/assets/images/apartman1.jpg" alt="" />
      <img src="@/assets/images/apartman1.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title-logo {
  display: flex;
  align-items: flex-end;
  img {
    height: 80px;
  }
}
.slika {
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    -moz-transform: scale3d(1.05, 1.05, 1.05);
    -o-transform: scale3d(1.05, 1.05, 1.05);
    -ms-transform: scale3d(1.05, 1.05, 1.05);
  }
}
.container {
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 1400px;
  margin: auto;
  // background: whitesmoke;
  background: rgba(255, 252, 238, 0.4);
  // background: rgba(125, 125, 125, 0.2);
  border-radius: 20px;
  padding-bottom: 50px;
}
.images {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: grab;
  overflow: hidden;
  overflow-x: scroll;
  img {
    // width: 396px;
    width: 33.33%;
    margin: 2px;
    pointer-events: none;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.drag-box {
  margin: auto;
}
.images::-webkit-scrollbar {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  height: 5px;
  width: 5px;
  scrollbar-width: thin;
}
.images::-webkit-scrollbar-track {
  background-color: darkgrey;
  border-radius: 10px;
}
.images::-webkit-scrollbar-thumb {
  background-color: rgb(148, 88, 54);

  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
