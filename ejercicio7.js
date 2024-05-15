const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

let clasificacion= [];
let metal=[];
let rock=[];
let pop=[];
let country=[];
let grunge=[];
function clasificatesongs(list){
for (let i =0;i<list.length;i++) {
  if(list[i].genre.includes("Rock")){
      rock.push(list[i].title)
  }
  if(list[i].genre.includes("Metal")){
      metal.push(list[i].title)
  }
  if(list[i].genre.includes("Pop")){
      pop.push(list[i].title)
  }
  if(list[i].genre.includes("Country")){
      country.push(list[i].title)
  }
  if(list[i].genre.includes("Grunge")){
      grunge.push(list[i].title)
  }
  

}
clasificacion.push({metal: metal},{rock: rock},{pop: pop},{country: country},{grunge: grunge})
console.log(clasificacion)
}
clasificatesongs(tracks) 