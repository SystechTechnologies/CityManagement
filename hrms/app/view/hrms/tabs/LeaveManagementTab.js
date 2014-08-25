Ext.define('Taas.view.hrms.tabs.LeaveManagementTab', {
  extend  : 'Taas.view.BaseTabPanel',
  alias   : 'widget.leave_management_tab',
  title   : 'Manage Leaves',
  itemId  : 'leave_management_tab',
 // closable: true,
  
  tbar    : [
    /** For Admin, Manager **/
    /*
    { xtype: 'splitbutton', text: 'Employee List', iconCls: 'hr-user-list', id: 'emp_list', handler: function(){ alert("Employee List"); },
      menu: new Ext.menu.Menu({
        items: [
          {text: 'Add Employee', iconCls: 'hr-add-user', id: 'emp_report', handler: function(){ alert("Item 1 clicked"); }},
          {text: 'Create Roles', iconCls: 'hr-create-role', handler: function(){ alert("Item 2 clicked"); }},
          {text: 'Assign Roles', iconCls: 'hr-assign-role', handler: function(){ alert("Item 2 clicked"); }}
        ]
      })
    },
    */
    { xtype: 'splitbutton', text: 'Manage Leaves', iconCls: 'hr-leaves', id: 'emp_leaves', handler: function(){ alert("Manage Leave"); },
      menu: new Ext.menu.Menu({
        items: [
          {text: 'Assign Leave', iconCls: 'hr-add-user', id: 'assign_leave', handler: function(){ alert("Item 1 clicked"); }},
          {text: 'Create Roles', iconCls: 'hr-create-role', handler: function(){ alert("Item 2 clicked"); }},
          {text: 'Assign Roles', iconCls: 'hr-assign-role', handler: function(){ alert("Item 2 clicked"); }}
        ]
      })
    },
    /** For Employee **/ 
    { xtype: 'button', text: 'Employee', iconCls : 'add-user' }
    // { xtype: 'textfield', fieldLabel: 'Search' },
    ],
  items : [{xtype: 'userform'}]
});