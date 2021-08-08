<template>
  <div class="container">
    <div class="section">Izdavanje apartmana</div>
    <div class="title">Apartmani "Lorem Ipsum"</div>
    <div class="description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </div>
    <div v-drag-me class="images">
      <img style="width: 320px" src="@/assets/images/apartman1.jpg" alt="" />
      <img style="width: 320px" src="@/assets/images/apartman1.jpg" alt="" />
      <img style="width: 320px" src="@/assets/images/apartman1.jpg" alt="" />
      <img style="width: 320px" src="@/assets/images/apartman1.jpg" alt="" />
      <img style="width: 320px" src="@/assets/images/apartman1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.images {
  max-width: 970px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: grab;
  overflow: hidden;
  overflow-x: scroll;
  img {
    margin: 3px;
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
  background-color: rgb(192, 18, 18);

  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
