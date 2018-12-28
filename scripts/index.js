
/**
 * @function generateVideoItemHtml
 * Template function, creates an HTML string from a single decorated video object
 * @param   {object} video - decorated video object
 * @returns {string} HTML 
 */
// TASK:
// 1. Using the decorated object, return an HTML string containing all the expected
// TEST IT!
const generateVideoItemHtml = function(video) {
  console.log('this function has moved');
};


// TASK:
// 1. Set the received array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  const theList = decorateResponse(videos);
  console.log(theList);
  store.videos = theList;
  console.log(store.videos);
};

/**
 * @function render
 * Responsible for scanning store and rendering the video list to DOM
 */
// TASK:
// 1. Map through `store.videos`, sending each `video` through `generateVideoItemHtml`
// 2. Add this array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const videosToDisplay = store.videos.map(item => videoList.generateListItem(item));
  $('.results').html(videosToDisplay);
};

/**
 * @function handleFormSubmit
 * Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
 * and 3) invokes render
 */
const handleFormSubmit = function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    const queryTerm = $('#search-term').val();
    $('#search-term').val("");
    api.fetchVideos(queryTerm, (info => {
      store.setVideos(info);
      render();
    }));
  })
};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  handleFormSubmit();
});
