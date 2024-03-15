Ext.define('MyApp.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    init: function () {
        let grid = this.getView(),
            store = grid.getStore();
        store.load();
    },
    onAddUserClicked: function (btn, e, eOpts) {
        console.log(btn.getText() + " was clicked");
        // Ext.create("MsTraining.view.demo.CustomWindow");
        var wd = Ext.create({
            xtype: "userformwindow",
        });
        wd.show();
    },
    onUserGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        // let postsStore = Ext.ComponentQuery.query('postgrid')[0].getStore();
        // let todosStore = Ext.ComponentQuery.query('todogrid')[0].getStore();
        // let albumsStore = Ext.ComponentQuery.query('albumgrid')[0].getStore();
        // console.log(record.get('_id'));
        // postsStore.reload({
        //     params: {
        //         userId: record.get('_id')
        //     }
        // });
        // todosStore.reload({
        //     params: {
        //         userId: record.get('_id')
        //     }
        // });
        // albumsStore.reload({
        //     params: {
        //         userId: record.get('_id')
        //     }
        // });

        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        vm.set("record", record)
        let userId = record.get('_id');
        Ext.util.History.add('users/' + userId);
    },
    onSelectUser: function (id) {
        let me = this,
            grid = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        let record = grid.getStore().findRecord('_id', id)
        vm.set("record", record)
        grid.getSelectionModel().select(record)
    },
    // onShowDetails: function (btn, e, eOpts) {
    //     let userGrid = this.getView();
    //     let lowerPanel = Ext.ComponentQuery.query('userDetails')[0];
    //     if (userGrid.getHeight() === 600) {
    //         userGrid.setHeight(300)
    //         lowerPanel.setHeight(300)
    //         btn.setText("Hide Details")
    //     } else {
    //         userGrid.setHeight(600)
    //         lowerPanel.setHeight(0)
    //         btn.setText("Show Details")
    //     }
    // },
    onShowDetails: function (btn, e, eOpts) {
        let userGrid = this.getView();
        let rightPanel = Ext.ComponentQuery.query('userDetails')[0];
        if (userGrid.getWidth() === 1000) {
            userGrid.setWidth(600)
            rightPanel.setWidth(300)
            btn.setText("Hide Details")
        } else {
            userGrid.setWidth(1000)
            rightPanel.setWidth(0)
            btn.setText("Show Details")
        }
    },
    onModelBinding: function (btn, e, eOpts) {
        Ext.create({
            xtype: 'modelbindingform'
        })
    },

})