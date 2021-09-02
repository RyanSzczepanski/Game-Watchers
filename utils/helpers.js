const { blockParams } = require("handlebars");

module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_url: url => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  GetClassSectionNumb: (list, index) => {
    var numleft = 0
    numleft = list.length-index;
    var ret;
    if (numleft >= 3){
      ret = "s4"
    }
    else if (numleft == 2){
      ret = "s6";
    }
    else if (numleft <= 1){
      ret = "s12";
    }
    return ret;
  },
  ShouldCreateNewRow: (index, lead) => {
    if(!((index + 1 + lead) % 3))
      return true;
    else
      return false;
  },
  ShouldEndRow: (list, index, lead) => {
    i = index + lead;    
    if(!(index % 3))
      return true;
    else if (list.length == i)
      return true;
    else
      return false;
  },
  setVar: (varName, varValue, options) => {
    options.data.root[varName] = varValue;
  },
  log: (input) => {
    console.log(input)
  }
};
