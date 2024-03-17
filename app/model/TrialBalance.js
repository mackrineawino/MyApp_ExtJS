Ext.define('MyApp.model.TrialBalance', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'account', type: 'string' },
        { name: 'Dr', type: 'float' },
        { name: 'Cr', type: 'float' }
    ]
});
