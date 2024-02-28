Ext.define(
    "MyApp.model.City",
    {
        extend: "Ext.data.Model",
        fields: [
          "id",
          "name",
          { name: "phone", type: "string" },
          { name: "age", type: "int"},
        ],
      }, 
    
    function(){
        var city=Ext.create("MyApp.model.City");
        console.log(city);
    }
);