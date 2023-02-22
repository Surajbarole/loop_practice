// Code 11: Remove a char from String
var char = "suraj";
var output = "";
for(var i=0; i<char.length; i++)
{
if(char[i] != "s")
{
output = output + char[i];
}
}
console.log(output);
