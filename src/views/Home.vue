<template>
  <div>
    <q-parallax :height="700">
      <template v-slot:media>
        <img src="https://www.baltictimes.com/media/photos/146868_15124517295df8b72d1bd7c_big.jpg" style="filter: brightness(70%);">
      </template>

      <template v-slot:content="scope">
        <div
            class="absolute column items-center"
            :style="{
            opacity: 0.80 + (1 - scope.percentScrolled) * 0.70,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <img src="../assets/logoPillSlim.png" style="width: 150px; height: 150px; image-rendering: pixelated">
          <div class="text-h3 text-white text-center">Farmacia online Moisil</div>
        </div>
      </template>
    </q-parallax>
    <div class="row justify-center q-gutter-md">
      <Card v-for="(element, index) in $store.state.products" :key="index"
        :title="element.title"
        :short-description="element.shortDescription"
        :long-description="element.longDescription"
        :image="element.image"
        :price="element.price"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: 'Home',
  components: {
      Card
  }
}
</script>
