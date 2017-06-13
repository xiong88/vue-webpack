<template>
  <div class="test">
    <p>Test 2</p>
    <router-link to="/">{{ msg }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'test2',
    data () {
      return {
        msg: 'Go to The Home page',
      }
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
