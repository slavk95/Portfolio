//Header height
var header = $('#header');
var userHeight;
function headerHeight(){
	if ($(window).width()/$(window).height()>1.75) {
		$("#header-video").css("display","block");
		$("#header").css("backgroundImage","none");
		$("#header").css("height",$(window).height());
		userHeight = $("#header-video").css("height");
		
	}
	else{
		$("#header-video").css("display","none");
		$("#header").css("backgroundImage","url(img/Vin.jpg)");	
		var userHeight = $(window).height();
		$("#header").css("height",$(window).height());
		userHeight = $("#header").css("height");
	}
}
 
// function headerSize(userHeight){
// 	header.css("height",userHeight);
// };


//Position myName
var realUserHeight = $(window).height();
function positionMyName(realUserHeight){
	if ($(window).height()>500) {
		$('#myName').css('margin-top',realUserHeight/2-250);	
	}
	else{
		$('#myName').css('margin-top',realUserHeight/2-150);	
	}
	
}

function sizeFourthItem(){
	if($(window).width()<500){
		// for (key in $(".fourth .col-md-3")){
			$(".fourth .col-md-3").removeClass("col-xs-6").addClass("col-xs-12");
	}
	else{
			$(".fourth .col-md-3").removeClass("col-xs-12").addClass("col-xs-6");
	}
}
var flag = 1;
var bodyTag = document.getElementById("body");
function checkScroll(){
	bodyTag.onscroll=function(){
		// Show and Hide menu
		if(window.pageYOffset>=realUserHeight){
			
			$("#nav").css("display","block");
		}
		else{
			$("#nav").css("display","none");

		}
		// if (window.pageYOffset>=realUserHeight-500 && flag) {
		// 	skillsBar(html, 0.9);
		// 	skillsBar(css, 0.9);
		// 	skillsBar(JS, 0.7);
		// 	skillsBar(AngularJS, 0.25);
		// 	skillsBar(PHP, 0.5);
		// 	skillsBar(MySQL, 0.25);
		// 	flag=0;
		// }
		
		//Skills run
		var htmlProgress = document.getElementById("htmlProgress");
		var cssProgress = document.getElementById("cssProgress");
		var jsProgress = document.getElementById("jsProgress");
		var bootstrapProgress = document.getElementById("bootstrapProgress");
		var jqueryProgress = document.getElementById("jqueryProgress");
		var phpProgress = document.getElementById("phpProgress");
		var angularProgress = document.getElementById("angularProgress");
		// if (window.pageYOffset >= $("#skills").offset().top-200) {
			
		// 	htmlProgress.style.width="95%";
		// 	cssProgress.style.width="85%";
		// 	jsProgress.style.width="75%";
		// 	bootstrapProgress.style.width="80%";
		// 	jqueryProgress.style.width="84%";
		// 	phpProgress.style.width="50%";
		// 	angularProgress.style.width="20%";
		// }
		// else
		// {
		// 	function setWidth(skill){
		// 		skill.style.width="0%";
		// 	}
		// 	setWidth(htmlProgress);
		// 	setWidth(cssProgress);
		// 	setWidth(jsProgress);
		// 	setWidth(bootstrapProgress);
		// 	setWidth(jqueryProgress);
		// 	setWidth(phpProgress);
		// 	setWidth(angularProgress);
		// }
	};	
};

//Social-network animation
function socialNetworkAnimate(socialId){
	$('#'+socialId).hover(function(){
		$(this).addClass('animated infinite pulse').removeClass('zoomIn').css("display","inline-block");
		$(this).mouseleave(function(){
			$(this).removeClass('infinite pulse');
		})
	});
};


