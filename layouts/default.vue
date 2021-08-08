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

<style>
body {
  margin: 0;
}
.slaven-container {
  background-image: url('@/assets/images/nuxt-background.jpg');
}
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 1100px;
  padding: 0 50px;
  background: whitesmoke;
}
.section {
  font-size: 18px;
  letter-spacing: 2px;
  color: orange;
  font-weight: 500;
  padding: 10px 50px;
}
.description {
  padding: 20px 50px;
  text-align: justify;
}
.title {
  color: black;
  font-size: 24px;
  font-weight: 600;
  padding: 20px 50px;
}
</style>
