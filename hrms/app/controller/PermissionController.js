Ext.define('Taas.controller.PermissionController', {
  extend  : 'Ext.app.Controller',
  stores  : [],
  views   : [],
  refs    : [{
    ref   : 'manageEmpTab',
    xtype : 'manage_employee_tab',
    selector: 'manage_employee_tab'
  }],
  init: function () {
    this.control({
      'manage_employee_tab': {
        beforerender: this.hrmsBeforeRendered
      }
    });
  },
  hrmsBeforeRendered: function(me) {
    //console.log('hrmsBeforeRendered...' + this.getManageEmpTab().title);
    //var hrmsPanel = this.getHrmsTabPanel();
    //var btn = hrmsPanel.down('#emp_reports');
    //btn.setDisabled(true);
    //btn.hide();
    //console.log('hrmsBeforeRendered...' + this.getHrmsTabPanel().title);
  },
  /**
  * utility method to check if user has required permissions or not
  */
  hasPermission: function(permission) {
  
  },
  /**
   * utility method to check if user has required permissions or not
   */
  getUserPermissions: function() {
  
  }
  
});
