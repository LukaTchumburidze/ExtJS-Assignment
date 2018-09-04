Ext.define('SimpleApp.view.main.AnimalView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'SimpleApp.view.main.TreeView',
        'SimpleApp.view.main.FilterView'
    ],

    xtype: 'layout-horizontal-box',
    viewModel: {
        type: 'main'
    },


    layout: {
        type: 'hbox',
        align: 'stretch',
    },

    defaults: {
        frame: true,
        bodyPadding: 10
    },

    referenceHolder: true,

    items: [{
        title: 'Hierarchy',
        xtype: 'tree-view',
        margin: '0 10 0 0',
        flex: 1
    },
        {
            xtype: 'connection-grid',
            reference: 'connectionGrid',
            margin: '0 10 0 0',
            flex: 1
        },
        {
            title: 'Filter',
            xtype: 'filter-form',
            width: 400
        }
    ]
    // tbar: [
    //     '->',
    //     {
    //         text: 'Add Connection',
    //         handler: 'onAddConnection',
    //     },
    //     {
    //         text: 'Remove Connection',
    //         handler: 'onRemoveConnection',
    //         bind: {
    //             disabled: '{!isConnectionDisabled}'
    //         },
    //     }]
});