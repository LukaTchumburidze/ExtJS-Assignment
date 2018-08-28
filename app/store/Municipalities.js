Ext.define('SimpleApp.store.Municipalities', {
    extend: 'Ext.data.Store',
    alias: 'municipalities',
    storeId: 'municipalities',
    autoLoad: 'true',

    model: 'SimpleApp.model.Municipality'
});