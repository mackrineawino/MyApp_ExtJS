Ext.define('MyApp.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    reference: 'todogrid',
    controller: 'todogridcontroller',
    store: {
        type: 'todos'
    },
    tbar:[{
        text: 'Add Todo',
        listeners:{
            click: 'onAddTodoClicked'
        }
    },
    {
        text: 'View Todo',
        handler: 'onViewTodo',
        bind:{
            disabled: '{!todogrid.selection}'
        }
    }],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'completed', text: 'Completed', flex: 2 },
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