Ext.define('SimpleApp.model.Animal', {
    extend: 'SimpleApp.model.BaseModel',
    alias: 'animal',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'engName',
            type: 'string'
        },
        {
            name: 'geoName',
            type: 'string'
        },
        {
            name: 'latName',
            type: 'string'
        },
        {
            name: 'parentId',
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
        type: 'rest',
        url: 'http://localhost:8080/lukatchumburidze/rest/main/animal',

        reader: {
            type: 'json',
        }
    }
});