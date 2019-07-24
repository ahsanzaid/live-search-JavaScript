$(document).ready(function(){
    //dummy products data later onn this data will fetch from server data base//
    var products = {
        "storm" : 1,
        "broadband" : 2,
        "ptcl" : 3,
        "dreamnet" : 4,
        "HO" : 5,
        "fibre" : 6,
        "TVN" : 7,
        "fiblre" : 8,
        "fiblredfgf" : 9,
        "fibreyoudasnda" : 10,
    };
    // while  user key up this function will call//
    $( "#product_list" ).keyup(function() {
        var name = $("#product_list").val();
        // if user press greater than equall to 2 characters than this code start working
        if(name.length >= 2){
            for(var product in products) {
                //matching with existing holding data if found it will return otherwise it will send request to server and save to current dictionary than give response to the front end//
                if (product.indexOf(name) >= 0) {
                    // check if threre exists option <> html or not if not it will give the hint to the html option <> front end
                    if(!optionExists(products[product])){
                        $("#products").append('<option value="'+products[product]+'">'+ product +'</option>');
                    }
                  }
                  else{
                      // here ajax data base get or post whatever request goes here
                      //save return data into products {} dictionary 
                      //append the option to the front end
                      //hint check for duplications
                  }

              }
        }
      });
});
//check that if html document has option that has current option value//
function optionExists(option) {
    var options = $("#products option");
    var i = 0;
    var flag = false;
    for(i = 0 ; i < options.length ; i++){
        if(options[i].value == option){
            flag=true;
            break;
        }
    }
    return flag;
}
