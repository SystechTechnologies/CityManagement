Ext.define('Taas.controller.LoginController', {
  extend: 'Ext.app.Controller',
  stores  : [], //TODO create a user store 
  views   : [],
  refs    : [{
    ref   : 'loginpanel',
    xtype : 'loginpanel',
    selector: 'loginpanel'
  }],
  init: function () {
    this.control({
      'loginpanel button[action=auth]': {
        click: this.authenticateUser
      }
    });
  },
  //when user click authenticate button from loginpanel
  authenticateUser: function() {
    console.log('Authenticate...');
    var me = this,
    form = me.getLoginpanel().down('#loginForm');
    
    var authForm = form.getForm();
    var values = authForm.getValues();
    if(authForm.isValid()) {
      me.getLoginpanel().destroy();
      Ext.create('Taas.view.Viewport');
    }
    //console.log(values);
  }
});
