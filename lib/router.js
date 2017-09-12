// router
// main page
FlowRouter.route('/', {
  action: function () {
    if (Meteor.userId()) {
      BlazeLayout.render('dragList', {
        main: 'dragListPage'
      });
    } else {
      FlowRouter.go('/login');
    }
  }
});

// login
FlowRouter.route('/login', {
  action: function () {
    if (Meteor.userId()) {
      FlowRouter.go('/');
    } else {
      BlazeLayout.render('login', {
        main: 'loginPage'
      });
    }
  }
});

// register
FlowRouter.route('/register', {
  action: function () {
    if (Meteor.userId()) {
      FlowRouter.go('/');
    } else {
      BlazeLayout.render('register', {
        main: 'registerPage'
      });
    }
  }
});