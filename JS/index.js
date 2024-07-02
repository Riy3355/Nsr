


//////hader///////////

/*mune list events*/


////////varibles/////////
let mune = document.querySelector('.mune')

let muneList = document.querySelector('.muneList')

let munespan = document.querySelector('.munespan')

let listIcon = document.querySelector('.fa-bars')

let xIcon = document.querySelector('.fa-x')


/////////////////////////


/////////////events List icon////////

listIcon.addEventListener('click', function () {

    munespan.style='opacity: 0%;  visibility: hidden; ;transition: visibility 0s, opacity 0.5s'
    muneList.style='right:0%; transition: 0.7s;'
     mune.style='  opacity: 0%;  visibility: hidden; ;transition: visibility 0s, opacity 0.5s'
    listIcon.style='opacity: 0%;  visibility: hidden; ;transition: visibility 0s, opacity 0.5s'
    
    })
////////////////////////////////


/////////////event in x icon///////////////



xIcon.addEventListener('click', function () {

    munespan.style='  opacity: 100%;      visibility: visible; ;transition: visibility 0s, opacity 0.5s'

    muneList.style='right:-200%; transition: 0.7s;'
     mune.style='  opacity: 100%;      visibility: visible; ;transition: visibility 0s, opacity 0.5s'
    listIcon.style='  opacity: 100%;      visibility: visible; ;transition: visibility 0s, opacity 0.5s'
    })

////////////////




//////////////////Event in mune/////////////////////////////


////////////////////////varibles///////////////////////////////////////////////

let home_mune = document.querySelector('.home_mune')

let about_US_Manu = document.querySelector('.about-us-manu')

let about_US_Manu_list = document.querySelector('.about-us-manu-list')

let service = document.querySelector('.service')

let ourServer = document.querySelector('.Our-service')

let ourServer_mune_list = document.querySelector('.service-mune-list')

let questions_mu = document.querySelector('.questions-mu')

let questions_muli = document.querySelector('.questions-muli')

let contact = document.querySelector('.contact')

let contact_mn = document.querySelector('.contact-mn')

let contact_Page = document.querySelector('.contact-page')







////////////////home us click scrol;//////////////////////////////////////////////


home_mune.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })   


})


////////////////////about us scrol page//////////////////////////
function scrollLis(){

  
        about_US_Manu.addEventListener('click',()=>{
            window.scrollTo({
                top:836,
                behavior:'smooth'

            })


        })
    
        about_US_Manu_list.addEventListener('click',()=>{
            window.scrollTo({
                top:836,
                behavior:'smooth'
            })
    

    
        })

}

    


scrollLis()


/////////////////////////ipad//////////////////////////
let about_Ipad_screen=window.matchMedia('(min-height:1180px)')
if(about_Ipad_screen.matches){
    
    about_US_Manu.addEventListener('click',()=>{
        window.scrollTo({
            top:1190,
            behavior:'smooth'
        })
    })
    
    about_US_Manu_list.addEventListener('click',()=>{
        window.scrollTo({
            top:1190,
            behavior:'smooth'
        })
    })

}




///////////serveir page click event///////////////////


///////////////scroll///////////////////


