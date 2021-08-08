<template>
  <div class="images-container">
    <div class="main">
      <img src="@/assets/images/apartman1.jpg" alt="" />
    </div>
    <div class="left">
      <img src="@/assets/images/apartman1.jpg" alt="" />
    </div>
    <div class="right">
      <img src="@/assets/images/apartman1.jpg" alt="" />
    </div>
    <div class="bottom">
      <img src="@/assets/images/apartman1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.images-container {
  position: relative;
  display: grid;
  gap: 4px;
  grid-template-areas:
    'main main left right'
    'main main bottom bottom';

  img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    transition: 0.33s ease-in;
    &:hover {
      transform: scale3d(1.125, 1.125, 1.125);
      -webkit-transform: scale3d(1.125, 1.125, 1.125);
      -moz-transform: scale3d(1.125, 1.125, 1.125);
      -o-transform: scale3d(1.125, 1.125, 1.125);
      -ms-transform: scale3d(1.125, 1.125, 1.125);
    }
  }
}
.main {
  grid-area: main;
  img {
    max-height: 445px !important;
  }
}
.bottom {
  grid-area: bottom;
}
.left {
  grid-area: left;
}
.right {
  grid-area: right;
}
</style>
