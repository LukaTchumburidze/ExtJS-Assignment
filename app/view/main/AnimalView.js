Ext.define('SimpleApp.view.main.AnimalView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'SimpleApp.view.main.TreeView'
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
        height: 840,
        bodyPadding: 10
    },

    referenceHolder: true,

    items: [
        {
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
        }
    ]
});