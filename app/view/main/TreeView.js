Ext.define('SimpleApp.view.main.TreeView', {
    extend: 'Ext.tree.Panel',
    requires: ['SimpleApp.store.TreeStore'],
    xtype: 'tree-view',
    id: 'tree-view',

    selecionModel: {

        listeners: {
            selectionchange: function () {
                console.log('Changed');
            }
        }
    },

    listeners: {
        beforeselect: function () {
            console.log ("hiiiiiiiiiiiiiiiiii");
        }
    },

    store: Ext.create('treeStore'),

    rootVisible: false,
    bodyPadding: 10
});