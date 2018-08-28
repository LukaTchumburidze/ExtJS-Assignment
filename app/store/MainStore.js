Ext.define('SimpleApp.store.MainStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'mainStore',
    alternateClassName: 'mainStore',

    model: 'SimpleApp.model.BaseModel',

    requires: [
        'SimpleApp.store.Animals',
        'SimpleApp.store.Municipalities'
    ],

    proxy: {
        type: 'memory',

        data: [{
            EngName: "Wolf",
            GeoName: "მგელი",
            LatName: "Lupus",
            parentID: 'europe'
        }, {
            EngName: "Lion",
            GeoName: "ლომი",
            LatName: "Leo",
            parentID: 'europe'
        }, {
            id: 'europe',
            EngName: 'Europe',
            GeoName: 'ევროპა'
        }, {
            id: 'africa',
            EngName: 'Africa',
            GeoName: 'აფრიკა'
        }],

        reader: {
            type: 'json'
        }
    }
});