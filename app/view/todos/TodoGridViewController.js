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
})