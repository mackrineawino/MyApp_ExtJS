Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.window.MessageBox',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',

    ],
    plugins: 'viewport',
    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'mainmenu',
        cls: 'main-menu-title',
        bind: {
            title: '{name}'
        },
        region: 'west',
        width: 250,
        split: true,
    },
    {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Foo'
        },
        {
            title: 'Bar',
            closable: true,
            tabConfig: {
                title: 'Custom Title',
                tooltip: 'A button tooltip'
            }
        }]

    },
    {

        region: 'south',
        xtype: 'appfooter',
    },
    {
        region: 'north',
        xtype: 'appheader',
    }]
});