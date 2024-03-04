Ext.define('MyApp.model.Album',{
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields:[
        '_id','userId','title'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'http://localhost:3000/albums',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    }

})