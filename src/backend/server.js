import express from 'express';
import makeMapQuery from './mapQuery.js'
import scrape from './scrape.js'
import makeMapsQuery from './mapQuery.js';

const app = express()
const port = 3000

app.get('/map-query', async (req, res) => {
  // const response = await makeMapQuery();
  // console.log("res", response);
  // const data = await response.json();

  const data = await makeMapQuery();

  res.send(data);
})

app.post((req, res) => { 
  makeMapQuery();
})

app.post('/scrape', (req, res) => { 
  scrape();

  res.send("Scraping in progress");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})