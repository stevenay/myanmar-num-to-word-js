var assert = require("assert");
var myanmarNumbers = require("../myanmarNumbers");

describe('Numbers:', function() {
    describe('Convert from Burmese to English Numbers', function() {
        it('should return 1 when given ၁', function(){
            assert.equal(1, myanmarNumbers.convertToEnglishNumber("၁"));
        });

        it('should return 10 when given ၁၀', function(){
            assert.equal(10, myanmarNumbers.convertToEnglishNumber("၁၀"));
        });

        it('should return 10 when given ten with walone ၁ဝ', function(){
            assert.equal(10, myanmarNumbers.convertToEnglishNumber("၁ဝ"));
        });

        it('should convert all burmese numbers to english numbers', function(){
            assert.equal(1234567890, myanmarNumbers.convertToEnglishNumber("၁၂၃၄၅၆၇၈၉၀"));
        });
    });

    describe('Convert from English to Burmese Numbers', function() {
        it('should return ၁ when given string 1', function(){
            assert.equal("၁", myanmarNumbers.convertToBurmeseNumber("1"));
        });

        it('should return ၁ when given number 1', function(){
            assert.equal("၁", myanmarNumbers.convertToBurmeseNumber(1));
        });

        it('should convert all english numbers to burmese numbers', function(){
            assert.equal("၁၂၃၄၅၆၇၈၉၀", myanmarNumbers.convertToBurmeseNumber(1234567890));
        });
    });
});

