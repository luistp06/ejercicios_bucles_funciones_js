const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'teleportation' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' },
    { name: 'Colossus', power: 'teleportation' }
  ];
  let i = 0;
  function findMutantByPower(list, power) {
    for(i=0;i<list.length;i++){
        if(list[i].power === power){
            console.log(list[i])
        } 
  }
}
findMutantByPower(mutants,"teleportation")