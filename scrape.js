import axios from 'axios';
import * as cheerio from 'cheerio';
for(let i=1; i<50; i++){



 axios.get('' +i+ '/').then(response => {
     const $ = cheerio.load(response.data);
     let img = $('#comic img');
     console.log(img.attr('src'));
     console.log(img.attr('title'));
     console.log(img.attr('alt'));
 });
 await new Promise(r => setTimeout(r,100))
 }
