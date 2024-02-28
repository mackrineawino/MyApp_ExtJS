Ext.define("MyApp.model.Person",
  {
    name: "Unknown",
    requires: ['MyApp.util.Util','MyApp.util.Math'],

    constructor: function (name) {
      if (name) {
        this.name = name;
      }
    },

    eat: function (foodType) {
      MyApp.util.Util.logInfo(this.name + " is eating: " + foodType)
      console.log(MyApp.util.Math.PI);

    },
  },
  () => {
    var bob = Ext.create("MyApp.model.Person", "Bob");
    bob.eat("Salad"); // alert("Bob is eating: Salad");
  }
);
