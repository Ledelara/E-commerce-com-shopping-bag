<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
}
</script>