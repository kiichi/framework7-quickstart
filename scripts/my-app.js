var app = new Framework7({
  root: '#app',
  theme: 'auto',
  routes: [{
    path: '/about/',
    url: 'about.html'
  }]
});

var viewMain = app.views.create('.view-main');