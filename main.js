$(document).ready(function(){

  var page = {

    init: function () {
      page.initStyling();
      page.initEvents();
      page.getIronYardPosts();
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
        url: page.config.baseUrl + '/v1.1/read/tags/the-iron-yard/posts?pretty=true&number=20',
        type: 'GET',
        dataType: 'JSONP', // type of data that were expecting to get
        success: function (data) {
          console.log(data);
          data.posts.forEach(function(item, idx, arr) {
            $('.container').append('<img src="' +
                            item.author.avatar_URL +
                            '">' +
                            '<a href="' +
                            item.capabilities.site_URL +
                            '">' +
                            item.site_name +
                            '</a>' + '<img src="' +
                            item.featured_image +
                            '">' +
                            '<a href="' +
                            item.URL +
                            '">' +
                            item.title +
                            '</a>' +
                            '<p>' +
                            item.excerpt +
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
