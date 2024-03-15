Ext.define('MyApp.view.users.UserFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'userformwindow',
    controller: 'userformcontroller',
    title: "Add User",
    height: 500,
    width: 520,
    autoShow: true,
    scrollable: 'y',
    closable: true,
    modal: true,
    layout: 'fit',
    modelValidation: true,
    items: [{
        xtype: 'form',
        reference: 'userform',
        jsonSubmit: true,
        bodyPadding: 10,
        items: [{
            allowBlank: true,
            readOnly: true,
            xtype: 'textfield',
            reference: 'UserIdField',
            fieldLabel: 'User ID',
            name: '_id',
            emptyText: 'user id'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            emptyText: 'name',
            vtype: 'alpha'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Username',
            name: 'username',
            emptyText: 'username',
            vtype: 'alphanum'
        },
        {
            allowBlank: false,
            xtype: 'textareafield',
            fieldLabel: 'Email',
            name: 'email',
            emptyText: 'email',
            vtype: 'email'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Street',
            name: 'street',
            emptyText: 'street'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Suite',
            name: 'suite',
            emptyText: 'suite'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'City',
            name: 'city',
            emptyText: 'city'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Zipcode',
            name: 'zipcode',
            emptyText: 'zipcode'
        },
        {
            allowBlank: false,
            xtype: 'numberfield',
            fieldLabel: 'Latitude',
            name: 'lat',
            emptyText: 'latitude'
        },
        {
            allowBlank: false,
            xtype: 'numberfield',
            fieldLabel: 'Longitude',
            name: 'lng',
            emptyText: 'longitude'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Phone',
            name: 'phone',
            emptyText: 'phone'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Website',
            name: 'website',
            emptyText: 'website',
            vtype: 'url'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Company Name',
            name: 'companyName',
            emptyText: 'company name',
            vtype: 'alphanum'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Company Catch Phrase',
            name: 'companyCatchPhrase',
            emptyText: 'company catch phrase',
            vtype: 'alphanum'
        },
        {
            allowBlank: false,
            xtype: 'textfield',
            fieldLabel: 'Company BS',
            name: 'companyBs',
            emptyText: 'company bs'
        }
        ],
    }],
    buttons: [{
        text: 'Clear',
        handler: 'onClearClick'
    },
    {
        text: 'Save',
        handler: 'onSaveClick'
    },
    ]
});
