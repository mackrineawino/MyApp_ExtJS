Ext.define('MyApp.view.comments.CommentGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.commentgridviewcontroller',
    mixins: ['MyApp.mixin.GridMixin'],

    onAddCommentClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "commentformwindow",
        });
        wd.show();
    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me=this;
        let record = this.getSelectedRecordByXType('commentgrid');
        let grid = me.getView();
        if (record){
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the comment with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/comments/${recordId}`,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var obj = Ext.decode(response.responseText);
                            me.showToast("Operation successful")
                            grid.getStore().reload()
                        },

                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        }
                    });
                }else{
                    Ext.Msg.alert('Cancellation', 'Alright. Thank you!!!');
                }
            });

        }
    },
  })