function serveirPage (){
    
ourServer.addEventListener('click',()=>{
    window.scrollTo({
        top:1650,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'

        
})






ourServer_mune_list.addEventListener('click',()=>{
    window.scrollTo({
        top:1650,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'
   
})



}


serveirPage()


///////////////////////for small width///////////////////////////////

let serVeirSmallScreen=window.matchMedia('(max-width:376px)')
if(serVeirSmallScreen.matches){
    
ourServer_mune_list.addEventListener('click',()=>{
    window.scrollTo({
        top:1350,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'
   
})


}
 


///////////////for ipad///////////////////////////

if (window.innerHeight==1024){
        
ourServer_mune_list.addEventListener('click',()=>{
    window.scrollTo({
        top:1875,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'
   
})
}



let serVeirScreen=window.matchMedia("(min-height:1025px)")
if(serVeirScreen.matches){

  
ourServer.addEventListener('click',()=>{
    window.scrollTo({
        top:2050,
        behavior:'smooth'
    })
})
    service.style='    opacity: 100%;    transition: 4s;'






ourServer_mune_list.addEventListener('click',()=>{
    window.scrollTo({
        top:2050,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'
   
})

}



///////////////////////////for big height//////////////////////////////
let serVeirScreen2=window.matchMedia('(min-height:1366px)')


if(serVeirScreen2.matches){
    
ourServer.addEventListener('click',()=>{
    window.scrollTo({
        top:2300,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'

        
})
    
ourServer_mune_list.addEventListener('click',()=>{
    window.scrollTo({
        top:2300,
        behavior:'smooth'
    })
    service.style='    opacity: 100%;    transition: 4s;'

        
})


}



    
/////////////////////////////small screen////////////////////////////////
   
if(window.innerWidth==540){

    ourServer_mune_list.addEventListener('click',()=>{
        window.scrollTo({
            top:1584,
            behavior:'smooth'
        })
        service.style='    opacity: 100%;    transition: 4s;'
    
            
    })

}
    

if(window.innerWidth==344){

    ourServer_mune_list.addEventListener('click',()=>{
        window.scrollTo({
            top:1705,
            behavior:'smooth'
        })
        service.style='    opacity: 100%;    transition: 4s;'
    
            
    })
}


/////////////////qustions page scrol /////////////////////
    




    







////////////////////////big screen//////////////////////////////
    questions_mu.addEventListener('click',()=>{
        window.scrollTo({
            top:2500,
            behavior:'smooth'
        })
    questions.style=' opacity: 100%;    transition: 7s;'
            
    })

    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:2500,
            behavior:'smooth'
        })
    questions.style=' opacity: 100%;    transition: 7s;'
            
    })

if (window.innerHeight==600){
    questions_mu.addEventListener('click',()=>{
        window.scrollTo({
            top:2264,
            behavior:'smooth'

        })
    questions.style=' opacity: 100%;    transition: 7s;'

    })

    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:2264,
            behavior:'smooth'
        })
    questions.style=' opacity: 100%;    transition: 7s;'
            
    })
}


let questionsbigScreen=window.matchMedia('(min-height:1365px)')


if(questionsbigScreen.matches){
    
questions_mu.addEventListener('click',()=>{
    window.scrollTo({
        top:3600,
        behavior:'smooth'
    })
    questions.style='    opacity: 100%;    transition: 4s;'

        
})

questions_muli.addEventListener('click',()=>{
    window.scrollTo({
        top:3600,
        behavior:'smooth'
    })
    questions.style='    opacity: 100%;    transition: 4s;'

        
})
}

///////////////////////////////mid screen//////////////////////////////////
    
let madiascreen=window.matchMedia("(max-width:950px)")
if(madiascreen.matches){
    questions_mu.addEventListener('click',()=>{
        window.scrollTo({
            top:3100,
            behavior:'smooth'
        })
    questions.style=' opacity: 100%;    transition: 4s;'

    })
    
questions_muli.addEventListener('click',()=>{
    window.scrollTo({
        top:3100,
        behavior:'smooth'
    })
questions.style=' opacity: 100%;    transition: 4s;'

})
}

    
    
if(window.innerWidth === 912){
    questions_mu.addEventListener('click',()=>{
        window.scrollTo({
            top:3600,
            behavior:'smooth'
        })
        questions.style='    opacity: 100%;    transition: 4s;'
    
            
    })

    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:3600,
            behavior:'smooth'
        })
        questions.style='    opacity: 100%;    transition: 4s;'
    
            
    })

}



///////////////////////////////mid screen//////////////////////////////////


//////////////////////////////small screen///////////////////////////////


let questionsSmallScreen=window.matchMedia('(max-width:376px)')
if (questionsSmallScreen.matches) {

    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:2700,
            behavior:'smooth'
        })
    questions.style=' opacity: 100%;    transition: 7s;'
            
    })
}


if (window.innerWidth==360){
    
    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:2950,
            behavior:'smooth'
        })
    questions.style=' opacity: 100%;    transition: 7s;'
            
    })
}



//////////////////////////////very small screen///////////////////////////////

if(window.innerWidth==344){
    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:3200,
            behavior:'smooth'
        })
    })
}



