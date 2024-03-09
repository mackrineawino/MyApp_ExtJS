Ext.define('MyApp.store.Students', {
    extend: 'Ext.data.Store',
    alias: 'store.students',
    model: 'MyApp.model.Student',
    groupField: 'grade',
    data: [
        { id: 1, name: 'John', marks: 85, grade: 'B' },
        { id: 2, name: 'Alice', marks: 72, grade: 'C' },
        { id: 3, name: 'Bob', marks: 95, grade: 'A' },
        { id: 4, name: 'Emily', marks: 60, grade: 'D' },
        { id: 5, name: 'Michael', marks: 40, grade: 'E' },
        { id: 6, name: 'Sophia', marks: 78, grade: 'C' },
        { id: 7, name: 'Jacob', marks: 88, grade: 'B' },
        { id: 8, name: 'Olivia', marks: 92, grade: 'A' },
        { id: 9, name: 'William', marks: 75, grade: 'C' },
        { id: 10, name: 'Emma', marks: 82, grade: 'B' },
        { id: 11, name: 'James', marks: 68, grade: 'D' },
        { id: 12, name: 'Ava', marks: 94, grade: 'A' },
        { id: 13, name: 'Ethan', marks: 55, grade: 'E' },
        { id: 14, name: 'Mia', marks: 79, grade: 'C' },
        { id: 15, name: 'Alexander', marks: 90, grade: 'A' }
    ]
});
