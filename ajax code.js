(function(global)){
    // set up a namespace for our ajax code
   var ajaxcode={};


   
   //return an http request objet
 function getrequestobject(){
    if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
 } 
 else if(window.ActiveXObject){
   // for very old ie browser(optinal)
   return(new ActiveXObject("microsoft.xmlhttp"));
 }
   else{
    global.alert("ajax in not sypported!");
   } 
 }
}


// makes an ajax get recuest to "requestUrl"
ajaxcode.sendGetRequest=
 function(requestUrl,responseHandler){
    var request=getRequestObject();
    request.onreadystatechange=
    function(){
        handleResponse(request)

    }
 }
