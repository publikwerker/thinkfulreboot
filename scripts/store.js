/*
  We want our store to hold an array of "decorated" video objects - i.e. objects that
  have been transformed into ONLY the necessary data we're displaying on our page. 
  (Removes extraneous dataset from Youtube.)
  
  Example decorated video o
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
*/
const store = (function () {
    videos = [];


/**
 * @function decorateResponse
 * Uses Youtube API response to create an array of "decorated" video objects as 
 * defined at the top of the file.
 *   {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
 * @returns {array}
 */

const decorateResponse = function(response) {

    // first, i checked to see if i could capture the values
    //  for (let i = 0; i < response.items.length; i++) {
    //    console.log(response.items[i].id.videoId);
    //    console.log(response.items[i].snippet.title);
    //    console.log(response.items[i].snippet.thumbnails.default.url);
    //  };
  
    // then i made the array
    const decoration = [];
    response.items.map(item => decoration.push(
      {
      id: `${item.id.videoId}`,
      title: `${item.snippet.title}`,
      thumbnail: `${item.snippet.thumbnails.default.url}`,
    }));
  
    return decoration;
  };
  
/**
 * @function setVideos
 * Store modification function to set decorated video objects
 * @param {array} info - decorated video objects
 */
    const setVideos = function(info) { 
        console.log(info);
        const theList = decorateResponse(info);
        console.log(theList);
        this.videos = theList;
    }

    return {
        videos, setVideos
    }
  }());
