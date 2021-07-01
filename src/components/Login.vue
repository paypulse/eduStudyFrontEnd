<template>
  <div class="page-container">
<!--    <div class="login-form-container shadow">-->
<!--      <div class="login-form-right-side">-->
<!--        <div class="top-logo-wrap">-->

<!--        </div>-->
<!--        <h1>Login Page</h1>-->
<!--        <p>구조를 잡기 위한 로그인 페이지 예시입니다.</p>-->
<!--      </div>-->
<!--      <div class="login-form-left-side">-->
<!--        <div class="login-top-wrap">-->
<!--          <span>Don't have an account?</span>-->
<!--          <button class="create-account-btn shadow-light">Create Profile</button>-->
<!--        </div>-->
<!--        <div class="login-input-container">-->
<!--          <div class="login-input-wrap input-id">-->
<!--            <i class="far fa-envelope"></i>-->
<!--            <input placeholder="Email" type="text">-->
<!--          </div>-->
<!--          <div class="login-input-wrap input-password">-->
<!--            <i class="fas fa-key"></i>-->
<!--            <input placeholder="Password"  type="password">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="login-btn-wrap">-->
<!--          <button class="login-btn" v-on:click="login">Login</button>-->
<!--          <a href="#" >Forgot password?</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import  axios from 'axios';

/* eslint-disable */
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beaforeCreate(){
    //file download

    //param  : project 설치 폴더 명, 압축 해제 파일



    //압축을 풀어 project내에 위치 시킨다.

    //project 내에 위치 시킨 애중에 하나를 link로 보여준다.

  },
  created () {
    console.log("test");
    axios.post('/first/edulab/menuItem/cnt',
        {'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}).then(res => {
      console.log(res);
    }).catch(err =>{
      console.log(err);
    });
  },
  methods: {
    login: function(){
        this.$router.push('/mainPage');

    }
  }

}

</script>
