function generatePassword(options) {
  // 宣告
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const UpperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  let collection = []

  // include 需要的英、數字及符號
  if( options.lowercase === 'on'){
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if( options.uppercase === 'on'){
    collection = collection.concat(UpperCaseLetters.split(''))
  }

  if( options.numbers === 'on'){
    collection = collection.concat(number.split(''))
  }
  
  if( options.symbols === 'on'){
    collection = collection.concat(symbols.split(''))
  }
  
  // 去除不要產生的字元
  if(options.excludeCharacters){
    collection = collection.filter((character) => !options.excludeCharacters.includes(character))
  }

  // 判斷輸入資料是否正確
  if(collection.length === 0){
    return 'There is no valid character in your selection.'
  }

  let password = ''
  for(let i = 1; i<= options.length; i++){
    password += sample(collection)
  }
  console.log(password)
  return password

}

// 隨機產生字元
function sample(collection){
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

// 匯出function
module.exports = generatePassword