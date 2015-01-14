var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent)
      || this.searchVersion(navigator.appVersion)
      || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i=0;i<data.length;i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
      else if (dataProp)
        return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
    {   string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    },
    {   // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },
    {     // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],
  dataOS : [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    },
    {
         string: navigator.userAgent,
         subString: "iPhone",
         identity: "iPhone/iPod"
      },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }
  ]

};
BrowserDetect.init();

/*
showSlide(id)
Displays each slide
*/

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

/*
random(a,b)
Returns random number between a and b, inclusive
*/

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}


/*
Array.prototype.random
Randomly shuffles elements in an array. Useful for condition randomization.
*/

Array.prototype.random = function() {
  return this[random(this.length)];
};

/*
Produces an array with numbers 0~arrLength
in random order. Kind of spurious--use
Array.prototype.random instead
*/

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/*
Gets the value of the checked radio button
*/

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}

function setQuestion(array) {
    var i = random(0, array.length - 1);
    var q = array[i];
    return q;
}


/* 
Clears value from form
*/

function clearForm(oForm) {
    
  var elements = oForm.elements;
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
	field_type = elements[i].type.toLowerCase();
	
	switch(field_type) {
	
		case "text":
		case "password":
		case "textarea":
          case "hidden":

      elements[i].value = "";
			break;
        
		case "radio":
		case "checkbox":
      if (elements[i].checked) {
            elements[i].checked = false;
			}
			break;

		case "select-one":
		case "select-multi":
              elements[i].selectedIndex = -1;
			break;

		default:
			break;
	}
    }
}





// Input Data for the wheel



var allConditions = [
[
{"movieID":1, "name1": "Tim", "name2": "John", "movieName":"Throw"},
{"movieID":2, "name1": "Sally", "name2": "Anne", "movieName":"Drop"}
],
[
{"condition":2}
]
];






/* Experimental Variables */
// Number of conditions in experiment
var numConditions = 1; //allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = 1; // random(0, numConditions-1);

// Based on condition number, choose set of input (trials)
var allTrialOrders = allConditions[chooseCondition-1];

// Number of trials in each condition
var numTrials = 2; //not necessarily allTrialOrders.length;

// Produce random order in which the trials will occur
//var shuffledOrder = shuffledArray(allTrialOrders.length);

var shuffledOrder;
if(Math.round(Math.random())){
  shuffledOrder = [0,1];
} else {
  shuffledOrder = [1,0];
}

// Keep track of current trial
var currentTrialNum = 0;

// A variable special for this experiment because we're randomly
// choosing word orders as well
// var wordOrder = 100;
var trial;

// Keep track of how many trials have been completed
var numComplete = 0;



/*
Show the instructions slide — this is what we want subjects to see first.
*/

if (BrowserDetect.browser != 'Chrome' && BrowserDetect.browser != 'Safari' && BrowserDetect.browser != 'Firefox') {
    alert ("Warning: We have not tested this HIT with your browser. We recommend Chrome, Firefox or Safari");
    $("#startButton").attr("disabled", "disabled");
}

$("#progressBar").hide();
showSlide("instructions");


// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);

/*
The actual variable that will be returned to MTurk. The experiment object with various variables that you want to keep track of and return as results.

More practically, you should stick everything in an object and submit that whole object so that you don’t lose data (e.g. randomization parameters, what condition the subject is in, etc). Don’t worry about the fact that some of the object properties are functions — mmturkey (the Turk submission library) will strip these out.
*/

