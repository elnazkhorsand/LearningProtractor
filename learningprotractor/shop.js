		//.then(function(value){
		//	browser.sleep(3500);
		//})
//This is the Test Suite.
describe('SuiteName',function(){


	var totalProductInBasket = '3';
	var priceArray = new Array();
	var calculatedTotalPrice = 0;
	
	//Defining a function for adding a product to the basket.
	function addToBasket(product){
		
		//Get all the elements with 'app-card' tagName.
		element.all(by.tagName('app-card')).each(function(item){
			
			//Get the text for each of them.
			item.element(by.css('h4[class="card-title"] a')).getText().then(function(text){				
				
				//Check if the text equals to 'Nokia Edge'
				if(text==product){

					//Click on add button for the item with the text 'Nokia Edge'
					item.element(by.buttonText('Add')).click();
				}
			}) 
		})

	}
	
	//We are going to Shop tab and search through the item's list and click on 'Nokia Edge' Add button. 
	it('Test Case 1',function(){
	
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		
		//Click on 'Shop' link.
		element(by.linkText('Shop')).click();
			
		//Adding 3 products to the basket by calling the function 'addToBasket'.
		addToBasket('Nokia Edge');
		addToBasket('iphone X');
		addToBasket('Blackberry');
		
		//Assert that the number of item(s) in the basket is the same as the product(s) which we added to so far.
		element(by.partialLinkText('Checkout')).getText().then(function(text){
			
			//Printing the Checkout button's text to the console to see how to extract the number of added product(s)
			//from that.
			console.log('The text of the "Chekout" button is: '+text);
			
			//Since the text is 'Checkout ( 3 )', we can split it by '(' to two parts.
			var checkoutNumber = text.split('(');
			
			//The second part would be ' 3 )' so we need to ger rid of the spaces, then we use trim().
			//No we reach to '3)', so if we extract the first character of it, we reached to the number of
			//product(s) in the basket. Now we do the assertion.
			expect(checkoutNumber[1].trim().charAt(0)).toBe(totalProductInBasket);
		})

	})
	
	//Check the count of the product row in the checkout page.
	it('Test Case 2',function(){
		
		//Click on Basket button.
		element(by.partialLinkText('Checkout')).click();
		
		//Check if the count of the row(s) which is shown are equal to 'totalProductInBasket' or not.
		element.all(by.css('div[class="media"]')).count().then(function(value){
			
			//Assersion of the count of the row(s).
			expect(value).toEqual(Number(totalProductInBasket));
			
		})
		
	})
		
	//priceArray
	//Checking the total price of the products.
	it('Test Case 3',function(){
		
		var tempArray;
		var tempGrossArray = new Array();
				
		element.all(by.css('tbody > tr')).each(function(item){//tr tr tr tr tr
			item.element(by.css('td:nth-child(4)')).getText().then(function(text){	
					tempGrossArray.push(text);
			})
			
		}).then(function(){				
							for(var i=0;i<totalProductInBasket;i++){
								tempArray = tempGrossArray[i].split('.');
								priceArray.push(Number(tempArray[1].trim()));
								tempArray.length=0;
							}
							
							for(i=0;i<totalProductInBasket;i++){
								calculatedTotalPrice = calculatedTotalPrice + Number(priceArray[i]);
							}
							
							console.log('The actual total price is: ' + calculatedTotalPrice);
						})
						
						element(by.css('tbody tr:nth-child(4) td.text-right h3 strong')).getText().then(function(text){
							var temp = text.split('.');
							expect(calculatedTotalPrice).toEqual(Number(temp[1].trim()));
						})
				
						
		
	})
	
})