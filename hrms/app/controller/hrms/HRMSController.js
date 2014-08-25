Ext.define('Taas.controller.hrms.HRMSController', {
  extend  : 'Taas.controller.PermissionController',
  stores  : [],
  views   : ['hrms.UserForm', 'hrms.UserGrid', 'hrms.EmployeeList', 'hrms.UserSearch', 'hrms.CreateRoles','hrms.AssignRoles'],
  refs    : [{
    ref   : 'navMenu',
    xtype : 'navmenupanel',
    selector: 'navmenupanel'
  },{
    ref   : 'manageEmpTab',
    xtype : 'manage_employee_tab',
    selector : 'manage_employee_tab'
  }],
  init: function () {
    this.control({
      'navmenupanel dataview ': {
        select: this.selectNavMenu
      },
      'manage_employee_tab menuitem' : {
        click: this.clickManageEmpBtn
      },
      'manage_employee_tab toolbar button' : {
        click: this.clickManageEmpTbarBtn
      }
    });
  },
  //when user click authenticate button from loginpanel
  selectNavMenu: function(me, record) {
  },
  
  //called when user click on any menuitem on Manage Employee
  clickManageEmpBtn: function(me) {
    console.log( 'Text : ' +me.text + '\taction : '+me.action);
    var action = me.action;
    var met = this.getManageEmpTab();
    //if action =='add_emp' then add employee form
    if(action == 'add_emp') {
      met.removeAll(true);
      met.add(this.getHrmsUserFormView());
    }
    else if(action == 'create_roles') {
      met.removeAll(true);
      met.add(this.getHrmsCreateRolesView());
    }
    else if(action == 'assign_roles') {
      met.removeAll(true);
      met.add(this.getHrmsAssignRolesView());
    }
  },
  
  //called when user click on any button on managed employee toolbar
  clickManageEmpTbarBtn: function(me) {
    console.log('clickManageEmpTbarBtn : ' +me.text);
    var met = this.getManageEmpTab();
    //if action =='add_emp' then add employee form
    if(me.action == 'emp_list') {
      if(met.down('.employeelist') == null) {
        met.removeAll(true);
        met.add(this.getHrmsEmployeeListView());
      }
    }
  }
});
