(function (global) {
    'use strict';

    function myanmarNumToWord() {
        var _myanmarNumToWord = {};

        var words = ['', 'တစ်', 'နှစ်', 'သုံး', 'လေး', 'ငါး', 'ခြောက်', 'ခုနှစ်', 'ရှစ်', 'ကိုး', 'တစ်ဆယ်'];
        var wordsConcat = words.slice(1).join('|');

        var numbers = {
            "၀": 0,
            "၁": 1,
            "၂": 2,
            "၃": 3,
            "၄": 4,
            "၅": 5,
            "၆": 6,
            "၇": 7,
            "၈": 8,
            "၉": 9
        };

        _myanmarNumToWord.convertToEnglishNumber = function (numberInput) {
            // convert to num to string
            numberInput = numberInput.toString();

            // check for wa lone cases
            numberInput = numberInput.replace(/([၁၂၃၄၅၆၇၈၉၀])ဝ/g, '$10');
            numberInput = numberInput.replace(/ဝ([၁၂၃၄၅၆၇၈၉၀])/g, '0$1');

            Object.keys(numbers).forEach(function (item) {
                const re = new RegExp(item, "g");
                numberInput = numberInput.replace(re, numbers[item]);
            });

            return numberInput;
        };

        _myanmarNumToWord.convertToBurmeseNumber = function (numberInput) {
            // convert to num to string
            numberInput = numberInput.toString();

            Object.keys(numbers).forEach(function (item) {
                const re = new RegExp(numbers[item], "g");
                numberInput = numberInput.replace(re, item);
            });

            return numberInput;
        };

        // We will add functions to our library here !
        // Just create a property to our library object.
        _myanmarNumToWord.convertToBurmeseWords = function (num, wordType = 'written') {

            // convert to english number first
            num = _myanmarNumToWord.convertToEnglishNumber(num);

            if (isNaN(num)) {
                throw new Error('Invalid number to convert.');
            }

            if ((num = num.toString()).length > 11) return 'overflow';
            var n = ('000000000' + num).substr(-10).match(/^(\d{1})(\d{1})(\d{1})(\d{2})(\d{1})(\d{1})(\d{1})(\d{2})$/);

            if (!n) return;

            var upperLakh = '';
            var lowerLakh = '';
            upperLakh += (n[1] != 0) ? 'သိန်း' + words[n[1][0]] + 'သောင်း' : '';
            upperLakh += (n[2] != 0) ? ((upperLakh != '') ? '' : 'သိန်း') + words[n[2][0]] + 'ထောင်' : '';
            upperLakh += (n[3] != 0) ? ((upperLakh != '') ? '' : 'သိန်း') + words[n[3][0]] + 'ရာ' : '';

            if ((n[4] != 0)) {
                if (words[n[4][0]] && !words[n[4][1]]) {
                    upperLakh += ((upperLakh != '') ? '' : 'သိန်း') + words[n[4][0]] + 'ဆယ်';
                } else if (words[n[4][0]] || words[n[4][1]]) {
                    upperLakh += (words[Number(n[4])] || words[n[4][0]] + 'ဆယ်' + words[n[4][1]]) + 'သိန်း';
                }
            }

            lowerLakh += (n[5] != 0) ? (words[Number(n[5])]) + 'သောင်း' : '';
            lowerLakh += (n[6] != 0) ? (words[Number(n[6])]) + 'ထောင်' : '';
            lowerLakh += (n[7] != 0) ? (words[Number(n[7])]) + 'ရာ' : '';
            lowerLakh += (n[8] != 0) ? (words[Number(n[8])] || words[n[8][0]] + 'ဆယ်' + words[n[8][1]]) : '';

            var final = (upperLakh !== '' && lowerLakh !== '') ? upperLakh + ' နှင့် ' + lowerLakh : upperLakh + lowerLakh;

            const re = new RegExp("(ဆယ်(?=" + wordsConcat + "))|(ရာ(?=" + wordsConcat + "))|(ထောင်(?=" + wordsConcat + "))|(သောင်း)", 'gi');
            final = final.replace(re, function ($0) {
                if ($0 == "ရာ")
                    return (wordType == 'speech') ? "ရာ့ " : "ရာ ";
                else if ($0 == "ထောင်")
                    return (wordType == 'speech') ? "ထောင့် " : "ထောင် ";
                else if ($0 == "ဆယ်")
                    return "ဆယ့်";
                else
                    return $0 + ' ';
            });

            return final.trim();
        }

        return _myanmarNumToWord;
    }

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return myanmarNumToWord();
        });

    } else if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = myanmarNumToWord();
        }
        exports.myanmarNumToWord = myanmarNumToWord();

    } else if (typeof (global.myanmarNumToWord) === 'undefined') {
        global.myanmarNumToWord = myanmarNumToWord();

    }

})(this); // We send the global variable withing our function

