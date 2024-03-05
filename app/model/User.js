Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        '_id', 
        'name',
        'username',
        'email',
        'street',
        'suite',
        'city',
        'zipcode',
    ],
    proxy:{
        type:'rest',
        url:'http://localhost:3000/users',
        reader:{
            type:'json',
            rootProperty:'rows',
            totalProperty:'totalCount'
        }
    }
})