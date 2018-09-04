Ext.define('SimpleApp.model.GridRow', {
    extend: 'SimpleApp.model.BaseModel',
    alias: 'gridRow',

    fields: [
        {
            name: 'MunicipalityEngName',
            type: 'string'
        },
        {
            name: 'MunicipalityGeoName',
            type: 'string'
        },
        {
            name: 'AnimalLatName',
            type: 'string'
        },
        {
            name: 'AnimalEngName',
            type: 'string'
        },
        {
            name: 'AnimalGeoName',
            type: 'string'
        },
        {
            name: 'CensusPopulation',
            type: 'string'
        },
        {
            name: 'CensusDate',
            type: 'date',
            dateFormat: 'd/m/Y'
        }
    ],

    proxy: {
        type: 'memory',

        data: [],

        reader: {
            type: 'json',
        }
    }
});