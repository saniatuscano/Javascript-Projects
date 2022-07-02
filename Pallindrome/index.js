
function reverseString(str){
    let splitString=str.split("");
    let reverseArary=splitString.reverse();
    let joinArray=reverseArary.join("");
    return joinArray;
}
function pallindromeChecker(){
    let input=document.getElementById("input").value;
    let output=document.getElementById("output");
    if(input==reverseString(input)){
        output.innerHTML="It is pallindrome!!";
    }else{
        output.innerHTML="It is not pallindrome";
    }
}