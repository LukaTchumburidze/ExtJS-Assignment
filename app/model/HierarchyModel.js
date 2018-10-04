Ext.define('SimpleApp.model.HierarchyModel', {
    extend: 'Ext.data.TreeModel',
    alias: 'hierarchyModel',

    fields: [
        {
            name: 'id'
        }, {
            name: 'parentId'
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/lukatchumburidze/rest/main/tree',
    },
});