//All function
$(document).ready(function(){
	headerHeight();
	checkScroll();
	sizeFourthItem();
// 	if($(window).width()<500){
// 	$(".fourth .col-md-3").removeClass("col-xs-6");
// 	$(".fourth .col-md-3").addClass("col-xs-12");
// }
	var realUserHeight = $(window).height();
	//$("#header-video").css("width",$(window).width());
	// if($(window).height()>=500){
	// 	var userHeight = $("#header-video").css("height");
	// 	headerSize(userHeight);
	// };
	positionMyName(realUserHeight);
	socialNetworkAnimate("fa-facebook");
	socialNetworkAnimate("fa-twitter");
	socialNetworkAnimate("fa-google-plus");
	socialNetworkAnimate("fa-linkedin");
	socialNetworkAnimate("fa-instagram");
	socialNetworkAnimate("fa-dribbble");
	socialNetworkAnimate("fa-skype");
	$('#myName').addClass('animated bounceInLeft');
	if ($('#mySurName').addClass('animated bounceInRight')) {
		function headerTextAnimate(){
			$('#header-text').addClass('animated fadeIn');
		}
		if(setTimeout(headerTextAnimate,800)){
			function headerLineAnimate(){
				$("#header-line").addClass('animated rotateInUpRight');	
			};
			if(setTimeout(headerLineAnimate,800)){
				function socialNetworkShow(){
					$('#fa-facebook').addClass('animated zoomIn');
					setTimeout(function(){
						$('#fa-twitter').addClass('animated zoomIn');
						setTimeout(function(){
							$('#fa-google-plus').addClass('animated zoomIn');
							setTimeout(function(){
								$('#fa-linkedin').addClass('animated zoomIn');
								setTimeout(function(){
									$('#fa-instagram').addClass('animated zoomIn');
									setTimeout(function(){
										$('#fa-dribbble').addClass('animated zoomIn');
										setTimeout(function(){
											$('#fa-skype').addClass('animated zoomIn');
											setTimeout(function(){
												$('#intitaShowInformation').addClass('animated flash');
											},800)
										},800)
									},800)
								},800)
							},800)
						},800)
					},800);
				}
				setTimeout(socialNetworkShow,2000);
			}
		}

	};
	$(function(){
		$(window).resize(function(){
			sizeFourthItem();
			
			var realUserHeight = $(window).height();
			positionMyName(realUserHeight);
			checkScroll();
			headerHeight();
			
		});
	});
});

