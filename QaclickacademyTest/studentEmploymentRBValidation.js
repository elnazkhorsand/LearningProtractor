//This is the Test Suite.
describe('TS-Home: Student&Employed Radio Button Validation',function(){

	var homeObj = require('./homePageObjectModel.js');
	var setupObj = require('./setup.js');

	beforeEach(function(){
		browser.get(setupObj.homeURL);
	})
	
	//TestCase1: for checking if the Student is checked, the Employed must be unchecked.
	it('TC1: Check StudentRB and then Check EmployedRB',function(){
		
		//Step1: is done in onPrepare()
		//Step2: check the Student Radio Button.
		homeObj.studentRadioButton.click();
		
		//Assersion - a: to see the Student must be checked.
		expect(homeObj.studentRadioButton.isSelected()).toBe(true);

		//Assersion - a: to see the Employed must be unchecked.		
		expect(homeObj.employedRadioButton.isSelected()).toBe(false);
		
		//Step3: check the Employed Radio Button.
		homeObj.employedRadioButton.click();
		
		//Assersion - a: to see the Student must be unchecked.
		expect(homeObj.studentRadioButton.isSelected()).toBe(false);

		//Assersion - a: to see the Employed must be checked.		
		expect(homeObj.employedRadioButton.isSelected()).toBe(true);
		
	})
	
	//TestCase2: for checking if the Employed is checked, the Student must be unchecked.
	it('TC2: Check EmployedRB and then check StudentRB',function(){
		
		//Step1: is done in onPrepare()
		//Step2: check the Employed Radio Button.
		homeObj.employedRadioButton.click();
		
		//Assersion - a: to see the Employed must be checked.
		expect(homeObj.employedRadioButton.isSelected()).toBe(true);

		//Assersion - a: to see the Student must be unchecked.		
		expect(homeObj.studentRadioButton.isSelected()).toBe(false);
		
		//Step3: check the Student Radio Button.
		homeObj.studentRadioButton.click();
		
		//Assersion - a: to see the Student must be checked.
		expect(homeObj.studentRadioButton.isSelected()).toBe(true);

		//Assersion - a: to see the Employed must be unchecked.		
		expect(homeObj.employedRadioButton.isSelected()).toBe(false);
				
	})

	afterEach(function(){
		console.log('Test is DONE!')
	})
	
})