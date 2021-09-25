<template>
  <div class="container">
    <div class="veliki-naslov">
      Prodaja apartmana, placeva, kuća, Zlatibor i okolina
    </div>
    <div class="container-apartmani">
      <div class="section">Prodaja apartmana</div>
      <div class="apartman-description">
        <div class="description font-19">
          Lokacija apartmana je u delu <b> Zlatibora </b>- naselje
          <b> Potoci </b>. <br />
          Apartman se nalazi na <b>prvom spratu</b>. Kvadratura iznosi
          <b>40m2</b>. Cena je <b>55000€</b>.
        </div>
      </div>

      <gallery :images="images" style="margin-bottom: 50px" />
      <div class="ž font-19">
        Ukoliko kupujete ili prodajete apartman, kuću ili plac na Zlatiboru,
        Tari, Mokroj gori, Užicu i okolini možete nam se obratite na mail
        <b> slavencbf@gmail.com </b> ili na telefon
        <b> 064-126-2220 </b>
      </div>
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
.veliki-naslov {
  background: rgba(255, 252, 238, 0.4);
  border-radius: 20px;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
  padding: 5px;
  color: rgb(111, 70, 6);
  text-shadow: 1px 1px black;
  @media (max-width: 1000px) {
    font-size: 32px;
  }
  @media (max-width: 840px) {
    font-size: 28px;
  }
  @media (max-width: 740px) {
    font-size: 26px;
  }
}
.ž {
  padding: 10px 50px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: rgba(0, 0, 0, 0.1);
}
.font-19 {
  font-size: 19px;
  @media (max-width: 740px) {
    font-size: 18px;
  }
}
</style>
