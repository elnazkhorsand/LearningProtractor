//This is the Test Suite.
describe('SuiteName',function(){
	
	//This is the Test Case.
	it('TestCase1',function(){
	
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