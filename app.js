let { search } = require('craigslist-searcher');

//search function will return a promise with a result array
/* search these areas:
   allentown
   philadelphia
*/

search({
  city: 'allentown', //City's name. Required
  query: "free" //Keyword for the query. Optional
  }).then(resultArray => {
    //loop thru array and display titles/links

    resultArray.forEach((e) => {
      console.log("--");
      console.log(e.title);
      console.log(e.url);
    });
  });
