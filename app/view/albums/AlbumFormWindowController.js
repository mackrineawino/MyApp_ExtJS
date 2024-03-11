Ext.define('MyApp.view.albums.AlbumFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.albumformcontroller',
    init: function () {

    },
    onClearClick: function (btn, e, eOpts) {
        // get form 
        // reset
    },
    onSaveClick: function (btn, e, eOpts) {
        let window = this.getView();
        let form = window.getReferences()['albumform'].getForm();
        let albumId = window.getReferences()['albumIdField'].getValue();
        let url = 'http://localhost:3000/albums';
        
        if (form.isValid()) {
            // Generate a unique numeric ID for the album if it's not set
            if (!albumId) {
                albumId = Math.floor(Math.random() * 10); 
                window.getReferences()['albumIdField'].setValue(albumId); // Set the generated ID in the form field
            }
            
            // Add id field to the form data
            form.setValues({
                id: albumId
            });
            
            // Send ajax request to submit
            form.submit({
                method: albumId === '' ? 'POST' : 'PUT',
                url: albumId === '' ? url : `http://localhost:3000/albums/${albumId}`,
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
    


        //get all values
        // submit to json place holder => backend
        // add the items to the grid
    },

})