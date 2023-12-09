const translate = (phrase) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  
    
  let phrase2 = phrase.toLowerCase();
  let arr1 = phrase2.split(' ')
  let arr2 = []

  for (let i = 0; i < arr1.length; i++) {
    let word = arr1[i].split('');

    if (vowels.includes(word[0]) || (word[0] == 'x' && word[1] == 'r') || (word[0] == 'y' && word[1] == 't')) {
        word.push('ay')
    } else if (word[0] == 'q' && word[1] == 'u') {
        for (let i = 0; i < 2; i++) {
          word.push(word.shift())
        }
        word.push('ay')
    } else if (consonants.includes(word[0]) && (word[1] == 'q' && word[2] == 'u')) {
        for (let i = 0; i < 3; i++) {
        word.push(word.shift())
        }
        word.push('ay')
        
    } else if ((word.length == 2 && word[1] == 'y') || word.includes('y') && (word.indexOf('y') > 1) && ((consonants.includes(word[word.indexOf('y') - 1])) && (consonants.includes(word[word.indexOf('y') - 2])))) {
        if (word.length == 2) {
          word.push(word.shift())
          word.push('ay')
        } else {
          for (let i = 0; i < 2; i++) {
        word.push(word.shift())
        }
        word.push('ay')
        }
        
    } else if ((consonants.includes(word[0]) && (consonants.includes(word[1])) && (consonants.includes(word[2]))) || (consonants.includes(word[0]) && (consonants.includes(word[1]))) || consonants.includes(word[0])) {
        if (!consonants.includes(word[1])) {
          word.push(word.shift());
          word.push('ay')
        } else if ((consonants.includes(word[0]) && (consonants.includes(word[1])) && (consonants.includes(word[2])))){
          for (let i = 0; i < 3; i++) {
            word.push(word.shift());
        }
        word.push('ay')
        } else {
          for (let i = 0; i < 2; i++) {
            word.push(word.shift());
        }
        word.push('ay')
        }
        
      } 
  let joinWord = word.join('')
  arr2.push(joinWord);
        
    }
  
  return arr2.join(' ');
    
}
  


  