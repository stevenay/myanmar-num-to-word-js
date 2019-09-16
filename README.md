# Myanmar-Num-to-Word   
**Myanmar-Num-to-Word** is simple Javascript module to convert Myanmar numbers **digits to words** plus **burmese numbers to english numbers** conversion.

## Examples
### Numbers to Words    
1	=> တစ်<br/>
12 => တစ်ဆယ့်နှစ်<br/>
123 => တစ်ရာ နှစ်ဆယ့်သုံး<br/>
1234 => တစ်ထောင် နှစ်ရာ သုံးဆယ့်လေး<br/>
12345 => တစ်သောင်း နှစ်ထောင် သုံးရာ လေးဆယ့်ငါး<br/>
123456 => တစ်သိန်း နှင့် နှစ်သောင်း သုံးထောင် လေးရာ ငါးဆယ့်ခြောက်<br/>
1234567 => တစ်ဆယ့်နှစ်သိန်း နှင့် သုံးသောင်း လေးထောင် ငါးရာ ခြောက်ဆယ့်ခုနှစ်<br/>
12345678 => သိန်းတစ်ရာ နှစ်ဆယ့်သုံးသိန်း နှင့် လေးသောင်း ငါးထောင် ခြောက်ရာ ခုနှစ်ဆယ့်ရှစ်<br/>
123456789 => သိန်းတစ်ထောင် နှစ်ရာ သုံးဆယ့်လေးသိန်း နှင့် ငါးသောင်း ခြောက်ထောင် ခုနှစ်ရာ ရှစ်ဆယ့်ကိုး<br/>
1234567890 => သိန်းတစ်သောင်း နှစ်ထောင် သုံးရာ လေးဆယ့်ငါးသိန်း နှင့် ခြောက်သောင်း ခုနှစ်ထောင် ရှစ်ရာ ကိုးဆယ်<br/>

### Burmese to English and Vice Versa
0123456789 => ၀၁၂၃၄၅၆၇၈၉<br/>
၀၁၂၃၄၅၆၇၈၉ => 0123456789

## Features    
- Digits to Words    
 - Burmese Numbers <=> English Numbers conversion  
    
For **Digits to Words** conversion, the library provides **2** modes - **Written** and **Speech**. In **Speech** mode, pronunciation rule shifts numerical place name (the tens, hundreds and thousands place) from the low tone to the creaky tone.  
  
Written Mode (Default) => တစ်ထောင် နှစ်ရာ သုံးဆယ့်လေး  
Speech Mode => တစ်ထောင့် နှစ်ရာ့ သုံးဆယ့်လေး  
  
**Digits to Words** can accept both burmese and english numbers input.
    
## Installation    
##### Install using npm:    
    
``` npm install myanmar-num-to-word --save ```  

##### In the browser  
You can install myanmar-num-to-word with  [bower](http://bower.io/):  
  
```  
bower install myanmar-num-to-word  
```  
  
Or you can simply include the CDN link, kindly provided by  [unpkg](https://cdnjs.com/). 

```  
<script src="https://unpkg.com/myanmar-num-to-word"></script>  
```
    
## Usages 

### In browser  
``` 
<script src="myanmarNumToWord.js"></script> 
<script>    
  console.log(myanmarNumbers.convertToBurmeseWords(12345)); // တစ်သောင်း နှစ်ထောင် သုံးရာ လေးဆယ့်ငါး
  console.log(myanmarNumbers.convertToBurmeseWords(12345, 'speech')); // တစ်သောင်း နှစ်ထောင့် သုံးရာ့ လေးဆယ့်ငါး
  console.log(myanmarNumbers.convertToEnglishNumber('၁၂၃၄၅')); // 12345
  console.log(myanmarNumbers.convertToBurmeseNumber(12345)); // ၁၂၃၄၅  
</script>  
```

### In Node  
``` 
const myanmarNumbers = require('./myanmarNumToWord.js');  
myanmarNumbers.convertToBurmeseWords(12345); // တစ်သောင်း နှစ်ထောင် သုံးရာ လေးဆယ့်ငါး  
myanmarNumbers.convertToBurmeseWords(12345, 'speech'); // တစ်သောင်း နှစ်ထောင့် သုံးရာ့ လေးဆယ့်ငါး
myanmarNumbers.convertToEnglishNumber('၁၂၃၄၅'); // 12345  
myanmarNumbers.convertToBurmeseNumber(12345); // ၁၂၃၄၅  
```    

## Credit for Numerical Knowledge  
- [num-words](https://github.com/salmanm/num-words)    
- [Burmese Numerals](https://en.wikipedia.org/wiki/Burmese_numerals)    
    
### License [MIT](./LICENSE)