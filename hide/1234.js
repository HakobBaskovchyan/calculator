/*var people = [        
 ["Tom", 25, false],        
 ["Bill", 38, true],       
  ["Alice", 21, false] ]; 
document.write(people);*/
/*var a=["hakob""baskovchyan];
var b=prompt("tiv gri");
var c=prompt("tiv gr");
var d=a.concat(b,c);
document.write(d[0]);

var i;
for(i=1; i<=50; i++)
{
	if(i%2==0)
	{
		var a=[i];
	document.write(a+",");
	}
}
document.write('<br>');
for(var j=1; j<=50; j++){
	if(j%2==1)
	{
		var b=[j];
		document.write(b+",")
	}
}
*/
/*
var i;
for(i=1; i<=50; i++)
{

	{
		var a=[i];
	document.write(a+",");
	}
*
 var a=prompt("Գրիր առաջին թիվը");
var b=prompt("գրիր երկրորդ թիվը");
var  c=prompt("Գրիր երրորդ թիվը");
a=parseInt(a);
b=parseInt(b);
c=parseInt(c);
var D=0
 if (a!=0)
{
	if(D>0)
   {
	   var x1= (- b - Math.sqrt(D))/(2*a);
	   var x2= (- b + Math.sqrt(D))/(2*a);
	   
	   document.write(x1);
	   document.write(x2);
   }
   else if(D==0){
	   document.write (b*b - 4*a*c);
   }
   else{
	 document.write("լուծում չունի") ; //լուծում չունի
	 
   }
}    
	

 else
document.write ("քաառակուսային հավասրում չէ");

 
 
 for(var i=0; i<=7; i++){ 
	document.write(i+",");
}




for(var i=20; i>=10; i--){ 
	alert(i);
}

var i = 15;
while(i>5) //քանի դեռ ճշմարիտ է i>5 արտահայտությունը
{
	document.write(i + "<br>");
	i--;
}
var i = 15;
while(i>5) //քանի դեռ ճշմարիտ է i>5 արտահայտությունը
{
	document.write(i + "<br>");
	i--;
}


var i=1;
do {
	alert(i);
} while (i!=1);



for (i=0;i<10;i++)
  {
  if (i==3)
    {
    break;
    }
  x= "Թիվը հավասար է" + i + "<br>";
 alert(x);
  }
  for (i=0;i〈=10;i++)
 {
 if (i==3) continue;
  x=x + "The number is " + i + "<br>";
 }


function anun(7,77,888)
{
	var d = 7+777+888;
	return d;

}

function getInnerHTML()
{
var a = document.getElementById("mek");
var b = a.innerHTML;
var b = a.innerHTML;
alert(b);
}

function setInnerHTML(){
var a = document.getElementById("mek");
a.innerHTML="կտցրած դիվ";
alert(a);
}


var a = new Number(45.3569);

var b = a.toExponential(); //b=4.53569e+1
document.write(b);

var c = a.toFixed(3);	  //c=45.357

var d = a.toPrecision(2);	 //d=45.35

var e = a.toString();		//թիվը դարձնում է տող

			
	var b = new String("Բայց բանս մեր փոփոխեսցի, յելս արեւու վերադարձցի Առ Մեծն Հայք` Տուն Թորգոմի, ազգ եւ ծնունդն Յաբեթի");

var c = b[3];
document.write(c);

var a = new String("mailname@mail.am");

var b =  a.indexOf("@");
document.write(b);
var c = "Ի ԽՈՐՈՑ ՍՐՏԻՑ ԽԱՒՍՔ ԸՆԴ ԱՍՏՈՒԾՈՅ";
document.write(c);
var d =  c.indexOf("ԽԱՒՍՔ");

document.write(d);
var str = "Հասկացողին մեկ ասա, չհասկացողին հազար ու մեկ";

var n = str.lastIndexOf("մեկ");

var n=str.lastIndexOf("հասկ");


var str="Ես գրում եմ andur translitov!"

var n=str.replace("andur translitov","Նորմալ հայատառ հայերենով");
alert(n);
//////////////////////////
<div id="mek">
	<p class="sbs">
		ինչ որ պարագրաֆ
	</p>
</div>
<button onclick="setInnerHTML()">
	Հուփ


var a = new String("փոքրատառերով գրված տեքստ");

var a1 = a.toUpperCase();
document.write(a1);

var b = new String("ՄԵԾԱՏԱՌԵՐՈՎ ԳՐՎԱԾ ՏԵՔՍՏ");

var b1 = b.toLowerCase();



var str = new String(" այստեղ սկզբից և վերջից կա բացատ ");

var str = str.trim();
document.write(str);

var str1 = new String("    մի քանի բացատներ    ");


var str1 = str1.trim();
var a = new String("կով փիղ ոչխար ավանակ բեգեմոտ");

var animals = a.split( ",");
document.write(animals);
var b = new String("html,css,javascript,mysql,php,");

var b1 = b.split("");
alert(b1);
	
	
var str = "Բարև աշխարհ";

var res = str.substr(1,3); //սկիզբ, երկարություն			
alert(res);
var str = "Բարև աշխարհ!";

var res = str.substring(5,11); //երկու ինդ
alert(res);

var now = new Date();
var date = now.getDate(); //ամսվա օրը

var day = now.getDay(); //շաբաթվա օրը (0-6)
var year = now.getFullYear();
 ;//տարին , քառանիշ
var month = now.getMonth(); //ամիսը (0-11)
alert(month)
var hour = now.getHours(); //ժամերը (0-23)
var minutes = now.getMinutes(); //վարկյանները (0-59)
//....
	
var otherDay = new Date(2019,25,1,9);
var b=otherDay.setDate(2); //ամսվա օրը
document.write(b);
var a=otherDay.setDay(4); 
document.write(a); //շաբաթվա օրը (0-6)
var f=otherDay.setFullYear(2013); //տարին , քառանիշ
var k=otherDay.setMonth(8); //ամիսը (0-11)
var c=otherDay.setHours(12); //ժամերը (0-23)
var v=otherDay.setMinutes(25); //վարկյանները (0-59)
//....


var myDate=new Date();

myDate.setDate(myDate.getDate()+15); //ավելացնել 15 օր
document.write(myDate);


			setTimeout('alert("kuku")', 1000);
			
			//կամ
			
			setTimeout('function1()', 1000);
			
			function function1(){
		alert("kuku");	//անում է որևէ բան
		}


			intervalID = setInterval('dosmth()', 100);

			function dosmth()
			{
			document.write("barev");	//որևէ հրամանաշար
			}
			//դադարեցնելու համար օգտագործում ենք 
			clearInterval(intervalID);



var myCars=new Array("Saab","Volvo","BMW","Volvo");

var x=myCars.length; 


var y=myCars.indexOf("Volvo");

var y=myCars.lastIndexOf("Volvo");

document.write(y); 

var first=new Array("html","css","javascript");

var second=new Array("php","mysql","xml");

var both = first.concat(second);
document.write(both); 

var arr = new Array("գլուխ","վիզ","մեջք","փոր");

arr.shift("վիզ"); 			       //վերադարձնում է հեռացված անդամը

 arr.unshift("մեջք");
  document.write(arr); 
  //վերադարձնում է նոր երկարությունը

arr.pop(); 				       //վերադարձնում է հեռացված անդամը

arr.push("փոր"); 	
 document.write(pop); 	
	
var hert = ["Ինֆորմացիա", "Գիտելիք", "Փող", "Երջանկություն"];

hert.splice(2,0,"Հմտություն","Ճանաչողություն");
alert(hert);
//Պարամետրեր՝ ինդեքս, հեռացվող անդամների քանակ, ներդրվող անդամներ ․․․ 
//Վերադարձնում է զանգված, որում առկա են հեռացված անդամները
	
var values = ["Ընտանիք", "Հայրենիք", "Ընկերություն", "Փող", "Փառք"];

var permanentValues = values.slice(0,3);
alert(values);


var fruits = ["Բանան", "Կիտրոն", "Խնձոր", "Տանձ","Խաղող"];

var energy = fruits.join(",");

//Բանան,Կիտրոն,Խնձոր,Տանձ,Խաղող

var energy1 = fruits.join(" ");
document.write(fruits);

//Բանան Կիտրոն Խնձոր Տանձ Խաղող


var mas = ["Բողկ", "Անանաս", "Գազար", "Զեյթուն"];

mas.sort();

mas.reverse();
alert(mas);
var myDate=new Date();	
myDate.setDate(myDate.getDate()+10); 
document.write(myDate);

var a=Math.PI;
alert(a);
var a=Math.round(4.6);
alert(a);
var a=Math.pow(4,6);
alert(a);
var a=Math.sqrt(625);
alert(a);

var a=Math.abs(-4,6);
alert(a);

var a=Math.seil(4.6);
alert(a);
var a=Math.floor(4.6);
alert(a);
var a=Math.floor((Math.random() * 10) + 1);
alert(a);

function validateForm()
{
var x=document.forms["Form1"]["FirstName"].value;
if (x==null || x=="")
  {
  alert("Անունը պիտի լրացվի");
  return false;
  }
}


function myFunction()
{

  var nkar = document.getElementById("a");
  nkar.innerHTML="<img src='images.jpg'>";  
 
 function addimg1()
{

	var div2 = document.getElementById("dv2");
	var hamb = document.getElementById("hamb");
	var banan = document.createElement("img");
	banan.src="images/dom bom/banan.jpeg";
	div2.insertBefore(banan,hamb);

}

}
var mydiv3 = document.getElementById("over3");
mydiv3.onmousedown=function(){
	mydiv3.innerHTML="Սեղմած պահում եմ";
}
mydiv3.onmouseup=function(){
	mydiv3.innerHTML="Բաց թողեցի";

 function addimg1()
{

	var div2 = document.getElementById("dv2");
	var hamb = document.getElementById("hamb");
	var banan = document.createElement("img");
	banan.src="images/dom bom/banan.jpeg";
	div2.insertBefore(banan,hamb);
		} 
		function myFunction()
{


	var a = document.createElement("a");
	a.innerHTML="baas";
	document.getElementById("text").previousSibling(a);
}

function remm()
{
	var outerP = document.getElementById("pp1");
	var remP = document.getElementById("pp22");
		var remP = document.getElementById("pp3");
	outerP.removeChild(remP);
}
function a()
{
	
	var b= document.getElementById("name")
	b.parentNode.removeChild(b);
}
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var res = str.replace("JAke", "James");
  document.getElementById("demo").innerHTML = res;
}
function yus()
{
	var a= document.createElement("li");
	var b=document.createTextNode("bzez");
	a.appendChild(b);
	var c=document.getElementById("replace");
	c.replaceChild(a,c.childNodes[0]);
}
function myMove() {
  var a = document.getElementById("animate");
  var b = document.getElementById(animate2);
  var c = 0;
  var d = setInterval(frame,50);
  function frame(){
	  if (c==150){
	  }else {
		  c++;
		  a.style.top = c + "px";
		  a.style.right = c + "px";
	  }
  }
  var id = setInterval(frame2,50);
  function frame2(){
	  if (c==150){
		  }else {
			c++;
			b.style.bottom = c + "px";
			b.style.left = c + "px"
			  
		  }
  }
 $(document).ready(function(){
$("#mouseevents").click(function(){
  							$("#alerts").html("Մկնիկը կտտաց");
						});

$("#mouseevents").mouseenter(function(){
  							$("#alerts").html("Մկնիկը մոտեցավ");
						});

$("#mouseevents").mouseleave(function(){
  							$("#alerts").html("Մկնիկը հեռացավ");
						}); 
});
 $(document).ready(function(){
$("input").focus(function(){
  $(this).css("background-color","blue");
}); 


$("input").blur(function(){
  $(this).css("background-color","white");
}); 
});


$(document).ready(function(){
  $("#keytest").keydown(function(event){ 
    $("#keytestDiv").html("Ստեղնի համարը: " + event.which);
    $("#keytest").css("background-color","magenta");
  });
  $("#keytest").keyup(function(event){ 
    $("#keytest").css("background-color","yellow");
  });
});


$("#bt").click(function(){
  alert("Text: " + $("#ttext").text());
});
$("#bt1").click(function(){
  $("#ttext").text("Մեկ այլ տեքստ");
});
});

$("#butn1").click(function(){
  alert($("#inp3").val());
});
$(document).ready(function(){
$("#butn2").click(function(){
   $("#inp3").val("Նոր արժեք");
});
});
$(document).ready(function(){
$("#app").click(function(){
	$("#avelcn").append("<div>Ավելացված է append-ով</div>");
	$("div").addClass("blue");
});
    $("#app1").click(function(){
		$("#avelcn").prepend("<p>Ավելացված է prepend-ով</p>");
		$("p").addClass("yellow");
});
    $("#app2").click(function(){
		$("#avelcn").after("<p3>Ավելացված է after-ով</p3>");
		$("p3").addClass("green");
});
    $("#app3").click(function(){
		$("#avelcn").before("<p2>Ավելացված է before-ով</p2>");
		$("p2").addClass("pink");
});
});
	

$(document).ready(function(){
$("#empty").click(function(){
	$("#artaq").empty();
});
$("#rem").click(function(){
	$("#artaq").remove();
});
})
$(document).ready(function(){
$("#clss").mouseenter(function(){
		$(this).addClass("borderedp");
});

$("#rmclass").click(function(){
		$("#clss").removeClass("borderedp");
});

$(document).ready(function(){
$("#tgglbt").click(function(){
		$("#tggl").toggleClass("borderedp");
});
});

$(document).ready(function(){
$("#tgglbt").click(function(){
		$("#tggl").toggleClass("borderedp");
});
});


$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});*/

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide(1000);
  });
});
































