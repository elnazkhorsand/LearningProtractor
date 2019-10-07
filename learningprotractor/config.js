//For using the reporter we have to define an object and require that.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

//An example configuration file
//For more information about configuration file go to:
//http://www.protractortest.org/#/api-overview
exports.config = {
  
  // The address of a running selenium server.
  //You can also comment the following line and still run the tests, it will starting the server automatically BUT
  //If you do that you cannot run the scripts on Firefox or IE!
  //This is called: "direct connect"
  seleniumAddress: 'http://localhost:4444/wd/hub',
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
  specs: ['spec01.js'],
  
  //For adding colors to CMD reports.
  jasminNodeOpts:{
	  showColors: true
  },
  
  //Defining Suites to run a set of files(specs) together.
  suites:{
	  smoke: ['sendKeysMouseMove&usingObjectClass.js','spec01.js','shop.js'],
	  regression: 'shop.js'
  },

  //Here we specify the type of the browser which if not the defualt browser would be Chrome.
  //For IE first run "webdriver-manager update --ie" in your cmd
  //Then the code is:
  //capabilities:{'browserName':'internet explorer'}
  //For firefox the code is:
  capabilities:{'browserName':'chrome',
	  'goog:chromeOptions': {
		  w3c: false
		  }

  		}
};
