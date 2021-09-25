<template>
  <div class="header">
    <div class="header-title">
      <div class="logo" @click="$router.push('/')">
        <img
          class="logo-img"
          src="@/assets/images/strom-zlatibor-logo.png"
          alt=""
        />
      </div>
      Turistička agencija "Strom"
    </div>
    <div class="navigation">
      <NuxtLink to="/">Početna</NuxtLink>

      <NuxtLink to="/apartmani">Apartmani</NuxtLink>
      <NuxtLink to="/nekretnine">Nekretnine</NuxtLink>
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
  position: fixed;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  font-size: 22px;
  // padding: 0 40px;
  padding-right: 0px;
  min-height: 100px;
  background-image: url('@/assets/images/freedownload/wood2.jpg');
  div {
    display: flex;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .navigation {
      margin-left: auto;
      padding: 0;
    }
    .title {
      padding: 0;
    }
  }
}
.logo {
  background-color: white;
  border-radius: 20px;
  padding: 2px 22px;
  margin: 10px;
  cursor: pointer;
  min-width: 80px;
  min-height: 48px;
  @media (max-width: 820px) {
    min-width: 60px;
  }
}
.logo-img {
  width: 80px;
  @media (max-width: 820px) {
    width: 60px;
  }
}
.header-title {
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  padding: 10px;
  @media (max-width: 920px) {
    font-size: 22px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
}
.navigation {
  //min-width: 300px;
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
      transform: scale(1.1);
    }
    @media (max-width: 1100px) {
      margin: 10px;
      font-size: 20px;
    }
    @media (max-width: 920px) {
      margin: 8px;
      font-size: 18px;
    }
    @media (max-width: 820px) {
      margin: 6px;
    }
  }
}
</style>
