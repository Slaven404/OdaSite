<template>
  <div class="slaven-container">
    <Header />
    <Nuxt class="main-container" />
    <Footer />
  </div>
</template>

<script>
const apiKey = process.env.GOOGLE_MAPS_API_KEY

export default {
  head() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.slaven-container {
  background-image: url('@/assets/images/Freedownload/wood11.jpg');
}
.main-container {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  // max-width: 1200px;
  // background: whitesmoke;
  background: transparent;
}
.section {
  font-size: 18px;
  letter-spacing: 2px;
  color: orange;
  font-weight: 500;
  padding: 10px 50px;
  background: rgba(125, 125, 125, 0.4);
  max-width: 1300px;
  width: calc(100% - 100px);
  margin: auto;
  margin-top: 30px;
}
.description {
  padding: 20px 50px;
  text-align: justify;
  @media (max-width: 920px) {
    padding: 20px;
  }
}
.title {
  color: black;
  font-size: 24px;
  font-weight: 600;
  padding: 20px 50px;
  @media (max-width: 660px) {
    padding: 20px;
  }
}
</style>
