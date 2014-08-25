Ext.define('Taas.controller.Main', {
  extend: 'Ext.app.Controller',
  stores  : [], //TODO create a user store 
  views   : [],
  refs    : [{
    ref   : 'navMenu',
    xtype : 'navmenupanel',
    selector: 'navmenupanel'
  }],
  init: function () {
    this.control({
      'navmenupanel dataview ': {
        select: this.selectNavMenu
      }
    });
  },
  //when user click authenticate button from loginpanel
  selectNavMenu: function(me, record) {
    //console.log('selection changes...' + record.getData().panelName );
    var navMenu = record.getData();
    //console.log(name);

    var mainView = Ext.getCmp('MainViewport');
    var tabs = mainView.down('#tabs');
    
    //check its already exist
    var tab = tabs.down(navMenu.panelName);
    if(tab) {
      //if avaliable then make it active
      tabs.setActiveTab(tab);
    }
    else {
      //else create respective tab panel and add to TabPanel
      tab = Ext.create('widget.' + navMenu.panelName);
      tabs.add(tab);
      tabs.setActiveTab(tab);
    }
  }
});
