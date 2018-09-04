Ext.define('SimpleApp.view.form.AnimalForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'animal-form',
    xtype: 'animal-form',


    title: 'Animal',
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },

    items: [
        {
            fieldLabel: 'Georgian Name',
            name: 'AnimalGeoName',
            emptyText: 'ქართული დასახელება'
        },
        {
            fieldLabel: 'English Name',
            name: 'AnimalEngName',
            emptyText: 'English Name'
        },
        {
            fieldLabel: 'Latin Name',
            name: 'AnimalGeoName',
            emptyText: 'Latine Nomine'
        },
    ]
});