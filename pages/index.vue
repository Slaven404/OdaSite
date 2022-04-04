<template>
  <div class="index-class">
    <intro class="intro" />
    <apartmani-pocetna class="apartmani-pocetna" />

    <div class="container-location">
      <div class="section">Lokacija apartmana</div>

      <apartmani-lokacija :text="''" />
    </div>
    <div class="section">Organizovanje izleta</div>
    <izlet :images="mokra" :content="izleti.mokra" />
    <izlet :images="vranesa" :right="true" :content="izleti.vranesa" />
  </div>
</template>

<script>
import izleti from '../static/texts/izleti.json'
export default {
  data() {
    return {
      izleti: izleti,
      taraText: {
        title: 'Tara, vidikovac Banjska stena',
        text: '',
      },
      mokra: [
        '/SajtZlatibor/mokraGora/mokra1.jpg',
        '/SajtZlatibor/mokraGora/mokra2.jpg',
        '/SajtZlatibor/mokraGora/mokra3.jpg',
        '/SajtZlatibor/mokraGora/mokra4.jpg',
        '/SajtZlatibor/mokraGora/mokra5.jpg',
        '/SajtZlatibor/mokraGora/mokra6.jpg',
        '/SajtZlatibor/mokraGora/mokra7.jpg',
        '/SajtZlatibor/mokraGora/mokra8.jpg',
        '/SajtZlatibor/mokraGora/mokra9.jpg',
      ],
      vranesaText: {
        title: 'Zlatarsko jezero, vidikovac Vraneša',
        text: '',
      },
      vranesa: [
        '/SajtZlatibor/vranesa/vranesa1.jpg',
        '/SajtZlatibor/vranesa/vranesa2.jpg',
        '/SajtZlatibor/vranesa/vranesa3.jpg',
        '/SajtZlatibor/vranesa/vranesa4.jpg',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container-location {
  background: rgba(255, 252, 238, 0.4);
  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  width: 100%;
}
.index-class {
  margin: auto;
}
</style>
