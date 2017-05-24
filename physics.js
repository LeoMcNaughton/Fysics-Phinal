const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function end(){
    terminal.close();
}

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");
}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

// terminal.question("My question?", function(str){
     //If I typed in "Motion"
//     str.toLowerCase();
     //Now str == "motion";
// });

function getinput(){

  const terminal = readline.createInterface({
      input:process.stdin,
      output:process.stdout
  });

terminal.question("What type of equation are you looking for?",function(str){
    str.toLowerCase();
    //you will configure your series of questions inside here.
    if(str == "motion"){
    terminal.question("What are you looking for?",function(str){
      str = str.toLowerCase();
      if(str == "d"){
        printOptions();
        terminal.question("",function(str){
          let arr = convertToArray(str);
          console.log(motion.distance1(str[1],str[3]));
          terminal.close();
        }
        else{
          let arr = convertToArray(str);
          console.log(motion.distance2(str[1],str[2],str[3]));
          terminal.close();
        }
        });
      }
      else if(str == "v"){
        printOptions();
        terminal.question("",function(str){
          let arr = convertToArray(str);
          console.log(motion.velocity1(str[1],str[3]));
          terminal.close();
        }
        else{
          let arr = convertToArray(str;)
          console.log(motion.velocity2(str[0],str[2],str[3]));
          terminal.close();
        }
        });
      }
      else if(str == "t"){
        printOptions();
        terminal.question("",function(str){
        let arr = convertToArray(str);
        console.log(motion.time1(str[0],str2[1]));
        terminal.close();
      }
      else{
        let arr = convertToArray(str);
        console.log(motion.time2(str[0]str[1],str[2]));
        terminal.close();
        });
      }
      else if(str == "a"){
       printOptions();
       terminal.question("",function(str){
       let arr = convertToArray(str);
       console.log(motion.acceleration(arr[0],arr[1],arr[3]));
       terminal.close();
       });
      }
    });
  }

    else if(str == "energy"){
      terminal.question("What are you looking for?",function(str){
        str = str.toLowerCase();
        if(str == "ke"){
          printOptions();
          terminal.question("",function(str){
          let arr = convertToArray(str);
          console.log(energy.kineticEnergy(arr[1],arr[4]));
          terminal.close();
          });
        }
        else if(str == "m"){
          printOptions();
          terminal.question("",function(str){
          let arr = convertToArray(str);
          console.log(energy.mass(arr[1],arr[5]));
          terminal.close();
          });
        }
        else if(str == "v"){
          printOptions();
          terminal.question("",function(str){
          let arr = convertToArray(str);
          console.log(energy.velocity(arr[4],arr[5]));
          terminal.close();
          });
        }
      });
    }
    else{
      console.log("I'm sorry I don't know how to calculate that yet...");
    }

});
}
getinput();
