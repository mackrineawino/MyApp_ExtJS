Ext.define('MyApp.view.posts.AlbumFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'albumformwindow',
    controller:'albumformcontroller',
    title: "Add Album",
    height: 300,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items:[{
        xtype: 'form',
        reference: 'albumform',
        itemId:'albumform',
        jsonSubmit:true,
        bodyPadding: 10,
       items:[
           {
               allowBlank: false,
               readOnly:true,
               xtype:'textfield',
               reference: 'albumId',
               fieldLabel: 'Album ID',
               name: 'id',
               emptyText: 'Album id'
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