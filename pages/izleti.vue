<template>
  <div class="izleti-container">
    <div class="section">Organizovanje izleta</div>

    <izlet :images="sirogojno" />
    <izlet :right="true" :images="tara" />
    <izlet :images="vranesa" />
    <izlet :right="true" :images="andricgrad" />

    <gallery />
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
    }
  },
}
</script>

<style lang="scss" scoped>
.izleti-container {
  margin: auto;
}
</style>
