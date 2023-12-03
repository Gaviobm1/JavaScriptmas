const translate = (phrase) => {
    const arr1 = phrase.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  
    if (!arr1.includes(' ')) {
  
      if (vowels.includes(arr1[0]) || (arr1[0] == 'x' && arr1[1] == 'r') || (arr1[0] == 'y' && arr1[1] == 't')) {
        arr1.push('ay')
      } else if (arr1[0] == 'q' && arr1[1] == 'u') {
        for (let i = 0; i < 2; i++) {
          arr1.push(arr1.shift())
        }
        arr1.push('ay')
      } else if (consonants.includes(arr1[0]) && (arr1[1] == 'q' && arr1[2] == 'u')) {
        for (let i = 0; i < 3; i++) {
        arr1.push(arr1.shift())
        }
        arr1.push('ay')
        
      } else if ((arr1.length == 2 && arr1[1] == 'y') || arr1.includes('y') && (arr1.indexOf('y') > 1) && ((consonants.includes(arr1[arr1.indexOf('y') - 1])) && (consonants.includes(arr1[arr1.indexOf('y') - 2])))) {
        if (arr1.length == 2) {
          arr1.push(arr1.shift())
          arr1.push('ay')
        } else {
          for (let i = 0; i < 2; i++) {
        arr1.push(arr1.shift())
        }
        arr1.push('ay')
        }
        
      } else if ((consonants.includes(arr1[0]) && (consonants.includes(arr1[1])) && (consonants.includes(arr1[2]))) || (consonants.includes(arr1[0]) && (consonants.includes(arr1[1]))) || consonants.includes(arr1[0])) {
        if (!consonants.includes(arr1[1])) {
          arr1.push(arr1.shift());
          arr1.push('ay')
        } else if ((consonants.includes(arr1[0]) && (consonants.includes(arr1[1])) && (consonants.includes(arr1[2])))){
          for (let i = 0; i < 3; i++) {
            arr1.push(arr1.shift());
        }
        arr1.push('ay')
        } else {
          for (let i = 0; i < 2; i++) {
            arr1.push(arr1.shift());
        }
        arr1.push('ay')
        }
        
      } 
    
    return arr1.join('')
  
    } else {
      let phrase2 = phrase.toLowerCase();
      let arr2 = phrase2.split(' ')
      let arr3 = []
      for (let i = 0; i < arr2.length; i++) {
        let word = arr2[i].split('');
        if (vowels.includes(word[0]) || (word[0] == 'x' && arr1[1] == 'r') || (word[0] == 'y' && word[1] == 't')) {
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
    arr3.push(joinWord);
        
      }
  
    return arr3.join(' ');
    
    }
  };

  