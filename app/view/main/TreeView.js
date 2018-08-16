var storeObj = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [{
                text: 'detention',
                leaf: true
            },
            {
                text: 'homework',
                children: [{
                        text: 'book report',
                        leaf: true
                    },
                    {
                        text: 'algebra',
                        leaf: true
                    }
                ]
            },
            {
                text: 'buy lottery tickets',
                leaf: true
            }
        ]
    }
});

Ext.define('SimpleApp.view.main.TreeView', {
    extend: 'Ext.tree.Panel',
    xtype: 'tree-view',
    title: 'Just a tree',

    store: storeObj,

    rootVisible: false,
    bodyPadding: 10
});