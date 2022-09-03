//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "xyz@gmail.com";
let reg_password = "123456";

let ent_username = "xy@gmail.com";
let ent_password = "123456";

if (reg_username==ent_username){
  if (reg_password==ent_password){
    console.log("user can login");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong username");
}