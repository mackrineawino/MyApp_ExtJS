Ext.define('MyApp.view.students.StudentGroupingGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentgrid',
    title: 'Student Grouping',
    scrollable: true, 
    store: {
        type: 'students'
    },
    columns: [
        { text: 'Student Id', dataIndex: 'id', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Marks', dataIndex: 'marks', flex: 1 }
    ],
    features: [{ ftype: 'grouping' }],

})