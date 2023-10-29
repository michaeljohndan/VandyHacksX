<template>
    <div ref="mapContainer" class="google-map"></div>
    <div v-if="category">
      {{ category }}
    </div>
  </template>
  
<script>
  import GoogleMapsApiLoader from 'google-maps-api-loader';
  import {key} from '../backend/keys.js';
  import googleMapsApiLoader from 'google-maps-api-loader/src/google-maps-api-loader';
  


  export default {
    data() {
      return {
        map: null
      };
    },
    mounted() {
      this.loadMap();
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
    props: ['category']
  };
  </script>
  
  <style>
  .google-map {
    width: 100vh;
    height: 100vh; /* Set the height as per your requirement */
  }
  </style>
  