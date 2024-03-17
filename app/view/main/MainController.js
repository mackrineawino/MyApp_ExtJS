Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    init: function() {
        this.listen({
            component: {
                'mainpanel': {
                    tabchange: 'onTabChange' // Listen to the tabchange event of mainpanel
                }
            }
        });
    },
    onLogout: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('MyAppAuthToken');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('loginwindow');
        Ext.util.History.add('login');

    },


    routes: {
        'home': 'onHomeRoute',
        'users|albums|posts|todos|trialbalance': {
            action: 'onRoute',
            before: 'onBeforeRoute'
        },
        'posts/:id': {
            action: 'onPostSelect',
            before: 'onBeforePostSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
        'users/:id': {
            action: 'onUserSelect',
            before: 'onBeforeUserSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
        'todos/:id': {
            action: 'onTodoSelect',
            before: 'onBeforeTodoSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
        'albums/:id': {
            action: 'onAlbumSelect',
            before: 'onBeforeAlbumSelect',
            conditions: {
                ':id': '([0-9]+)'
            }
        },

    },
    onHomeRoute: function () {
        let mainPanel = this.getMainPanel();
        if (mainPanel) {
            mainPanel.setActiveTab(0)
        }
    },
    onRoute: function () {
        var me = this,
            hash = Ext.util.History.getToken(),
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);
    },
    onBeforeRoute: function (action) {
        var hash = Ext.util.History.getToken();
        var isLoggedIn = localStorage.getItem('MyAppAuthToken');
        if (isLoggedIn || hash === 'login') {
            action.resume();
        } else {
            Ext.util.History.add('login');
            this.redirectTo('login');
            
        }
    },
    locateMenuItem: function (mainMenu, className) {
        let rootNode = mainMenu.getRootNode();
        let record = rootNode.findChild('className', className, true);
        this.openTab(record)
        mainMenu.getSelectionModel().select(record)
    },
    getMainPanel: function () {
        return Ext.ComponentQuery.query('mainpanel')[0];
    },
    getMainMenu: function () {
        return Ext.ComponentQuery.query('mainmenu')[0];
    },
    getPostGrid: function () {
        return Ext.ComponentQuery.query('postgrid')[0];
    },
    getUserGrid: function () {
        return Ext.ComponentQuery.query('usergrid')[0];
    },
    getTodoGrid: function () {
        return Ext.ComponentQuery.query('todogrid')[0];
    },
    getAlbumGrid: function () {
        return Ext.ComponentQuery.query('albumgrid')[0];
    },

    onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
        this.redirectTo(record.get('className'))
    },
    onTabChange: function(tabPanel, newTab, oldTab) {
        var className = newTab.className;
        Ext.util.History.add(className);

    },

    openTab: function (record) {
        if (record) {
            let mainPanel = this.getMainPanel();
            let activeTab = mainPanel.items.findBy((tabItem) => tabItem.title === record.get('text'));
            if (!activeTab && record.get('leaf')) {
                //create new tab using details from the record
                activeTab = mainPanel.add({
                    closable: true,
                    xtype: record.get('className'),
                    title: record.get('text'),
                    iconCls: record.get('iconCls'),
                    className: record.get('className')
                })
            }
            mainPanel.setActiveTab(activeTab)
        }
    },


    onPostSelect: function (id) {
        this.getPostGrid().fireEvent('selectpost', id)
    },
    onUserSelect: function (id) {
        this.getUserGrid().fireEvent('selectuser', id)
    },
    onTodoSelect: function (id) {
        this.getUserGrid().fireEvent('selecttodo', id)
    },
    onAlbumSelect: function (id) {
        this.getAlbumGrid().fireEvent('selectalbum', id)
    },
    onBeforePostSelect: function (id, action) {
        var me = this,
            hash = 'posts',
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);

        //get reference to grid
        let grid = this.getPostGrid();

        //get store
        let store = grid.getStore()
        //find record with the id
        let record = store.findRecord('_id', id);
        if (record) {
            action.resume()

        } else {
            action.stop()
        }


    },
    onBeforeUserSelect: function (id, action) {
        var me = this,
            hash = 'users',
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);

        //get reference to grid
        let grid = this.getUserGrid();

        //get store
        let store = grid.getStore()
        //find record with the id
        let record = store.findRecord('_id', id);
        if (record) {
            action.resume()

        } else {
            action.stop()
        }


    },
    onBeforeTodoSelect: function (id, action) {
        var me = this,
            hash = 'todos',
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);

        //get reference to grid
        let grid = this.getTodoGrid();

        //get store
        let store = grid.getStore()
        //find record with the id
        let record = store.findRecord('_id', id);
        if (record) {
            action.resume()

        } else {
            action.stop()
        }


    },

    onBeforeAlbumSelect: function (id, action) {
        var me = this,
            hash = 'albums',
            mainMenu = me.getMainMenu();
        me.locateMenuItem(mainMenu, hash);

        //get reference to grid
        let grid = this.getAlbumGrid();

        //get store
        let store = grid.getStore()
        //find record with the id
        let record = store.findRecord('_id', id);
        if (record) {
            action.resume()

        } else {
            action.stop()
        }


    },


});
