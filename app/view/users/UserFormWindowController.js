Ext.define('MyApp.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',
    init: function () {

    },
    onClearClick: function (btn, e, eOpts) {
        // get form 
        // reset
    },
    onSaveClick: function (btn, e, eOpts) {
        let window = this.getView();
        let form = window.getReferences()['userform'].getForm();
        let userId = window.getReferences()['UserIdField'].getValue(); // Corrected reference

        if (form.isValid()) {
            if (!userId) {
                userId = Math.floor(Math.random() * 1000000);
                window.getReferences()['UserIdField'].setValue(userId); // Set the generated ID in the form field
            }

            //send ajax request to submit
            form.submit({
                method: 'POST',
                url: 'http://localhost:3000/users',
                success: function (form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                    // add the record to the user store
                },
                failure: function (form, action) {
                    // handle failures
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        } else {
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }
    },

})