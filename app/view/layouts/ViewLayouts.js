Ext.define('MyApp.view.layouts.ViewLayouts', {
    extend: 'Ext.grid.Panel',
    xtype: 'layoutsview',
    controller: 'viewlayoutscontroller',
    
    tbar: [
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

})