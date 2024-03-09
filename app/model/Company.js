Ext.define('MyApp.model.Company',{
    extend:'Ext.data.Model',
    fields: [
        'id',
        'companyName',
        'budgetName',
        {name: 'budgetamount', type: 'float'}
    ]
})