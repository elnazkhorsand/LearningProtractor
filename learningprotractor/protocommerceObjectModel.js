function protocommerceObject(){
	
	this.name = element(by.name('name'));
	this.email = element(by.name('email'));
	this.messageWhenNameIsEmpty = 'Name is required';

}

module.exports = new protocommerceObject(); 