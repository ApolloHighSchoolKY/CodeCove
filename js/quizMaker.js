var numberCAs = 0;
var totalAnswers=0;
var correctAnswer = Math.floor(Math.random() * 24);
var numQs=2;
function checkAnswers(){
  totalAnswers+=1;
  if(correctAnswer <=6 && document.getElementById('aa').checked){
    alert("Correct");
    numberCAs+=1;
     cAString ="Correct Answers: " + numberCAs;
    document.getElementById('numberCorrect').innerHTML = cAString;
  } else if(correctAnswer >=7 && correctAnswer <=12 && document.getElementById('ab').checked){
      alert("Correct");
      numberCAs+=1;
       cAString ="Correct Answers: " + numberCAs;
  } else if(correctAnswer >=13 && correctAnswer <=18 && document.getElementById('ac').checked){
      alert("Correct");
      numberCAs+=1;
       cAString ="Correct Answers: " + numberCAs;

  }else if(correctAnswer >=19 && correctAnswer <=24 && document.getElementById('ad').checked){
      alert("Correct");
      numberCAs+=1;
       cAString ="Correct Answers: " + numberCAs;
  } else{
     cAString="Correct Answers: " + numberCAs;
    alert("Incorrect");
  }
  document.getElementById('numberCorrect').innerHTML = cAString;
  tAString="Total Percentage: " + Math.round(numberCAs/totalAnswers*100) + "%";
    document.getElementById('totalQuestions').innerHTML = tAString;
document.getElementById('newQ').style.display='block';
document.getElementById('newQ').style.cursor='pointer';
document.getElementById('newQ').style.border='none';
};

