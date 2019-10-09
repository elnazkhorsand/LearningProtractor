function homePage(){
	
	this.name = element(by.css('body input[name="name"]'));
	this.email = element(by.name('email'));
	this.password = element(by.id('exampleInputPassword1'));
	this.icecreamCheckbox = element(by.id('exampleCheck1'));
	this.genderMale = element(by.cssContainingText('select[id="exampleFormControlSelect1"] option','Male'));
	this.genderFemale = element(by.cssContainingText('select[id="exampleFormControlSelect1"] option','Female'));
	this.studentRadioButton = element(by.id('inlineRadio1'));
	this.employedRadioButton = element(by.id('inlineRadio2'));
	this.successMessage = element(by.css('div[class="alert alert-success alert-dismissible"]'));
	this.emptyNameMessage = element(by.cssContainingText('div[class="alert alert-danger"]','Name is required'));
	this.emptyEmailMessage = element(by.cssContainingText('div[class="alert alert-danger"]','Email is required'));
	this.oneCharacterNameMessage = element(by.cssContainingText('div[class="alert alert-danger"]','Name should be at least 2 characters'));
	this.submitButton = element(by.css('input[class="btn btn-success"]'));
}

module.exports = new homePage();