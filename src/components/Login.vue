<template>

  <div class="login">
    <h3>Sign in to GitHub</h3>
    <div class="box">
      <form @submit.prevent="signin">
      <p>Username or email address</p>
      
      <input type="text" placeholder="Enter username or email" v-model="user" name="user">
      <div class="password">
      <p>Password</p>
      <p style="color:blue;">Forgot password?</p>
      </div>
      <input type="text" placeholder="Password" v-model="pass" name="pass">
      <button type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "Login",
  data() {
    return {
      user: "",
      pass: ""
    };
  },
  methods: {
    signin() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 100px;
  text-align: center;
}
.box {
  background-color: #ffffff;
  width: 300px;
  height: 250px;
  padding-left: 15px;
  border-radius: 10px;

  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.login {
  justify-content: center;
}
input {
  width: 270px;
  border-radius: 4px;
  height: 30px;
  padding-left: 5px;
}
.password {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}
button {
  background-image: linear-gradient(forestgreen, lightgreen);
  width: 275px;
  border-radius: 4px;
  height: 30px;
  margin-top: 20px;
}
</style>
