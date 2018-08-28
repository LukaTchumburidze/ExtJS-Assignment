Ext.define('SimpleApp.model.Animal', {
    extend: 'SimpleApp.model.BaseModel',
    alias: 'animal',

    requires: [
        'SimpleApp.model.Census'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'EngName',
            type: 'string'
        },
        {
            name: 'GeoName',
            type: 'string'
        },
        {
            name: 'LatName',
            type: 'string'
        },
        {
            name: 'parentID',
            reference: {
                parent: 'Municipality',
                association: 'AnimalToMunicipality',
                role: 'Animal',
                inverse: {
                    autoLoad: false,
                    getterName: 'children'
                }
            }
        }
    ],

    proxy: {
        type: 'memory',

        data: [
            {
                "id": "wolf",
                "EngName": "Wolf",
                "GeoName": "მგელი",
                "LatName": "Lupus",
                "parentID": "europe"
            },
            {
                "id": "lion",
                "EngName": "Lion",
                "GeoName": "ლომი",
                "LatName": "Leo",
                "parentID": "africa"
            }],

        reader: {
            type: 'json',
        }
    }
});