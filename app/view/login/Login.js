Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginwindow',
    requires: [
        'MyApp.view.login.LoginController',
        'Ext.form.Panel',
        'MyApp.util.Util'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    draggable: false,
    resizable: false,
    layout: 'fit',
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        defaults: {
            afterLabelTextTpl: MyApp.util.Util.required,
        }
        ,
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: translations.username,
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: translations.password,
            allowBlank: false
        },
       ],
       buttons: [
        {
            xtype:'splitbutton',
            reference:'lng-btn',
            menu: {
                xtype: 'menu', 
                defaults:{
                    listeners: {
                        click: 'onMenuItemClick'
                    }
                },
                items: [
                    {
                        xtype: 'menuitem', 
                        iconCls: 'en',
                        text: 'English'
                    },
                    {
                        xtype: 'menuitem', 
                        iconCls: 'es',
                        text: 'Español'
                    },
                    {
                        xtype: 'menuitem', 
                        iconCls: 'pt_BR',
                        text: 'Português'
                    }
                ]
            }
        }, 
        '->',
        {
        text: translations.login,
        formBind: true,
        listeners: {
            click: 'onLoginClick'
        }
    }]
}

})