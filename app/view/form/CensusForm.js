Ext.define('SimpleApp.view.form.CensusForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'census-form',
    xtype: 'census-form',

    title: 'Population Census',
    defaults: {
        anchor: '100%'
    },

    items: [{
        fieldLabel: 'Amount',
        xtype: 'numberfield',
        minValue: 0,
        name: 'population',
        emptyText: 'Amount of Population'
    }, {
        fieldLabel: 'Date',
        xtype: 'datefield',
        name: 'date',
        emptyText: 'Date of Census'
    }]
});