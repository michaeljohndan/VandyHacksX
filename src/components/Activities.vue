<template>
  <div>
    <div class ="text2"  style="text-align: right; color: white;">
    <!-- <p class = "text">Click on what you would like to do!</p> -->
  </div>
   
    <div class="image-grid">
        <!-- Add a handleImageClick function later -->
        <div v-for="(category, index) in categories" :key="index" class="image-card" @click="handleImageClick(category.id)">
        <p class="category-label">{{ category.label }}</p>
        <img :src="category.image" :alt="category.alt" class="category-image" />
      </div>
    </div>
  </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: null,
        categories: [
          {
            id: "food",
            label: 'Food',
            image: 'src/assets/food.jpg',
            alt: 'Food Image'
          },
          {
            id: "outdoor",
            label: 'Outdoor',
            image: "src/assets/outdoor.jpg",
            alt: 'Outdoor Image'
          },
          {
            id: 'exercise',
            label: 'Exercise',
            image: 'src/assets/workout.jpg',
            alt: 'Exercise Image'
          },
          {
            id: 'sightsee',
            label: 'Sightsee',
            image: './src/assets/sightsee.jpg',
            alt: 'Sightseeing Image'
          },
          {
            id: 'events',
            label: 'Events',
            image: 'src/assets/liveevents.jpg',
            alt: 'Events Image'
          }
        ]
      };
    },
    model: {
        prop: 'selected',
        event: 'category-selected'
    },
    props: ['selected'],
    
    methods: {
        handleImageClick(id) {
            this.selectedCategory = id;

            this.$emit('category-selected', id); 
        }
    }
  };
  </script>
  
  <style>

  .image-grid {
  position: absolute;
  top: 0%;
  right: 0;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* justify-content: center; */
  z-index: 2;
}
  
  .image-card {
    position: relative;
    text-align: center;
    margin: 10px;
  }
  
  .image-card-content {
    position: relative;
    display: inline-block;
  }
  
  .category-image {
    width: 200px;
    height: 125px;
    object-fit: cover;
    border-radius: 8px;
  }

  .text2 {
    margin: 10px;
    margin-top: 0px;
  }

  .text {
    font: Georgia;
    color: black;
    font-weight: bold;
    /* background: rgba(255, 255, 255, 0.7); */
    transition: background-color 0.3s ease-in-out;
  }
  
  .category-label {
    font: Georgia;
    font-size: xx-large;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0px;
    color: black;
    font-size: 30px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    transition: background-color 0.3s ease-in-out;
  }
  
  .image-card-content:hover .category-label {
    background: rgba(255, 255, 255, 0.9);
  }
  </style>
  