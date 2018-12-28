const videoList = (function(){
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
    return {
        generateListItem
    };
}());