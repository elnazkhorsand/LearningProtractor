describe('Suite Name', function(){
	function multiply(firstNumber,secondNumber){
		//1.Enter a Number as an input
		element(by.model('first')).sendKeys(firstNumber);
		//2.Enter a Number as an input
		element(by.model('second')).sendKeys(secondNumber);
		//3.Click on "Go" button
		element(by.id('gobutton')).click();		
	}
	
	//We are going to test "1*2 - 3*4 - 5*6" and see if the result rows are "3" and print all of them
	it('Test Case', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');

		var one = '1';
		var two = '2';
		var resultOne = '2';
		
		var three = '3';
		var four = '4';
		var resultTwo = '12';
		
		var five = '5';
		var six = '6';
		var resultThree = '30';
		
		var results = [resultThree,resultTwo,resultOne];
		var rowCountToBe = 3;
		
		//1.Select * from dropdown
		element(by.model('operator')).element(by.css('option[value="MULTIPLICATION"]')).click();
		
		//Multiply 1 and 2
		multiply(one,two);
		
		//Assertion
		expect(element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText())
		.toBe(resultOne);
		
		//Multiply 3 and 4
		multiply(three,four);
		
		//Assertion
		expect(element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText())
		.toBe(resultTwo);
		
		//Multiply five and six
		multiply(five,six);
		
		//Assertion
		expect(element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText())
		.toBe(resultThree);

		//Print the result rows count for myself
		element.all(by.repeater('result in memory')).count().then(function(text){
			console.log("There are '"+text+"' row(s) in the history of results.");
		})
		
		//Check if the result rows count is 3
		expect(element.all(by.repeater('result in memory')).count()).toBe(rowCountToBe);
		
		var i=1;
		var k=0;
		
		//Print the reslt for all rows and Assertion the results all together
		element.all(by.repeater('result in memory')).each(function(item){
			expect(item.element(by.css('td:nth-child(3)')).getText())
			.toBe(results[k]);
			k++;
			
			item.element(by.css('td:nth-child(3)')).getText().then(function(text){
				console.log("The result of row number "+i+" is: "+text);
				i++;
			})
		})
	})
})



