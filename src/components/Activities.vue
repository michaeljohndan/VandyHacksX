<template>
    <div class="image-grid">
        <!-- Add a handleImageClick function later -->
        <div v-for="(category, index) in categories" :key="index" class="image-card" @click="handleImageClick(category.label)">
        <p class="category-label">{{ category.label }}</p>
        <img :src="category.image" :alt="category.alt" class="category-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          {
            label: 'Food',
            image: 'src/assets/food.jpg',
            alt: 'Food Image'
          },
          {
            label: 'Outdoor',
            image: "src/assets/outdoor.jpg",
            alt: 'Outdoor Image'
          },
          {
            label: 'Exercise',
            image: 'src/assets/workout.jpg',
            alt: 'Exercise Image'
          },
          {
            label: 'Sightsee',
            image: './src/assets/sightsee.jpg',
            alt: 'Sightseeing Image'
          },
          {
            label: 'Events',
            image: 'src/assets/liveevents.jpg',
            alt: 'Events Image'
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .image-grid {
    display: flex;
    justify-content: space-around;
  }
  
  .image-card {
    text-align: center;
    margin: 20px;
  }
  
  .category-image {
    width: 300px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .category-label {
    font: Georgia;
    margin-top: 5px;
    font-size: xx-large;
    font-weight: bold;
  }
  </style>
  