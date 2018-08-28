Ext.define('SimpleApp.store.Animals', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'animalStore',
    alternateClassName: 'animalStore',

    model: 'SimpleApp.model.Animal'
});