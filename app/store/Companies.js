Ext.define('MyApp.store.Companies', {
    extend: 'Ext.data.Store',
    alias: 'store.companies',
    model: 'MyApp.model.Company',
    groupField: 'budgetName',
    data: [
        { id: 1, companyName: 'Company A', budgetName: 'Salaries', budgetAmount: 100000 },
        { id: 2, companyName: 'Company A', budgetName: 'Petty Cash', budgetAmount: 5000 },
        { id: 3, companyName: 'Company A', budgetName: 'Assets', budgetAmount: 50000 },
        { id: 4, companyName: 'Company B', budgetName: 'Salaries', budgetAmount: 120000 },
        { id: 5, companyName: 'Company B', budgetName: 'Petty Cash', budgetAmount: 7000 },
        { id: 6, companyName: 'Company B', budgetName: 'Assets', budgetAmount: 60000 },
        { id: 7, companyName: 'Company C', budgetName: 'Salaries', budgetAmount: 80000 },
        { id: 8, companyName: 'Company C', budgetName: 'Petty Cash', budgetAmount: 3000 },
        { id: 9, companyName: 'Company C', budgetName: 'Assets', budgetAmount: 40000 },
        { id: 10, companyName: 'Company D', budgetName: 'Salaries', budgetAmount: 110000 },
        { id: 11, companyName: 'Company D', budgetName: 'Petty Cash', budgetAmount: 6000 },
        { id: 12, companyName: 'Company D', budgetName: 'Assets', budgetAmount: 55000 },
        { id: 13, companyName: 'Company E', budgetName: 'Salaries', budgetAmount: 95000 },
        { id: 14, companyName: 'Company E', budgetName: 'Petty Cash', budgetAmount: 4000 },
        { id: 15, companyName: 'Company E', budgetName: 'Assets', budgetAmount: 45000 }
    ]
});