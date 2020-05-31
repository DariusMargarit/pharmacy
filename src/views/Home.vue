<template>
  <div class="home">
    <div class="row justify-center q-gutter-md">
      <Card v-for="(element, index) in $store.state.products" :key="index"
        :title="element.title"
        :short-description="element.shortDescription"
        :long-description="element.longDescription"
        :image="element.image"
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

<style>
  .home {
    margin-top: 20px;
  }
</style>
