<script setup>
import LogIn from './LogIn.vue'; // Ensure the correct path to your component
import { ref } from 'vue';

const currentView = ref('helloWorld');

const showLogIn = () => {
  currentView.value = 'logIn';
};

</script>


<template>
  <div>
    <div class="banner" v-if="currentView === 'helloWorld'">
      <h3 class="text">Senior Explorer</h3>
        <div class="content">
          <h1>OUT IS THE NEW IN</h1>
          
          <p>Explore your surroundings, find new hobbies, and socialize with senior peers with the option of help from volunteer caretakers! Click below to sign up!</p>
          <div class="button">
            <button type="button" @click="showLogIn" ><span></span>Senior</button>
            <button type="button" @click="showLogIn"><span></span>Volunteer</button>
          </div>
        </div>

    </div>
    <div v-else-if="currentView === 'logIn'">
      <LogIn />
    </div>
    <div v-else-if="currentView === 'createAccount'">
      <LogIn/>
    </div>
  </div>
</template>

<style> 

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}


.banner{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/background.jpg);
}

.content{
  width: 100%;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  color: #fff;
}

.content h1{
  font-size: 70px;
  margin-top: 80px;
  margin-left: 46.5%;

}

.text{
  font-size: 35px;
  padding-top: 35px;
  padding-left: 35px;
  left: 20%;
  color: #fff;

  font-weight: 400;
  line-height: 25px;
}

.content p{
  margin-top: 20px;
  margin-left: 55%;
  font-weight: 100;
  line-height: 25px;
  width: 500px;

}

button{
  width: 200px;
  padding: 15px 0;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid navy;
  background: transparent;
  color: #fff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.button{
  margin-left:60%;
  margin-top: 50px;
}

span{
  background: navy;
  height: 100%;
  width: 0;
  border-radius: 25px;
  position: absolute;
  transition: .5s;
  left: 0;
  bottom: 0;
  z-index: -1;

}

button:hover span{
  width: 100%;

}

button:hover{
  border:none;
}

</style> 