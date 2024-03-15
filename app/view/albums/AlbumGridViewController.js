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
    onAlbumGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        vm.set("record", record)
        let albumId = record.get('_id');
        Ext.util.History.add('albums/' + albumId);


    },
    onShowDetails: function (btn, e, eOpts) {
        let albumGrid = this.getView();
        let lowerPanel = Ext.ComponentQuery.query('albumDetails')[0];
        if (albumGrid.getHeight() === 400) {
            albumGrid.setHeight(200)
            lowerPanel.setHeight(200)
            btn.setText("Hide Details")
        } else {
            albumGrid.setHeight(400)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },
    onSelectAlbum: function (id) {
        let me = this,
            grid = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        let record = grid.getStore().findRecord('_id', id)
        vm.set("record", record)
        grid.getSelectionModel().select(record)
    }
})
