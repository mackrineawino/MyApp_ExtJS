Ext.define('MyApp.view.posts.AlbumGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.albumgridviewcontroller',

    onAddAlbumClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "albumformwindow",
        });
        wd.show();
    }
})