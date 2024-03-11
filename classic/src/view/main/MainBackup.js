/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainBackup', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main-backup',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [    {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'parentpanel'
        }]
    },
       {
        title: 'Students',
        iconCls: 'fa-address-book',
        items: [{
             xtype: 'studentgrid'
           
        }]
    }, 
    {
        title: 'Companies',
        iconCls: 'fa-building',
        items: [{
            xtype: 'companygrid'
        }]
    }, {
        title: 'Layouts',
        iconCls: 'fa-book',
        items: [{
            xtype: 'layoutsview'
        }]
    }, 
    {
        title: 'Comments',
        iconCls: 'fa-comment',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'commentgrid'
        }]
    },
]
});