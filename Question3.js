let num1 = +prompt ("Write your first number : ");
let num2 = +prompt ("Write your second number : ");
let num3 = +prompt ("Write your third number : ");
let num4 = +prompt ("Write your fourth number : ");
let num5 = +prompt ("Write your fifth number : ");
if(num1>(num2,num3,num4,num5))
{
    console.log("Your larger number among 5 numbers is : " + num1);
}
else if(num2>(num1,num3,num4,num5))
{
    console.log("Your larger number among 5 numbers is : " + num2);
}
else if(num3>(num2,num1,num4,num5))
{
    console.log("Your larger number among 5 numbers is : " + num3);
}
else if(num4>(num2,num3,num1,num5))
{
    console.log("Your larger number among 5 numbers is : " + num4);
}
else
{
    console.log("Your larger number among 5 numbers is : " + num5);
}