Ext.define('MyApp.view.layouts.ViewLayoutsController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewlayoutscontroller',

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
      onCheckoutFormClicked:function(btn,e,eOpts){
        Ext.create({
            xtype: "checkoutform",
          });
      },
})