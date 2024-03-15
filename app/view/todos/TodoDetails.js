Ext.define('MyApp.view.todos.TodoDetails',{
    extend:'Ext.tab.Panel',
    xtype:'todoDetails',
    height:0,
    items: [{
        xtype:'form',
        title:'Todo Information',
        layout:'form',
        items:[
            {
                xtype:'textfield',
                fieldLabel: 'Todo ID',
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
                fieldLabel: 'Completed',
                xtype:'textfield',
                bind: {
                    value: '{record.completed}'
                }
            },

        ]
    }]
})