var experiment = {

/*
Parameters for this sequence.
*/
  condition: 1,

  // An array of subjects' responses to each trial (NOTE: in the order in which
  // you initially listed the trials, not in the order in which they appeared)
  //results: new Array(numTrials),

  // The order in which each trial appeared
  //orders: new Array(numTrials),

  // The order in which each trial is presented. i.e.
  // presentationOrder[i] = j means the i-th trial is the j-th one in the trial sequence.
  // Note that presentationOrder is now obsolete with spinnerIDArray
  // presentationOrder: new Array(numTrials),

  movieIDArray: new Array(numTrials),
  
  showABFirst: Math.round(Math.random()),

  startTime: 0,
  endTime: 0,

  distance1Array: new Array(numTrials),
  distance2Array: new Array(numTrials),

  happy1responseArray: new Array(numTrials),
  sad1responseArray: new Array(numTrials),
  anger1responseArray: new Array(numTrials),
  surprise1responseArray: new Array(numTrials),
  relief1responseArray: new Array(numTrials),
  regret1responseArray: new Array(numTrials),
  contentment1responseArray: new Array(numTrials),
  disappointment1responseArray: new Array(numTrials),
  closeness1Array: new Array(numTrials),
  effort1Array: new Array(numTrials),
  happy2responseArray: new Array(numTrials),
  sad2responseArray: new Array(numTrials),
  anger2responseArray: new Array(numTrials),
  surprise2responseArray: new Array(numTrials),
  relief2responseArray: new Array(numTrials),
  regret2responseArray: new Array(numTrials),
  contentment2responseArray: new Array(numTrials),
  disappointment2responseArray: new Array(numTrials),
  closeness2Array: new Array(numTrials),
  effort2Array: new Array(numTrials),

  forcedHappyArray: new Array(numTrials),

  attentionCheck1Array: new Array(numTrials),
  attentionCheck2Array: new Array(numTrials),
  reactionTimeArray: new Array(numTrials),

  // Demographics
  gender: "",
  age:"",
  nativeLanguage:"",
  comments:"",
  browser: BrowserDetect.browser,
  browserVersion: BrowserDetect.version,
  browserOS: BrowserDetect.OS,

 //trials: myTrialOrder,

/*
An array to store the data that we’re collecting.
*/

  data: [],

// Goes to description slide
  description: function() {
    $("#progressBar").show();
    showSlide("description");
    $("#tot-num").html(numTrials);

    if (turk.previewMode) {
      alert ( "Please accept the HIT before continuing." );
    }
  },

/*
The function that gets called when the sequence is finished.
*/

  end: function() {
	  // Records demographics
    experiment.gender = $('input[name="genderButton"]:checked').val();
    experiment.age = $('#ageRange').val();
    experiment.nativeLanguage = $('input[name="nativeLanguage"]').val();
    experiment.comments = $('textarea[name="commentsTextArea"]').val();
    //experiment.sanityCheck = $('input[name="example1Button"]:checked').val();
    
    // Show the finish slide.
    showSlide("finished");

    /*
    Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we’re just submitting properties [i.e. data])
    */
    setTimeout(function() { turk.submit(experiment);}, 1500);
  },


  next: function() {
  
  showSlide("stage");
  // $("#nextButton").hide();
  $("#response1").hide();
  $("#startMovieDiv").show();
  
  if (numComplete === 0) {
    videoElement = document.getElementById("videoElement");
  }

  // If this is not the first trial, record variables
      if (numComplete > 0) {
            // experiment.ChooseLeft[numComplete-1] = $('input[name="q1"]:checked').val()==1;
            // experiment.Cuteness[numComplete-1] = $('input[name="q2"]:checked').val();
            // $('input[name="q1"]:').prop('checked', false);
            // $('input[name="q2"]:').prop('checked', false);
            
            experiment.movieIDArray[numComplete-1] = trial.movieID;
            

            experiment.happy1responseArray[numComplete-1] = $('input[name="happy1"]:checked').val();
            experiment.sad1responseArray[numComplete-1] = $('input[name="sad1"]:checked').val();
            experiment.anger1responseArray[numComplete-1] = $('input[name="anger1"]:checked').val();
            experiment.surprise1responseArray[numComplete-1] = $('input[name="surprise1"]:checked').val();
            experiment.relief1responseArray[numComplete-1] = $('input[name="relief1"]:checked').val();
            experiment.regret1responseArray[numComplete-1] = $('input[name="regret1"]:checked').val();
            experiment.contentment1responseArray[numComplete-1] = $('input[name="contentment1"]:checked').val();
            experiment.disappointment1responseArray[numComplete-1] = $('input[name="disappointment1"]:checked').val();
            experiment.closeness1Array[numComplete-1] = $('input[name="closeness1"]:checked').val();
            experiment.effort1Array[numComplete-1] = $('input[name="effort1"]:checked').val();
            experiment.happy2responseArray[numComplete-1] = $('input[name="happy2"]:checked').val();
            experiment.sad2responseArray[numComplete-1] = $('input[name="sad2"]:checked').val();
            experiment.anger2responseArray[numComplete-1] = $('input[name="anger2"]:checked').val();
            experiment.surprise2responseArray[numComplete-1] = $('input[name="surprise2"]:checked').val();
            experiment.relief2responseArray[numComplete-1] = $('input[name="relief2"]:checked').val();
            experiment.regret2responseArray[numComplete-1] = $('input[name="regret2"]:checked').val();
            experiment.contentment2responseArray[numComplete-1] = $('input[name="contentment2"]:checked').val();
            experiment.disappointment2responseArray[numComplete-1] = $('input[name="disappointment2"]:checked').val();
            experiment.closeness2Array[numComplete-1] = $('input[name="closeness2"]:checked').val();
            experiment.effort2Array[numComplete-1] = $('input[name="effort2"]:checked').val();


            experiment.forcedHappyArray[numComplete-1] = $('input[name="3AFCHappy"]:checked').val();
            experiment.attentionCheck1Array[numComplete-1] = $('#attentionCheck1').val();
            experiment.attentionCheck2Array[numComplete-1] = $('#attentionCheck2').val();

            experiment.endTime = (new Date()).getTime();
            experiment.reactionTimeArray[numComplete-1] = experiment.endTime - experiment.startTime;

            $('input[name="happy1"]:').prop('checked', false);
            $('input[name="sad1"]:').prop('checked', false);
            $('input[name="anger1"]:').prop('checked', false);
            $('input[name="surprise1"]:').prop('checked', false);
            $('input[name="relief1"]:').prop('checked', false);
            $('input[name="regret1"]:').prop('checked', false);
            $('input[name="contentment1"]:').prop('checked', false);
            $('input[name="disappointment1"]:').prop('checked', false);
            $('input[name="closeness1"]:checked').prop('checked', false);
            $('input[name="effort1"]:checked').prop('checked', false);
            $('input[name="happy2"]:').prop('checked', false);
            $('input[name="sad2"]:').prop('checked', false);
            $('input[name="anger2"]:').prop('checked', false);
            $('input[name="surprise2"]:').prop('checked', false);
            $('input[name="relief2"]:').prop('checked', false);
            $('input[name="regret2"]:').prop('checked', false);
            $('input[name="contentment2"]:').prop('checked', false);
            $('input[name="disappointment2"]:').prop('checked', false);
            $('input[name="closeness2"]:checked').prop('checked', false);
            $('input[name="effort2"]:checked').prop('checked', false);
            $('input[name="3AFCHappy"]:checked').prop('checked', false);
            $('#attentionCheck1').val('');
            $('#attentionCheck2').val('');

            experiment.data.push(trial);
      }
      
      // If subject has completed all trials, update progress bar and
      // show slide to ask for demographic info
      if (numComplete >= numTrials) {
          $('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
          $("#trial-num").html(numComplete);
          $("#total-num").html(numTrials);
          showSlide("askInfo");
      
      } else {
        // Otherwise, if trials not completed yet, update progress bar
        // and go to next trial based on the order in which trials are supposed
        // to occur

        $('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
        $("#trial-num").html(numComplete);
        $("#total-num").html(numTrials);


        //currentTrialNum is used for randomizing later
        currentTrialNum = shuffledOrder[numComplete];
        trial = allTrialOrders[currentTrialNum];
        currentTrialSequence = "AB";
        if(experiment.showABFirst==1) {
          if(numComplete==1) {
            currentTrialSequence = "BA";
            experiment.distance1Array[numComplete]="B";
            experiment.distance2Array[numComplete]="A";
          } else {
            experiment.distance1Array[numComplete]="A";
            experiment.distance2Array[numComplete]="B";
          }
        } else {
          if(numComplete==0) {
            currentTrialSequence = "BA";
            experiment.distance1Array[numComplete]="B";
            experiment.distance2Array[numComplete]="A";
          } else {
            experiment.distance1Array[numComplete]="A";
            experiment.distance2Array[numComplete]="B";
          }
        }
        

        firstChar = trial.name1;
        secondChar = trial.name2;
        $('#CharName1a').html(firstChar);
        $('#CharName1b').html(firstChar);
        $('#CharName1c').html(firstChar);
        $('#CharName1d').html(firstChar);
        $('#CharName1e').html(firstChar);
        $('#CharName1f').html(firstChar);
        $('#CharName1g').html(firstChar);
        $('#CharName1h').html(firstChar);
        $('#CharName1i').html(firstChar);
        $('#CharName1j').html(firstChar);
        $('#CharName2a').html(secondChar);
        $('#CharName2b').html(secondChar);
        $('#CharName2c').html(secondChar);
        $('#CharName2d').html(secondChar);
        $('#CharName2e').html(secondChar);
        $('#CharName2f').html(secondChar);
        $('#CharName2g').html(secondChar);
        $('#CharName2h').html(secondChar);
        $('#CharName2i').html(secondChar);
        $('#CharName2j').html(secondChar);

        switch(trial.movieID) {
          case 1:
          $('#storySpan1').html("They are about to play a game. If they can throw the ball into the purple region, they get 1 star. If they throw the ball into the green region, they get 2 stars. <br><img width=400 src='images/Throw_figure.png'></img> ");
            $('#outcome1span').html("how many stars did he get? (type 0, 1 or 2)");
            $('#outcome2span').html("how many stars did he get? (type 0, 1 or 2)");
            break;
          case 2:
          $('#storySpan1').html("They are about to play a game. If they can bounce the ball into the purple region, they get 1 star. If they bounce the ball into the green region, they get 2 stars. <br><img width=300 src='images/Drop_figure.png'></img> ");
            $('#outcome1span').html("how many stars did she get? (type 0, 1 or 2)");
            $('#outcome2span').html("how many stars did she get? (type 0, 1 or 2)");
            break;
          }

       if (videoElement.canPlayType("video/mp4")) {
            videoElement.setAttribute("src", "videos/" + trial.movieName + "_" + currentTrialSequence + ".mp4");
           //window.alert("can play mp4");
       }
       else if (videoElement.canPlayType("video/webm")) {
           videoElement.setAttribute("src", "videos/" + trial.movieName + "_" + currentTrialSequence + ".webm");
           //window.alert("can play webm");
       }
       else if (videoElement.canPlayType("video/ogg")) {
           videoElement.setAttribute("src", "videos/" + trial.movieName + "_" + currentTrialSequence + ".ogv");
           //window.alert("can play ogg");
       }
       else {
           window.alert("Can't play anything");
       }
       videoElement.load();

        numComplete++;


       } // end of experiment.next's else block (numComplete < numTrials)
          // experiment.data.push(data);
          //setTimeout(experiment.next, 500);
  } // end of experiment.next();
}; // end of experiment variable
