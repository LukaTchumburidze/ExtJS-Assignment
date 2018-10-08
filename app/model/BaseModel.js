Ext.define('SimpleApp.model.BaseModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: "text"
        }
    ],

    schema: {
        namespace: 'SimpleApp.model'
    }
});