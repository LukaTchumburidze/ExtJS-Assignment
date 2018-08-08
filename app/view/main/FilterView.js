Ext.define('SimpleApp.view.main.FilterView', {
    extend: 'Ext.form.Panel',
    xtype: 'filter-form',

    frame: true,
    bodyPadding: 10,
    scrollable: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'Animal',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
                fieldLabel: 'Georgian Name',
                name: 'GeoName',
                emptyText: 'ქართული დასახელება'
            },
            {
                fieldLabel: 'English Name',
                name: 'EngName',
                emptyText: 'English Name'
            },
            {
                fieldLabel: 'Latin Name',
                name: 'GeoName',
                emptyText: 'Latine Nomine'
            },
        ]
    }, {
        xtype: 'fieldset',
        title: 'Population Census',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Amount',
            xtype: 'numberfield',
            name: 'Amount',
            emptyText: 'Amount of Population'
        }, {
            fieldLabel: 'Date',
            xtype: 'datefield',
            name: 'Date',
            emptyText: 'Date of Census'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Source',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Georgian Name',
            name: 'GeoName',
            emptyText: 'ქართული დასახელება'
        }, {
            fieldLabel: 'English Name',
            name: 'EngName',
            emptyText: 'English Name'
        }, {
            fieldLabel: 'Document',
            name: 'Document',
            emptyText: 'Name of Document'
        }]

    }],

    buttons: [{
        text: 'Filter',
        disabled: true,
        formBind: true
    }]
});