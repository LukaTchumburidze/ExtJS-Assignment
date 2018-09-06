Ext.define('SimpleApp.store.TreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'treeStore',
    storeId: 'treeStore',

    root: {
        text: 'Ext JS',
        expanded: true,
        children: []
    },

    listeners: {
        nodebeforeexpand: function (node) {
            // if (node.firstChild.data.text !== 'empty') {
            //     return;
            // }
            console.log('expanded');
            if (node.firstChild.data.text !== 'empty') {
                return;
            }
            var emptyChild = {
                text: 'empty',
                expanded: true,
                children: []
            };

            console.log(node);
            let depth = node.getDepth();
            let mapping = ['', 'municipalities', 'animals', 'censuses'];
            let curStore = Ext.data.StoreManager.get(mapping[depth]);
            curStore.load({
                callback: function () {
                    let children = curStore.getById(node.data.id).children();
                    console.log('loaded curStore');
                    console.log(curStore);
                    children.load({
                        callback: function () {
                            console.log('children loaded');
                            console.log(children);
                            node.removeChild(node.firstChild);
                            node.data.children = [];
                            for (let i = 0; i < children.count(); i ++) {
                                node.appendChild({
                                    text: children.getAt(i).get('EngName') ?
                                        children.getAt(i).get('EngName') :
                                        Ext.Date.format(children.getAt(i).get('date'), 'd/m/Y'),
                                    id: children.getAt(i).getId(),
                                    expanded: false,
                                    leaf: depth===2,
                                    children: [emptyChild]
                                });
                            }
                            console.log (node.data.children);
                        }
                    });
                }
            });
        },
    }
});