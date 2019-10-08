//This is the Test Suite.
describe('Home - Name Validation',function(){
	
	//This is the Test Case.
	it('TC1-If the Name is left empty',function(){
	
		//For NonAngular Website we should turning off the waiting for Angular.
		//browser.waitForAngularEnabled(false);
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('');

		//For solving the promise.
		//.then(function(value){
		//	browser.sleep(3500);
		//})
		
	})

	//This is the Test Case.
	it('TC2-If Name has less than 2 characters by entering one character',function(){
	
		//For NonAngular Website we should turning off the waiting for Angular.
		//browser.waitForAngularEnabled(false);
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('');

		//For solving the promise.
		//.then(function(value){
		//	browser.sleep(3500);
		//})
		
	})

	//This is the Test Case.
	it('TC3-If Name has less than 2 characters by using Backspace',function(){
	
		//For NonAngular Website we should turning off the waiting for Angular.
		//browser.waitForAngularEnabled(false);
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('');

		//For solving the promise.
		//.then(function(value){
		//	browser.sleep(3500);
		//})
		
	})

})