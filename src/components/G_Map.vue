<template>
  <div class ="map-container">
  <div ref="mapContainer" class="google-map"></div>
  </div>
</template>


<script>
import GoogleMapsApiLoader from 'google-maps-api-loader';
import {key} from '../backend/keys.js';
import googleMapsApiLoader from 'google-maps-api-loader/src/google-maps-api-loader';
import firebase from '../backend/firebase.js'
import {
 getDocs, query, where, collection
} from 'firebase/firestore'


export default {
  props: {
  selectedCategory: {
    type: String, // Adjust the type as needed
    default: null
  }
},
  data() {
    return {
      map: null,
      markers: []
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


        this.map = new google.maps.Map(this.$refs.mapContainer, {
          center: { lat: 36.1627, lng: -86.7816 }, // Initial map center (New York coordinates)
          zoom: 13 // Initial zoom level
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    },
    async addMarkers(col) {


      const q = query(collection(firebase.db, col), where('lat', '!=', null));
      const querySnapshot = await getDocs(q);


      querySnapshot.forEach((doc)=> {
          const marker = new google.maps.Marker({
              title: doc.get('name'),
              position: {lat: doc.get('lat'), lng: doc.get('lng')},
              map: this.map,
            });
            this.markers.push(marker);
            console.log(this.markers[0]);


            const infoWindow = new google.maps.InfoWindow( {
              content : marker.getTitle(),
            });


          marker.addListener("click", () => {
              infoWindow.open({
                anchor:marker,
                map: this.map
              })
            });
      });
    },
    clearMarkers() {


      this.markers.forEach((marker) => {marker.setMap(null)})
      this.markers = []
      google.maps.event.trigger(this.map, 'resize');
    }
  },
  watch: {
  selectedCategory(newVal) {
    // Respond to changes in selectedCategory
    this.clearMarkers();
    this.loadMap();
    this.addMarkers(newVal);
  }
}
};
</script>


<style>
.map-container {
  position: relative;
}


.google-map {
  width: 100%;
  height: 100vh; /* Set the height as per your requirement */
  z-index: 1;
}
</style>