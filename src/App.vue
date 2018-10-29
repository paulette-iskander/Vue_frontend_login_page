<template>
  <div id="app">


        <router-view />

  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
#app {
  display: flex;
  justify-content: center;
}
body {
  background-color: #f5f5f5;
  font-family: "Roboto";
  width: 100vw;
  height: 100%;
}
</style>
