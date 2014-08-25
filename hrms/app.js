/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'Taas',

    views: [
      'Viewport', 'BasePanel', 'nav.NavMenu', 'nav.MenuPanel', 'LoginPanel', 
      'BaseTabPanel', 'Heading',
      /* HRMS */
      'hrms.tabs.LeaveManagementTab', 'hrms.tabs.ManageEmployeeTab', 'hrms.UserSearch',
      'hrms.UserGrid','hrms.CreateRoles', 'hrms.AssignRoles', 'hrms.EmployeeList',
      'hrms.tabs.PayrolDetailsTab',
      
      'hrms.tabs.TrainingServicesTab'
    ],
    models: ['MenuModel'],
    controllers: [
      'Main', 'LoginController', 'PermissionController',
      'hrms.HRMSController'
    ],
    stores: [
      // TODO: add stores here
      /** HRMS Module Stores**/  
      'hrms.UserStore', 'hrms.RoleStore'
    ],
    
    launch: function() {
      console.log('## Launching App...##');
      Ext.create('Taas.view.LoginPanel',
        { renderTo : Ext.getBody()}
      );  
    }
    //,autoCreateViewport: true
});
