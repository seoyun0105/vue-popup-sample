<template>
  <div class="home">
    <h1 @click="openPopUp">home</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
  },
  methods: {
    openPopUp: function () {
      window.open("/chatbot", "ATCIS봇", "_blank")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
