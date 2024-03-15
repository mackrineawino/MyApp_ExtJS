Ext.define('MyApp.view.users.Users', {
    extend: 'Ext.panel.Panel',
    xtype: 'users',
    viewModel: {
        data: {
            record: null
        }
    },
    items: [{
        xtype: 'panel',
        layout: 'column',
        items: [

            {
                xtype: 'usergrid'
            },
            {
                xtype: 'userDetails'
            }
        ]
    }]

})