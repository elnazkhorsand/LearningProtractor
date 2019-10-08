//This is the Test Suite.
describe('SuiteName',function(){
	
	var obj = require('./homePageObjectModel.js');
	
	//This is the Test Case.
	it('TestCase1',function(){
	
		//For NonAngular Website we should turning off the waiting for Angular.
		//browser.waitForAngularEnabled(false);
		
		//Maximising the browser.
		browser.driver.manage().window().maximize();
		
		//It will go to the link below.
		browser.get('https://qaclickacademy.github.io/protocommerce/');

		obj.name.getText().sendKeys('name').then(function(){
			browser.sleep(400);
		})

		obj.email.sendKeys('email').then(function(){
			browser.sleep(400);
		})
		
		obj.password.sendKeys('password').then(function(){
			browser.sleep(400);
		})		
		obj.icecreamCheckbox.click().then(function(){
			browser.sleep(400);
		})
		
		obj.genderMale.click().then(function(){
			browser.sleep(400);
		})		

		obj.genderFemale.click().then(function(){
			browser.sleep(400);
		})		
		
		obj.employedCheckbox.click().then(function(){
			browser.sleep(400);
		})		

		obj.studentCheckbox.click().then(function(){
			browser.sleep(400);
		})	
		
		obj.successMessage.getText().then(function(text){
			console.log("Success message is: "+text);
			browser.sleep(400);
		})		
		
		obj.emptyNameMessage.getText().then(function(text){
			console.log("If name is empty, the message is: "+text);
			browser.sleep(400);
		})		
				
		obj.emptyEmailMessage.getText().then(function(text){
			console.log("If the email is empty, the message is: "+text);
			browser.sleep(400);
		})		
				
		obj.oneCharacterNameMessage.getText().then(function(text){
			console.log("If the name has less than 2 characters, the message is: "+text);
			browser.sleep(400);
		})		
				
		
		
		//For solving the promise.
//		.then(function(value){
//			browser.sleep(3500);
//		})
		
	})
	
})