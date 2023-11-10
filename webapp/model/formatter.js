sap.ui.define([], function(){
    "use strict";
    return{
      //custom logic
      getPercentage: function(ovalue){   
        let esalary= this.getOwnerComponent().getModel("oBankdetails").getProperty("/empsalary");
        let percentageval= (ovalue/esalary)*100;
        return percentageval;
      },
      getState: function(ovalue){
        let esalary = this.getOwnerComponent().getModel("oBankdetails").getProperty("/empsalary");
        let percentageval= (ovalue/esalary)*100;
        if(percentageval > 40){
          return "Error"
        }else if(percentageval > 30){
         return "Critical"
        }else{
          return "Good"
        }
      }
    };
});