<template>
    <div class="image-grid">
        <!-- Add a handleImageClick function later -->
        <div v-for="(category, index) in categories" :key="index" class="image-card" @click="handleImageClick(category.id)">
        <p class="category-label">{{ category.label }}</p>
        <img :src="category.image" :alt="category.alt" class="category-image" />
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
  