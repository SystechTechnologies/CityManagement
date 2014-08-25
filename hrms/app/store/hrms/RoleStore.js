Ext.define('Taas.store.hrms.RoleStore', {
  extend : 'Ext.data.Store',
  storeId:'roleStore',
  fields:['role', 'role_desc'],
  data:{'items':[
        { 'role': 'Admin',  "role_desc":"Admin role description"},
        { 'role': 'HR',  "role_desc":"HR role description"},
        { 'role': 'Manager', "role_desc":"Manager role description"},
        { 'role': 'Employee', "role_desc":"Employee role description"}
  ]},
  proxy : {
    type: 'memory',
    reader: {
      type: 'json',
      root: 'items'
    }
  }
});