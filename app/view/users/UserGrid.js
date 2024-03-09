Ext.define('MyApp.view.users.UserGrid',{
    extend:'Ext.grid.Panel',
    xtype:'usergrid',
    reference: 'usergrid',
    controller:'usergridcontroller',
    title:'Users',
    store:{
        type:'users'
    },
    height:600,
    columns:[
        {
            dataIndex:'_id',
            text: 'ID'
        },
        {
            dataIndex: 'name',
            text: 'Name',
            flex:2,
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex:2,
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex:3
        },
        {
            dataIndex: 'city',
            text: 'City',
            flex:2
        }
    ],
    tbar:[
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
          text:'Show Details',
          handler:'onShowDetails' ,
          bind:{
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
    listeners:{
        cellclick:'onUserGridCellClick'
    }

})