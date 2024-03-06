Ext.define('MyApp.view.comments.CommentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'commentgrid',
    reference:'commentgrid',
    controller: 'commentgridviewcontroller',
    title:'Comments',
    store: {
        type: 'comments'
    },
    tbar: [{
        text: 'Add Comment',
        listeners: {
            click: 'onAddCommentClicked'
        }
    },
   
    ],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'name', text: 'Name', flex: 1 },
        { dataIndex: 'email', text: 'Email', flex: 1 },
        { dataIndex: 'body', text: 'Body', flex: 2, sortable: false },
        { dataIndex: 'postId', text: 'Post ID', sortable: false, hidden: false }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,
    height: 500,

})