'use strict'

alert('Please Enter your personal information');

let Person={
   userName : prompt('What is your  name?'),
   userAge :prompt('How old are you?'),
   userGender:prompt("Please enter your Gender"),
   userInfo :confirm('Please review Your info'),
  additionalInfo:confirm('Would you like to add additional information (optinal)'),
    
  Age:function(){
    if(this.userAge<=0 || this.userAge==null){
      alert("Invalide Age Please Try Agin");
    }
  },
    Gender:function(){
    
    if ( this.userGender=='male'||this.userGender=='m'){
      this.userGender ="Mr.";
     }
     else if( this.userGender=="female" ||this.userGender=="f"){
      this.userGender ="Ms.";
     }
  
    },
  
    Greeting:function(){
       
      if(this.userInfo){
        if(this.userGender!=null&&this.userGender!="" || this.userAge!=null&&this.userAge!=""){
          alert("Welcome "+this.userGender+" "+this.userName+" Age "+this.userAge+" ");
          
          
        }
        else
        alert("Welcome "+this.userName);
      }
    },

    optinalInfo:function(){
      if(this.additionalInfo){
           let userStatus=[];
            userStatus[0]=prompt("are you married");
            userStatus[1]=prompt("Do you have a jod");
            userStatus[2]=prompt("Are you a robot");
            
            for(let i=0;i < userStatus.length;i++){
             if(userStatus[i]!='Yes' && userStatus[i]!='No'){
              userStatus[i]='invalid'
            }

            }
            
            for ( let j = 0; j < userStatus.length; j++) {
              console.log(userStatus[j]);
              
          }

      }

  
    } 
 } 

Person.Age();
Person.Gender();
Person.Greeting();
Person.optinalInfo();


  
  