function addContent(question,correct,inc1,inc2,inc3){
if(numQs<=0){
  alert("Your quiz is done! Your score was: " + Math.round(numberCAs/totalAnswers*100) + "%\n" + "How many questions were attempted: " + totalAnswers + "\n" + "How many you got correct: " + numberCAs + "\n");
  window.location='../html/lessons.html'
}
else{
  alert("" + numQs);
  document.getElementById('question').innerHTML = question;
  if(correctAnswer == 1){
    document.getElementById('a1a').style.color = 'blue';
    document.getElementById('a1a').innerHTML = correct;
    document.getElementById('a1b').innerHTML = inc1;
    document.getElementById('a1c').innerHTML = inc2;
    document.getElementById('a1d').innerHTML = inc3;
  }else if(correctAnswer == 2){
    document.getElementById('a1a').style.color = 'blue';
    document.getElementById('a1a').innerHTML = correct;
    document.getElementById('a1b').innerHTML = inc1;
    document.getElementById('a1c').innerHTML = inc3;
    document.getElementById('a1d').innerHTML = inc2;
  }else if(correctAnswer == 3){
    document.getElementById('a1a').style.color = 'blue';
    document.getElementById('a1a').innerHTML = correct;
    document.getElementById('a1b').innerHTML = inc2;
    document.getElementById('a1c').innerHTML = inc1;
    document.getElementById('a1d').innerHTML = inc3;
  }else if(correctAnswer == 4){
    document.getElementById('a1a').style.color = 'blue';
    document.getElementById('a1a').innerHTML = correct;
    document.getElementById('a1b').innerHTML = inc2;
    document.getElementById('a1c').innerHTML = inc3;
    document.getElementById('a1d').innerHTML = inc1;
  }else if(correctAnswer == 5){
    document.getElementById('a1a').style.color = 'blue';
    document.getElementById('a1a').innerHTML = correct;
    document.getElementById('a1b').innerHTML = inc3;
    document.getElementById('a1c').innerHTML = inc1;
    document.getElementById('a1d').innerHTML = inc2;
  }else if(correctAnswer ==6){
    document.getElementById('a1a').style.color = 'blue';
    document.getElementById('a1a').innerHTML = correct;
    document.getElementById('a1b').innerHTML = inc3;
    document.getElementById('a1c').innerHTML = inc2;
    document.getElementById('a1d').innerHTML = inc1;
  }else if(correctAnswer ==7){
    document.getElementById('a1b').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc1;
    document.getElementById('a1b').innerHTML = correct;
    document.getElementById('a1c').innerHTML = inc2;
    document.getElementById('a1d').innerHTML = inc3;
  }else if(correctAnswer ==8){
    document.getElementById('a1b').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc1;
    document.getElementById('a1b').innerHTML = correct;
    document.getElementById('a1c').innerHTML = inc3;
    document.getElementById('a1d').innerHTML = inc2;
  }else if(correctAnswer ==9){
    document.getElementById('a1b').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc2;
    document.getElementById('a1b').innerHTML = correct;
    document.getElementById('a1c').innerHTML = inc3;
    document.getElementById('a1d').innerHTML = inc1;
  }else if(correctAnswer ==10){
    document.getElementById('a1b').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc2;
    document.getElementById('a1b').innerHTML = correct;
    document.getElementById('a1c').innerHTML = inc1;
    document.getElementById('a1d').innerHTML = inc3;
  }else if(correctAnswer ==11){
    document.getElementById('a1b').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc3;
    document.getElementById('a1b').innerHTML = correct;
    document.getElementById('a1c').innerHTML = inc1;
    document.getElementById('a1d').innerHTML = inc2;
  }else if(correctAnswer ==12){
    document.getElementById('a1b').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc3;
    document.getElementById('a1b').innerHTML = correct;
    document.getElementById('a1c').innerHTML = inc2;
    document.getElementById('a1d').innerHTML = inc1;
  }else if(correctAnswer ==13){
    document.getElementById('a1c').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc1;
    document.getElementById('a1b').innerHTML = inc2;
    document.getElementById('a1c').innerHTML = correct;
    document.getElementById('a1d').innerHTML = inc3;
  }else if(correctAnswer ==14){
    document.getElementById('a1c').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc1;
    document.getElementById('a1b').innerHTML = inc3;
    document.getElementById('a1c').innerHTML = correct;
    document.getElementById('a1d').innerHTML = inc2;
  }else if(correctAnswer ==15){
    document.getElementById('a1c').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc2;
    document.getElementById('a1b').innerHTML = inc1;
    document.getElementById('a1c').innerHTML = correct;
    document.getElementById('a1d').innerHTML = inc3;
  }else if(correctAnswer ==16){
    document.getElementById('a1c').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc2;
    document.getElementById('a1b').innerHTML = inc3;
    document.getElementById('a1c').innerHTML = correct;
    document.getElementById('a1d').innerHTML = inc1;
  }else if(correctAnswer ==17){
    document.getElementById('a1c').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc3;
    document.getElementById('a1b').innerHTML = inc1;
    document.getElementById('a1c').innerHTML = correct;
    document.getElementById('a1d').innerHTML = inc2;
  }else if(correctAnswer ==18){
    document.getElementById('a1c').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc3;
    document.getElementById('a1b').innerHTML = inc2;
    document.getElementById('a1c').innerHTML = correct;
    document.getElementById('a1d').innerHTML = inc1;
  }else if(correctAnswer ==19){
    document.getElementById('a1d').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc1;
    document.getElementById('a1b').innerHTML = inc2;
    document.getElementById('a1c').innerHTML = inc3;
    document.getElementById('a1d').innerHTML = correct;
  }else if(correctAnswer ==20){
    document.getElementById('a1d').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc1;
    document.getElementById('a1b').innerHTML = inc3;
    document.getElementById('a1c').innerHTML = inc2;
    document.getElementById('a1d').innerHTML = correct;
  }else if(correctAnswer ==21){
    document.getElementById('a1d').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc2;
    document.getElementById('a1b').innerHTML = inc1;
    document.getElementById('a1c').innerHTML = inc3;
    document.getElementById('a1d').innerHTML = correct;
  }else if(correctAnswer ==22){
    document.getElementById('a1d').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc2;
    document.getElementById('a1b').innerHTML = inc3;
    document.getElementById('a1c').innerHTML = inc1;
    document.getElementById('a1d').innerHTML = correct;
  }else if(correctAnswer ==23){
    document.getElementById('a1d').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc3;
    document.getElementById('a1b').innerHTML = inc1;
    document.getElementById('a1c').innerHTML = inc2;
    document.getElementById('a1d').innerHTML = correct;
  }else if(correctAnswer == 24){
    document.getElementById('a1d').style.color = 'blue';
    document.getElementById('a1a').innerHTML = inc3;
    document.getElementById('a1b').innerHTML = inc2;
    document.getElementById('a1c').innerHTML = inc1;
    document.getElementById('a1d').innerHTML = correct;
  }
}
numQs=numQs-1;
};


