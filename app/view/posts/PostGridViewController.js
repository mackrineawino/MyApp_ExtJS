Ext.define('MyApp.view.posts.PostGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',
    mixins: ['MyApp.mixin.GridMixin'],

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
    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me = this;
        let record = this.getSelectedRecordByXType('postgrid');
        let grid = me.getView()
        if (record) {
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the post with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/posts/${recordId}`,
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
                } else {
                    Ext.Msg.alert('Cancellation', 'Alright. Thank you!!!');
                }
            });

        }
    },


    onPostGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        vm.set("record", record)
        let postId = record.get('_id');
        Ext.util.History.add('posts/' + postId);


    },
    onShowDetails: function (btn, e, eOpts) {
        let postGrid = this.getView();
        let lowerPanel = Ext.ComponentQuery.query('postDetails')[0];
        if (postGrid.getHeight() === 400) {
            postGrid.setHeight(200)
            lowerPanel.setHeight(200)
            btn.setText("Hide Details")
        } else {
            postGrid.setHeight(400)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },
    onSelectPost: function (id) {
        let me = this,
            grid = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        let record = grid.getStore().findRecord('_id', id)
        vm.set("record", record)
        grid.getSelectionModel().select(record)
    }
})