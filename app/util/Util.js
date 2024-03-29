Ext.define('MyApp.util.Util',{
    statics:{
    logInfo: function(message){
        console.log(message)
    },
    formatNumber: function (value) {
        let v = new Number(value);
        if (v > 0) {
            let formatted = Ext.util.Format.number(value, '###,###.00');
            return `<h1 style="color:green">${formatted}</h1>`;

        }
        else {
            let formatted = Ext.util.Format.number(value, '###,###.00');
            return `<h1 style="color:red">${formatted}</h1>`;

        }
    },
    decodeJSON: function (text) {
        var result = Ext.JSON.decode(text, true);
        if (!result) {
            result = {};
            result.success = false;
            result.msg = text;
        }
        return result;
    },
    showErrorMsg: function (text) {
        Ext.Msg.show({
            title: 'Error!',
            msg: text,
            icon: Ext.Msg.ERROR,
            buttons: Ext.Msg.OK
        });
    },
    showToast: function (text) {
        Ext.toast({
            html: text,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400
        });
    },
    handleFormFailure: function (action) {
        var me = this,
            result =
                MsTraining.util.Util.decodeJSON(action.response.responseText);
        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
                me.showErrorMsg('Form fields may not be submitted with invalid values'); //#1
                break;
            case Ext.form.action.Action.CONNECT_FAILURE:
                me.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.action.Action.SERVER_INVALID:
                me.showErrorMsg(result.msg);
        }
    },
    required: '<span style="color:red;font-weight:bold" dataqtip="Required"> *</span>',
    baseUrl: 'http://localhost:8080/api'
}
})