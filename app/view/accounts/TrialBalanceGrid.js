Ext.define('MyApp.view.accounts.TrialBalanceGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'trialbalancegrid',
    height: 400,
    store: {
        type: 'trialbalance'
    },

    columns: [
        { text: 'Account', dataIndex: 'account', flex: 1, summaryType: 'count', summaryRenderer: function (value) { return 'Total (' + value + ')'; } },
        { text: 'Debit (Dr)', dataIndex: 'Dr', flex: 1, summaryType: 'sum', summaryRenderer: Ext.util.Format.numberRenderer('0,000.00') },
        { text: 'Credit (Cr)', dataIndex: 'Cr', flex: 1, summaryType: 'sum', summaryRenderer: Ext.util.Format.numberRenderer('0,000.00') }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [ {
            xtype: 'tbtext',
            text: 'Total'
        }, '->']
    }],

    listeners: {
        afterrender: function (grid) {
            var store = grid.getStore(),
                totalDr = 0,
                totalCr = 0;

            store.each(function (record) {
                totalDr += record.get('Dr');
                totalCr += record.get('Cr');
            });

            grid.down('toolbar').add({ xtype: 'tbtext', text: Ext.util.Format.number(totalDr, '0,000.00') });
            grid.down('toolbar').add({ xtype: 'tbtext', text: Ext.util.Format.number(totalCr, '0,000.00') });
        }
    }
});
