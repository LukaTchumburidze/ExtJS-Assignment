Ext.define('SimpleApp.view.main.AnimalView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'SimpleApp.view.main.TreeView',
        'SimpleApp.view.main.FilterView'



        //
    ],

    sesion: {},

    xtype: 'layout-horizontal-box',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    defaults: {
        frame: true,
        bodyPadding: 10
    },

    referenceHolder: true,
    viewModel: 'main',

    items: [{
            title: 'Hierarchy',
            xtype: 'tree-view',
            //bind: '{municipalities}',
            margin: '0 10 0 0',
            flex: 1
        },
        {
            title: 'Data',
            xtype: 'grid',
            bind: '{municipalities}',
            reference: 'municipalityGrid',
            columns: [{
                text: 'Name',
                dataIndex: 'EngName'
                //TODO:///////
            }],
            margin: '0 10 0 0',
            flex: 1
        },
        {
            title: 'Filter',
            xtype: 'filter-form',
            width: 400
        }
    ]
});