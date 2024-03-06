Ext.define('MyApp.view.comments.CommentFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'commentformwindow',
    controller:'commentformcontroller',
    title: "Add Comment",
    height: 300,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    modelValidation: true,
    items: [{
        xtype: 'form',
        reference: 'commentform',
        itemId:'commentform',
        jsonSubmit:true,
        bodyPadding: 10,
        items: [
            {
                allowBlank: true,
                readOnly:true,
                xtype: 'textfield',
                reference: 'commentId',
                fieldLabel: 'Comment ID',
                name: '_id',
                emptyText: 'Comment id'
            },
            {
                allowBlank: false,
                xtype: 'textfield',
                fieldLabel: 'Post ID',
                name: 'postId',
                emptyText: 'post id'
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
                fieldLabel: 'Email',
                name: 'email',
                emptyText: 'email'
            },
            {
                allowBlank: false,
                xtype: 'textareafield',
                fieldLabel: 'Body',
                name: 'body',
                emptyText: 'body'
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