Ext.define('SimpleApp.model.Municipality', {
    extend: 'SimpleApp.model.BaseModel',

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

// data: [
//     {
//         "id": "europe",
//         "EngName": "Europe",
//         "GeoName": "ევროპა",
//         "animals": [
//             {
//                 "id": "wolf",
//                 "EngName": "Wolf",
//                 "GeoName": "მგელი",
//                 "LatName": "Lupus",
//                 "parentID": "europe"
//             }
//         ]
//     },
//     {
//         "id": "africa",
//         "EngName": "Africa",
//         "GeoName": "აფრიკა",
//         "animals": [
//             {
//                 "id": "lion",
//                 "EngName": "Lion",
//                 "GeoName": "ლომი",
//                 "LatName": "Leo",
//                 "parentID": "europe"
//             }
//         ]
//     }],