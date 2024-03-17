Ext.define('MyApp.view.accounts.TrialBalance', {
    extend:'Ext.panel.Panel',
    xtype:'trialbalance',
    viewModel:{
        data:{
            record:null
        }
    },
    items:[
        {
            xtype:'trialbalancegrid'
        },
        
    ]
})