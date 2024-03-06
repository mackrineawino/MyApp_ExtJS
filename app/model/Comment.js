Ext.define('MyApp.model.Comment',{
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields:[
        '_id','postId','name','email','body'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'https://jsonplaceholder.typicode.com/comments',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    }

})