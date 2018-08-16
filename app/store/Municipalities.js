Ext.define('SimpleApp.store.Municipalities', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.municipalities',

    rootData: {
        text: 'Municipalities',
        expanded: true,
        children: [{
            text: 'FirstMunicipality',
            children: [
                {leaf: true, text: 'Zebra'}
            ]
        }]
    }
});