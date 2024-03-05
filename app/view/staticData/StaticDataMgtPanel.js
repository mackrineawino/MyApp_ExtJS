Ext.define('MyApp.view.staticData.StaticDataMgtPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'staticdatamgtpanel',
    height: 0,
    items: [{
        title: 'Posts',
        items: [
            {
                xtype: 'postgrid',
            }
        ]
    }, {
        title: 'Todos',
        items: [
            {
                xtype: 'todogrid',
            }
        ]
    },
    {
        title: 'Albums',
        items: [
            {
                xtype: 'albumgrid',
            }
        ]
    },


    ]
})