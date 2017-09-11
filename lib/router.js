// router
FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render('dragList', {
      main: 'main'
    });
  }
});

FlowRouter.route('/login', {
  action: function () {
    BlazeLayout.render('login', {
      main: 'loginPage'
    });
  }
});

FlowRouter.route('/register', {
  action: function () {
    BlazeLayout.render('register', {
      main: 'registerPage'
    });
  }
});