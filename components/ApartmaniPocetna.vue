<template>
  <div class="container">
    <div class="section">Izdavanje apartmana</div>
    <div class="title title-logo">
      <img
        src="@/assets/images/carli-logo.png"
        alt="Bad connection or error loading image"
      />
      <div class="pb-5">Apartmani "Čarli"</div>
    </div>
    <div class="description">
      Apartman se nalazi u delu Zlatibora - naselje Potoci
    </div>
    <div v-drag-me class="images">
      <img
        class="slika"
        v-for="(i, key) in 14"
        :key="key"
        :src="`/SajtZlatibor/Apartmani/apartman${i - 1}.jpg`"
        alt="Bad connection or error loading image"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pb-5 {
  padding-bottom: 5px;
}
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
  background: rgba(255, 252, 238, 0.4);
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
