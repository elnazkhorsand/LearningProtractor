//This is the Test Suite.
describe('SuiteName',function(){
	
	/*We are going to test the syncronization on a NonAngular Website. Keep in mind that the Angular websites sync 
	 issue will be handeld by Protractor automatically.*/
	it('TestCase1',function(){
	
		//Defining a var for keeping the value of epected result.
		var result = 'Process completed! This response has been loaded via the Ajax request directly from the web server, without reoading this page.';
		
		//For NonAngular Website we should turning off the waiting for Angular.
		browser.waitForAngularEnabled(false);
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		
		//Click on the last link on the page.
		element(by.css('a[href*="loadAjax"]')).click();
		
		//Define the Expect Condition which is used for solving Sync issue on NonAngular websites
		var ec = protractor.ExpectedConditions;
		
		//Tell the Protractor to wait until the 'Loading' icon disappeared.
		browser.wait(ec.invisibilityOf(element(by.id('loader'))),8000);
		
		//We grab the text which is shown after the 'Loading' icon is gone.
		element(by.id('results')).getText().then(function(text){
			
			//Printing out the text on the console.
			console.log('**************'+text+'**************');

			//Doing the assersion for the result.
			expect(text).toBe(result);
			
		})
		
	})
	
})