const findAnagrams = (word, [...args]) => {
  
    let arr1 = word.toLowerCase().split('')
    arr1.sort();
    let arr2 = []
    
    for (let i = 0; i < args.length; i++) {
      if (word.toLowerCase() === args[i].toLowerCase()) {
        continue;
      } 
      let working = args[i].toLowerCase().split('')
      working.sort()
      for (let j = 0; i < working.length; j++) {
      if (arr1[j] === working[j]){
        if (j === arr1.length - 1 && arr1.length === working.length) {
            arr2.push(args[i])
            break;
        }
        continue;
      } else {
        break;
      }
    }
  }
  return arr2
}

console.log(findAnagrams('solemn', ['lemons', 'melons', 'eggseltn']))

