<template>
  <div class="container">
    <div class="container-apartmani">
      <div class="section">Izdavanje apartaman</div>
      <div class="title">Apartmani "Strom"</div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <gallery :images="images" style="margin-bottom: 50px" />
    </div>

    <div class="container-location">
      <div class="section">Lokacija apartmana</div>

      <apartmani-lokacija />
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
.container-location,
.container-apartmani {
  background: rgba(125, 125, 125, 0.2);
  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  margin-bottom: 50px;
}
.container {
  max-width: 1400px;
  margin: auto;
}
</style>
