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
        name: 'engName',
        type: 'string'
    }, {
        name: 'geoName',
        type: 'string'
    }, {
        name: 'parentId',
        type: 'string'
    }],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/helloworld-rs/rest/main/municipality',

        reader: {
            type: 'json',
        }
    }
});