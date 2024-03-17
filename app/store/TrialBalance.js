Ext.define('MyApp.store.TrialBalance', {
    extend: 'Ext.data.Store',
    alias: 'store.trialbalance',
    model: 'MyApp.model.TrialBalance',

    data: [
        { account: 'bank', Dr: 134135000 },
        { account: 'Member contribution', Cr: 250000000 },
        { account: 'motor vehicle', Dr: 21000000 },
        { account: 'unit trust', Dr: 10000000 },
        { account: 'bonds', Dr: 10000000 },
        { account: 'share', Dr: 40000000 },
        { account: 'preference share', Dr: 23750000 },
        { account: 'ordinary share divident', Cr: 20000000 },
        { account: 'preference share divident', Cr: 75000000 },
        { account: 'accounts payable', Cr: 2500000 },
        { account: 'electric expence bill', Dr: 100000 },
        { account: 'water expence', Dr: 15000 },
        { account: 'rent expenses', Dr: 2500000 },
        { account: 'security expence', Dr: 70000 },
        { account: 'salaries expense', Dr: 2000000 },
        { account: 'cash', Dr: 500000 },
        { account: 'training revenue', Cr: 2000000 },
        { account: 'retreat expence', Dr: 1000000 },
        { account: 'laptop account', Dr: 180000 },
        { account: 'government rates', Dr: 50000 },
        { account: 'rba subscriptions', Dr: 200000 },
        { account: 'housing units', Dr: 100000000 },
        { account: 'pension software', Dr: 2000000 },
        { account: 'rental income', Dr: 1500000 },
        { account: 'emoluments', Dr: 500000 }
    ]
});
