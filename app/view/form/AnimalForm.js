Ext.define('SimpleApp.view.form.AnimalForm', {
    extend: 'Ext.form.FieldSet',
    alias: 'animal-form',
    xtype: 'animal-form',

    requires: [
        'SimpleApp.view.main.MainModel'
    ],

    viewModel: {
        type: 'main'
    },

    constructor: function () {
        console.log("sssssssasdasdasdasdasdasd");
        console.log(this.lookupReference("dog"));

        this.callParent(arguments);
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
            bind: {
                disabled: '{editItem}'
            }

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