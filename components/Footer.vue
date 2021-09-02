<template>
  <div>
    <div class="footer-image">
      <!-- <img class="image" src="@/assets/images/footer.jpg" alt="" /> -->
      <div class="icon-container">
        <div class="icon">
          <!-- <img src="@/assets/images/marker.png" alt="" /> -->
          Adresa agencije
          <div>
            <font-awesome-icon
              class="fa-icon icon-address"
              icon="map-marked-alt"
            />
          </div>
          <div class="podaci">
            Turistička agencija Strom Zlatibor Rujanska bb
          </div>
        </div>
        <div class="icon">
          <!-- <img src="@/assets/images/marker.png" alt="" /> -->
          Broj telefona

          <div>
            <font-awesome-icon class="fa-icon icon-phone" icon="phone" />
          </div>
          <div class="podaci">064-126-2220</div>
        </div>
        <div class="icon">
          <!-- <img src="@/assets/images/marker.png" alt="" /> -->
          Email

          <div>
            <font-awesome-icon class="fa-icon icon-email" icon="envelope" />
          </div>
          <div class="podaci">slavencbf@gmail.com</div>
        </div>
      </div>
    </div>
    <div class="footer-logo">
      <div>
        <img
          style="width: 80px"
          src="@/assets/images/strom-zlatibor-logo.png"
          alt=""
        />
        <a href="/"> Turisticka agencija "Strom" </a>
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
.podaci {
  height: 64px;
}
.fa-icon {
  font-size: 64px;
}
.icon-address {
  // color: blue;
}
.icon-phone {
  // color: orange;
}
.icon-email {
  // color: cyan;
}
.footer-image {
  background-image: url('@/assets/images/freedownload/wood5.jpg');

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
  // margin: 50px;
  color: white;
  font-weight: 500;
  font-size: 22px;
  max-width: 250px;
  text-align: center;
  padding: 20px;
  background: radial-gradient(black, #00000080, #00000080, transparent);
  img {
    width: 100px;
  }
}
.footer-logo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: radial-gradient(transparent, transparent, black, black),
    url(/_nuxt/assets/images/freedownload/wood2.jpg);
  div {
    display: flex;
    align-items: center;
    img {
      margin: 20px 50px;
    }
    a {
      margin: 20px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