if(window.innerWidth==540){
    questions_muli.addEventListener('click',()=>{
        window.scrollTo({
            top:2643,
            behavior:'smooth'
        })
    })
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////contact page scroll ////////////////////////

function contactPage(){

    
        contact.addEventListener('click',()=>{
            window.scrollTo({
                top:4800,
                behavior:'smooth'

            })
contact_Page.style=' opacity: 100%;    transition: 7s;'
                
        })
        
            
        contact_mn.addEventListener('click',()=>{
            window.scrollTo({
                top:4800,
                behavior:'smooth'

            })
contact_Page.style=' opacity: 100%;    transition: 7s;'
                
        })
        
        
        
}

contactPage()


let contact_scroll_Small_page = window.matchMedia('(max-width:350px)')
    if(contact_scroll_Small_page.matches){
        
    contact_mn.addEventListener('click',()=>{
        window.scrollTo({
            top:5090,
            behavior:'smooth'

        })
contact_Page.style=' opacity: 100%;    transition: 7s;'
            
    })
    

}

//////////////////////////////////////////////////////////


let contact_btn = document.getElementsByClassName("contact-btn")
for (var i = 0; i < contact_btn.length; i++) {
    contact_btn[i].addEventListener('click',()=>{
        window.scrollTo({
            top:4800,
            behavior:'smooth'

        })
contact_Page.style=' opacity: 100%;    transition: 7s;'
            
    })

    
let contact_btn_Small_page = window.matchMedia('(max-width:350px)')
if(contact_btn_Small_page.matches){
    
contact_btn[i].addEventListener('click',()=>{
    window.scrollTo({
        top:5090,
        behavior:'smooth'

    })
contact_Page.style=' opacity: 100%;    transition: 7s;'
        
})


}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Landing Page*/
let landingPage = document.querySelector('.landing-page')

let landingText = document.querySelector('.landing-texts')

let landingbtn = document.querySelector('.landing-page .contact-btn')

let followIcone = document.querySelector('.follow-us')
////////////////////////////////////////////////////


window.onload=function open (){
    landingText.style='    opacity: 100%;    transition: 3s;'
  
    mune.style='    opacity: 100%;    transition: 5s;'

    listIcon.style='    opacity: 100%;    transition: 5s;'

    munespan.style='    opacity: 100%;    transition: 5s;'

    landingbtn.style='   opacity: 100%;    transition: 3s;'

    followIcone.style='    opacity: 100%;    transition: 7s;'
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /*About us page events*/

    let about_US = document.querySelector('.aboutus')
    let whoWe_Are = document.querySelector('.who-we-are')

    window.onscroll=function scrol(){
        about_US.style='    opacity: 100%;    transition: 4s;'
        whoWe_Are.style='    opacity: 100%;    transition: 4s;'

if(window.scrollY > 1200){
    service.style=' opacity: 100%;    transition: 4s;'

}    

if(window.scrollY >2250 ){
    questions.style=' opacity: 100%;    transition: 4s;'

}        

if(window.scrollY > 3600){
contact_Page.style=' opacity: 100%;    transition: 7s;'

}
let madiascreen=window.matchMedia('(min-width:768px)')
if(madiascreen.matches){



       console.log(window.scrollY); 

    }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








    /* questions Events*/

    let questions = document.querySelector('.questions')
    let questions_list = document.querySelector('.questions-list')

    let  questions1 = document.querySelector('.q')
   let  questions2 = document.querySelector('.q2')
    let  questions3 = document.querySelector('.q3')
    let  questions4 = document.querySelector('.q4')

    let questions_text =document.querySelector('.questions-text')
    let questions_text2 = document.querySelector('.questions-text2')
    let questions_text3 = document.querySelector('.questions-text3')
    let questions_text4 = document.querySelector('.questions-text4')



    let iCon_down = document.querySelector('.fa-chevron-down') 
    let iCon_down2 = document.querySelector('.icon2 i')
    let iCon_down3 = document.querySelector('.icon3 i') 
    let iCon_down4 = document.querySelector('.icon4 i') 

 let icon_up = document.querySelector('.icon-up i') 
let icon_up2 = document.querySelector('.icon-up2 i') 
   let icon_up3 = document.querySelector('.icon-up3 i') 
   let icon_up4 = document.querySelector('.icon-up4 i') 
    

    /* questions-list-Event */

    /*Down Event one*/
    
    iCon_down.addEventListener('click',()=>{

            questions_text.style='  visibility: visible; ;transition: visibility 0s, opacity 0.5s;   '

        questions1.style='border:none'
        icon_up.style='visibility: visible;        position: absolute;top: 0; '
        iCon_down.style='visibility: hidden;'
    
    })

        iCon_down.addEventListener('click',()=>{

            questions_text.style='  visibility: visible; ;transition: visibility 0s, opacity 0.5s;   '
            questions1.style='border:none'
            icon_up.style='visibility: visible;        position: absolute;top: 0; '
            iCon_down.style='visibility: hidden;'
        
        })


    /*UP Event one*/

icon_up.addEventListener('click',()=>{
    
    questions_text.style='  visibility: hidden;;transition: visibility 0s, opacity 0.5s;   '
    questions1.style='border-bottom: 1px gray solid;'
    icon_up.style='visibility: hidden;  position: absolute;top: 0;'
    iCon_down.style='visibility: visible; '
})





    /*Down Event Two*/


iCon_down2.addEventListener('click',()=>{
    questions_text2.style='  visibility: visible; ;transition: visibility 0s, opacity 0.5s;    '
    questions2.style='border:none'
 
    icon_up2.style='visibility: visible ;  position: absolute;top: 0; '
    iCon_down2.style='visibility: hidden;'


})





    /*UP Event Two*/







icon_up2.addEventListener('click',()=>{
    
    questions_text2.style='  visibility: hidden;;transition: visibility 0s, opacity 0.5s;   '
    questions2.style='border-bottom: 1px gray solid;'
    icon_up2.style='visibility: hidden;  position: absolute;top: 0;'
    iCon_down2.style='visibility: visible; '
})








    /*Down Event three*/





iCon_down3.addEventListener('click',()=>{
    questions_text3.style='  visibility: visible; ;transition: visibility 0s, opacity 0.5s;   '
    questions3.style='border:none'

    icon_up3.style='visibility: visible;  position: absolute;top: 0;'
    iCon_down3.style='visibility: hidden;'

})








    /*UP Event three*/







icon_up3.addEventListener('click',()=>{
    
    questions_text3.style='  visibility: hidden;;transition: visibility 0s, opacity 0.5s;   '
    questions3.style='border-bottom: 1px gray solid;'
    icon_up3.style='visibility: hidden;  position: absolute;top: 0;'
    iCon_down3.style='visibility: visible; '
})





    /*Down Event four*/






iCon_down4.addEventListener('click',()=>{
    questions_text4.style='  visibility: visible; ;transition: visibility 0s, opacity 0.5s;    '
    questions4.style='border:none'

    icon_up4.style='visibility: visible;  position: absolute;top: 0;'
    iCon_down4.style='visibility: hidden;'

})





    /*UP Event four*/






icon_up4.addEventListener('click',()=>{
    
    questions_text4.style='  visibility: hidden;;transition: visibility 0s, opacity 0.5s;   '
    questions4.style='border-bottom: 1px gray solid;'
    icon_up4.style='visibility: hidden;  position: absolute;top: 0;'
    iCon_down4.style='visibility: visible; '
})









    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    /////////////////////////Contact Us Page////////////////////////
    let form = document.querySelector('.form')
    let userName = document.querySelector('.name')
    let email = document.querySelector('.email')
    let message = document.querySelector('.message')
  
/////////////////////////////Error varibles/////////////////////////////////////

    let userName_Error = document.querySelector('.name-error')
    let email_error =document.querySelector('.email-error')
    let message_error = document.querySelector('.message_error')

    form.addEventListener('submit',(e)=>{


    let email_chek = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

/////////////////////////if for username input///////////////////////////////////////////

    if(userName.value==="" || userName.value == null){

        e.preventDefault()

        userName.style='    border-color: red;    transition: 0.5s;'
        userName_Error.innerHTML= 'Name is required'
        userName_Error.style='color:red ;     letter-spacing: 2px'
    }else{
        userName.style='    border-color: green;    transition: 0.5s;'
        userName_Error.innerHTML=""

    }

/////////////////////////if for Email input///////////////////////////////////////////

if(!email.value.match(email_chek)){
    e.preventDefault()
    email.style='    border-color: red;    transition: 0.5s;'
    email_error.innerHTML='Email is required'
    email_error.style='color:red ;     letter-spacing: 2px'


}else{
    email.style='    border-color: green;    transition: 0.5s;'
    email_error.innerHTML=""

    
}


/////////////////////////if for message input///////////////////////////////////////////


if(message.value==="" || message.value== null){
    e.preventDefault()
    message.style='    border-color: red;    transition: 0.5s;'
    message_error.innerHTML='Message is required'
    message_error.style='color:red ;     letter-spacing: 2px'
    

}else{
    message.style='    border-color: green;    transition: 0.5s;'
    message_error.innerHTML=""


}

    })




   

