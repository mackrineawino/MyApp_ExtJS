Ext.define('MyApp.view.posts.Posts',{
    extend:'Ext.panel.Panel',
    xtype:'posts',
    viewModel:{
        data:{
            record:null
        }
    },
    items:[
        {
            xtype:'postgrid'
        },
        {
            xtype:'postDetails'
        }
    ]
})