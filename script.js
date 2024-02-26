const inputTheNumber = document.getElementById('input-number')
const resultText = document.getElementById('result-text')



const yekTo19 = {
    1: 'یک',
    2: 'دو',
    3: 'سه',
    4: 'چهار',
    5: 'پنج',
    6: 'شش',
    7: 'هفت',
    8: 'هشت',
    9: 'نه',
    10: 'ده',
    11: 'یازده',
    12: 'دوازده',
    13: 'سیزده',
    14: 'چهارده',
    15: 'پانزده',
    16: 'شانزده',
    17: 'هفده',
    18: 'هجده',
    19: 'نوزده',
}

const bistTo90 = {
    2: 'بیست',
    3: 'سی',
    4: 'چهل',
    5: 'پنجاه',
    6: 'شصت',
    7: 'هفتاد',
    8: 'هشتاد',
    9: 'نود',
}

const sadTo900 = {
    1: 'صد',
    2: 'دویست',
    3: 'سیصد',
    4: 'چهارصد',
    5: 'پانصد',
    6: 'ششصد',
    7: 'هفتصد',
    8: 'هشتصد',
    9: 'نهصد',
}

let seperator = ' و '
let thousentSeperator = ' هزار و '
let milionSeperator = ' میلیون و '
let billionSeperator = ' بیلیون و '
let trillionSeperator = ' تریلیون و '
let quadrillionSeperator = ' کادریلیون و '
let quintillionSeperator = ' کنتیلیون و '



