Ext.define('Taas.view.hrms.AssignRoles', {
  bodyStyle : 'padding:10px',
  extend    : 'Ext.panel.Panel',
  alias     : 'widget.assignroles',
  width     : 600,
  border    : false,
  requires:[
    'Taas.store.hrms.RoleStore' 
  ],
  fieldDefaults: {
    msgTarget : 'side',
    labelWidth: 140
  },
  defaults: {
    anchor: '100%'
  },
  items: [{
    xtype : 'heading',
    data : {text : 'Assign  Roles to User'}
  },{
    xtype : 'usersearch'
  }, {
    xtype : 'usergrid'
  }]
}); 
