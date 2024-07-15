var selctValue1;
var selctValue2;
let photo = document.querySelector('.photo');
let cont = document.querySelector('.container');


function getselct() {
     selctValue1 =document.getElementById("list1").value;
      selctValue2 =document.getElementById("list2").value; 

    
    
   
    
}
function btnonclick(){
    if(selctValue1=="1" && selctValue2=="1" ){
     //  cont.style.background= "blue";
    
        
     photo.src="image_cars/M-C-B.png";
    }
    else if(selctValue1=="1" && selctValue2=="2" ){
       
        photo.src="image_cars/M-C-W.png";
      

       
    }
    else if(selctValue1=="1" && selctValue2=="3" ){
       
        photo.src="image_cars/M-C-N.png";
        
    }
    else if(selctValue1=="2" && selctValue2=="1" ){
        
        photo.src="image_cars/M-QEQ-B.png";
    }
    else if(selctValue1=="2" && selctValue2=="2" ){
        
        photo.src="image_cars/M-QEQ-W.png";
    }
    else if(selctValue1=="2" && selctValue2=="3" ){
        
        photo.src="image_cars/M-QEQ-N.png";
    }
    else if(selctValue1=="3" && selctValue2=="1" ){
        
        photo.src="image_cars/M-EQB-B.png";
    }
    else if(selctValue1=="3" && selctValue2=="2" ){
        
        photo.src="image_cars/M-EQB-W.png";
    }
    else if(selctValue1=="3" && selctValue2=="3" ){
        
        photo.src="image_cars/M-EQB-N.png";
    }


    else{
        
        alert("Choose the color and Type of Car ");
        
        

        
    }
    

}
