const videoList = (function(){


/**
 * @function generateVideoItemHtml
 * Template function, creates an HTML string from a single decorated video object
 * @param   {object} video - decorated video object
 * @returns {string} HTML 
 */
    const generateListItem = function(video){
        return(`
        <li>
          <div id='${video.id}'>
            <h2>${video.title}</h2>
            <a href='http://www.youtube.com/watch?v=${video.id}'>
              <img src='${video.thumbnail}' alt='visit the site' />
            </a>
          </div>
        </li> 
        `);
    };

/**
 * @function render
 * Responsible for scanning store and rendering the video list to DOM
 */
    const render = function() {
        const videosToDisplay = store.videos.map(item => generateListItem(item));
        $('.results').html(videosToDisplay);
    };

    const handleFormSubmit = function() {
        $('form').on('submit', function(event) {
            event.preventDefault();
            const queryTerm = $('#search-term').val();
            $('#search-term').val("");
            api.fetchVideos(queryTerm, (response => {
                store.setVideos(response);
                render();
            }));
        });
    };

    const bindEventListeners = function(){
        handleFormSubmit();
    };

    return {
        generateListItem,
        bindEventListeners,
        render
    };

}());