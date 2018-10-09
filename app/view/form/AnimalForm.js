Ext.define('SimpleApp.view.form.AnimalForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'animal-form',
    xtype: 'animal-form',

    requires: [
        'SimpleApp.view.main.MainModel'
    ],

    init: function () {
        console.log("hii12321232");
    },

    title: 'Animal',
    defaultType: 'textfield',
    defaults: {
        anchor: '100%',
    },

    items: [
        {
            fieldLabel: 'Georgian Name',
            name: 'geoName',
            emptyText: 'ქართული დასახელება',
        },
        {
            fieldLabel: 'English Name',
            name: 'engName',
            emptyText: 'English Name'
        },
        {
            fieldLabel: 'Latin Name',
            name: 'latName',
            emptyText: 'Latine Nomine'
        },
    ]
});