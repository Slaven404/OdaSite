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
  background: transparent;
}

.section {
  font-size: 22px;
  letter-spacing: 2px;
  color: #2abd06;
  font-weight: 600;
  padding: 10px 50px;
  background: rgba(150, 111, 51, 0.9);
  max-width: 1300px;
  width: calc(100% - 100px);
  margin: auto;
  margin-top: 30px;
  text-shadow: 2px 1px #101010;
}
.description {
  font-size: 18px;
  padding: 20px 50px;
  @media (max-width: 1100px) {
  }
  @media (max-width: 920px) {
    padding: 20px;
    font-size: 17px;
  }
}
.title {
  color: black;
  font-size: 28px;
  font-weight: 600;
  padding: 20px 50px;
  @media (max-width: 660px) {
    padding: 20px;
  }
}
.fade-in-image {
  animation: fadeIn 0.5s;
  -webkit-animation: fadeIn 0.5s;
  -moz-animation: fadeIn 0.5s;
  -o-animation: fadeIn 0.5s;
  -ms-animation: fadeIn 0.5s;
}

.zoom-image {
  animation: zoom 0.5s;
  -webkit-animation: zoom 0.5s;
  -moz-animation: zoom 0.5s;
  -o-animation: zoom 0.5s;
  -ms-animation: zoom 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes zoom {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@-moz-keyframes zoom {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes zoom {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@-o-keyframes zoom {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@-ms-keyframes zoom {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
