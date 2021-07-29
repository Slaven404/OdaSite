<template>
  <div>
    <div class="footer-image">
      <!-- <img class="image" src="@/assets/images/footer.jpg" alt="" /> -->
      <div class="icon-container">
        <div class="icon">
          <img src="@/assets/images/marker.png" alt="" />
          Adresa agencije
        </div>
        <div class="icon">
          <img src="@/assets/images/marker.png" alt="" />
          Broj telefona
        </div>
        <div class="icon">
          <img src="@/assets/images/marker.png" alt="" />
          Email
        </div>
      </div>
    </div>
    <div class="footer-logo">
      <div>
        <img style="width: 50px" src="@/assets/images/footer-logo.png" alt="" />
        Turisticka agencija "Strom"
      </div>
      <div>
        <NuxtLink to="/apartmani">Apartmani</NuxtLink>
        <NuxtLink to="/izleti">Izleti</NuxtLink>
        <NuxtLink to="/kontakt">Kontakt</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-image {
  background-image: url('@/assets/images/footer.jpg');
  background-size: cover;
  background-position-y: bottom;
  image {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
}
.image {
}
.icon-container {
  display: flex;
  justify-content: center;
}
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  color: white;
  font-weight: 500;
  font-size: 22px;
  img {
    width: 100px;
  }
}
.footer-logo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: whitesmoke;
  div {
    display: flex;
    align-items: center;
    img {
      margin: 20px 50px;
    }
    a {
      margin: 20px;
      color: black;
      text-decoration: none;
    }
  }
}
</style>
