Ext.define('SimpleApp.store.TreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'treeStore',

    selectedNodeType: null,

    requires: [
        'SimpleApp.model.HierarchyModel',
        'Ext.data.proxy.Rest'
    ],

    model: 'SimpleApp.model.HierarchyModel',

    root: {
        text: 'Hierarchy',
        id: 'src',
        expanded: true
    }
});