/* document.write("
  <h1 class='teal' style='margin-top:35px;'> Welcome to the CodeCove HTML Quiz </h1>\
  <p>\
  <div class='container teal'>Q1: Where does < !DOCTYPE html > go on the form? </div>\
  A1 &#150; Just a sample question to test your understanding<br>\
  <fieldset style='border:none;'id=answerOne>\
    <input id=a1a name='answerOne' type='radio' value=''> A &#150; Before the Emboldened Text <br>\
  	<input id=a1b name='answerOne' type='radio' value=''><a style='color:blue'> B &#150; At the Beginning of the Form </a><br>\
  	<input id=a1c name='answerOne' type='radio' value=''> C &#150; Around the Hyperlink<br>\
  	<input id=a1d name='answerOne' type='radio' value=''> D &#150; In the < script > Function<br>\
    </fieldset>\
  <!-- E &#150; &#9855 < br ><br>\
    F &#150; &#9728<br>-->\
<div class='container teal'> Q2 &#150; A tag with a backslash (/) in front does what to a tag?</div>\
	A &#150; Excludes the Function from the Stylesheet<br>\
	B &#150; Comments out the Function<br>\
	C &#150; Quits the Program after the Function is completed<br>\
	<a style='color:blue'>D &#150; Ends the Code for the Specific Function </a> <br>\
<div class='container teal'> Q3 &#150; What does the &#34;a&#34; in an < a > tag stand for?</div>\
	A &#150; Anchor<br>\
	B &#150; Abbreviation<br>\
	C &#150; Footer<br>\
	D &#150; Hyperlink<br>\
<div class='container teal'> Q4 &#150; What does the following code output?<br>\
< p >Hello < b >World< /b >!< /p > </div>\
A &#150; <b> Hello World</b>!<br>\
B &#150; <u> Hello World</u>!<br>\
C &#150; <b> Hello World!</b><br>\
D &#150; <i> Hello World </i>!<br>\
<div class='container teal'> Q5 &#150; What tag defines a comment?</div>\
	A &#150; < ol > <br>\
	B &#150; < &#146;...&#146; > <br>\
	C &#150; < com ><br>\
	D &#150; < !--...-- ><br>\
<div class='container teal'> Q6 &#150; Inside an < img > tag, the alt value controls what?</div>\
	A &#150; The Image&#146;s Source File<br>\
	B &#150; The Alternate Text<br>\
	C &#150; Width<br>\
	D &#150; Height<br>\
<div class='container teal'> Q7 &#150; The < ul > tag defines what?</div>\
	A &#150; Connection Ping<br>\
	B &#150; Bulleted List<br>\
	C &#150; A URL<br>\
	D &#150; Underline<br>\
<div class='container teal'> Q8 &#150; What does content go between in HTML?</div>\
	A &#150; Tags<br>\
	B &#150; Quotes<br>\
	C &#150; Headings<br>\
	D &#150; Comments<br>\
<div class='container teal'> Q9 &#150; What is putting elements inside elements called?</div>\
	A &#150; Recursion<br>\
	B &#150; Shelling<br>\
	C &#150; Nesting<br>\
	D &#150; Tagging<br>\
<div class='container teal'> Q10 &#150; The style attribute specifies...</div>\
	A &#150; An Element&#146;s Location<br>\
	B &#150; An Element&#146;s Text<br>\
	C &#150; An Element&#146;s Styling<br>\
	D &#150; A Picture<br>\
<div class='container teal'> Q11 &#150; A < div > tag...</div>\
	A &#150; Defines Deleted Text<br>\
	B &#150; Defines a Document Section<br>\
	C &#150; Defines a Description<br>\
	D &#150; is an extension to < !DOCTYPE > tag<br>\
<div class='container teal'> Q12 &#150; The < em > tag does what to an element?</div>\
	A &#150; Embed<br>\
	B &#150; Bold<br>\
	C &#150; Underline<br>\
	D &#150; Emphasize<br>\
<div class='container teal'> Q13 &#150; If you wanted to embolden an element, what tag would you use?</div>\
	A &#150; < bold ><br>\
	B - < bd ><br>\
	C - < b ><br>\
	D - < bo ><br>\
  <div id='numberCorrect'></div>\
  <button onclick = 'checkAnswers()' class='red' style='border:none;cursor:pointer;'>Check my answers </button>\
</p>")*/
