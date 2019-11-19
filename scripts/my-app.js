var app = new Framework7({
  root: '#app',
  theme: 'auto',
  routes: [{
    path: '/about/',
    url: 'about.html'
  }]
});

var viewMain = app.views.create('.view-main');

var $$ = Dom7;

$$('.submit-form').on('click', function () {
  app.dialog.alert('Thank you','Success!');
});
