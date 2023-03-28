var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}
// ----------About Section----------

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("about-content");

function opentab(tab){
  for ( var tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  window.event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwtiD_FhO4uDixvVCQACVebleB2o3haQ0rODio_mbZDU3Tq-4j22P_e0pdhJVErm19leg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
         msg.innerHTML="Message Sent Successfully..!"
         setTimeout(function(){
          msg.innerHTML=""
         },5000)
         form.reset()
        })
      .catch(error => console.error('Error!', error.message))
  })

//  const toTop=document.querySelector(".to-top");
//  window.addEventListener("scroll",()=>{
//   if (window.event.pageYOffset>100){
//     toTop.classList.add("active");
//   }else{
//     toTop.classList.remove("active");
//   }
  
//  })