describe('Words:', function() {
    describe('Written', function() {
        describe('In English Digit', function() {
            it('should return တစ် for english 1 digit number', function(){
                assert.equal("တစ်", myanmarNumbers.convertToBurmeseWords("1"));
            });

            it('should return တစ်ဆယ် for english 2 digit number', function(){
                assert.equal("တစ်ဆယ်", myanmarNumbers.convertToBurmeseWords("10"));
            });

            it('should return တစ်ရာ for english 3 digit number', function(){
                assert.equal("တစ်ရာ", myanmarNumbers.convertToBurmeseWords("100"));
            });

            it('should return တစ်ရာ တစ်ဆယ့်တစ် for english number 111', function(){
                assert.equal("တစ်ရာ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("111"));
            });

            it('should return တစ်ထောင် တစ်ရာ တစ်ဆယ့်တစ် for english number 1111', function(){
                assert.equal("တစ်ထောင် တစ်ရာ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("1111"));
            });

            it('should return နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 23589', function(){
                assert.equal("နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("23589"));
            });

            it('should return သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 323589', function(){
                assert.equal("သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("323589"));
            });

            it('should return သိန်းငါးဆယ် for english number 5000000', function(){
                assert.equal("သိန်းငါးဆယ်", myanmarNumbers.convertToBurmeseWords("5000000"));
            });

            it('should return သိန်းငါးဆယ် နှင့် သုံးသောင်း for english number 5030000', function(){
                assert.equal("သိန်းငါးဆယ် နှင့် သုံးသောင်း", myanmarNumbers.convertToBurmeseWords("5030000"));
            });

            it('should return ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 5323589', function(){
                assert.equal("ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("5323589"));
            });
        })

        describe('In Burmese Digit', function() {
            it('should return တစ် for english 1 digit number', function(){
                assert.equal("တစ်", myanmarNumbers.convertToBurmeseWords("၁"));
            });

            it('should return တစ်ဆယ် for english 2 digit number', function(){
                assert.equal("တစ်ဆယ်", myanmarNumbers.convertToBurmeseWords("၁၀"));
            });

            it('should return တစ်ရာ for english 3 digit number', function(){
                assert.equal("တစ်ရာ", myanmarNumbers.convertToBurmeseWords("၁၀၀"));
            });

            it('should return တစ်ရာ တစ်ဆယ့်တစ် for english number 111', function(){
                assert.equal("တစ်ရာ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("၁၁၁"));
            });

            it('should return တစ်ထောင် တစ်ရာ တစ်ဆယ့်တစ် for english number 1111', function(){
                assert.equal("တစ်ထောင် တစ်ရာ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("၁၁၁၁"));
            });

            it('should return နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 23589', function(){
                assert.equal("နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("၂၃၅၈၉"));
            });

            it('should return သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 323589', function(){
                assert.equal("သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("၃၂၃၅၈၉"));
            });

            it('should return သိန်းငါးဆယ် for english number 5000000', function(){
                assert.equal("သိန်းငါးဆယ်", myanmarNumbers.convertToBurmeseWords("၅၀၀၀၀၀၀"));
            });

            it('should return သိန်းငါးဆယ် နှင့် သုံးသောင်း for english number 5030000', function(){
                assert.equal("သိန်းငါးဆယ် နှင့် သုံးသောင်း", myanmarNumbers.convertToBurmeseWords("၅၀၃၀၀၀၀"));
            });

            it('should return ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 5323589', function(){
                assert.equal("ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("၅၃၂၃၅၈၉"));
            });
        })
    });

    describe('Spoken', function() {
        describe('In English Digit', function() {
            it('should return တစ် for english 1 digit number', function(){
                assert.equal("တစ်", myanmarNumbers.convertToBurmeseWords("1", "speech"));
            });

            it('should return တစ်ဆယ် for english 2 digit number', function(){
                assert.equal("တစ်ဆယ်", myanmarNumbers.convertToBurmeseWords("10", "speech"));
            });

            it('should return တစ်ရာ for english 3 digit number', function(){
                assert.equal("တစ်ရာ", myanmarNumbers.convertToBurmeseWords("100", "speech"));
            });

            it('should return တစ်ရာ့ တစ်ဆယ့်တစ် for english number 111', function(){
                assert.equal("တစ်ရာ့ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("111", "speech"));
            });

            it('should return တစ်ထောင် တစ်ရာ တစ်ဆယ့်တစ် for english number 1111', function(){
                assert.equal("တစ်ထောင့် တစ်ရာ့ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("1111", "speech"));
            });

            it('should return နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 23589', function(){
                assert.equal("နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("23589", "speech"));
            });

            it('should return သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 323589', function(){
                assert.equal("သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("323589", "speech"));
            });

            it('should return သိန်းငါးဆယ် for english number 5000000', function(){
                assert.equal("သိန်းငါးဆယ်", myanmarNumbers.convertToBurmeseWords("5000000", "speech"));
            });

            it('should return သိန်းငါးဆယ် နှင့် သုံးသောင်း for english number 5030000', function(){
                assert.equal("သိန်းငါးဆယ် နှင့် သုံးသောင်း", myanmarNumbers.convertToBurmeseWords("5030000", "speech"));
            });

            it('should return ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 5323589', function(){
                assert.equal("ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("5323589", "speech"));
            });
        })

        describe('In Burmese Digit', function() {
            it('should return တစ် for english 1 digit number', function(){
                assert.equal("တစ်", myanmarNumbers.convertToBurmeseWords("၁", "speech"));
            });

            it('should return တစ်ဆယ် for english 2 digit number', function(){
                assert.equal("တစ်ဆယ်", myanmarNumbers.convertToBurmeseWords("၁၀", "speech"));
            });

            it('should return တစ်ရာ for english 3 digit number', function(){
                assert.equal("တစ်ရာ", myanmarNumbers.convertToBurmeseWords("၁၀၀", "speech"));
            });

            it('should return တစ်ရာ့ တစ်ဆယ့်တစ် for english number 111', function(){
                assert.equal("တစ်ရာ့ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("၁၁၁", "speech"));
            });

            it('should return တစ်ထောင့် တစ်ရာ့ တစ်ဆယ့်တစ် for english number 1111', function(){
                assert.equal("တစ်ထောင့် တစ်ရာ့ တစ်ဆယ့်တစ်", myanmarNumbers.convertToBurmeseWords("၁၁၁၁", "speech"));
            });

            it('should return နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး for english number 23589', function(){
                assert.equal("နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("၂၃၅၈၉", "speech"));
            });

            it('should return သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 323589', function(){
                assert.equal("သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("၃၂၃၅၈၉", "speech"));
            });

            it('should return သိန်းငါးဆယ် for english number 5000000', function(){
                assert.equal("သိန်းငါးဆယ်", myanmarNumbers.convertToBurmeseWords("၅၀၀၀၀၀၀", "speech"));
            });

            it('should return သိန်းငါးဆယ် နှင့် သုံးသောင်း for english number 5030000', function(){
                assert.equal("သိန်းငါးဆယ် နှင့် သုံးသောင်း", myanmarNumbers.convertToBurmeseWords("၅၀၃၀၀၀၀", "speech"));
            });

            it('should return ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင် ငါးရာ ရှစ်ဆယ့်ကိုး for english number 5323589', function(){
                assert.equal("ငါးဆယ့်သုံးသိန်း နှင့် နှစ်သောင်း သုံးထောင့် ငါးရာ့ ရှစ်ဆယ့်ကိုး", myanmarNumbers.convertToBurmeseWords("၅၃၂၃၅၈၉", "speech"));
            });
        })
    });
});