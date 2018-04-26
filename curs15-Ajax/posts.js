window.onload = onHtmlLoaded;

function onHtmlLoaded() {
  getPosts();
  bindEvents();
  
}

function bindEvents() {
  var submitBtn = document.getElementById('post-submit');
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    var id = document.getElementById('post-id').value;
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    
    var data = {
      title: title,
      body: body
    };
    
    updatePost(id, data);
  });
}

function getPosts() {
  // GET ALL POSTS -> GET
  $.ajax('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    success: function(response) {
      console.log('Get post =', response);
      var html = '';
      var elPosts = document.getElementById('list-posts');
      
      for (var i = 0; i < response.length; i++) {
        var item = response[i];
        var elem = document.createElement('article');
        elem.innerHTML = '<h2>' + item.title + '</h2>' +
            '<p>' + item.body + '</p>' +
            '<button data-edit-id="' + item.id + '">Edit</button><button data-delete-id="' + item.id + '">Delete</button>';

        elPosts.appendChild(elem);
        
        var deleteBtn = document.querySelector('[data-delete-id="' + item.id + '"]');
        deleteBtn.addEventListener('click', function() {
          //alert(item.id);
          //console.log('event target', e.target.getAttribute('data-id'));
          var id = this.getAttribute('data-delete-id');
          deletePost(id);          
        });
        
        var editBtn = document.querySelector('[data-edit-id="' + item.id + '"]');
        editBtn.addEventListener('click', function() {
          //alert(item.id);
          //console.log('event target', e.target.getAttribute('data-id'));
          var id = this.getAttribute('data-edit-id');
          getPost(id);          
        });
      }
          
    }
  });
}

function deletePost(id) {
  $.ajax('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'DELETE',
    success: function(response) {
      console.log("Delete post = ", response);
    }
  });
}

function getPost(id) {
  $.ajax('https://jsonplaceholder.typicode.com/posts/' + id, {
    method: 'GET',
    success: function(response) {
      console.log('Get post =', response);
      console.log('Title =', response.title);
      console.log('Body =', response.body);
      
      var id = document.getElementById('post-id');
      var title = document.getElementById('title');
      var body = document.getElementById('body');
      id.value = response.id;
      title.value = response.title;
      body.value = response.body;
    }
  });  
}

function updatePost(id, data) {
  $.ajax('https://jsonplaceholder.typicode.com/posts/' + id, {
  method: 'PUT',
  data: data,
  success: function(response) {
    console.log("Update post = ", response);
  }
});
}