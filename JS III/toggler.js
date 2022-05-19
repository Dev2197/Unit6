
function toggler() {
   let arr =arguments;
   let index = -1;

   return function()
   {
       index = index+1;
       if(index >= arr.length)
       {
           index = 0;
       }
       console.log(arr[index])
   }
    
}

let toggle = toggler(1,2,3)

toggle()
toggle()
toggle()



