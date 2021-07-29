<template>
  <div class="header">
    <div class="title">
      <div class="logo">
        <img style="width: 50px" src="@/assets/images/footer-logo.png" alt="" />
      </div>
      Turistička agencija "Strom"
    </div>
    <div class="navigation">
      <NuxtLink to="/">Početna</NuxtLink>

      <NuxtLink to="/apartmani">Apartmani</NuxtLink>
      <NuxtLink to="/izleti">Izleti</NuxtLink>
      <NuxtLink to="/kontakt">Kontakt</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  background-color: green;
  color: white;
  font-size: 22px;
  padding: 0 40px;
  padding-right: 0px;
  min-height: 100px;
  div {
    display: flex;
  }
}
.logo {
  background-color: white;
  border-radius: 20px;
  padding: 2px 22px;
  margin: 10px;
}
.title {
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  padding: 10px;
}
.navigation {
  min-width: 300px;
  align-items: center;
  padding: 10px;

  a {
    color: white;
    margin: 20px;
    border-bottom: 2px solid transparent;
    padding: 5px;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid white;
    }
  }
}
</style>
