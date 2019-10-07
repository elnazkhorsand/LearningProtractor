//This is the Test Suite.
describe('Testing Calculater Application',function(){
	
	//Using jasmine-data-provider
	var using=require("jasmine-data-provider");
	
	//Using data object from the file: data.js
	var obj=require("./data.js");
	
	
	//Runing the test for 3 sets of data which are in 'data.js' through the jasmine-data-provider.
	using(obj.parentdata,function(data,description){

		//This is the Test Case.
		it('"TestCase1", Testing the "+" operator: '+description,function(){
			
			//It will go to the link below.
			browser.get("http://juliemr.github.io/protractor-demo/");
			
			//The locator here is "by.model" and it will type the "3" in the textbox.
			element(by.model('first')).sendKeys(data.firstinput);
			
			//The locator here is "by.model" and it will type the "5" in the textbox.
			element(by.model('second')).sendKeys(data.secondinput);
			
			//This will click on the "Go" button finding it through "id" property. The locator here is "by.id".
			element(by.id('gobutton')).click();
	
			//This is the Jasmine Syntax for assersion. toMatch()(RE) - toBeNull() - toBe("") - toEqual(variable) ...
			//https://jasmine.github.io/2.0/introduction.html
			//Using toEqual instead of toBe, For variables used.
			//expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("8");
			//Make sure the result is not "null".
			//expect(element(by.css("h2[class='ng-binding']")).getText()).not.toEqual(null);
			//Using toBE:
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
			
			//Because of the "Promise" issue, we have to use "then" function.
			element(by.css("h2[class='ng-binding']")).getText().then(function(text){console.log("The result is: "+text)});
	
			//It will be run from the first second of running the test-Async-noneSequencial.
			//browser.sleep(15000);
		})

		
	})
	
})