Ext.define('MyApp.view.posts.TodoGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.todogridviewcontroller',

    onAddTodoClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "todoformwindow",
        });
        wd.show();
    }
})