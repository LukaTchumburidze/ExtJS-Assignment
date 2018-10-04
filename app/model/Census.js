Ext.define('SimpleApp.model.Census', {
    extend: 'SimpleApp.model.BaseModel',
    alias: 'census',

    fields: [
        {
            name: 'id'
        }, {
            name: 'population',
            type: 'number'
        }, {
            name: 'date',
            type: 'date',
            dateFormat:'d/m/Y',
        }, {
            name: 'parentId',
            reference: {
                parent: 'Animal',
                association: 'CensusToAnimal',
                role: 'Census',
                inverse: {
                    autoLoad: false,
                    getterName: 'children'
                }
            }
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/lukatchumburidze/rest/main/census',

        reader: {
            type: 'json',
        }
    }
});