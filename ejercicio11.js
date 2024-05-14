const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  totalduration= 0;

  function averageMovieDuration(list) {
    for(i=0;i<list.length;i++){
        totalduration+=list[i].duration
    }
    let average= totalduration/list.length;
    return average;
  }
  const promedio= averageMovieDuration(movies)
  console.log(promedio)
 