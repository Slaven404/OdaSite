<template>
  <div>
    <div class="footer-image">
      <div class="d-inline-b">
        <div class="icon-container">
          <div class="icon">
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
            Broj telefona

            <div>
              <font-awesome-icon class="fa-icon icon-phone" icon="phone" />
            </div>
            <div class="podaci">064-126-2220</div>
          </div>
          <div class="icon">
            Email

            <div>
              <font-awesome-icon class="fa-icon icon-email" icon="envelope" />
            </div>
            <div class="podaci">
              <a href="mailto:slavencbf@gmail.com">slavencbf@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-logo">
      <div>
        <img
          class="w-80p"
          src="@/assets/images/strom-zlatibor-logo.png"
          alt="Bad connection or error loading image"
        />
        <a href="/"> Turisticka agencija "Strom" </a>
      </div>
      <div class="footer-menu">
        <NuxtLink to="/apartmani">Apartmani</NuxtLink>
        <NuxtLink to="/nekretnine">Nekretnine</NuxtLink>
        <NuxtLink to="/izleti">Izleti</NuxtLink>
        <NuxtLink to="/kontakt">Kontakt</NuxtLink>
      </div>
      <div class="brands-icons">
        <a
          class="facebook-icon"
          target="_black"
          href="https://www.facebook.com/slavencbf"
          aria-label="Facebook"
        >
          <font-awesome-icon
            class="fab-icon icon-phone"
            :icon="['fab', 'facebook']"
          />
        </a>

        <a
          class="instagram-icon"
          target="_black"
          href="https://www.instagram.com/slaventucic/"
          aria-label="Instagram"
        >
          <font-awesome-icon
            class="fab-icon icon-email"
            :icon="['fab', 'instagram']"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.w-80p {
  width: 80px;
}
.d-inline-b {
  display: inline-block;
}
.brands-icons {
  display: flex;
  justify-content: flex-end;
  a {
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
}
.fab-icon {
  font-size: 48px;
}
.facebook-icon {
  border-radius: 50%;
  padding-top: 1px;
  padding-left: 1px;
  padding-right: 1px;
  &:hover {
    color: #4267b2;
    background: radial-gradient(at center, white 23px, transparent 10px);
  }
}
.instagram-icon {
  border-radius: 12px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  &:hover {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    /* Also define standard property for compatibility */
    -webkit-text-fill-color: transparent;
  }
}
.podaci {
  height: 64px;
  a {
    color: white;
    text-decoration: none;
  }
}
.fa-icon {
  font-size: 64px;

  @media (max-width: 920px) {
    font-size: 54px;
  }
  @media (max-width: 820px) {
    font-size: 48px;
  }

  @media (max-width: 660px) {
    font-size: 32px;
  }
}

.footer-image {
  background-image: url('@/assets/images/freedownload/wood5.jpg');
  display: flex;
  justify-content: center;
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
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    .icon {
      min-width: 250px;
    }
  }
}
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 22px;
  max-width: 250px;
  text-align: center;
  padding: 20px;
  background: radial-gradient(black, #00000080, #00000080, transparent);
  @media (max-width: 920px) {
    font-size: 20px;
  }
  @media (max-width: 820px) {
    font-size: 18px;
  }

  @media (max-width: 660px) {
    font-size: 16px;
  }
  img {
    width: 100px;
  }
}
.footer-logo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: radial-gradient(transparent, black, black),
    url('@/assets/images/freedownload/wood2.jpg');

  @media (max-width: 820px) {
    flex-direction: column;
  }
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
.footer-menu {
  @media (max-width: 450px) {
    flex-wrap: wrap;
    a {
      width: 50%;
      margin-left: 0 !important;
      margin-right: 0 !important;
      text-align: center;
    }
  }
}
</style>
