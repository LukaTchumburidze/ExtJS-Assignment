Ext.define('SimpleApp.model.Municipality', {
    extend: 'SimpleApp.model.BaseModel',
    alias: 'municipality',

    requires: [
        'SimpleApp.model.Animal',
        'SimpleApp.model.GridRow'
    ],

    fields: [{
        name: 'id'
    }, {
        name: 'EngName',
        type: 'string'
    }, {
        name: 'GeoName',
        type: 'string'
    }],

    proxy: {
        type: 'memory',

        data: [
            {
                "id": "europe",
                "EngName": "Europe",
                "GeoName": "ევროპა"
            },
            {
                "id": "africa",
                "EngName": "Africa",
                "GeoName": "აფრიკა"
            }],

        reader: {
            type: 'json'
        }
    }
});