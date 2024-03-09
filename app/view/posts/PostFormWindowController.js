Ext.define('MyApp.view.posts.PostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformcontroller',
    init: function () {

    },
    onClearClick: function (btn, e, eOpts) {
        // get form 
        // reset
    },
    onSaveClick: function (btn, e, eOpts) {
        let window = this.getView();
        let form = window.getReferences()['postform'].getForm();
        let postId = window.getReferences()['postIdField'].getValue();
        let url = 'http://localhost:3000/posts';
        
        if (form.isValid()) {
            // Generate a unique ID for the post
            if (!postId) {
                postId = Math.floor(Math.random() * 1000000); 
                window.getReferences()['postIdField'].setValue(postId); // Set the generated ID in the form field
            }
            
            // Send ajax request to submit
            form.submit({
                method: postId === '' ? 'POST' : 'PUT',
                url: postId === '' ? url : `http://localhost:3000/posts/${postId}`,
                submitEmptyText: false,
                success: function (form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                    // Add the record to the post store -> post grid
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
    
    },

})