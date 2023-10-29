<script setup>
import HelloWorld from './components/HelloWorld.vue';
import LogIn from './components/LogIn.vue';
import CreateAccount from './components/CreateAccount.vue'
import G_Map from './components/G_Map.vue';
import Activities from './components/Activities.vue';
import { ref } from 'vue';

const selectedCategory = ref(null);


const updateSelectedCategory = (newCategory) => {
  console.log(newCategory);
  selectedCategory.value = newCategory;
};

</script>


<template>
 <!-- <CreateAccount/> -->
 <Activities @category-selected="updateSelectedCategory"/>
  <G_Map :selectedCategory.sync="selectedCategory" />
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
