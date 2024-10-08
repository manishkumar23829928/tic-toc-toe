let boxes = document.querySelectorAll(".box");
let reb = document.querySelector("#bb2");
let msgcontainer = document.querySelector(".msg-container");
let newb = document.querySelector("#new-btn");
let msg= document.querySelector("#msg");







let turno = true;

const winpatterns = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};







boxes.forEach((box) => {

    box.addEventListener("click" , () => {

        console.log("box was clicked");

        if(turno){
            box.innerText = "o";
            turno = false;
        }else {
            box.innerText = "x";
            turno = true;
        }

      box.disabled = true;
      checkwinner();

        
    });
    
});

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



const  showwinner = (winner) => {
    msg.innerText = `Congralutions, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};



const checkwinner = () => {

    for(let pattern of winpatterns) {

       let posval1  =   boxes[pattern[0]].innerText;
       let posval2 =       boxes[pattern[1]].innerText;
       let posval3 =     boxes[pattern[2]].innerText;

       if(posval1 != "" && posval2 != "" && posval3 != ""){

        if(posval1 === posval2 && posval2 === posval3) {

            console.log("winner",posval1);
            showwinner(posval1);
            
        }
          


        
            


       }
        
    }
};


newb.addEventListener("click",resetgame);
reb.addEventListener("click",resetgame);


