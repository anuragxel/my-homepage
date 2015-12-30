//global variables
var hi = "_{leftarrow}Hey!{enter}{enter}I'm Anurag Ghosh and this is my personal page, if you have reached here accidently, poor you!{enter}{enter}If you want to know more about me, use the above links. To talk to me, message me using the links below.{del}"
var about = "_{leftarrow}Hey again!{enter}{enter}I'm pursuing my BTech and MS in CSE at CVIT, IIIT-H.{enter}{enter}I love to run, draw, quiz and write.{enter}{enter}I help out with Ping!, the college magazine, you may want to check that out.{enter}{enter}I'm also TA'ing Math 1 this monsoon semester, best job in the world!{del}"
var interest = "_{leftarrow}I'm interested in Machine Learning, Computer Vision and Programming Languge Theory.{enter}{enter}I'm advised by Prof. CV Jawahar for my Honours projects, and masters.{enter}{enter}I have some open source contributions and have worked for Boost C++ libraries, check out my github (@anuragxel) if you want to look at my projects.{del}"
var projects = "_{leftarrow}Some of my college projects are - {enter}{enter}Dynamic Story Generation using Visual and GPS information{enter}{enter}College Attendance Ecosystem{enter}{enter}Processor Simulator and Assembler{enter}{enter}Boost Document Library{del}"
var contact = "_{leftarrow}You may mail me at ghoshanurag1995@gmail.com or the mail address below.{enter}{enter}You can also message me on Facebook, Github or Quora.{del}"
var state=1; //the state whether something is being written on the content or not.
function statechange()
{
	state=0;
}

function writeinfo (seq) {
	if(!state)
	{
		state = 1;
		$('#content').empty();
		$('#content').simulate("key-sequence",{sequence:seq,delay:25,triggerKeyEvents:false,callback:statechange});
	}
}

$(document).ready(function(){
			$('#content').simulate("key-sequence", {sequence: hi, delay: 25, triggerKeyEvents: false, callback: statechange});
			
			$('#ag').click(function(){
				if(!state)
				{	
					state = 1;
					$('#content').empty();
					$('#content').simulate("key-sequence",{sequence:hi,delay:25,triggerKeyEvents:false,callback:statechange});
				}
			});
			$('#ab').click(function(){
				if(!state)
				{	
					state = 1;
					$('#content').empty();
					$('#content').simulate("key-sequence",{sequence:about,delay:25,triggerKeyEvents:false,callback:statechange});
				}
			});
			$('#in').click(function(){
				if(!state)
				{	
					state = 1;
					$('#content').empty();
					$('#content').simulate("key-sequence",{sequence:interest,delay:25,triggerKeyEvents:false,callback:statechange});
				}
			});
			$('#pj').click(function(){
				if(!state)
				{	
					state = 1;
					$('#content').empty();
					$('#content').simulate("key-sequence",{sequence:projects,delay:25,triggerKeyEvents:false,callback:statechange});
				}
			});
			$('#ct').click(function(){
				if(!state)
				{	
					state = 1;
					$('#content').empty();
					$('#content').simulate("key-sequence",{sequence:contact,delay:25,triggerKeyEvents:false,callback:statechange});
				}
			});
			$('#re').click(function(){
				if(!state)
				{	
					$('#content').empty();
					window.location = "./Resume-Anurag-Ghosh.pdf";	
				}
			});
		});