function numberToWord(inputNumber) {
    let finalOutput
    let thisNumber = inputNumber
    inputNumber = parseInt(inputNumber)


    if (inputNumber < 1000000000000000000000) {



        if (thisNumber.charAt(thisNumber.length - 6) === '0' && thisNumber.charAt(thisNumber.length - 5) === '0' && thisNumber.charAt(thisNumber.length - 4) === '0') {
            thousentSeperator = ''
        }
        if (thisNumber.charAt(thisNumber.length - 9) === '0' && thisNumber.charAt(thisNumber.length - 8) === '0' && thisNumber.charAt(thisNumber.length - 7) === '0') {
            milionSeperator = ''
        }
        if (thisNumber.charAt(thisNumber.length - 12) === '0' && thisNumber.charAt(thisNumber.length - 11) === '0' && thisNumber.charAt(thisNumber.length - 10) === '0') {
            billionSeperator = ''
        }
        if (thisNumber.charAt(thisNumber.length - 15) === '0' && thisNumber.charAt(thisNumber.length - 14) === '0' && thisNumber.charAt(thisNumber.length - 13) === '0') {
            trillionSeperator = ''
        }
        if (thisNumber.charAt(thisNumber.length - 18) === '0' && thisNumber.charAt(thisNumber.length - 17) === '0' && thisNumber.charAt(thisNumber.length - 16) === '0') {
            quadrillionSeperator = ''
        }
        if (thisNumber.charAt(thisNumber.length - 21) === '0' && thisNumber.charAt(thisNumber.length - 20) === '0' && thisNumber.charAt(thisNumber.length - 19) === '0') {
            quintillionSeperator = ''
        }



        if (inputNumber < 1) {
            finalOutput = 'صفر'
        } else if (inputNumber < 1000) {
            finalOutput = _3Ragham(inputNumber)
        } else if (inputNumber < 1000000) {
            let left3Num
            let right3Num
            if (thisNumber.length === 6) {
                left3Num = thisNumber.substring(0, 3)
                right3Num = thisNumber.substring(3, 6)
            } else if (thisNumber.length === 5) {
                left3Num = thisNumber.substring(0, 2)
                right3Num = thisNumber.substring(2, 5)
            } else {
                left3Num = thisNumber.substring(0, 1)
                right3Num = thisNumber.substring(1, 4)
            }
            finalOutput = _3Ragham(parseInt(left3Num)) + thousentSeperator + _3Ragham(parseInt(right3Num))
        } else if (inputNumber < 1000000000) {
            let _3Number1
            let _3Number2
            let _3Number3

            if (thisNumber.length === 9) {
                _3Number1 = thisNumber.substring(0, 3)
                _3Number2 = thisNumber.substring(3, 6)
                _3Number3 = thisNumber.substring(6, 9)
            } else if (thisNumber.length === 8) {
                _3Number1 = thisNumber.substring(0, 2)
                _3Number2 = thisNumber.substring(2, 5)
                _3Number3 = thisNumber.substring(5, 8)
            } else {
                _3Number1 = thisNumber.substring(0, 1)
                _3Number2 = thisNumber.substring(1, 4)
                _3Number3 = thisNumber.substring(4, 7)
            }
            finalOutput = _3Ragham(parseInt(_3Number1)) + milionSeperator + _3Ragham(parseInt(_3Number2)) + thousentSeperator + _3Ragham(parseInt(_3Number3))
        } else if (inputNumber < 1000000000000) {
            let _3Number1
            let _3Number2
            let _3Number3
            let _3Number4

            if (thisNumber.length === 12) {
                _3Number1 = thisNumber.substring(0, 3)
                _3Number2 = thisNumber.substring(3, 6)
                _3Number3 = thisNumber.substring(6, 9)
                _3Number4 = thisNumber.substring(9, 12)
            } else if (thisNumber.length === 11) {
                _3Number1 = thisNumber.substring(0, 2)
                _3Number2 = thisNumber.substring(2, 5)
                _3Number3 = thisNumber.substring(5, 8)
                _3Number4 = thisNumber.substring(8, 11)
            } else {
                _3Number1 = thisNumber.substring(0, 1)
                _3Number2 = thisNumber.substring(1, 4)
                _3Number3 = thisNumber.substring(4, 7)
                _3Number4 = thisNumber.substring(7, 10)
            }
            finalOutput = _3Ragham(parseInt(_3Number1)) + billionSeperator + _3Ragham(parseInt(_3Number2)) + milionSeperator + _3Ragham(parseInt(_3Number3)) + thousentSeperator + _3Ragham(parseInt(_3Number4))
        } else if (inputNumber < 1000000000000000) {
            let _3Number1
            let _3Number2
            let _3Number3
            let _3Number4
            let _3Number5

            if (thisNumber.length === 15) {
                _3Number1 = thisNumber.substring(0, 3)
                _3Number2 = thisNumber.substring(3, 6)
                _3Number3 = thisNumber.substring(6, 9)
                _3Number4 = thisNumber.substring(9, 12)
                _3Number5 = thisNumber.substring(12, 15)
            } else if (thisNumber.length === 14) {
                _3Number1 = thisNumber.substring(0, 2)
                _3Number2 = thisNumber.substring(2, 5)
                _3Number3 = thisNumber.substring(5, 8)
                _3Number4 = thisNumber.substring(8, 11)
                _3Number5 = thisNumber.substring(11, 14)
            } else {
                _3Number1 = thisNumber.substring(0, 1)
                _3Number2 = thisNumber.substring(1, 4)
                _3Number3 = thisNumber.substring(4, 7)
                _3Number4 = thisNumber.substring(7, 10)
                _3Number5 = thisNumber.substring(10, 13)
            }
            finalOutput = _3Ragham(parseInt(_3Number1)) + trillionSeperator + _3Ragham(parseInt(_3Number2)) + billionSeperator + _3Ragham(parseInt(_3Number3)) + milionSeperator + _3Ragham(parseInt(_3Number4)) + thousentSeperator + _3Ragham(parseInt(_3Number5))
        } else if (inputNumber < 1000000000000000000) {
            let _3Number1
            let _3Number2
            let _3Number3
            let _3Number4
            let _3Number5
            let _3Number6

            if (thisNumber.length === 18) {
                _3Number1 = thisNumber.substring(0, 3)
                _3Number2 = thisNumber.substring(3, 6)
                _3Number3 = thisNumber.substring(6, 9)
                _3Number4 = thisNumber.substring(9, 12)
                _3Number5 = thisNumber.substring(12, 15)
                _3Number6 = thisNumber.substring(15, 18)
            } else if (thisNumber.length === 17) {
                _3Number1 = thisNumber.substring(0, 2)
                _3Number2 = thisNumber.substring(2, 5)
                _3Number3 = thisNumber.substring(5, 8)
                _3Number4 = thisNumber.substring(8, 11)
                _3Number5 = thisNumber.substring(11, 14)
                _3Number6 = thisNumber.substring(14, 17)
            } else {
                _3Number1 = thisNumber.substring(0, 1)
                _3Number2 = thisNumber.substring(1, 4)
                _3Number3 = thisNumber.substring(4, 7)
                _3Number4 = thisNumber.substring(7, 10)
                _3Number5 = thisNumber.substring(10, 13)
                _3Number6 = thisNumber.substring(13, 16)
            }
            finalOutput = _3Ragham(parseInt(_3Number1)) + quadrillionSeperator + _3Ragham(parseInt(_3Number2)) + trillionSeperator + _3Ragham(parseInt(_3Number3)) + billionSeperator + _3Ragham(parseInt(_3Number4)) + milionSeperator + _3Ragham(parseInt(_3Number5)) + thousentSeperator + _3Ragham(parseInt(_3Number6))
        } else if (inputNumber < 1000000000000000000000) {
            let _3Number1
            let _3Number2
            let _3Number3
            let _3Number4
            let _3Number5
            let _3Number6
            let _3Number7

            if (thisNumber.length === 21) {
                _3Number1 = thisNumber.substring(0, 3)
                _3Number2 = thisNumber.substring(3, 6)
                _3Number3 = thisNumber.substring(6, 9)
                _3Number4 = thisNumber.substring(9, 12)
                _3Number5 = thisNumber.substring(12, 15)
                _3Number6 = thisNumber.substring(15, 18)
                _3Number7 = thisNumber.substring(18, 21)
            } else if (thisNumber.length === 20) {
                _3Number1 = thisNumber.substring(0, 2)
                _3Number2 = thisNumber.substring(2, 5)
                _3Number3 = thisNumber.substring(5, 8)
                _3Number4 = thisNumber.substring(8, 11)
                _3Number5 = thisNumber.substring(11, 14)
                _3Number6 = thisNumber.substring(14, 17)
                _3Number7 = thisNumber.substring(17, 20)
            } else {
                _3Number1 = thisNumber.substring(0, 1)
                _3Number2 = thisNumber.substring(1, 4)
                _3Number3 = thisNumber.substring(4, 7)
                _3Number4 = thisNumber.substring(7, 10)
                _3Number5 = thisNumber.substring(10, 13)
                _3Number6 = thisNumber.substring(13, 16)
                _3Number7 = thisNumber.substring(16, 19)
            }
            finalOutput = _3Ragham(parseInt(_3Number1)) + quintillionSeperator + _3Ragham(parseInt(_3Number2)) + quadrillionSeperator + _3Ragham(parseInt(_3Number3)) + trillionSeperator + _3Ragham(parseInt(_3Number4)) + billionSeperator + _3Ragham(parseInt(_3Number5)) + milionSeperator + _3Ragham(parseInt(_3Number6)) + thousentSeperator + _3Ragham(parseInt(_3Number7))
        }

        if (finalOutput.charAt(finalOutput.length - 2) === 'و') {
            finalOutput = finalOutput.substring(0, finalOutput.length - 3)
        }

    } else if (inputNumber >= 1000000000000000000000) {
        finalOutput = 'عدد وارد شده بسیار بزرگ است'
    } else {
        finalOutput = 'عدد وارد کنید'
    }
    console.log(finalOutput);
    return finalOutput
}

