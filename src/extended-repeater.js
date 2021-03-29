const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
  
  if (options.hasOwnProperty('repeatTimes') === true 
  && options.hasOwnProperty('separator') === true
  && options.hasOwnProperty('addition')
  && options.hasOwnProperty('additionRepeatTimes')
  && options.hasOwnProperty('additionSeparator')){ 
    let add = []
    if (options.addition === null){options.addition = 'null'}
    for (let j = 0; j < options.additionRepeatTimes; j++){
      add.push(options.addition)
    }
    add = add.join(options.additionSeparator);
    for (let i = 0; i < options.repeatTimes; i++){
      arr.push(str + add);
    }
  return arr.join(options.separator)
  }
  else if(options.hasOwnProperty('repeatTimes')
  && options.hasOwnProperty('addition')
  && options.hasOwnProperty('additionSeparator')
  && options.hasOwnProperty('additionRepeatTimes')){
    let add = [];
    for (let j = 0; j < options.additionRepeatTimes; j++){
      add.push(options.addition)
    }
    add = add.join(options.additionSeparator);
    for (let i = 0; i < options.repeatTimes; i++){
      arr.push(str+add);
    }
    return arr.join('+')
  }
  else if(options.hasOwnProperty('repeatTimes')
  && options.hasOwnProperty('addition')
  && options.hasOwnProperty('separator')
  && options.hasOwnProperty('additionRepeatTimes')){
    let add = [];
    for (let j = 0; j < options.additionRepeatTimes; j++){
      add.push(options.addition)
    }
    add = add.join('|');
    for (let i = 0; i < options.repeatTimes; i++){
      arr.push(str+add);
    }
    return arr.join(options.separator)
  }
    else if (options.hasOwnProperty('repeatTimes') === true 
    && options.hasOwnProperty('separator') === true
    && options.hasOwnProperty('addition')
    && options.hasOwnProperty('additionRepeatTimes')){
      for (let i = 0; i < options.repeatTimes; i++){
        let add = options.addition;
      arr.push(str + add.repeat(options.additionRepeatTimes));
      }
    return arr.join(options.separator)
    }
    else if (options.hasOwnProperty('separator') === true
    && options.hasOwnProperty('addition')
    && options.hasOwnProperty('additionSeparator')){
      return str+options.addition;
    }
    else if(options.hasOwnProperty('repeatTimes')
    && options.hasOwnProperty('addition')
    && options.hasOwnProperty('additionRepeatTimes')){
      let add = [];
      for (let j = 0; j < options.additionRepeatTimes; j++){
        add.push(options.addition)
      }
      add = add.join('|');
      for (let i = 0; i < options.repeatTimes; i++){
        arr.push(str+add);
      }
      return arr.join('+')
    }
    else if (options.hasOwnProperty('repeatTimes') === true 
    && options.hasOwnProperty('addition') === true){
      for (let i = 0; i < options.repeatTimes; i++){
        arr.push(str+options.addition);
      }
      return arr.join('+')
    }
    else if (options.hasOwnProperty('repeatTimes') === true 
    && options.hasOwnProperty('separator') === true
    ) {
    for (let i = 0; i < options.repeatTimes; i++){
      arr.push(str);
    }
    return arr.join(options.separator)
  }
  else if (options.hasOwnProperty('repeatTimes') === true){
  
    for (let i = 0; i < options.repeatTimes; i++){
      arr.push(str);
    }
    return arr.join('+')
}
}
  