Ext.define('MyApp.view.posts.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    store: {
        type: 'albums'
    },
    columns: [
        { dataIndex: 'id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'userId', text: 'User ID' }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        /** vscode-extjs-ignore-2 */
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    height: 800

})