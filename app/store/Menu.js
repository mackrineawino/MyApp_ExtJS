Ext.define('MyApp.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Security',
                iconCls:'fas fa-users-cog',
                children:[
                    {
                        text:'Users',
                        iconCls:'fa fa-users',
                        className:'usergrid',
                        leaf:true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fas fa-user-secret',
                        className:'todogrid',
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
                        iconCls: 'fa fa-users',
                        className:'postgrid',
                        leaf: true
                    },
                    {
                        text: 'Albums',
                        iconCls: 'fa fa-users',
                        className:'albumgrid',
                        leaf: true
                    },
                    {
                        text: 'Comment',
                        iconCls: 'fa fa-users',
                        className:'commentgrid',
                        leaf: true
                    }
                ]

            },

        ]
    }
})