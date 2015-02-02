$(document).ready(function(){

  var page = {

    init: function () {
      page.initStyling();
      page.initEvents();
    },
    initStyling: function () {
      console.log('init styling');

    },
    initEvents: function () {
      console.log('init events');
    },


    config: {
      baseUrl: 'https://public-api.wordpress.com/rest'
    },


    getIronYardPosts: function () {
      $.ajax({
        url: page.config.baseURL + '/v1.1/read/tags/the-iron-yard/posts?pretty=true&number=20',
        type: 'GET',
        dataType: 'JSONP', // type of data that were expecting to get
        success: function (data) {
          console.log(posts);
          posts.data.forEach(function(item, idx, arr) {
            $('.container').append('<img src="' +
                            posts.author.avatar_URL +
                            '">' +
                            '<a href="' +
                            posts.capabilities.site_URL +
                            '">' +
                            posts.capabilities.site_name +
                            '</a>' + '<img src="' +
                            posts.post_thumbnail.URL +
                            '">' +
                            '<a href="' +
                            posts.URL +
                            '">' +
                            posts.title +
                            '</a>' +
                            '<p>' +
                            posts.excerpt +
                            '</p>');
          });

        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  }


    page.init();

});
