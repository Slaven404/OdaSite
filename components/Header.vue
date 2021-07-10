<template>
  <div class="header">
    <div class="logo"></div>
    <div class="title">Title</div>
    <div class="navigation">
      <a href="#">Home</a>| <a href="#">About</a>|
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  background: forestgreen;
  color: white;
  padding: 0 50px;
  div {
    display: flex;
    padding: 10px;
  }
}
.logo {
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.navigation {
  a {
    cursor: pointer;
    padding: 0 10px;
    text-decoration: none;
  }
  a:visited {
    color: snow;
  }
}
</style>
