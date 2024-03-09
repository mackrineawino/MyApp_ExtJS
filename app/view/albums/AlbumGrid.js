Ext.define('MyApp.view.albums.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    reference: 'albumgrid',
    scrollable: 'y',
    controller: 'albumgridviewcontroller',
    store: {
        type: 'albums'
    },
    tbar:[{
        text: 'Add Album',
        listeners:{
            click: 'onAddAlbumClicked'
        }
    },
    {
        text: 'View Album',
        handler: 'onViewAlbum',
        bind:{
            disabled: '{!albumgrid.selection}'
        }
    }
],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'userId', text: 'User ID' }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'MULTI'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,

})