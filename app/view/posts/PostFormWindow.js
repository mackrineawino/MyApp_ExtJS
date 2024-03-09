Ext.define('MyApp.view.posts.PostFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'postform',
    controller: 'postformcontroller',
    title: "Add Post",
    height: 300,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    layout: 'fit',
    viewModel: {
        data: {
            newTitle: null,
            record: null
        }
    },
    bind: {
        title: "{newTitle}",
    },
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'postform',
        jsonSubmit: true,
        defaultType: 'textfield',
        items: [
            {
                readOnly: true,
                reference: 'postIdField',
                fieldLabel: 'Post ID',
                name: '_id',
                bind: {
                    value: '{record._id}'
                },

            },
            {

                fieldLabel: 'User ID',
                name: 'userId',
                bind: {
                    value: '{record.userId}'
                }
            },
            {
                fieldLabel: 'Title',
                name: 'title',
                allowBlank: false,
                minLength: 10,
                bind: {
                    value: '{record.title}'
                }
            },
            {
                fieldLabel: 'Body',
                name: 'body',
                allowBlank: false,
                minLength: 10,
                bind: {
                    value: '{record.body}'
                }
            },

        ],
        buttons: [
            {
                text: 'Clear',
                handler: 'onClearClick'
            },
            {
                text: 'Save',
                formBind: true,
                handler: 'onSaveClick'
            },
        ]
    }],
    
})