Ext.define('MyApp.view.staticData.ParentPanel',{
    extend:'Ext.panel.Panel',
    xtype:'parentpanel',
    items:[
        {
            xtype:'usergrid',

        },
        {
            xtype:'staticdatamgtpanel',

        }
    ]
})