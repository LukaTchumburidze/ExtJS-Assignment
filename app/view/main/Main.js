Ext.define('SimpleApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'layout-cardtabs',

    requires: [
        'SimpleApp.view.main.AnimalView',
        'Ext.layout.container.Card',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SimpleApp.view.main.MunicipalityPage',
        'SimpleApp.view.main.MainController',
        'SimpleApp.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    bodyPadding: 10,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Below is the data!'
            },
            flex: 0
        }
    },

    items: [
        {
            title: 'Animal Data',
            items: [{
                xtype: 'layout-horizontal-box'
            }]
        },
        {
            title: 'Municipality page',
            items: [ {
                xtype: 'municipality-page'
                }
            ]
        }
    ]
});
