const cheerio = require('cheerio'),
      axios = require('axios');

axios.get("URL_AQUI")
    .then((response) => {
        let $ = cheerio.load(response.data);
        $('a').each(function (i, e) {
          let links = $(e).attr('href');      
          console.log(links);
      })
    }).catch(function (e) {
    //console.log(e);
});