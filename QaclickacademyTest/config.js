//For using the reporter we have to define an object and require that.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  
  // The address of a running selenium server.
  //You can also comment the following line and still run the tests, it will starting the server automatically BUT
  //If you do that you cannot run the scripts on Firefox or IE!
  //This is called: "direct connect"
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  onPrepare: function(){
	  
	//Maximising the browser before each test.
	browser.driver.manage().window().maximize(); 
	
	//For using the protractor's reporter.
	jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: 'target/screenshots'
	        })
	      );
  },
  
  //Here we put all the files(specs) which should be run.
  specs: ['test.js'],
  
  //For adding colors to CMD reports.
  jasminNodeOpts:{
	  showColors: true
  },
  
  //Defining Suites to run a set of files(specs) together.
  suites:{
	  smoke: ['sendKeysMouseMove&usingObjectClass.js','spec01.js','shop.js'],
	  regression: 'shop.js'
  }
};
