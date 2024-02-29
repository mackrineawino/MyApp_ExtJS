Ext.define('MyApp.view.posts.TodoFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'todoformwindow',
    title: "Add Todo",
    height: 300,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items:[{
       xtype: 'form',
       items:[
           {
               allowBlank: false,
               xtype:'textfield',
               fieldLabel: 'Todo ID',
               name: 'id',
               emptyText: 'Todo id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'User ID',
               name: 'userId',
               emptyText: 'user id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'Title',
               name: 'title',
               emptyText: 'title'
           },
           {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Completed',
            name: 'completed',
            emptyText: 'Completed'
        },
           {
               allowBlank: false,
               xtype: 'datefield',
               fieldLabel: 'Published Date',
               name: 'date',
               emptyText: 'date'
           },
       ],

    }],
    buttons: [
        { text: 'Cancel' },
        { text: 'Save' },
    ]
})