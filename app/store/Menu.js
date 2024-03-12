Ext.define('MyApp.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Security',
                iconCls:'fa-lock',
                children:[
                    {
                        text:'Users',
                        iconCls:'fa-user',
                        className:'usergrid',
                        leaf:true
                    },
                    {
                        text: 'Comment',
                        iconCls: 'fa-comment',
                        className:'commentgrid',
                        leaf: true
                    }
                   
                ]

            },
            {
                text: 'Static Data',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Posts',
                        iconCls: 'fa-book',
                        className:'postgrid',
                        leaf: true
                    },
                    {
                        text: 'Albums',
                        iconCls: 'fa-address-card',
                        className:'albumgrid',
                        leaf: true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fa-list-ul',
                        className:'todogrid',
                        leaf: true
                    }
                    
                ]

            },

        ]
    }
})