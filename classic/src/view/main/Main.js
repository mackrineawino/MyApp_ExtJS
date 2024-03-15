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
        collapsible: true, 
    },
    {
        region: 'center',
        xtype: 'mainpanel',
    },
        // layout: {
        //     type: 'vbox',
        //     align: 'stretch'
        // },
        // items: [{
        //     xtype: 'mainpanel',
        //     height: '50'
        // },
        // {
        //     xtype: 'container',
        //     html: '<div style="display: flex; flex-direction: column; align-items: center;"><button class="hexagon">Users</button><div style="display: flex; justify-content: space-between;"><button class="hexagon">Posts</button><button class="hexagon">Todos</button></div><button class="hexagon">Albums</button> </div>',
        //     margin: '70 0',
           
        // }
    //]
   // },
    {
        region: 'south',
        xtype: 'appfooter',
    },
    {
        region: 'north',
        xtype: 'appheader',
    }]
});
