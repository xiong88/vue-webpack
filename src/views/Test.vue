<template>
  <div class="hello">
    <p>Test</p>
    <router-link to="/test/test1">{{ msg }}</router-link>
  </div>

</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Go to The Test1 page'
    }
  }
}
</script>

<style scoped>

</style>
