Ext.define('SimpleApp.view.main.ConnectionGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'connection-grid',
    xtype: 'connection-grid',

    requires: [
        'Ext.grid.filters.Filters',
        'Ext.toolbar.Paging',
        'SimpleApp.view.main.MainModel'
    ],

    title: 'Connections',
    viewModel: 'main',

    bind: {
        store: '{gridStore}'
    },

    plugins: 'gridfilters',

    columns: [
        {
            text: 'Municipality Name (Eng)',
            alt: 'Municipality Name (Eng)',
            dataIndex: 'municipalityEngName',
            flex: 1,
            filter: 'string'
        },
        {
            text: 'Municipality Name (Geo)',
            dataIndex: 'geoName',
            type: 'string',
            filter: 'string'
        },
        {
            text: 'Animal Name (Lat)',
            dataIndex: 'animalLatName',
            flex: 1,
            filter: 'string'
        },
        {
            text: 'Animal Name (Eng)',
            dataIndex: 'animalEngName',
            flex: 1,
            filter: 'string'
        },
        {
            text: 'Animal Name (Geo)',
            dataIndex: 'animalGeoName',
            flex: 1,
            filter: 'string'
        },
        {
            text: 'Census Population',
            dataIndex: 'population',
            flex: 1,
            filter: 'number',
        },
        {
            text: 'Census Date',
            dataIndex: 'date',
            flex: 1,
            filter: 'date'
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