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
            dateFormat:'d/m/Y',
            type: 'date'
        }, {
            name: 'parentID',
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
        type: 'memory',

        data: [
            {
                "id": "1",
                "population": "251",
                "date": "28/08/2018",
                "parentID": "wolf"
            },
            {
                "id": "2",
                "population": "252",
                "date": "29/08/2018",
                "parentID": "wolf"
            },
            {
                "id": "3",
                "population": "253",
                "date": "30/08/2018",
                "parentID": "wolf"
            },
            {
                "id": "4",
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "254",
                "date": "31/08/2018",
                "parentID": "wolf"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            },
            {
                "population": "555",
                "date": "05/09/2018",
                "parentID": "lion"
            }
        ],

        reader: {
            type: 'json',
        }
    }
});