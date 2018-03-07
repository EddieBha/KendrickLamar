var xhr = new XMLHttpRequest();
xhr.onload = function(){

    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.youtubeclips.length; i++) { // Loop through object
        newContent += '<div class="youtube">';
        newContent += '<p>' + responseObject.youtubeclips[i].title + '</p>';
        newContent += '<iframe class="videosize_video" src="' + responseObject.youtubeclips[i].klipp + '" frameborder="0" allowfullscreen></iframe>';

        newContent += '</div>';
    }
    //update with new content
    document.getElementById('youtube').innerHTML = newContent;
};

xhr.open('GET', '../data/youtubeclip.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request