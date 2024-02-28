Ext.define('MyApp.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'MyApp.model.Post',
    requires: ['MyApp.model.Post'],
    autoLoad:true

})