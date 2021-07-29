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
    <div class="images">
      <img style="width: 350px" src="@/assets/images/apartman1.jpg" alt="" />
      <img style="width: 350px" src="@/assets/images/apartman1.jpg" alt="" />
      <img style="width: 350px" src="@/assets/images/apartman1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  max-width: 1080px;
}
.section {
  margin: 20px 5px;
  font-size: 18px;
  letter-spacing: 2px;
  color: orange;
}
.title {
  margin: 20px 5px;
  color: black;
  font-size: 24px;
  font-weight: 600;
}
.description {
  margin: 20px 5px;

  max-width: 1083px;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 3px;
  }
}
</style>
