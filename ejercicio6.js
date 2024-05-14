const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
 let seventies=[];
 let eighties=[];
 let nineties=[];
 let twenties=[];
 let twentytens=[];
 let starwarsorder= [];
 function orderlist(list){
for (let i =0;i<list.length;i++) {
    if (list[i].releaseYear>=1970 && list[i].releaseYear<1980){
        seventies.push(list[i].title); 
    }
    else if(list[i].releaseYear>=1980 && list[i].releaseYear<1990){
        eighties.push(list[i].title);
        
    }
    else if(list[i].releaseYear>=1990 && list[i].releaseYear<2000){
        nineties.push(list[i].title);
    }
    else if(list[i].releaseYear>=2000 && list[i].releaseYear<2010){
        twenties.push(list[i].title);
    }
    else{
        twentytens.push(list[i].title);
    }
    
}
starwarsorder.push({seventies: seventies},{eighties: eighties},{nineties: nineties},{twenties: twenties},{twentytens: twentytens});
console.log(starwarsorder);


 }
  orderlist(starWarsMovies);
 

