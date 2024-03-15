Ext.define('MyApp.view.users.UserDetails',{
    extend:'Ext.tab.Panel',
    xtype:'userDetails',
    width:0,
    margin: '0 0 0 80',
    items: [{
        xtype:'form',
        title:'User Information',
        layout:'form',
        items:[
            {
                xtype:'textfield',
                fieldLabel: 'User ID',
                bind: {
                    value: '{record._id}'
                },

            },
           
            {
                xtype:'textfield',
                fieldLabel: 'Name',
                bind: {
                    value: '{record.name}'
                }
            },
            {
                fieldLabel: 'UserName',
                xtype:'textfield',
                bind: {
                    value: '{record.username}'
                }
            },
            {
                fieldLabel: 'Email',
                xtype:'textfield',
                bind: {
                    value: '{record.username}'
                }
            },


        ]
    }]
})