Ext.define('MyApp.model.Album',{
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields:[
        'id','userId','title'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'https://jsonplaceholder.typicode.com/albums',
        reader: {
            type: 'json',
        }
    }

})