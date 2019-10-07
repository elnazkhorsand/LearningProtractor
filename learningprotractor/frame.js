describe('SuiteName',function(){
	
	//In this Test Case, we are going to retrieve the 'login' text from the frame embeded in the website.
	it('TestCase',function(){
		
		/*We are testing a Non-Angular website so we have to write this code to tell protractor
		no to wait for Angular Website to be loaded.*/
		browser.waitForAngularEnabled(false);
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//Going to the AUT.
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		//Swithing to the frame.(To recognise if this is a frame or not, just search for keyword 'iframe')
		browser.switchTo().frame('iframe-name');
		
		//Select the 'login' and retrieve its text.
		element(by.css('a[href*="sign_in"]')).getText().then(function(text){
		
			//Printing the text of 'Login' in the console.
			console.log('You have selected the "'+text+'" part of the website...');
			
		})
		
	})
	
})