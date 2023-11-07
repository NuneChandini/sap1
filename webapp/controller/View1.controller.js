sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/Fragment"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Fragment) {
    "use strict";

    return Controller.extend("sap1.controller.View1", {
      onInit: function () {
       this._setglobalmodel();
        
       let oprofile =new sap.ui.model.json.JSONModel(
        {profile: sap.ui.require.toUrl("sap1/images/profile.JPG")}
       );
       this.getView().setModel(oprofile);

      },
      onspanish: function(){
        var imodel = this.getOwnerComponent().getModel("i18n_es");
        this.getOwnerComponent().setModel(imodel, "i18n");
      },

      // findmoredetails: function(){
      //  var oview =this.getView();
      //     if(!this.byId("dialog1")){
      //       Fragment.load({
      //         name:"sap1.view.moredetail",
      //         controller:this,
      //         id:oview.getId()
      //       }).then(function(oDialog){
      //          oDialog.open();
      //       });
      //  }else{
      //     this.byId("dialog1").open();
      //  }
      // },

      onclose: function () {
        this.byId("dialog1").close();
      },
      _setglobalmodel: function(){
        let oModel = this.getOwnerComponent().getModel("oBankdetails");
        this.getView().setModel(oModel);
      },
      findmoredetails: function () {
        if (!this.dialog1) {
          this.dialog1 = this.loadFragment(
            { name: "sap1.view.fragments.moredetail" }
          );
        } this.dialog1.then(
          function (oDialog) {
            oDialog.open();
          }
        );
      }

    });
  });
