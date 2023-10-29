// event scraping
import { key } from "./keys.js";
import axios from "axios";

import {createEvents} from './firebase.js'

async function getLocation() {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { latitude, longitude } = response.data;

    return { latitude, longitude };
  } catch (error) {
    throw new Error('Error getting location: ' + error.message);
  }
}

function constructQueryUrl(latitude, longitude) { 
  const radius = 10000; //in meters
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  const location = `${latitude}%2C${longitude}`;
  const keyword = 'senior+events';

  let queryUrl = `${baseUrl}?location=${location}&radius=${radius}&keyword=${keyword}&key=${key}`;

  console.log(queryUrl);
  return queryUrl;
}

async function makeMapsQuery() {
  const { latitude, longitude } = await getLocation();
  let queryUrl = constructQueryUrl(latitude, longitude);

  return fetch(queryUrl, {
    method: "GET",
    mode: "no-cors",
  })
    .then((response) => {
      console.log("response: ", response)
      return response.json(); // Read the response as text
    })
    .then((data) => {
      const results = data.results;

      const desiredValues = results.map((result) => { 
        const name = result.name;
        const latitude = result.geometry.location.lat;
        const longitude = result.geometry.location.lng;
        return { name, latitude, longitude };
      })
      
      // console.log("Desired values: ", desiredValues);;

      // return desiredValues;
      createEvents(desiredValues.name, desiredValues.latitude, desiredValues.longitude);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

export default makeMapsQuery;

