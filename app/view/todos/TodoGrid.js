Ext.define('MyApp.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    reference: 'todogrid',
    scrollable: 'y',
    controller: 'todogridcontroller',
    store: {
        type: 'todos'
    },
    tbar:[{
        text: 'Add Todo',
        iconCls: 'fas fa-plus',
        listeners:{
            click: 'onAddTodoClicked'
        }
    },
    {
        text: 'Edit/View Todo',
        iconCls: 'fas fa-pencil-alt',
        handler: 'onViewTodo',
        bind:{
            disabled: '{!todogrid.selection}'
        },
        
    },
    {
        text: 'Delete Todo',
        iconCls: 'far fa-trash-alt',
        listeners: {
            click: 'onDeleteClicked'
        }
    },
    ],
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