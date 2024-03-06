Ext.define('MyApp.store.Months', {
    extend: 'Ext.data.Store',
    alias: 'store.months',
    fields: ['id', 'value'],
    data: [
        { id: 'JANUARY', value: 'January' },
        { id: 'FEBRUARY', value: 'February' },
        { id: 'MARCH', value: 'March' },
        { id: 'APRIL', value: 'April' },
        { id: 'MAY', value: 'May' },
        { id: 'JUNE', value: 'June' },
    ]
})