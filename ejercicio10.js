const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  let capital = [1];
  function getCapital(list,country) {
    for (const property in list) {
     if(property == country){
        capital=(`${property}: ${list[property]}`);
      }
    } 
     if(capital==1 ){
            capital=("Pais erroneo o capital desconocida")
        }   
        console.log(capital)
    }
    
    
  getCapital(capitals,"France")