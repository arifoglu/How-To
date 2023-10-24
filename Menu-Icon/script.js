window.onload =function(){
    let container = document.querySelector("#container");
    //console.log(container);
    

    // just one click 
   //  container.onclick = function(){
  //      this.classList.add("change")
  //   }


  // this is useful function for hamburger menu

  container.onclick = function(){
    if( this.classList.contains("change"))
    {
        this.classList.remove("change");
    }
    else
    {
        this.classList.add("change");
    } 
  }

}