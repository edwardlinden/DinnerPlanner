//SidebarViewController  (ES6, no jQuery)
class SidebarViewController{
    constructor(view, model) {
       this.model=model;
       view.plusButton.addEventListener("click", 
           () => model.setNumberOfGuests(model.getNumberOfGuests() + 1) );
       view.minusButton.addEventListener("click", 
           () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
     }
   }