//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (x) => {
    if(x%4===0){
         if(x%100===0){
            if(x%400===0){
                return true
               }
           else{
              return false
              }
}
      else{
         return true
        }
}
  else{
   return false
   }
};
