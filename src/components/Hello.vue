<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/test">Go to Test</router-link>
    <p @click="test" style="cursor: pointer;">Test Axios
      <span>11</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test() {
      this.$http.post('/users/common/personal/securityCode', {
        mobile: '13599999999'
      }).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    background: #cccccc;
    p{
      color: #f00;
    }
  }
</style>
