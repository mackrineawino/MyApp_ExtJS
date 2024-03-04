Ext.define('MyApp.view.posts.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    controller: 'albumgridviewcontroller',
    store: {
        type: 'albums'
    },
    tbar:[{
        text: 'Add Album',
        listeners:{
            click: 'onAddAlbumClicked'
        }
    }],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'userId', text: 'User ID' }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    height: 400

})