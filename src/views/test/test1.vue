<template>
  <div class="test">
    <p>Test 1</p>
    <router-link to="/test/test2">{{ msg }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: 'Go to The Test2 page',
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
