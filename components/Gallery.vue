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
  max-width: 1000px;
  margin: auto;
  position: relative;
  display: grid;
  gap: 4px;
  grid-template-areas:
    'main main left right'
    'main main bottom bottom';
  @media (max-width: 920px) {
    grid-template-areas:
      'main  left '
      'right   bottom';
  }

  img {
    width: 100%;
    max-height: 180px;
    height: 100%;
    object-fit: cover;
    transition: 0.33s ease-in;
    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      -moz-transform: scale3d(1.05, 1.05, 1.05);
      -o-transform: scale3d(1.05, 1.05, 1.05);
      -ms-transform: scale3d(1.05, 1.05, 1.05);
    }
  }
}
.main,
.bottom,
.left,
.right {
  @media (max-width: 920px) {
  }
}
.main {
  grid-area: main;
  padding-bottom: 4px;
  @media (max-width: 920px) {
    padding-bottom: 0;
  }
  img {
    max-height: 445px !important;
    height: 100%;
    @media (max-width: 920px) {
      max-height: 180px !important;
    }
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
