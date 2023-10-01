<template>
  <div class="container">
    <div class="container-apartmani">
      <div class="section">Izdavanje apartmana</div>
      <div class="title title-logo">
        <img
          src="@/assets/images/carli-logo.png"
          alt="Bad connection or error loading image"
        />
        <div class="pb-5">Apartmani "Čarli"</div>
      </div>
      <div class="description">
        Apartman se nalazi u delu Zlatibora - naselje Potoci
      </div>
      <gallery :images="slike" class="mb-50" />
    </div>

    <div class="container-location">
      <div class="section">Lokacija apartmana</div>

      <apartmani-lokacija :text="''" />
    </div>
  </div>
</template>

<script>
import apartmani from 'static/SajtZlatibor/apartmani/filepaths.json'
export default {
  computed: {
    slike: () => apartmani,
  },
}
</script>

<style lang="scss" scoped>
.mb-50 {
  margin-bottom: 50px;
}
.pb-5 {
  padding-bottom: 5px;
}
.title-logo {
  display: flex;
  align-items: flex-end;
  img {
    height: 80px;
  }
}
.container-location,
.container-apartmani {
  background: rgba(255, 252, 238, 0.4);

  max-width: 1400px;
  margin-top: 30px;
  border-radius: 20px;
  margin-bottom: 50px;
}
.container {
  max-width: 1400px;
  margin: auto;
}
</style>
