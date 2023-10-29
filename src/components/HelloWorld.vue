
<template>
  <div class="slide">
    <h1 class="text-box font">
      Senior Explorer
    </h1>

    <h1 class="text-box-1 font-1">
      OUT IS THE NEW IN
    </h1>
    <h2 class="text-box-2 font-2">
      Exploree your surroundings, find new hobbies, and socialize with senior peers with the option of help from volunteer caretakers
    </h2>

    <div class="wrapper">
      <button class="button">
      log in / register
    </button>
    </div>
  </div>
</template>

<style>
template{
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
}

.slide{
  height: 100vh; /* Full viewport height */
  width: 100%;   /* Full viewport width */
  overflow: hidden; /* Hide any overflowing content */
  background-image: url(https://images.unsplash.com/photo-1522016480855-67a9f8416d98?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  scroll-snap-align: start; /* Snap to the start of each slide */
  scroll-behavior: smooth; /* Enable smooth scrolling */
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-box{
  position: absolute;
  top: 5%; /* Center the text vertically */
  left: 5%; /* Center the text horizontally */
  padding: 1%;
}

.font{
  color:#fff;
  font-size: 36px;
  font-weight: bold;
}

.font-1{
  color:#fff;
  font-size: 50px;
}

.text-box-2{
  position: absolute;
  top: 50%;
  left: 50%;
  right: 10%;
}

.font-2{
  color:#fff;
  font-size: 40px;
  font-weight: lighter;
}

.text-box-1{
  position: absolute;
  top: 40%; /* Center the text vertically */
  left: 50%; /* Center the text horizontally */
}

.button{
  background: transparent;
  color: white;
  font-size: 30px;
  border: none;
  
}

.wrapper{
  top: 10%;
  right: 10%;
  position: absolute;
}

</style>