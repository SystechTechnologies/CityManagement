Ext.define('Taas.view.hrms.EmployeeList', {
  bodyStyle : 'padding:10px',
  extend    : 'Ext.panel.Panel',
  alias     : 'widget.employeelist',
  width     : 600,
  border    : false,
  requires:[
    'Taas.store.hrms.RoleStore' 
  ],
  fieldDefaults: {
    msgTarget: 'side',
    labelWidth: 140
  },
  defaults: {
    anchor: '100%'
  },
  items: [{
    xtype : 'usersearch'
  }, {
    xtype : 'usergrid'
  }]
}); 
