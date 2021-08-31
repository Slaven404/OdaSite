<template>
  <div class="index-class">
    <intro class="intro" />
    <apartmani-pocetna class="apartmani-pocetna" />
    <div class="section">Lokacija apartmana</div>

    <apartmani-lokacija />
    <div class="section">Organizovanje izleta</div>
    <izlet :images="tara" />
    <izlet :images="vranesa" :right="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
}
</script>

<style lang="scss" scoped></style>
