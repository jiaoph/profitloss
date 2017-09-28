export const getCount = (obj) => {
  let total = obj.type === 0 ? 0 : -1;
  
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'number') {
      total += obj[key];
    }else{
      total += 0;
    }
  })

  return total === -1 ? '总计' : Number.parseFloat(total.toFixed(2));
}