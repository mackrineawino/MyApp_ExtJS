Ext.define('MyApp.view.todos.TodoFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todoformcontroller',
    init: function () {

    },
    onClearClick: function (btn, e, eOpts) {
        // get form 
        // reset
    },
    onSave: function (btn, e, eOpts) {
        let window = this.getView();
        let form = window.getReferences()['todoform'].getForm();
        let todoId = window.getReferences()['todoIdField'].getValue();
        let url = 'http://localhost:3000/todos';
        
        if (form.isValid()) {
            // Generate a unique numeric ID for the todo if it's not set
            if (!todoId) {
                todoId = Math.floor(Math.random() * 1000000); 
                window.getReferences()['todoIdField'].setValue(todoId); // Set the generated ID in the form field
            }
            
            // Add id field to the form data
            form.setValues({
                id: todoId
            });
            
            // Send ajax request to submit
            form.submit({
                method: todoId === '' ? 'POST' : 'PUT',
                url: todoId === '' ? url : `http://localhost:3000/todos/${todoId}`,
                submitEmptyText: false,
                success: function (form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                    // Close the window after successful submission
                    window.close();
                },
                failure: function (form, action) {
                    // Handle failures
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.');
        }
    }
})