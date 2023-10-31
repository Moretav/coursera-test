
$w.onReady(function () {

	//NEXT BUTTON
	$w('#nextButton1, #progress2, #yourcontactinfo').onClick(function () {
    $w('#rentalmultistatebox').changeState('yourcontacinfo');
    $w('#progressBar1').value = 15;
});


	$w('#nextButton2, #progress3, #wheretoulive').onClick(function () {
       $w('#rentalmultistatebox').changeState('whereyoulived');
	   $w("#progressBar1").value = 25;
	});

	$w('#nextButton3, #progress4, #occupants').onClick(function () {
       $w("#rentalmultistatebox").changeState('Occupants');
	   $w("#progressBar1").value = 40;
	});

	$w("#nextButton4, #progress5, #personalinfo").onClick(function () {
       $w("#rentalmultistatebox").changeState("Personalinfo");
	   $w("#progressBar1").value = 50;
	});

	$w("#nextButton5, #progress6, #yourincome").onClick(function () {
       $w("#rentalmultistatebox").changeState("Yourincome");
	   $w("#progressBar1").value = 62;
	});

	$w("#nextButton6, #progress7, #questions").onClick(function () {
       $w("#rentalmultistatebox").changeState("Questions");
	   $w("#progressBar1").value = 75;
	});

	$w("#nextButton7, #progress8, #attached").onClick(function () {
       $w("#rentalmultistatebox").changeState("Attachdocuments");
	   $w("#progressBar1").value = 85;
	});

	$w("#nextButton8, #progress9, #payfees").onClick(function () {
       $w("#rentalmultistatebox").changeState("Payfees");
	   $w("#progressBar1").value = 100;
	});

	//BACK BUTTONS

	$w("#backbutton1, #progress1, #beforeyoubegin").onClick(function () {
       $w("#rentalmultistatebox").changeState("beforebegin");
	   $w("#progressBar1").value = 0;
	});

	$w("#backbutton2").onClick(function () {
       $w("#rentalmultistatebox").changeState("yourcontacinfo");
	   $w("#progressBar1").value = 15;
	});

	$w("#backbutton3, #progress3").onClick(function () {
       $w("#rentalmultistatebox").changeState("whereyoulived");
	   $w("#progressBar1").value = 25;
	});

	$w("#backbutton4, #progress4").onClick(function () {
       $w("#rentalmultistatebox").changeState("Occupants");
	   $w("#progressBar1").value = 40;
	});

	$w("#backbutton5, #progress5").onClick(function () {
       $w("#rentalmultistatebox").changeState("Personalinfo");
	   $w("#progressBar1").value = 50;
	});

	$w("#backbutton6, #progress6").onClick(function () {
       $w("#rentalmultistatebox").changeState("Yourincome");
	   $w("#progressBar1").value = 62;
	});

	$w("#backbutton7, #progress7").onClick(function () {
       $w("#rentalmultistatebox").changeState("Questions");
	   $w("#progressBar1").value = 75;
	});

	$w("#backbutton8, #progress8").onClick(function () {
       $w("#rentalmultistatebox").changeState("Attachdocuments");
	   $w("#progressBar1").value = 85;
	});

	 //EMPLOYMENT STATUS
        $w("#tenanselection").onChange(function () {
            let tenantselec = $w("#tenanselection").value;

            if (tenantselec === "Tenan2") {
                $w("#tenanfirstname,#tenanlastname").expand();
                $w("#tenanfirstname,#tenanlastname").required = true;
				
            } else {
                $w("#tenanfirstname,#tenanlastname").collapse();
                $w("#tenanfirstname,#tenanlastname").required = false;
                
            }
        });

		//CO-APPLICANTS

		  $w("#coapplicantcheck").onChange(function () {
            let cocheck = $w("#coapplicantcheck").value;

            if (cocheck === "coapplicant") {
                $w("#cofirstname,#colastname,#coaddress,#cophone").expand();
                $w("#cofirstname,#colastname,#coaddress,#cophone").required = true;
				
            } else {
                $w("#cofirstname,#colastname,#coaddress,#cophone").collapse();
                $w("#cofirstname,#colastname,#coaddress,#cophone").required = false;
                
            }
        });

		//OCCUPANTS 

		  $w("#occupantcheck").onChange(function () {
            let ocu = $w("#occupantcheck").value;

            if (ocu === "otheroccupants") {
                $w("#ocuppantfistname,#ocuppantlastname").expand();
                $w("#ocuppantfistname,#ocuppantlastname").required = true;
				
            } else {
                $w("#ocuppantfistname,#ocuppantlastname").collapse();
                $w("#ocuppantfistname,#ocuppantlastname").required = false;
                
            }
        });

		//PETS

		  $w("#petscheck").onChange(function () {
            let pets = $w("#petscheck").value;

            if (pets === "pets") {
                $w("#petname,#pettype,#weight,#PetAge").expand();
                $w("#petname,#pettype,#weight,#PetAge").required = true;
				
            } else {
                $w("#petname,#pettype,#weight,#PetAge").collapse();
                $w("#petname,#pettype,#weight,#PetAge").required = false;
                
            }
        });

		//VEHICLE 

		  $w("#vehiclecheck").onChange(function () {
            let vehicle = $w("#vehiclecheck").value;

            if (vehicle === "vehicle") {
                $w("#vehiclebrand,#vehiclemodel,#vehicleyear,#vehiclecolor,#licensenumber").expand();
                $w("#vehiclebrand,#vehiclemodel,#vehicleyear,#vehiclecolor,#licensenumber").required = true;
				
            } else {
                $w("#vehiclebrand,#vehiclemodel,#vehicleyear,#vehiclecolor,#licensenumber").collapse();
                $w("#vehiclebrand,#vehiclemodel,#vehicleyear,#vehiclecolor,#licensenumber").required = false;
                
            }
        });

        //SUBMIT BUTTON
        $w("#button61").onClick(function () {
            $w("#button61").label = "Please wait..."
        });

         //AFTER SAVE
        $w("#dataset2").onAfterSave(function () {
            $w("#button61").label = "Submit";
            $w("#rentalmultistatebox").changeState("Congratulation")   
        });

        //ON ERROR
        $w("#dataset2").onError(function () {
            $w("#button61").label = "Submit";
        });

         //SUBMIT AGAIN
      $w("#summitagain").onClick(function () {
       $w("#rentalmultistatebox").changeState("beforebegin"); 
        });
    

});
