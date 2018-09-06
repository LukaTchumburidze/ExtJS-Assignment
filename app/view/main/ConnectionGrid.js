Ext.define('SimpleApp.view.main.ConnectionGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'connection-grid',
    xtype: 'connection-grid',

    requires: [
        'Ext.toolbar.Paging',
        'SimpleApp.view.main.MainModel'
    ],

    title: 'Connections',
    viewModel: 'main',

    bind: {
        store: '{gridStore}'
    },

    columns: [
        {
            text: 'Municipality Name (Eng)',
            alt: 'Municipality Name (Eng)',
            dataIndex: 'MunicipalityEngName',
            flex: 1
        },
        {
            text: 'Municipality Name (Geo)',
            dataIndex: 'MunicipalityGeoName',
            type: 'string'
        },
        {
            text: 'Animal Name (Lat)',
            dataIndex: 'AnimalLatName',
            flex: 1
        },
        {
            text: 'Animal Name (Eng)',
            dataIndex: 'AnimalEngName',
            flex: 1
        },
        {
            text: 'Animal Name (Geo)',
            dataIndex: 'AnimalGeoName',
            flex: 1
        },
        {
            text: 'Census Population',
            dataIndex: 'CensusPopulation',
            flex: 1
        },
        {
            text: 'Census Date',
            dataIndex: 'CensusDate',
            flex: 1
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',

        items: ['-', {
            bind: '{expanded ? "Hide Preview" : "Show Preview"}',
            pressed: '{expanded}',
            enableToggle: true,
            toggleHandler: 'onToggleExpanded'
        }]
    }
});