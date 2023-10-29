<template>
    <div ref="mapContainer" class="google-map"></div>
    <div>
      <p>{{ selectedCategory }} bruh</p>
      
    </div>
  </template>
  
<script>
  import GoogleMapsApiLoader from 'google-maps-api-loader';
  import {key} from '../backend/keys.js';
import googleMapsApiLoader from 'google-maps-api-loader/src/google-maps-api-loader';
  
  export default {
    props: {
    selectedCategory: {
      type: String, // Adjust the type as needed
      default: null
    }
  },
    data() {
      return {
        map: null
      };
    },
    mounted() {
      this.loadMap();
      console.log(this.selectedCategory);
    },
    methods: {
      async loadMap() {
        try {
          this.map = await GoogleMapsApiLoader({
            apiKey: key.API_KEY, // Replace with your actual API key
            version: 'weekly' // or specify the version you want to load
          });
  
          new google.maps.Map(this.$refs.mapContainer, {
            center: { lat: 36.1627, lng: -86.7816 }, // Initial map center (New York coordinates)
            zoom: 11 // Initial zoom level
          });
        } catch (error) {
          console.error('Error loading Google Maps:', error);
        }
      }
    },
    watch: {
    selectedCategory(newVal) {
      // Respond to changes in selectedCategory
      console.log('Selected Category:', newVal);
    }
  }
  };
  </script>
  
  <style>
  .google-map {
    width: 100vh;
    height: 100vh; /* Set the height as per your requirement */
  }
  </style>
  