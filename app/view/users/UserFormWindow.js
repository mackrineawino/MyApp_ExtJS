Ext.define('MyApp.view.users.UserFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'userformwindow',
    controller:'userformcontroller',
    title: "Add User",
    height: 300,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    modelValidation: true,
    items: [{
        xtype: 'form',
        reference: 'userform',
        itemId:'userform',
        jsonSubmit:true,
        bodyPadding: 10,
        items: [
            {
                allowBlank: true,
                readOnly:true,
                xtype: 'textfield',
                reference: 'UserId',
                fieldLabel: 'User ID',
                name: '_id',
                emptyText: 'user id'
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'name',
                emptyText: 'name'
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'Username',
                name: 'username',
                emptyText: 'username'
            },
            {
                allowBlank: false,
                xtype: 'textareafield',
                fieldLabel: 'Email',
                name: 'email',
                emptyText: 'email'
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