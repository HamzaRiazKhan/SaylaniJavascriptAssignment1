let marks = +prompt("Write your total marks : ");
let obtmarks = +prompt("Write your obtained marks : ");
let per=(obtmarks/marks)*100;
if(per>=90 && per<=100)
{
    console.log("Your grade is 'A'");
}
else if(per>=80 && per<=89)
{
    console.log("Your grade is 'B'");
}
else if(per>=70 && per<=79)
{
    console.log("Your grade is 'C'");
}
else if(per>=60 && per<=69)
{
    console.log("Your grade is 'D'");
}
else
{
    console.log("Your grade is 'F'");
}