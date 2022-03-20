
function validParentheses(parens) {
    let parenArr = parens.split('');
    let result = false

    let findChar = () =>{
        let closing = parenArr.indexOf(')', 1);
        parenArr.splice(closing,1);
        parenArr.shift();
        return true
    }
    while(parenArr.length!=0){
    result = (parenArr[0]!=')' ? findChar(): false)

  }
  return result
}


  console.log(validParentheses("())("));

