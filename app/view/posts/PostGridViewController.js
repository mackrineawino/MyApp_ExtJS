Ext.define('MyApp.view.posts.PostGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',

    onAddPostClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "postformwindow",
        });
        wd.show();
    },
    onFormFieldsClicked:function(btn,e,eOpts){
        Ext.create({
              xtype: "formfieldsdemo",
          });
      },
      onBorderLayoutsClicked:function(btn,e,eOpts){
        Ext.create({
            xtype: "borderlayout",
          });
      },
      onHBoxVboxLayoutsClicked:function(btn,e,eOpts){
        Ext.create({
            xtype: "hboxvboxlayout",
          });
      },
      onColumnLayoutsClicked:function(btn,e,eOpts){
        Ext.create({
            xtype: "columnlayout",
          });
      },
      onAccordionLayoutsClicked:function(btn,e,eOpts){
        Ext.create({
            xtype: "accordionlayout",
          });
      },
})