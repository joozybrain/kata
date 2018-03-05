function findMultiples(integer, limit) {
    var base = integer;
    var multiplesArray = [];
    
    for (var i = 1; base < limit; i++) {
      base = integer * i;
      if (base <= limit) {
        multiplesArray.push(base);
      }
    }
    
    return multiplesArray;
  
  }