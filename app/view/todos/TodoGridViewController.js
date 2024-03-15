Ext.define('MyApp.view.todos.TodoGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.todogridcontroller',
    mixins: ['MyApp.mixin.GridMixin'],

    onAddTodoClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: 'todoform',
            viewModel: {
                data: {
                    newTitle: "Add New Todo"
                }
            }
        })
    },
    onViewTodo: function (btn, e, eOpts) {
        let record = this.getSelectedRecordByXType('todogrid');
        Ext.create({
            xtype: 'todoform',
            viewModel: {
                data: {
                    newTitle: "Update Todo",
                    record: record
                }
            }
        })
    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me=this;
        let record = this.getSelectedRecordByXType('todogrid');
        let grid = me.getView()
        if (record){
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the todo with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/todos/${recordId}`,
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
    onSelectTodo: function (id) {
        let me = this,
            grid = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        let record = grid.getStore().findRecord('_id', id)
        vm.set("record", record)
        grid.getSelectionModel().select(record)
    },
     onShowDetails: function (btn, e, eOpts) {
        let todoGrid = this.getView();
        let lowerPanel = Ext.ComponentQuery.query('todoDetails')[0];
        if (todoGrid.getHeight() === 400) {
            todoGrid.setHeight(200)
            lowerPanel.setHeight(200)
            btn.setText("Hide Details")
        } else {
            todoGrid.setHeight(400)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },
    onTodoGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();
        vm.set("record", record)
        let todoId = record.get('_id');
        Ext.util.History.add('todos/' + todoId);


    },
})