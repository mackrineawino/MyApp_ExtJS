Ext.define('MyApp.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    reference: 'usergrid',
    controller: 'usergridcontroller',
    store: {
        type: 'users'
    },
    width: 1000,
    plugins: {
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
            editor: {
                xtype: 'textfield',
                allowBlank: false // Name field is required
            }
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex: 2,
            editor: {
                xtype: 'textfield',
                allowBlank: false // Username field is required
            }
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 3,
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            },
            editor: {
                xtype: 'textfield',
                allowBlank: false, // Email field is required
                completeOnEnter: true
            }
        },
        {
            dataIndex: 'city',
            text: 'City',
            flex: 2,
            editor: {
                xtype: 'textfield',
                allowBlank: false // City field is required
            }
        }
    ],
    tbar: [{
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
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners: {
        cellclick: 'onUserGridCellClick',
        selectuser:'onSelectUser',
    }
});
