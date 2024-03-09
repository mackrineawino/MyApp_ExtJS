Ext.define('MyApp.view.posts.PostGridViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.postgridviewcontroller',

  onAddPostClicked: function (btn, e, eOpts) {
    Ext.create({
        xtype: 'postform',
        viewModel: {
            data: {
                newTitle: "Add New Post"
            }
        }
    })
},
  onViewPost: function (btn, e, eOpts) {
    let grid = this.getView(),
    record = grid.getSelectionModel().getSelection()[0];
    Ext.create({
        xtype: 'postform',
        viewModel: {
            data: {
                newTitle: "Update Post",
                record: record
            }
        }
    })
}
})