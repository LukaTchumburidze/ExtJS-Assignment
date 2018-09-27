Ext.define('SimpleApp.view.main.TreeView', {
    extend: 'Ext.tree.Panel',
    requires: [
        'SimpleApp.store.TreeStore',
        'SimpleApp.view.main.TreeView.Controller'
    ],
    xtype: 'tree-view',
    id: 'tree-view',

    controller: 'treeview',
    viewModel: {
        type: 'main'
    },

    bind: {
        selection: '{selectedItem}'
    },

    listeners: {
        select: 'nodeSelect'
    },
//TODO
    store: Ext.create('treeStore'),

    rootVisible: false,
    bodyPadding: 10,
    toggleOnDblClick: true,

    tbar: [
        '->',
        {
            text: 'Add Item',
            handler: 'onAddItem',
            bind: {
                disabled: '{censusSelected}'
            }
        },
        {
            text: 'Edit Item',
            handler: 'onEditItem',
            bind: {
                disabled: '{!selectedItem}'
            }
        },
        {
            text: 'Remove Item',
            handler: 'onRemoveItem',
            bind: {
                disabled: '{!selectedItem}'
            },
        }]
});