<template>
  <div class="izleti-container">
    <div class="section mt-50">Organizovanje izleta</div>
    <izlet :images="mokra" :content="izleti.mokra" />

    <izlet :right="true" :images="uvac" :content="izleti.uvac" />
    <izlet :images="tara" :content="izleti.tara" />
    <izlet :right="true" :images="vranesa" :content="izleti.vranesa" />
    <izlet :images="andricgrad" :content="izleti.andricgrad" />
    <izlet :right="true" :images="sirogojno" :content="izleti.sirogojno" />

    <div class="container-gallery">
      <div class="section gallery-section">Galerija</div>

      <gallery :images="images" />
    </div>
  </div>
</template>

<script>
import izleti from '../static/texts/izleti.json'
export default {
  data() {
    return {
      izleti: izleti,
      uvackoText: {
        title: 'Uvačko jezero',
        text: 'Stanište beloglavnog supa, prekrasni meandri, ledena pećina, vidikovci',
      },
      uvac: [
        './SajtZlatibor/uvac/uvac1.jpg',
        './SajtZlatibor/uvac/uvac2.jpg',
        './SajtZlatibor/uvac/uvac3.jpg',
        './SajtZlatibor/uvac/uvac4.jpg',
        './SajtZlatibor/uvac/uvac5.jpg',
      ],
      taraText: {
        title: 'Tara, vidikovac Banjska stena',
        text: 'Tepih livada, Pančićeva omorika, edukacioni centar, Mitrovac',
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
        text: 'Beloglavi sup',
      },
      vranesa: [
        './SajtZlatibor/vranesa/vranesa1.jpg',
        './SajtZlatibor/vranesa/vranesa2.jpg',
        './SajtZlatibor/vranesa/vranesa3.jpg',
        './SajtZlatibor/vranesa/vranesa4.jpg',
      ],
      andricgradText: {
        title: 'Andrić grad Višegrad - Na Drini ćuprija - Manastir dobrun',
        text: '',
      },
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
      sirogojnoText: {
        title:
          'Sirogojno: Stopića pećina, etno selo Sirogojno, vodopad u Gostilju',
        text: '',
      },
      sirogojno: [
        './SajtZlatibor/sirogojno/sirogojno1.jpg',
        './SajtZlatibor/sirogojno/sirogojno2.jpg',
        './SajtZlatibor/sirogojno/sirogojno3.jpg',
        './SajtZlatibor/sirogojno/sirogojno4.jpg',
        './SajtZlatibor/sirogojno/sirogojno5.jpg',
      ],
      mokra: [
        './SajtZlatibor/mokraGora/mokra1.jpg',
        './SajtZlatibor/mokraGora/mokra2.jpg',
        './SajtZlatibor/mokraGora/mokra3.jpg',
        './SajtZlatibor/mokraGora/mokra4.jpg',
        './SajtZlatibor/mokraGora/mokra5.jpg',
        './SajtZlatibor/mokraGora/mokra6.jpg',
        './SajtZlatibor/mokraGora/mokra7.jpg',
        './SajtZlatibor/mokraGora/mokra8.jpg',
        './SajtZlatibor/mokraGora/mokra9.jpg',
      ],
    }
  },
  computed: {
    images() {
      let imgs = []
      imgs.push(
        ...this.mokra,
        ...this.uvac,
        ...this.andricgrad,
        ...this.vranesa,
        ...this.tara,
        ...this.sirogojno
      )

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
  // background: rgba(125, 125, 125, 0.2);
  background: rgba(255, 252, 238, 0.4);

  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  margin-bottom: 50px;
  padding-bottom: 50px;
}
.mt-50 {
  margin-top: 50px;
}
</style>
