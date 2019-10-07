//This is the Test Suite.
describe('SuiteName',function(){
	
	//Defining a var for the success message.
	var successMessage = '×\nSuccess! The Form has been submitted successfully!.'
	
	//Definig a var for the messae when the names characters are less than 2.
	var nameErrorLessChar = 'Name should be at least 2 characters';
	
	//Defining a var for the message when the name is empty.
	var nameIsEmpty = 'Name is required';
	
	//Testing the submition with the correct information.
	it('TestCase1',function(){
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		
		//Enter the name.
		element(by.css('div[class="form-group"]')).element(by.css('input[name="name"]')).sendKeys('Elnaz');
		
		//Assersion to make sure there is no error message.
		expect(element.all(by.css('div[class="alert alert-danger"]')).count()).toEqual(0);
		
		//Enter the email.
		element(by.name('email')).sendKeys('mina@sth.com');

		//Assersion to make sure there is no error message.
		expect(element.all(by.css('div[class="alert alert-danger"]')).count()).toEqual(0);
		
		//Enter the password.
		element(by.id('exampleInputPassword1')).sendKeys('myPassword');
		
		//Assersion to make sure there is no error message.
		expect(element.all(by.css('div[class="alert alert-danger"]')).count()).toEqual(0);

		//Check the 'Love IceCreams!' checkBox.
		element(by.id('exampleCheck1')).click();
		
		//Select the 'female' value from Gender dropdown.
		element(by.cssContainingText('select[id="exampleFormControlSelect1"] option','Female')).click();
		
		//Check the 'Student' in the 'Employment Status' checkBox.
		element(by.id('inlineRadio1')).click();
		
		//Leave the 'Date of Birth for now'
		//----------------------------------------
		
		//Click on 'Submit' button.
		element(by.buttonText('Submit')).click();
		
		//Grab the success message.
		element(by.css('div[class="alert alert-success alert-dismissible"]')).getText().then(function(text){
			
			//Showing the success message on the console.
			console.log('*******'+text+'*******');
			
			//Assersion for the success message.
			expect(text).toBe(successMessage);

			//Assersion to make sure there is no error message.
			expect(element.all(by.css('div[class="alert alert-danger"]')).count()).toEqual(0);
			
		})

	})
	
	//Testing the error message if the name is less than 2 characters.
	it('TestCase2',function(){
		
		//Clear the 'Name' textbox.
		element(by.css('div[class="form-group"]')).element(by.css('input[name="name"]')).clear();
		
		//Enter 'a' in the 'Name' textbox.
		element(by.css('div[class="form-group"]')).element(by.css('input[name="name"]')).sendKeys('a');
		
		//Assersion for the error message.
		expect(element(by.css('div[class="alert alert-danger"]')).getText()).toBe(nameErrorLessChar);
		
	})
	
	//Testing the error message if the name is empty.
	it('TestCase3',function(){
		
		//Clear the 'Name' textbox.
		element(by.css('div[class="form-group"]')).element(by.css('input[name="name"]')).clear().then(function(){
			browser.sleep(3000);
		})
		element(by.css('div[class="form-group"]')).element(by.css('input[name="name"]')).sendKeys('').then(function(){
			browser.sleep(3000);
		})
		element(by.name('email')).clear();
		element(by.name('email')).sendKeys('').then(function(){
			browser.sleep(3000);
		})
		element(by.id('exampleInputPassword1')).clear();
		element(by.id('exampleInputPassword1')).sendKeys('').then(function(){
			browser.sleep(3000);
		})
		
		
		//Assersion for the error message.
		expect(element(by.css('div[class="alert alert-danger"]')).getText()).toBe(nameIsEmpty);
		
	})
})