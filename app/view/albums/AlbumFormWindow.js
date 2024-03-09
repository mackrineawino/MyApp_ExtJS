Ext.define('MyApp.view.albums.AlbumFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'albumform',
    controller: 'albumformcontroller',
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
        reference: 'albumform',
        jsonSubmit: true,
        defaultType: 'textfield',
        items: [
            {
                fieldLabel: 'Album ID',
                name: '_id',
                reference: 'albumIdField',
                bind: {
                    value: '{record._id}'
                },
                readOnly: true
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
                allowBlank: false,
                xtype: 'datefield',
                fieldLabel: 'Published Date',
                name: 'date',
                bind: {
                    value: '{record.date}'
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