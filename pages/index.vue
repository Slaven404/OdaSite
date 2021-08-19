<template>
  <div class="index-class">
    <intro class="intro" />
    <apartmani-pocetna class="apartmani-pocetna" />
    <div class="section">Lokacija apartmana</div>

    <apartmani-lokacija />
    <div class="section">Organizovanje izleta</div>
    <izlet />
    <izlet :right="true" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
