const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  let actorsage=[]
  var currentTime = new Date()
  var year = currentTime.getFullYear()
  function calculateActorsAges(list) {
    for(i=0;i<list.length;i++){
        actorsage.push(actors[i].name,year-actors[i].born)
  }
  console.log(actorsage)
}
calculateActorsAges(actors)
  console.log(year)