var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlmMDEwMTI4MzkzMmVhN2UzZWJmZTNhZDhmMGRlYmJhZjMwYmY1MWMwOTI3YTE5Y2Q1MzJlMGYwMDBhNDU2MDdhYzA3YmI5M2MxNTk3OGQ3In0.eyJhdWQiOiIxMCIsImp0aSI6IjlmMDEwMTI4MzkzMmVhN2UzZWJmZTNhZDhmMGRlYmJhZjMwYmY1MWMwOTI3YTE5Y2Q1MzJlMGYwMDBhNDU2MDdhYzA3YmI5M2MxNTk3OGQ3IiwiaWF0IjoxNTA3NjUzODgzLCJuYmYiOjE1MDc2NTM4ODMsImV4cCI6MTgyMzE4NjY4Mywic3ViIjoiNzkwIiwic2NvcGVzIjpbInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQmFzZUluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.As4RsmGoK_OghS7BB46GfPiy74UYFn-P93rkElRvJu6518TjoC6MQ7uxDP4YrpDbdzaB97M-OkiMRP5TNAcDxJxjFLIhpIx2uajyKEVu_csxzuuSkmCAAJ_ohSmKfLsBIvcdCRBNVdoewsbH-DekTLBDbwi9ytX4va3isAd-9xnGrTL2gGw3onJhzJ0bf42-l3eBGRYxgifOvf-2H7HlkXh6RgGEUxDVSFqb7UIvzRd_fdf6dzbpouiL2ll-tZ7thIqPfpptRY5itb1Zrn8qfBggi4wm9DCZHFESHa1A-zWFSrKqtKgMYkySUC79bYeW3q4M8xSNGSL3YGuyMrV_7WJbCKRRxWiAkqpCsWluuylMSrEkCQoUcZthW068Q2C4PJkSQz6nJwsAVEHtTNdwttFYqi810MdV9LDBuf97s9GGNjaWVEhp_W1Xkc6fyaY41jZ2F-NdXIGKtGMdjwFT1jgZd2K0QycZLPyke1EALkPWPRTQxIKc_kXKEOPn_c5NM8WfLRyn6XeggwR9qYfWo8tAY3roKxShrgivG2m14XHta_DkPdddwXxWF4H1zERf51mSnj7BK2hur8wmLGLP-pfUrkNP_TZuadqMgGCgC-THV9e6rKho7zE0SIIs_hSINNu1V_adneQ1-mvmXZJqvbWwJLTKgY4Jg-fEgHpoOrQ', 
my_id=790;
var client = new INTITAClient({
    key : API_KEY,
});
var nameNode = document.getElementById('mainInfo'), avatarNode = document.getElementById('avatar'), teacher = document.getElementById('teacher');
var courses = document.getElementById('courses'), idCourse=[], courseDetail = document.getElementById('courseDetail'), 
moduleDetail = document.getElementById('moduleDetail');
function parse(blockName,data)
{
    for(var key in data.data)
    {
        if (data.data[key] != null && data.data[key] != "" && key!="avatar")
        {
            if (typeof data.data[key]!="object")
            {
                blockName.innerHTML += "<b>" +key +"</b>" + ": " + data.data[key] + "<br>";    
            };
            if (typeof data.data[key] === "object")
            {
                for (var i=0; i<data.data[key].length;i++)
                {
                    for(var key2 in data.data[key][i])
                    {
                        if (data.data[key][i][key2]!= null && data.data[key][i][key2]!="")
                        {
                            blockName.innerHTML += "<b>" + key2 + "</b>" + ": " + data.data[key][i][key2] + "<br>";
                        };
                        if (key2 == "id")
                        {
                            idCourse[i] = data.data[key][i][key2];
                        };
                    };
                };
            };
        };
        if (key == "avatar")
        {
            avatarNode.setAttribute("src",data.data[key]);
        };     
    };
};
client.getUserDetails(my_id).then(function(data)
{
     parse(nameNode,data);
    client.getUserCoursesAndModules(my_id).then(function(data)
    {
        parse(courses,data);
        for (var i=0; i<idCourse.length;i++)
        {
            client.getCourseInfo(idCourse[i]).then(function(data)
            {
                parse(courseDetail,data);
                for (var i=0; i<idCourse.length;i++)
                {
                    client.getModuleInfo(idCourse[i]).then(function(data)
                    {
                        parse(moduleDetail, data);
                    });    
                };
            });
        };  
    });
});

// function skillsBar(skillName, percent){
// 	var bar = new ProgressBar.Circle(skillName, {
// 	color: '#aaa',
// 	// This has to be the same size as the maximum width to
// 	// prevent clipping
// 	strokeWidth: 4,
// 	trailWidth: 1,
// 	easing: 'easeInOut',
// 	duration: 1400,
// 	text: {
// 		autoStyleContainer: false
// 	},
// 	from: { color: '#789cbb', width: 1 },
// 	to: { color: '#245580', width: 4 },
// 	// Set default step function for all animate calls
// 	step: function(state, circle) {
// 	circle.path.setAttribute('stroke', state.color);
// 	circle.path.setAttribute('stroke-width', state.width);

// 	var value = Math.round(circle.value() * 100);
// 	if (value === 0) {
// 	  circle.setText('');
// 	} else {
// 	  circle.setText(value);
// 	}

// 	}
// 	});
// 	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
// 	bar.text.style.fontSize = '2rem';

// 	bar.animate(percent);  // Number from 0.0 to 1.0	
// }
// $("#work1").hover(function(){
// 	alert(1);
// });
