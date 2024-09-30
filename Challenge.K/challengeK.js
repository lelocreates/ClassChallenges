const nickname= "Timmy";
const firstname = "Timothy";
const newNickname = nickname.trim();
const newFirstname = firstname.trim();
if(newNickname !== null && newNickname.length !== 0 ) {
    console.log(`Good Morning, ${newNickname}!`)
}else if(!newNickname && newNickname.length === 0 && newFirstname.length !==0 ) {
    console.log(`Good Morning, ${newFirstname}!`)
}else  {
    console.log("please enter a name")
}

