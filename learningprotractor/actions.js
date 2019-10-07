describe('SuitenName',function(){
	
	it('TestCase',function(){
		
		//Go to the AUT website
		browser.get('http://posse.com/');
		
		//Mouse over the searching box and enter 'london'
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys('london')).prform();
		
		//Now we want to ARROW_DOWN the keyboard
		browser.actions().sendKeys(protractor.key.ARROW_DOWN).perform();
		
		//Here we want to push the 'ENTER' button from the keyboard to select the text from suggestion box
		browser.actions().sendKeys(protractor.key.ENTER).perform().then(function(){
			
			//Wait for 5 seconds
			browser.sleep(5000);
			
			//Count the results and it should match to 7
			//We used regular expression to avoid writing the whole value for the attribute 'ng-mouseover'
			expect(element.all(by.css('div[ng-mouseover*=onSearchResultOver]')).count()).
			toEqual(7);
		})
		
	})
	
})