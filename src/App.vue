<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import axios from "axios";

export default {
  name: 'App',
  created() {
    console.log("test");
    axios.post('http://192.168.50.213:8082/edulab/menuItem/cnt',
        {'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}).then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  }

}
</script>


