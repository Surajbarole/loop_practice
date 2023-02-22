var char = ["A","B","C","D","E","F","G","H","K"];
var start=0;
// Handle Even Array
if(char.length % 2 == 0)
{
start = char.length/2;
}
// Handle Odd Array
else
{
start = Math.floor(char.length/2);
}
for(var i=start; i<char.length; i++)
{
console.log(char[i]);
}
