Ext.define("MyApp.view.demo.CustomWindow",
    {
        extend: "Ext.window.Window",
        title: "City Window",
        height: 200,
        width: 520,
        autoShow: false,
        closable: true, // enables you to have x on the window 
        maximizable: true,  // []
        // maximized:true
        draggable: false,
        modal: true
    },
    function () {
        Ext.create("MyApp.view.demo.CustomWindow");
    })