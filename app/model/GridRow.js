Ext.define('SimpleApp.model.GridRow', {
    extend: 'SimpleApp.model.BaseModel',
    alias: 'gridRow',

    fields: [
        {
            name: 'municipalityEngName',
            type: 'string'
        },
        {
            name: 'municipalityGeoName',
            type: 'string'
        },
        {
            name: 'animalLatName',
            type: 'string'
        },
        {
            name: 'animalEngName',
            type: 'string'
        },
        {
            name: 'animalGeoName',
            type: 'string'
        },
        {
            name: 'population',
            type: 'string'
        },
        {
            name: 'date',
            type: 'date',
            dateFormat: 'd/m/Y'
        }
    ]

    // proxy: {
    //     type: 'memory',
    //
    //     data: [],
    //
    //     reader: {
    //         type: 'json',
    //     }
    // }
});