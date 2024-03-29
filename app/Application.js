/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("MyApp.Application", {
    /** vscode-extjs-ignore-9 */
    extend: "Ext.app.Application",

    name: "MyApp",

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true,
        },
    },

    onAppUpdate: function () {
        Ext.Msg.confirm("Application Update", "This application has an update, reload?",
            function (choice) {
                if (choice === "yes") {
                    window.location.reload();
                }
            }
        );
    },
    launch: function () {
      Ext.util.History.init();
      // Check if the user is already logged in
      if (localStorage.getItem('MyAppAuthToken')) {
          Ext.widget('app-main');
          Ext.util.History.add('home');
      } else {
          Ext.widget('loginwindow');
          Ext.util.History.add('login');
      }
  },
  routes: {

     'login': 'showLoginPage',
    
    },
    showLoginPage: function () {
      this.redirectTo('login');
  },
    defaultToken: 'home',
    listen: {
      global: {
        unmatchedroute: 'onUnmatchedRoute'
      }
    },
  
    onUnmatchedRoute: function (token) {
      Ext.Msg.show({
        title: 'Failure',
        msg: 'Unknown path: /' + token,
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.ERROR
      });
    }
}
);
