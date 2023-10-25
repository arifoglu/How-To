window.onload = function () {
    //////// 1.OPTION
    // let accordion = document.querySelectorAll(".accordion");
    // console.log(accordion);
    // let i ;
// 
    // for(i = 0 ; i < accordion.length ; i++){
    //     accordion[i].addEventListener("click",function(){
    //         this.classList.add("active");
// 
    //         let panel = this.nextElementSibling;
    //         if(panel.style.display === "block")
    //         {
    //             panel.style.display = "none"
    //         }
    //         else
    //         {
    //             panel.style.display = "block"
    //         }
    //     })
    // }
    // 

     // 2.OPTION more EFFICIENT
     let buttons = document.querySelectorAll(".accordion");
     console.log(buttons);
 
     Array.prototype.forEach.call( buttons , function( button ){
 
         button.onclick = function()
         { 
             if(this.classList.contains("active"))
             {
              this.classList.remove("active"); 
              this.nextElementSibling.style.display = "block";
             }
             else
             {
              this.classList.add("active");
              this.nextElementSibling.style.display = "none"; 
             }  
         }
     });

   
      
}