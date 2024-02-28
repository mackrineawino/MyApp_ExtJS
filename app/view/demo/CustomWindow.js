Ext.define("MyApp.view.demo.CustomWindow",
    {
        /** vscode-extjs-ignore-9 */
        extend: "Ext.window.Window",
        title: "City Window",
        height: 200,
        width: 520,
        autoShow: true,
        closable: true, // enables you to have x on the window 
        maximizable: true,  // []
        // maximized:true
        draggable: false,
        modal: true
    },
    function () {
        Ext.create("MyApp.view.demo.CustomWindow");
    })