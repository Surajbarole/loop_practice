for(let i=1;i<=4;i++){
let  bag=""
  let bag1=""
  for(let j=1;j<=i;j++){
    bag1+=j+" "
    bag+="*"+" "
  }
  console.log(bag1)
  console.log(bag)
}
//output
// 1
// *
// 1 2
// * *
// 1 2 3
// * * *
// 1 2 3 4
// * * * *