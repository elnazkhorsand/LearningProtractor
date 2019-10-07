//This is the Test Suite.
describe('SuiteName',function(){
	
	//Use the class 'protocommerceObjectModel' for using the objects on the page 'protocommerce'.
	var obj = require('./protocommerceObjectModel.js');
	
	beforeEach(function(){

		//It will go to the link below befor each 'it'.
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		
	})

	afterEach(function(){
		console.log('Test Case is Done!');
	})
	
	//Testing the submition with the correct information.
	it('TestCase1',function(){
		
		//Enter 'e' in the 'Name' textbox.
		obj.name.sendKeys('e');
		
		//Enter 'myemail' in the 'Email' textbox.
		obj.email.sendKeys('myemail');
		
		//Now move mouse to 'Name' textbox and press the Back Space key on keyboard.
		browser.actions().mouseMove(element(by.name('name')).sendKeys(protractor.Key.BACK_SPACE));
		
		//Now check if you recieve the proper message or not.
		expect(element(by.css('div[class="alert alert-danger"]')).getText()).toBe(obj.messageWhenNameIsEmpty);
		
	})
})