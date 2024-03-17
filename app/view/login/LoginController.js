Ext.define('MyApp.view.login.LoginController', {
    extend:'Ext.app.ViewController',
    alias:'controller.login',

    init: function () {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences(),
            button = refs['lng-btn'];

        var lang = localStorage ? (localStorage.getItem('user-lang') ||
            'en') : 'en';
        button.setIconCls(lang); 
        if (lang == 'en') {
            button.setText('English');
        } else if (lang == 'es') {
            button.setText('Español');
        } else {
            button.setText('Português');
        }
    },
    onLoginClick: function () {
        var form = this.lookupReference('form').getForm();
        if (form.isValid()) {
            Ext.Ajax.request({
                url: 'http://localhost:3000/users', 
                method: 'GET',
                success: function(response) {
                    var users = Ext.decode(response.responseText).rows;
                    console.log(users);
                    var username = form.getValues().username;
                   
    
                    var matchedUser = users.find(function(user) {
                        return user.username === username;
                    });
    
                    if (matchedUser) {
                        var token = generateToken(matchedUser); 
                        console.log("Generated token:", token); // Debug message
                        localStorage.setItem('MyAppAuthToken', token);
                        console.log("Token stored in local storage"); // Debug message
    
                        // Remove Login Window
                        console.log("Destroying login window"); // Debug message
                         this.getView().destroy();
                       
    
                        // Add the main view to the viewport
                        console.log("Adding main view"); // Debug message
                        Ext.widget('app-main');
                        Ext.util.History.add('home');
                    } else {
                        Ext.util.History.add('login');
                        Ext.Msg.alert('Login Failed', 'Invalid username or password');
                    }
                },
                failure: function(response) {
                    Ext.Msg.alert('Error', 'Failed to retrieve user data');
                },
                scope: this
            });
        }
    },
    onMenuItemClick: function (item, e, options) {
        var menu = this.getView();
        localStorage.setItem("user-lang", item.iconCls);
        window.location.reload();
    }
});

function generateToken(user) {
    // Header
    var header = {
        "alg": "HS256", // Algorithm used for hashing
        "typ": "JWT" // Type of token
    };

    // Payload
    var payload = {
        "sub": user.id, // Subject (user ID)
        "username": user.username,
        "exp": Math.floor(Date.now() / 1000) + (60 * 60) // Expiration time (1 hour from now)
    };

    // Encode header and payload
    var encodedHeader = btoa(JSON.stringify(header));
    var encodedPayload = btoa(JSON.stringify(payload));

    // Signature (using a secret key)
    var signature = encodedHeader + '.' + encodedPayload;
    signature = btoa(signature); // Base64 encode

    // Combine encoded header, payload, and signature
    var token = encodedHeader + '.' + encodedPayload + '.' + signature;

    return token;
}
