Ext.define('MyApp.view.posts.PostDetails',{
    extend:'Ext.tab.Panel',
    xtype:'postDetails',
    height:0,
    items: [{
        xtype:'form',
        title:'Post Information',
        layout:'form',
        items:[
            {
                xtype:'textfield',
                fieldLabel: 'Post ID',
                bind: {
                    value: '{record._id}'
                },

            },
           
            {
                xtype:'textfield',
                fieldLabel: 'Title',
                bind: {
                    value: '{record.title}'
                }
            },
            {
                fieldLabel: 'Body',
                xtype:'textfield',
                bind: {
                    value: '{record.body}'
                }
            },

        ]
    }]
})