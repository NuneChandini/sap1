sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/Fragment",
  "../model/formatter"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Fragment, formatter) {
    "use strict";

    return Controller.extend("sap1.controller.View1", {
      formatter: formatter,
      onInit: function () {
       
        // setting global JSON model
       this._setglobalmodel();
      // get user profile
      this._getUserProfile();

      },
      onchangelag: function(oEvent){
       var selectedItem = oEvent.getParameter("selectedItem").getProperty("key");
       sap.ui.getCore().getConfiguration().setLanguage(selectedItem);

        },

      /* setting user profile */
      _getUserProfile: function(){
      let oprofile =new sap.ui.model.json.JSONModel(
        {profile: sap.ui.require.toUrl("sap1/images/profile.JPG")}
       );
       this.getView().setModel(oprofile);
      },

       /* set global JSON Model*/
       _setglobalmodel: function(){
        let oModel = this.getOwnerComponent().getModel("oBankdetails");
        this.getView().setModel(oModel);
      },

      /* convert text to spanish language*/
      onspanish: function(){
        var imodel = this.getOwnerComponent().getModel("i18n_es");
        this.getOwnerComponent().setModel(imodel, "i18n");
      },
     

      /*opening find more details fragment */
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
      },
      onclose: function () {
        this.byId("dialog1").close();
      },
      
      /*create a message on selection in donut chart*/
      onSelectionChanged: function(oEvent){
        let esalary = this.getOwnerComponent().getModel("oBankdetails").getProperty("/empsalary"),
        osegment= oEvent.getParameter("segment"),
        back = osegment.getValue(),
        percentageval = (back/esalary)*100;
        sap.m.MessageToast.show(+osegment.getValue()+ " has spent on " +osegment.getLabel()+ ".     " +((percentageval > 35 )? "review is need":"review is not need") );
      }

    });
  });