function removeFromNuber(howMany = 1) {
    thisNumber = thisNumber.substring(howMany)
}

function _3Ragham(number) {
    let myNumberLenght = (JSON.stringify(number).length);
    thisNumber = JSON.stringify(number)
    let output = '';

    for (let i = 0; i < myNumberLenght; i++) {
        if (thisNumber.charAt(0) == 0) {
            removeFromNuber()
        } else {
            switch (thisNumber.length) {
                case 1:
                    output += yekTo19[thisNumber] + seperator
                    break;
                case 2:
                    if (parseInt(thisNumber) < 20) {
                        output += yekTo19[thisNumber] + seperator
                        myNumberLenght = 0
                    } else {
                        output += bistTo90[thisNumber.charAt(0)] + seperator
                        removeFromNuber()
                    }
                    break;
                case 3:
                    output += sadTo900[thisNumber.charAt(0)] + seperator
                    removeFromNuber()
                    break;
            }
        }
    }

    return output.slice(0, -3)
}

let keyNumber = ''

inputTheNumber.addEventListener('keydown', (key) => {
    if (key.key === 'Backspace') {
        keyNumber = keyNumber.slice(0, -1);
    } else {
        keyNumber += key.key
    }
    setTimeout(() => {
        _3digitNumber()
        resultText.innerText = numberToWord(keyNumber)
        if (inputTheNumber.value === 'NaN') {
            inputTheNumber.value = 0
        }
    }, 1);
})

function _3digitNumber() {
    inputTheNumber.value = parseInt(keyNumber).toLocaleString()
}

inputTheNumber.addEventListener('dblclick', () => {
    keyNumber = ''
})