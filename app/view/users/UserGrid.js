Ext.define('MyApp.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    reference: 'usergrid',
    controller: 'usergridcontroller',
    title: 'Users',
    store: {
        type: 'users'
    },
    height: 600,
    plugins: {
        // rowediting:
        cellediting: {
            clicksToEdit: 2
        }
    },
    columns: [{
        xtype: 'rownumberer',
    },

    {
        dataIndex: '_id',
        text: 'ID'
    },
    {
        dataIndex: 'name',
        text: 'Name',
        flex: 2,
        editor: 'textfield'
    },
    {
        dataIndex: 'username',
        text: 'Username',
        flex: 2,
        editor: 'textfield'
    },
    {
        dataIndex: 'email',
        text: 'Email',
        flex: 3,
        renderer: function (value) {
            return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
        },
        editor: {
            xtype: 'textfield',
            allowBlank: false,
            completeOnEnter: true,
        }
    },
    {
        dataIndex: 'city',
        text: 'City',
        flex: 2
    }
    ],
    tbar: [
        {
            text: 'Add User',
            listeners: {
                click: 'onAddUserClicked'
            }
        },
        {
            text: 'Model Binding',
            handler: 'onModelBinding'
        },
        '->',
        {
            text: 'Show Details',
            handler: 'onShowDetails',
            bind: {
                disabled: '{!usergrid.selection}'
            }
        }
    ],
    selModel: {
        // selType: 'checkboxmodel',
        selModel: 'rowmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners: {
        cellclick: 'onUserGridCellClick'
    }

})