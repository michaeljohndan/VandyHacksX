import firebase from './firebase.js';

import axios from 'axios';
import cheerio from 'cheerio';

axios.get("https://www.caringseniorservice.com/blog/senior-discount-guides-where-to-save-money-at-50-to-65")
  .then(response => {
    const content = response.data;
    const $ = cheerio.load(content);
    const bodySoup = $('.ucBlogPostBody').find('article');
    bodySoup.find('li').each((index, element) => {
      const li = $(element);

      const name = li.find('strong').text();
      let discount = li.text().split(': ')[1];
      if (discount) {
        discount = discount.split('(')[0];
      }
      let age = li.text().split("(")[1] || '';
      
      if (age.includes('+')) {
        age = parseInt(age.slice(0, -2));
      } else {
        age = null;
      }
      
      console.log(name.trim(':'), '|', discount, '|', age);
    });
  })
  .catch(error => {
    console.log(error);
  });



