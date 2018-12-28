const api = (function(searchTerm, callback) {

    const API_KEY =     'AIzaSyAuD_JlyrZ6quDVxvm0m0bsYAv7Jbmf2Tw';
    const BASE_URL =    'https://www.googleapis.com/youtube/v3/search';

    /**
     * @function fetchVideos
     * Async function, responsible for calling the  Youtube API with jQuery, constructing
     * the correct query object, and passing along the  callback into the AJAX call.
     * @param {string}   searchTerm
     * @param {function} callback
     */
    // TASK:
    // 1. Use `searchTerm` to construct the right query     object based on the Youtube API docs
    //    - Refer to curriculum assignment for help with    the required parameters
    // 2. Make a getJSON call using the query object and    sending the provided callback in 
    //    as the last argument
    //
    // TEST IT! Execute this function and console log the   results inside the callback.
    const fetchVideos = function(searchTerm, callback) {

        // made the GET request with .getJSON, first
        //const query = {
        //  key: API_KEY,
        //  part:  'snippet' ,
        //  q: `${searchTerm} in:name`,
        //  per_page: 5
        //}
        // $.getJSON(BASE_URL, query, callback);
    
        // then, i made the GET request using .AJAX
        const settings = {
          url: BASE_URL,
          data: {
            key: API_KEY,
            part:  'snippet' ,
            q: `${searchTerm} in:name`,
            per_page: 5
          },
          dataType: 'json',
          type: 'GET',
          success: callback
        };

         $.ajax(settings);

    }
  
  return {
    fetchVideos,
  }

}());