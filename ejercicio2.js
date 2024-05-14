const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  const beforelist= [];
  const afterlist= [];

  function moviefilter(list){
    for (const element of list) {
        if (element.releaseYear < 2000){
            beforelist.push(element);
        }
        else{
            afterlist.push(element)
        }
    }
  }
  moviefilter(movies)
 console.log("Peliculas de antes de el 2000",beforelist.length)
 console.log("Peliculas de después del 2000",afterlist.length)
  