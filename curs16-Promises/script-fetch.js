window.onload = onHtmlLoaded;

// window.onload = onHtmlLoaded;
var apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function onHtmlLoaded() {
  getPosts(); 
}

function getPosts() {
  
  
   //$.ajax(apiUrl).then(callOnSuccess).then();
  
  fetch(
   apiUrl, {
   method: 'GET'
    }).then(function(response){
      console.log("RESPOSE ", response);
      return response.json();
    })
   .then(callOnSuccess);
}

function callOnSuccess(response) {
    console.log('Success = ', response); 
    var posts = response.slice(0,10);
//     console.log('POST = ', posts);
    return posts;
}

function callOnError(xhr) {
    console.log('Error = ', xhr); 
  var elPosts = document.getElementById('list-posts');
  elPosts.innerHTML = "Cannot get posts! Error!!!";
}

function callOnCommentsSuccess(response) {
  console.log("Comments = ", response);  
}