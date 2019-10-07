describe('SuiteName',function(){
	
	//We are going to test clicking on 'Ok' button on alert page.
	it('TestCaseOne',function(){
		
		/*We are testing a Non-Angular website so we have to write this code to tell protractor
		no to wait for Angular Website to be loaded.*/
		browser.waitForAngularEnabled(false);
		
		//Going to the AUT.
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		//Click on the Alert button.
		element(by.id('alertbtn')).click();
		
		//Sinse the alert window will pop up, we have to switch to the alert window.
		browser.switchTo().alert().accept().then(function(){
			
			//We want to wait 2 seconds here to be able to see what is protractor is doing because its too fast.
			browser.sleep(2000);
			
		})
		
	})
	
	//We are going to test clicking on 'Cancel' button on alert page.
		it('TestCaseTwo',function(){
		
		/*We are testing a Non-Angular website so we have to write this code to tell protractor
		no to wait for Angular Website to be loaded.*/
		browser.waitForAngularEnabled(false);
		
		//Going to the AUT.
		browser.get('http://www.qaclickacademy.com/practice.php');
		
		//Click on the Alert button.
		element(by.id('alertbtn')).click();
		
		//Sinse the alert window will pop up, we have to switch to the alert window.
		browser.switchTo().alert().dismiss().then(function(){
			
			//We want to wait 3 seconds here to be able to see what is protractor is doing because its too fast.
			browser.sleep(3000);
			
		})
		
	})
})