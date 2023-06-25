(function(global){
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
        handleResponse(request,responseHandler);
    };
      request.open("Get",requestUrl,true)
        request.send(null);//for post only

 };


/*only call user provided'responesehandler'
funtion if resnponse is ready
and not an error*/
function handleResponse(request,responseHandler){
  if((request.readyState==4)&&
  (request.status==200)){
    responseHandler(request);
 }
}


//Expose utility to the global objet
global.$ajaxcode =