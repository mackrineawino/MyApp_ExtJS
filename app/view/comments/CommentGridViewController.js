Ext.define('MyApp.view.comments.CommentGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.commentgridviewcontroller',

    onAddCommentClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "commentformwindow",
        });
        wd.show();
    },
  })