Ext.define('MyApp.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    reference: 'postgrid',
    controller: 'postgridviewcontroller',
    scrollable: 'y',
    height: 400,
    store: {
        type: 'posts'
    },
    tbar: [{
        text: 'Add Post',
        iconCls: 'fas fa-plus',
        listeners: {
            click: 'onAddPostClicked'
        }
    },
    {
        text: 'Show Details',
        handler: 'onShowDetails',
        bind: {
            disabled: '{!postgrid.selection}'
        }
    },
    {
        fieldLabel: 'Search',
        xtype: 'textfield',
        listeners: {
            change: 'onSearchKeyValueChange'
        }
    },
    {
        fieldLabel: 'Choose User',
        xtype: 'combo',

        store: {
            type: 'users'
        },
        queryMode: 'local',
        displayField: 'username',
        valueField: '_id',
        listeners:{
            change:'onUserSelectionChange',
            select:'onUserSelected'
        }
    },
    {
        text: 'Edit/View Post',
        iconCls: 'fas fa-pencil-alt',
        handler: 'onViewPost',
        bind:{
            disabled: '{!postgrid.selection}'
        },
    },
    {
        text: 'Delete Post',
        iconCls: 'far fa-trash-alt',
        listeners: {
            click: 'onDeleteClicked',
           
        },
        bind:{
            disabled: '{!postgrid.selection}'
        },
    },
    ],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'body', text: 'Body', flex: 2, sortable: false },
        { dataIndex: 'userId', text: 'User ID', sortable: false, hidden: false }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,
    listeners: {
        selectpost:'onSelectPost',
        cellclick: 'onPostGridCellClick'
    }

})