Ext.define('MyApp.view.companies.CompanySummeryGroupingGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'companygrid',
    title: 'Company Budget Avg summery',
    scrollable: true,
    store: {
        type: 'companies'
    },
    width: 700,
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: 'Budget Name: {name}',
        showSummaryRow: true
    }],
    columns: [{
        dataIndex: 'companyName',
        text: 'Company Name',
        flex: 2,
        summaryType: 'count',
        summaryRenderer: function (value) {
            return Ext.String.format('{0} companyName{1}', value, value !== 1 ? 's' : '');
        }
    }, {
        dataIndex: 'budgetAmount',
        text: 'Budget Amount',
        flex: 2,
        summaryType: 'average',
        //   summaryType: 'min',
        // summaryType: 'max'
    },
    ]
});