<template>
  <div class="izleti-container">
    <div class="section">Organizovanje izleta</div>

    <izlet :images="sirogojno" />
    <izlet :right="true" :images="tara" />
    <izlet :images="vranesa" />
    <izlet :right="true" :images="andricgrad" />

    <div class="container-gallery">
      <div class="section gallery-section">Galerija</div>

      <gallery :images="images" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sirogojno: [
        './SajtZlatibor/sirogojno/sirogojno1.jpg',
        './SajtZlatibor/sirogojno/sirogojno2.jpg',
        './SajtZlatibor/sirogojno/sirogojno3.jpg',
        './SajtZlatibor/sirogojno/sirogojno4.jpg',
        './SajtZlatibor/sirogojno/sirogojno5.jpg',
      ],

      tara: [
        './SajtZlatibor/tara/tara1.jpg',
        './SajtZlatibor/tara/tara2.jpg',
        './SajtZlatibor/tara/tara3.jpg',
        './SajtZlatibor/tara/tara4.jpg',
        './SajtZlatibor/tara/tara5.jpg',
      ],
      vranesa: [
        './SajtZlatibor/vranesa/vranesa1.jpg',
        './SajtZlatibor/vranesa/vranesa2.jpg',
        './SajtZlatibor/vranesa/vranesa3.jpg',
        './SajtZlatibor/vranesa/vranesa4.jpg',
      ],

      andricgrad: [
        './SajtZlatibor/andricgrad/andricgrad1.jpg',
        './SajtZlatibor/andricgrad/andricgrad2.jpg',
        './SajtZlatibor/andricgrad/andricgrad3.jpg',
        './SajtZlatibor/andricgrad/andricgrad4.jpg',
        './SajtZlatibor/andricgrad/andricgrad5.jpg',
        './SajtZlatibor/andricgrad/andricgrad6.jpg',
        './SajtZlatibor/andricgrad/andricgrad7.jpg',
        './SajtZlatibor/andricgrad/andricgrad8.jpg',
      ],
      aparmani: [
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
  computed: {
    images() {
      let imgs = []
      imgs.push(
        ...this.aparmani,
        ...this.andricgrad,
        ...this.vranesa,
        ...this.tara,
        ...this.sirogojno
      )
      // imgs.push(...andricgrad);
      // imgs.push(...vranesa);
      // imgs.push(...tara);
      // imgs.push(...sirogojno);
      return imgs
    },
  },
}
</script>

<style lang="scss" scoped>
.izleti-container {
  margin: auto;
}
.gallery-section {
  margin-bottom: 30px;
}
.container-gallery {
  width: 100%;
  background: rgba(125, 125, 125, 0.2);
  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  margin-bottom: 50px;
  padding-bottom: 50px;
}
</style>
