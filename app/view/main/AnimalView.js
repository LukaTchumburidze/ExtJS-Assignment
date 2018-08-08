Ext.define('SimpleApp.view.main.AnimalView', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'SimpleApp.view.main.FilterView'
    ],

    xtype: 'layout-horizontal-box',
    
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    defaults: {
        frame: true,
        bodyPadding: 10
    },

    items: [{
            title: 'Hierarchy',
            margin: '0 10 0 0',
            width: 400
        },
        {
            title: 'Data',
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