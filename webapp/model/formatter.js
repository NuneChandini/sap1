sap.ui.define([], function(){
    "use strict";
    return{
      /* 
      @param number
      @return number
      formatting the display value
      */
      getPercentage: function(ovalue){   
        let esalary= this.getOwnerComponent().getModel("oBankdetails").getProperty("/empsalary"),
         percentageval= (ovalue/esalary)*100;
        return percentageval;
      },
       /* 
      @param number
      @return number
      formatting the semantic color value
      */
      getState: function(ovalue){
        let esalary = this.getOwnerComponent().getModel("oBankdetails").getProperty("/empsalary"),
       percentageval= (ovalue/esalary)*100;
        if(percentageval > 40)
          return "Error"
        else if(percentageval > 30)
         return "Critical"
        else
          return "Good"
      }
    };
});