Ext.define('SimpleApp.view.window.NewItemWindow', {
    extend: 'Ext.window.Window',
    title: 'Add Item: ',
    width: 500,
    height: 800,
    modal: true,

    requires: [
        'SimpleApp.view.main.MainModel'
    ],

    viewModel: {
        type: 'main'
    },

    items: [
        {
            xtype: 'fieldset',
            title: 'Choose item type',
            items: [
                {
                    xtype: 'combobox',
                    references: 'modelcombo',
                    fieldLabel: 'Model Name',
                    displayField: 'name',
                    name: 'Item Type',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['name', 'viewXtype'],
                        data: [
                            {name: 'Municipality', viewXtype: 'municipality-fields'},
                            {name: 'Animal', viewXtype: 'animal-fields'},
                            {name: 'Census', viewXtype: 'census-fields'}
                        ]
                    }),

                    bind: {
                        selection: '{chosenModelFieldset}'
                    }
                }
            ],
        },
        {
            xtype: 'fieldset',
            viewModel: {
                type: 'main'
            },
            bind: {
                title: '{fieldSetName}'
            }
        },
        {
            fbar: [
                {
                    text: 'Submit',
                    formBind: true,
                    itemId: 'submit'
                }
            ]
        }
    ]
});