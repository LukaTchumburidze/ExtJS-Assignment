Ext.define('SimpleApp.view.form.MunicipalityForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'municipality-form',
    xtype: 'municipality-form',

    title: 'Municipality',
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },

    items: [
        {
            fieldLabel: 'Georgian Name',
            name: 'engName',
            emptyText: 'ქართული დასახელება'
        },
        {
            fieldLabel: 'English Name',
            name: 'geoName',
            emptyText: 'English Name'
        }
    ]
});