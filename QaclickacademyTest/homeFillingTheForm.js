//This is the Test Suite.
describe('TS-Home: Filling the form',function(){

	var homeObj = require('./homePageObjectModel.js');
	var setupObj = require('./setup.js');

	var successMessage = "×\nSuccess! The Form has been submitted successfully!.";
	
	beforeEach(function(){
		browser.get(setupObj.homeURL);
	})
	
	//TestCase1: filling the form with the correct information and click on Submit
	it('TC1: Enter correct information and click on Submit button',function(){
		
		//Step1: is done in onPrepare().
		//Step2: Enter 'My name' in the Name.
		homeObj.name.sendKeys('My name');
		
		//Step3: Enter 'My email' in the Email.
		homeObj.email.sendKeys('My email');
		
		//Step4: Enter 'My password' in the Password.
		homeObj.password.sendKeys('My password');
		
		//Step5: Check the LoveIceCream.
		homeObj.icecreamCheckbox.click();
		
		//Assersion: To see if it is checked.
		expect(homeObj.icecreamCheckbox.isSelected()).toBe(true);
		
		//Step6: Select Female gender from Gender dropdown.
		homeObj.genderFemale.click();
		
		//Step7: Check the Employed radio button.
		homeObj.employedRadioButton.click();
		
		//Assersion: To see if Employed is checked.
		expect(homeObj.employedRadioButton.isSelected()).toBe(true);
		
		//Assersion: To see if Student is unchecked.
		expect(homeObj.studentRadioButton.isSelected()).toBe(false);
		
		//Step8: Click on the Submit button.
		homeObj.submitButton.click();
		
		var msgDisplayed = homeObj.successMessage.isDisplayed();
		
		//Assersion: The alert message should be visible
		expect(msgDisplayed).toBe(true);
			
		if(msgDisplayed){

			//Sub-assersion: The message should be "Success! The Form has been submitted successfully!."
			expect(homeObj.successMessage.getText()).toBe(successMessage);
		}
		
	})

	afterEach(function(){
		console.log('Test is DONE!')
	})
	
})