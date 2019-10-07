describe('Suite Name', function(){
	
	//We are going to test 3*5 and see if the result is 15 or not
	it('Test Case', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');

		//1.Enter 3
		element(by.model('first')).sendKeys('3');
		
		//2.Enter 5
		element(by.model('second')).sendKeys('5');
		
		//3.Select * from dropdown
		element(by.model('operator')).element(by.css('option[value="MULTIPLICATION"]')).click();
		
		//4.Click on "Go" button
		element(by.id('gobutton')).click();
		
		//5.Assert the result
		var toBeResult = '16';
		expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe(toBeResult);
		
		//Just print the result for yourself
		element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
			if(text==toBeResult){
				console.log("**Test is passed succefully**");
				console.log("The result is: "+ text)	
			}else
				console.log("-------------Test is Failed!!!!!!!!!!");
			
		})
	})
})