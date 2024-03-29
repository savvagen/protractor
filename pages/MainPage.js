

var MainPage = function () {

    var firstInput = element(by.model('first'));
    var secondInput = element(by.model('second'));
    var submitButton = element(by.id('gobutton'));
    var result = $("h2.ng-binding");
    var optionDropDown = element.all(by.css("select[ng-model='operator'] option"));


    this.open = function() {
        browser.get('/protractor-demo');
        return this
    };

    this.minus = function(firstNumber, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOption(5);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    };

    this.add = function(firstNumber, secondNumber){
        firstInput.sendKeys(firstNumber);
        selectOption(1);
        secondInput.sendKeys(secondNumber);
        submitButton.click();
    };


    this.selectOption = function(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
    };


    this.setValues = function(firstNumber, secondNumber) {
        firstInput.sendKeys(firstNumber);
        secondInput.sendKeys(secondNumber);
        return this
    };

    // This function cannot be used in the methods

    this.selectOption = function(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
        return this
    };

    this.pressSubmit = function () {
        submitButton.click();
        return this
    };


    this.getResult = function() {
        return result.getText()
    };



    // This function can be used only in the methods

    function selectOption(index){
        optionDropDown.then(function(options){
            options[index-1].click();
        });
    }



};
module.exports = new MainPage();
