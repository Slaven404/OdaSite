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
import mokraGora from '../static/SajtZlatibor/mokraGora/slike.json'
import vranesa from '../static/SajtZlatibor/vranesa/slike.json'
export default {
  data() {
    return {
      izleti: izleti,
    }
  },
  computed: {
    mokra: () => mokraGora,
    vranesa: () => vranesa,
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
