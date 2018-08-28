Ext.define('SimpleApp.view.main.TreeView', {
    extend: 'Ext.tree.Panel',
    requires: ['SimpleApp.store.TreeStore'],
    xtype: 'tree-view',
    id: 'tree-view',

    store: Ext.create('treeStore'),

    rootVisible: false,
    bodyPadding: 10
});