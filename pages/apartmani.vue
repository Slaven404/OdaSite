<template>
  <div class="container">
    <div class="container-apartmani">
      <div class="section">Izdavanje apartmana</div>
      <div class="title title-logo">
        <img src="@/assets/images/carli-logo.png" alt="" />
        <div style="padding-bottom: 5px">Apartmani "Čarli"</div>
      </div>
      <div class="description">
        Apartman se nalazi u delu Zlatibora - naselje Potoci
      </div>
      <gallery :images="images" style="margin-bottom: 50px" />
    </div>

    <div class="container-location">
      <div class="section">Lokacija apartmana</div>

      <apartmani-lokacija :text="''" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        './SajtZlatibor/Apartmani/apartman1.jpg',
        './SajtZlatibor/Apartmani/apartman2.jpg',
        './SajtZlatibor/Apartmani/apartman3.jpg',
        './SajtZlatibor/Apartmani/apartman4.jpg',
        './SajtZlatibor/Apartmani/apartman5.jpg',
        './SajtZlatibor/Apartmani/apartman6.jpg',
        './SajtZlatibor/Apartmani/apartman7.jpg',
        './SajtZlatibor/Apartmani/apartman8.jpg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
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

  // background: rgba(125, 125, 125, 0.2);
  max-width: 1400px;
  margin-top: 50px;
  border-radius: 20px;
  margin-bottom: 50px;
}
.container {
  max-width: 1400px;
  margin: auto;
}
</style>
