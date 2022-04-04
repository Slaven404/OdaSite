<template>
  <div class="izleti-container">
    <div class="section mt-50">Organizovanje izleta</div>
    <izlet :images="mokra" :content="izleti.mokra" />

    <izlet :right="true" :images="uvac" :content="izleti.uvac" />
    <izlet :images="tara" :content="izleti.tara" />
    <izlet :right="true" :images="vranesa" :content="izleti.vranesa" />
    <izlet :images="andricgrad" :content="izleti.andricgrad" />
    <izlet :right="true" :images="sirogojno" :content="izleti.sirogojno" />

    <div class="yt-container">
      <div class="yt-video">
        <client-only>
          <iframe
            :width="ytWidth"
            :height="ytHeight"
            src="https://www.youtube.com/embed/L45nc3utvek"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </client-only>
      </div>
      <div class="yt-video">
        <client-only>
          <iframe
            :width="ytWidth"
            :height="ytHeight"
            src="https://www.youtube.com/embed/BnodTPnaSPo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </client-only>
      </div>
    </div>
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
        '/SajtZlatibor/uvac/uvac1.jpg',
        '/SajtZlatibor/uvac/uvac2.jpg',
        '/SajtZlatibor/uvac/uvac3.jpg',
        '/SajtZlatibor/uvac/uvac4.jpg',
        '/SajtZlatibor/uvac/uvac5.jpg',
      ],
      taraText: {
        title: 'Tara, vidikovac Banjska stena',
        text: 'Tepih livada, Pančićeva omorika, edukacioni centar, Mitrovac',
      },
      tara: [
        '/SajtZlatibor/tara/tara1.jpg',
        '/SajtZlatibor/tara/tara2.jpg',
        '/SajtZlatibor/tara/tara3.jpg',
        '/SajtZlatibor/tara/tara4.jpg',
        '/SajtZlatibor/tara/tara5.jpg',
      ],
      vranesaText: {
        title: 'Zlatarsko jezero, vidikovac Vraneša',
        text: 'Beloglavi sup',
      },
      vranesa: [
        '/SajtZlatibor/vranesa/vranesa1.jpg',
        '/SajtZlatibor/vranesa/vranesa2.jpg',
        '/SajtZlatibor/vranesa/vranesa3.jpg',
        '/SajtZlatibor/vranesa/vranesa4.jpg',
      ],
      andricgradText: {
        title: 'Andrić grad Višegrad - Na Drini ćuprija - Manastir dobrun',
        text: '',
      },
      andricgrad: [
        '/SajtZlatibor/andricgrad/andricgrad1.jpg',
        '/SajtZlatibor/andricgrad/andricgrad2.jpg',
        '/SajtZlatibor/andricgrad/andricgrad3.jpg',
        '/SajtZlatibor/andricgrad/andricgrad4.jpg',
        '/SajtZlatibor/andricgrad/andricgrad5.jpg',
        '/SajtZlatibor/andricgrad/andricgrad6.jpg',
        '/SajtZlatibor/andricgrad/andricgrad7.jpg',
        '/SajtZlatibor/andricgrad/andricgrad8.jpg',
      ],
      sirogojnoText: {
        title:
          'Sirogojno: Stopića pećina, etno selo Sirogojno, vodopad u Gostilju',
        text: '',
      },
      sirogojno: [
        '/SajtZlatibor/sirogojno/sirogojno1.jpg',
        '/SajtZlatibor/sirogojno/sirogojno2.jpg',
        '/SajtZlatibor/sirogojno/sirogojno3.jpg',
        '/SajtZlatibor/sirogojno/sirogojno4.jpg',
        '/SajtZlatibor/sirogojno/sirogojno5.jpg',
      ],
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
    ytWidth() {
      if (process.browser) {
        if (window.innerWidth <= 480) {
          return '302'
        }
        if (window.innerWidth <= 660) {
          return '448'
        }

        return '560'
      }
      return '560'
    },
    ytHeight() {
      if (process.browser) {
        if (window.innerWidth <= 480) {
          return '170'
        }
        if (window.innerWidth <= 660) {
          return '252'
        }

        return '315'
      }
      return '315'
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
  background: rgba(255, 252, 238, 0.4);

  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  margin-bottom: 50px;
  padding-bottom: 50px;
}
.yt-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  width: calc(100vw - 100px);
  margin: 20px auto;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 660px) {
    width: 100vw;
  }
  div {
    display: flex;
    margin: auto;
    @media (max-width: 1100px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
