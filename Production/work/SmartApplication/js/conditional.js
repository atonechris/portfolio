$(document).ready(function(){
    $(".buttonNext").click(function(){   
        if ($('#emailInput').val() == 'alexparris@gmail.com') {   
            $("#prime").animateCSS('fadeInRight'),
            $("#socialSecurity").val("111111111"),
            $("#password").val("3213213"),                
            $("#firstName").val("Alex"),
            $("#lastName").val("Parris"),
            $("#birthdate").val("11/03/1987");
            } 
        
        if ($('#emailInput').val() == 'chriscarter@gmail.com') {   
            $("#subprime").animateCSS('fadeInRight'),
            $("socialSecurity").val("222222222"),
            $("#password").val("3213213"),                
            $("#firstName").val("Mainstreet"),
            $("#lastName").val("Applicant"),
            $("#birthdate").val("11/03/1980"),
            $("#firstCard").focus();
            } 
        
        if ($('#emailInput').val() == 'bbishop@cmu.edu') {   
            $("#noCredit").animateCSS('fadeInRight'),
            $("socialSecurity").val("333333333"),
            $("#password").val("3213213"),                
            $("#firstName").val("New to Credit"),
            $("#lastName").val("Applicant"),
            $("#birthdate").val("11/03/1980"),
            $('#cardSteering').slideDown('300');
            }    
    
        
        else {
            $("#prime","#subprime","#noCredit").hide("fast");    
            }
    });
});