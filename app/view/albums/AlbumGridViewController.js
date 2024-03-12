Ext.define('MyApp.view.albums.AlbumGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.albumgridviewcontroller',
    mixins: ['MyApp.mixin.GridMixin'],
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
    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me=this;
        let record = this.getSelectedRecordByXType('albumgrid');
        let grid = me.getView()
        if (record){
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the album with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/albums/${recordId}`,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var obj = Ext.decode(response.responseText);
                            me.showToast("Operation successful")
                            grid.getStore().reload()
                        },

                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        }
                    });
                }else{
                    Ext.Msg.alert('Cancellation', 'Alright. Thank you!!!');
                }
            });

        }
    },
})
