Ext.define('SimpleApp.model.HierarchyModel', {
    extend: 'Ext.data.TreeModel',
    alias: 'hierarchyModel',

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/lukatchumburidze/rest/tree',
    },
});