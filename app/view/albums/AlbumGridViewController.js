Ext.define('MyApp.view.albums.AlbumGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.albumgridviewcontroller',

    onAddAlbumClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: 'albumform',
            viewModel: {
                data: {
                    newTitle: "Add New Album"
                }
            }
        })
    },
    onViewAlbum: function (btn, e, eOpts) {
        let grid = this.getView(),
        record = grid.getSelectionModel().getSelection()[0];
        Ext.create({
            xtype: 'albumform',
            viewModel: {
                data: {
                    newTitle: "Update Album",
                    record: record
                }
            }
        })
    }
})
