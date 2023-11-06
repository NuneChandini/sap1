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

        
        let oData = {
          bankdetails: {
            accountnum: "12345678",
            holdername: "chandini",
            ifsc: "idb*******",
            id: "345677",
            address: {
              city: "hyderabad",
              postalcode: "534222",
              country: "india"
            }
          },
          ifsccode: "00000000010000"
        };
        let oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(oData);
        this.getView().setModel(oModel);
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


      findmoredetails: function () {
        if (!this.dialog1) {
          this.dialog1 = this.loadFragment(
            { name: "sap1.view.moredetail" }
          );
        } this.dialog1.then(
          function (oDialog) {
            oDialog.open();
          }
        );
      }

    });
  });
