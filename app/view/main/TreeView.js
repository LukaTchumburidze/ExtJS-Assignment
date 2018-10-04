Ext.define('SimpleApp.view.main.TreeView', {
    extend: 'Ext.tree.Panel',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'SimpleApp.view.main.TreeView.Controller',
        'SimpleApp.store.TreeStore',
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