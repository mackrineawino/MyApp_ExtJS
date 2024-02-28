Ext.define('MyApp.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    store: {
        type: 'todos'
    },
    columns: [
        { dataIndex: 'id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'completed', text: 'Body', flex: 2 },
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