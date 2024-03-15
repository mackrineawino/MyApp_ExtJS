Ext.define('MyApp.view.albums.AlbumDetails',{
    extend:'Ext.tab.Panel',
    xtype:'albumDetails',
    height:0,
    items: [{
        xtype:'form',
        title:'Album Information',
        layout:'form',
        items:[
            {
                xtype:'textfield',
                fieldLabel: 'Album ID',
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

        ]
    }]
})