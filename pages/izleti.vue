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
import uvac from '../static/SajtZlatibor/uvac/slike.json'
import tara from '../static/SajtZlatibor/tara/slike.json'
import vranesa from '../static/SajtZlatibor/vranesa/slike.json'
import andricgrad from '../static/SajtZlatibor/andricgrad/slike.json'
import sirogojno from '../static/SajtZlatibor/sirogojno/slike.json'
import mokra from '../static/SajtZlatibor/mokraGora/slike.json'

export default {
  computed: {
    izleti: () => izleti,
    mokra: () => mokra,
    uvac: () => uvac,
    andricgrad: () => andricgrad,
    vranesa: () => vranesa,
    tara: () => tara,
    sirogojno: () => sirogojno,
    images() {
      const images = [
        ...this.mokra,
        ...this.uvac,
        ...this.andricgrad,
        ...this.vranesa,
        ...this.tara,
        ...this.sirogojno,
      ]
      return images
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
