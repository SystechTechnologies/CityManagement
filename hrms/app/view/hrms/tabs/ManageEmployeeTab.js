Ext.define('Taas.view.hrms.tabs.ManageEmployeeTab', {
  extend  : 'Taas.view.BaseTabPanel',
  alias   : 'widget.manage_employee_tab',
  title   : 'Manage Employees',
  itemId  : 'manage_employee_tab',
//  closable: true,
  tbar    : [
    { xtype: 'splitbutton', text: 'Employee List', iconCls: 'hr-user-list', action : 'emp_list',
      menu: new Ext.menu.Menu({
        items: [
          {text: 'Add Employee', iconCls: 'hr-add-user', action : 'add_emp'},
          {text: 'Create Roles', iconCls: 'hr-create-role', action : 'create_roles'},
          {text: 'Assign Roles', iconCls: 'hr-assign-role', action : 'assign_roles'}
        ]
      })
    },
    /** For Admin, Manager 
    { xtype: 'splitbutton', text: 'Manage Leaves', iconCls: 'hr-leaves', handler: function(){ alert("Manage Leave"); },
      menu: new Ext.menu.Menu({
        items: [
          {text: 'Assign Leave', iconCls: 'hr-add-user', handler: function(){ alert("Item 1 clicked"); }},
          {text: 'Create Roles', iconCls: 'hr-create-role', handler: function(){ alert("Item 2 clicked"); }},
          {text: 'Assign Roles', iconCls: 'hr-assign-role', handler: function(){ alert("Item 2 clicked"); }}
        ]
      })
    },**/
    /** For Employee **/ 
    { xtype: 'button', text: 'Employee', iconCls : 'add-user' }
  ],
  items : [{
    xtype: 'usersearch'
  },{
    xtype : 'usergrid'
  }]
});