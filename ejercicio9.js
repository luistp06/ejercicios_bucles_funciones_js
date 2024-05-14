const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  let older={name: "", year: 10000}
  function findOldestXMen(list) {
      for (let i=0;i<list.length;i++) {
         if(list[i].year<older.year){
        older= list[i];
        
         } 
   
    }
    console.log(older)
}
    findOldestXMen(xMen);