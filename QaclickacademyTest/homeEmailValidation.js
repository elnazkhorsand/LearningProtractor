//This is the Test Suite.
describe('TS-Home: Email Validation',function(){

	var homeObj = require('./homePageObjectModel.js');
	var setupObj = require('./setup.js');
	
	var emptyEmailMessage = 'Email is required';
	
	beforeEach(function(){
		browser.get(setupObj.homeURL);
	})
	
	//TestCase1: for checking the alert message when the Email is left empty.
	it('TC1: If the Email is left empty-By not entering value',function(){
		
		var isPresent;
		
		//Step1: is done in onPrepare()
		//Step2: Click on the textbox 'Email'
		homeObj.email.click();
		
		//Step3: Click on the textbox 'Name'
		homeObj.name.click();

		//Assersion: the alert message should be present.
		isPresent = homeObj.emptyEmailMessage.isPresent();
		expect(isPresent).toBe(true);
		
		if(isPresent){
			
			//Assesion: Should see alert message - 'Email is required'
			expect(homeObj.emptyEmailMessage.getText()).toBe(emptyEmailMessage);
			
		}
		
	})

	//TestCase2: for checking the alert message when the Email is left empty with SHIF+TAB & HOME & DELETE.
	it('TC2: If the Email is left empty-Using SHIFT&TAB+DELETE',function(){

		var isPresent;
		
		//Step1: is done in onPrepare()
		//Step2: enter 'a' in the 'Email'
		homeObj.email.sendKeys('a');
		
		//Step3: click on 'Password'
		homeObj.password.click();
		
		//Step4: press SHIFT & TAB
		browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.TAB));
		
		//Step5: press HOME (Due to a bug in protractor)
		homeObj.email.sendKeys(protractor.Key.HOME);
		
		//Step6: press DELETE.
		homeObj.email.sendKeys(protractor.Key.DELETE);

		//Assersion: the alert message should be present.
		isPresent = homeObj.emptyEmailMessage.isPresent();
		expect(isPresent).toBe(true);
		
		if(isPresent){
			
			//Assesion: Should see alert message - 'Email is required'
			expect(homeObj.emptyEmailMessage.getText()).toBe(emptyEmailMessage);
		}
		
	})
	
	afterEach(function(){
		console.log('Test is DONE!')
	})
	
})