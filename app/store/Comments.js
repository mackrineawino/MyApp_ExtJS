Ext.define('MyApp.store.Comments', {
    extend: 'Ext.data.Store',
    alias: 'store.comments',
    model: 'MyApp.model.Comment',
    requires: ['MyApp.model.Comment'],
    autoLoad: true
})