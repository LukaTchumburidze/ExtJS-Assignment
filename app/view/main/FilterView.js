Ext.define('SimpleApp.view.main.FilterView', {
    extend: 'Ext.form.Panel',
    xtype: 'filter-form',

    frame: true,
    bodyPadding: 10,
    scrollable: true,

    requires: [
        'SimpleApp.view.form.AnimalForm',
        'SimpleApp.view.form.MunicipalityForm'
    ],

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [
        {
            xtype: 'municipality-form'
        },
        {
            xtype: 'animal-form'
        },
        {
            xtype: 'census-form'
        }/*, {
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
    }*/],

    buttons: [{
        text: 'Filter',
        disabled: true,
        formBind: true
    }]
});