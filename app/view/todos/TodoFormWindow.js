Ext.define('MyApp.view.posts.TodoFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'todoformwindow',
    controller:'todoformcontroller',
    title: "Add Todo",
    height: 300,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items:[{
        xtype: 'form',
        reference: 'todoform',
        itemId:'todoform',
        jsonSubmit:true,
        bodyPadding: 10,
       items:[
           {
               allowBlank: false,
               readOnly:true,
               xtype:'textfield',
               reference: 'postId',
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
        {
            text: 'Clear',
            handler: 'onClearClick'
        },
        {
            text: 'Save',
            handler: 'onSaveClick'
        },
    ]
})