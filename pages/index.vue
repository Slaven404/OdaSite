<template>
  <div class="index-class">
    <intro class="intro" />
    <apartmani-pocetna class="apartmani-pocetna" />

    <div class="container-location">
      <div class="section">Lokacija apartmana</div>

      <apartmani-lokacija />
    </div>
    <div class="section">Organizovanje izleta</div>
    <izlet :images="tara" :content="taraText" />
    <izlet :images="vranesa" :right="true" :content="vranesaText" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      taraText: {
        title: 'Tara, vidikovac Banjska stena',
        text: '',
      },
      tara: [
        './SajtZlatibor/tara/tara1.jpg',
        './SajtZlatibor/tara/tara2.jpg',
        './SajtZlatibor/tara/tara3.jpg',
        './SajtZlatibor/tara/tara4.jpg',
        './SajtZlatibor/tara/tara5.jpg',
      ],
      vranesaText: {
        title: 'Zlatarsko jezero, vidikovac Vraneša',
        text: '',
      },
      vranesa: [
        './SajtZlatibor/vranesa/vranesa1.jpg',
        './SajtZlatibor/vranesa/vranesa2.jpg',
        './SajtZlatibor/vranesa/vranesa3.jpg',
        './SajtZlatibor/vranesa/vranesa4.jpg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container-location {
  background: rgba(125, 125, 125, 0.2);
  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
}
</style>
