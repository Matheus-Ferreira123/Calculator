var n1 = ''
var n2 = ''
var sinal = ''
var result = ''

function getNumber(num) {
    if(num != "ON" && num != "C" && num != "="){
        document.querySelector('#screen').value += num
        Number.parseInt(num)
        
        if (isNaN(num) && num != '.') {
            sinal = num
        }else {
            if (sinal == '') {
                n1 += num
            }else {
                n2 += num
            }
        }
    }

    if (num == "C"){
        n1 = ''
        n2 = ''
        sinal = ''
        result = ''
        document.querySelector('#screen').value = ''
    }
   
    if (n1 != '' && n2 != '' && num == '=') {
        let n1Int = strToInt(n1)
        let n2Int = strToInt(n2)
        
        switch (sinal){
            case '+':
                result = n1Int + n2Int
                break
            case '-':
                result = n1Int - n2Int
                break
            case '*':
                result = n1Int * n2Int
                break
            case '/':
                result = n1Int / n2Int
                break
            case '%':
                result = (n1Int/100) * n2Int
                break
        }

        document.querySelector('#screen').value = result
        n1 = result
        n2 = ''
        result = ''
    }
}

function strToInt(str) {
    return parseFloat(str)
}