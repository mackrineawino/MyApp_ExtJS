Ext.define('MyApp.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    reference:'postgrid',
    controller: 'postgridviewcontroller',
    store: {
        type: 'posts'
    },
    tbar: [{
        text: 'Add Post',
        listeners: {
            click: 'onAddPostClicked'
        }
    },
    {
        text: 'Form fields',
        listeners: {
            click: 'onFormFieldsClicked'
        }
    },
    {
        text: 'BorderLayout',
        listeners: {
            click: 'onBorderLayoutsClicked'
        }
    },
    {
        text: 'HBoxVbox',
        listeners: {
            click: 'onHBoxVboxLayoutsClicked'
        }
    },
    {
        text: 'Column layout ',
        listeners: {
            click: 'onColumnLayoutsClicked'
        }
    },
    {
        text: 'Accordion layout ',
        listeners: {
            click: 'onAccordionLayoutsClicked'
        }
    },
    {
        text: 'Checkout Form',
        listeners: {
            click: 'onCheckoutFormClicked'
        }
    }
    ],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'body', text: 'Body', flex: 2, sortable: false },
        { dataIndex: 'userId', text: 'User ID', sortable: false, hidden: false }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,

})