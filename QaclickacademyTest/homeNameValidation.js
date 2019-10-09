//This is the Test Suite.
describe('TS - Home - Name Validation',function(){

	var homeObj = require('./homePageObjectModel.js');
	var setupObj = require('./setup.js');
	
	var emptyNameMessage = 'Name is required';
	var oneCharacterNameMessage = 'Name should be at least 2 characters';
	beforeEach(function(){
		browser.get(setupObj.homeURL);
	})
	
	//TestCase1: for checking the alert message when the Name is left empty.
	it('TC1-If the Name is left empty',function(){
		
		//Step1: is done in onPrepare()
		//Step2: Click on the textbox 'Name'
		homeObj.name.click();
		
		//Step3: Click on the textbox 'Email'
		homeObj.email.click();
		
		//Assesion: Should see alert message - 'Name is required'
		expect(homeObj.emptyNameMessage.getText()).toBe(emptyNameMessage);
		
	})

	//TestCase2: for checking the alert message if the user enter a character and click somewhere else.
	it('TC2-If Name has less than 2 characters by entering one character',function(){
		//Step1: is done in onPrepare()
		//Step2-a: Click on the textbox 'Name'
		homeObj.name.click();

		//Step2-b: Enter 'a' on the textbox 'Name'
		homeObj.name.sendKeys('a');
		
		//Step3: Click on the textbox 'Email'
		homeObj.email.click();
		
		//Assersion: Should see alert message - 'Name should be at least 2 characters'
		expect(homeObj.oneCharacterNameMessage.getText()).toBe(oneCharacterNameMessage);
	})

	//TestCase3: for checking the alert message if the use reduce the characters to one by using Backspace.
	it('TC3-If Name has less than 2 characters by using Backspace',function(){
		//Step1: is done in onPrepare()
		//Step2-a: Click on the textbox 'Name'
		homeObj.name.click();
		
		//Step2-b: Enter 'aa' on the textbox 'Name'
		homeObj.name.sendKeys('aa');
		
		//Step3: Click on the textbox 'Email'
		browser.actions().mouseMove(homeObj.email.click()).perform();
		
		//Step4-a: Press Shift+Tab to go back to the 'Name'
		browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.TAB))
		
		//Step4-b: Press BACKSPACE
		homeObj.name.sendKeys(protractor.Key.BACK_SPACE);
		
		//Asersion: Should see the alert message - 'Name should be at least 2 characters'
		expect(homeObj.oneCharacterNameMessage.getText()).toBe(oneCharacterNameMessage);

		
	})

	afterEach(function(){
		console.log('Test is DONE!!!!')
	})
	
})