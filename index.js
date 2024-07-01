// get search bar element

const searchInput = document.getElementById("searchInput");


// store name elements in array-like object

const namesFromDOM = document.getElementsByClassName("name");

// listen for user events

searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;

  // get user search input converted to lowercase

  const searchQuery = value.toLowerCase();

  for (const nameElement of namesFromDOM) {
    // store name text and convert to lowercase

    let name = nameElement.textContent.toLowerCase();

    // compare current name to search input

    if (name.includes(searchQuery)) {
      // found name matching search, display it

      nameElement.style.display = "block";
    } else {
      // no match, don't display name

      nameElement.style.display = "none";
    }
  }
});

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
 }
 function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  let textelements = document.querySelectorAll(".text");
let counter = 0; 


function clicker(){

if(counter < textelements.length){
   textelements[counter].style.visibility = "visible";
   counter ++
} else{
   window.location.replace("<somepage>");
 }

}
$('.button').on('click', function (e) {
  $('.hidden').toggle(); 
});
function toggle1()
{
  toggleId("1"); 
}

function toggle2()
{
  toggleId("2");
}

function toggle3()
{
  toggleId("3");
  
}
function toggle4()
{
  toggleId("4");
  
}function toggle5()
{
  toggleId("5");
  
}function toggle6()
{
  toggleId("6");
  
}function toggle7()
{
  toggleId("7");
  
}function toggle8()
{
  toggleId("8");
  
}function toggle9()
{
  toggleId("9");
  
}function toggleten()
{
  toggleId("ten");
  
}function toggle11()
{
  toggleId("11");
  
}function toggle12()
{
  toggleId("12");
  
}function toggle13()
{
  toggleId("13");
  
}function toggle14()
{
  toggleId("14");
  
}function toggle15()
{
  toggleId("15");
  
}function toggle16()
{
  toggleId("16");
  
}function toggle17()
{
  toggleId("17");
  
}function toggle18()
{
  toggleId("18");
  
}function toggle19()
{
  toggleId("19");
  
}function toggle20()
{
  toggleId("20");
  
}function toggle21()
{
  toggleId("21");
  
}function toggle22()
{
  toggleId("22");
  
}function toggle23()
{
  toggleId("23");
  
}function toggle24()
{
  toggleId("24");
  
}function toggle25()
{
  toggleId("25");
  
}function toggle26()
{
  toggleId("26");
  
}function toggle27()
{
  toggleId("27");
  
}function toggle28()
{
  toggleId("28");
  
}function toggle29()
{
  toggleId("29");
  
}function toggle30()
{
  toggleId("30");
  
}function toggle31()
{
  toggleId("31");
  
}function toggle32()
{
  toggleId("32");
  
}function toggle33()
{
  toggleId("33");
  
}function toggle34()
{
  toggleId("34");
  
}function toggle35()
{
  toggleId("35");
  
}function toggle36()
{
  toggleId("36");
  
}function toggle37()
{
  toggleId("37");
  
}function toggle38()
{
  toggleId("38");
  
}function toggle39()
{
  toggleId("39");
  
}function toggle40()
{
  toggleId("40");

}function toggle41()
{
  toggleId("41");

}function toggle42()
{
  toggleId("42");
  
}function toggle43()
{
  toggleId("43");

}function toggle44()
{
  toggleId("44");

}function toggle45()
{
  toggleId("45");

}function toggle46()
{
  toggleId("46");

}function toggle47()
{
  toggleId("47");

}function toggle48()
{
  toggleId("48");

}function toggle49()
{
  toggleId("49");

}function toggle50()
{
  toggleId("50");  
  
}function toggle51()
{
  toggleId("51");

}function toggle52()
{
  toggleId("52");

}function toggle53()
{
  toggleId("53");

}function toggle54()
{
  toggleId("54");

}function toggle55()
{
  toggleId("55");

}function toggle56()
{
  toggleId("56");

}function toggle57()
{
  toggleId("57");

}function toggle58()
{
  toggleId("58");

}function toggle59()
{
  toggleId("59");

}function toggle60()
{
  toggleId("60");

}function toggle61()
{
  toggleId("61");

}function toggle62()
{
  toggleId("62");

}function toggle63()
{
  toggleId("63");

}function toggle64()
{
  toggleId("64");

}function toggle65()
{
  toggleId("65");

}function toggle66()
{
  toggleId("66");

}function toggle67()
{
  toggleId("67");

}function toggle68()
{
  toggleId("68");

}function toggle69()
{
  toggleId("69");

}function toggle70()
{
  toggleId("70");

}function toggle71()
{
  toggleId("71");

}function toggle72()
{
  toggleId("72");

}function toggle73()
{
  toggleId("73");


}function toggle74()
{
  toggleId("74");


}function toggle75()
{
  toggleId("75");


}function toggle76()
{
  toggleId("76");


}function toggle77()
{
  toggleId("77");


}function toggle78()
{
  toggleId("78");


}function toggle79()
{
  toggleId("79");


}function toggle80()
{
  toggleId("80");


}function toggle81()
{
  toggleId("81");

}function toggle82()
{
  toggleId("82");

}function toggle83()
{
  toggleId("83");

}function toggle84()
{
  toggleId("84");

}function toggle85()
{
  toggleId("85");

}function toggle86()
{
  toggleId("86");
  
}function toggle87()
{
  toggleId("87");

}function toggle88()
{
  toggleId("88");

}function toggle89()
{
  toggleId("89");

}function toggle90()
{
  toggleId("90");

}function toggle91()
{
  toggleId("91");

}function toggle92()
{
  toggleId("92");

}function toggle93()
{
  toggleId("93");

}function toggle94()
{
  toggleId("94");

}function toggle95()
{
  toggleId("95");

}function toggle96()
{
  toggleId("96");

}function toggle97()
{
  toggleId("97");

}function toggle98()
{
  toggleId("98");

}function toggle99()
{
  toggleId("99");

}function toggle100()
{
  toggleId("100");

}function toggle101()
{
  toggleId("101");

}function toggle102()
{
  toggleId("102");

}function toggle103()
{
  toggleId("103");

}function toggle104()
{
  toggleId("104");

}function toggle105()
{
  toggleId("105");

}function toggle106()
{
  toggleId("106");

}function toggle107()
{
  toggleId("107");

}function toggle108()
{
  toggleId("108");

}function toggle109()
{
  toggleId("109");

}function toggle110()
{
  toggleId("110");
}function toggle111()
{
  toggleId("111");
}function toggle112()
{
  toggleId("112");
}function toggle113()
{
  toggleId("113");
}function toggle114()
{
  toggleId("114");
}function toggle115()
{
  toggleId("115");
}function toggle116()
{
  toggleId("116");
}function toggle117()
{
  toggleId("117");
}function toggle118()
{
  toggleId("118");
}function toggle119()
{
  toggleId("119");
}function toggle120()
{
  toggleId("120");
}function toggle121()
{
  toggleId("121");
}function toggle122()
{
  toggleId("122");
}function toggle123()
{
  toggleId("123");
}function toggle124()
{
  toggleId("124");
}function toggle125()
{
  toggleId("125");
}function toggle126()
{
  toggleId("126");
}function toggle127()
{
  toggleId("127");
}function toggle128()
{
  toggleId("128");
}function toggle129()
{
  toggleId("129");
}function toggle130()
{
  toggleId("130");
}function toggle131()
{
  toggleId("131");
}function toggle132()
{
  toggleId("132");
}function toggle133()
{
  toggleId("133");
}function toggle133()
{
  toggleId("133");
}function toggle134()
{
  toggleId("134");
}function toggle135()
{
  toggleId("135");
}function toggle136()
{
  toggleId("136");
}function toggle137()
{
  toggleId("137");
}function toggle138()
{
  toggleId("138");
}function toggle139()
{
  toggleId("139");
}function toggle140()
{
  toggleId("140");
}function toggle141()
{
  toggleId("141");
}function toggle142()
{
  toggleId("142");
}function toggle143()
{
  toggleId("143");
}function toggle144()
{
  toggleId("144");
}function toggle145()
{
  toggleId("145");
}function toggle146()
{
  toggleId("146");
}function toggle147()
{
  toggleId("147");
}function toggle148()
{
  toggleId("148");
}function toggle149()
{
  toggleId("149");
}function toggle150()
{
  toggleId("150");
}function toggleId(id)
{
  var div = document.getElementById(id);
  if(div.style.display == "none")
    div.style.display = "block";
  else
    div.style.display = "none";
}

