//eleman ekleme fonksiyonu

function newElement() {
  var inputValue = document.querySelector("#task").value; //input id sine gidip value yü aldık
  var ulElementi = document.querySelector("#list"); //ul id si

  if (inputValue == "") {
    $(".error").toast("show");
    console.log("boş");
  } else if (inputValue.trim().length == 0) {
    // !inputValue.trim().length da diyebiliriz
    $(".abcd").toast("show"); //toast class ı >bootstrap de var javascript dönüşümü
    console.log("boşluklar içeriyor olmaz");
  } else {
    var liElementi = document.createElement("li"); //li oluşturduk
    eventListElement(liElementi)
    liElementi.innerHTML = inputValue; // li içini input a eşitledik  // liElementi.textContent de var
    ulElementi.appendChild(liElementi); //ul içine li yi ekledik
    liElementi.appendChild(createDeleteButton());
    resetInput();
    console.log("deger var ve sifirlandi");
    $(".success").toast("show");
    localStorage.setItem('inputValueKEY', inputValue);
  }
}


function resetInput() {
  document.querySelector("#task").value = "";
}

function createDeleteButton() {
  var img = new Image();
  img.src = "cross.jpg";
  img.width = 20;
  img.style = "float:right";
  img.addEventListener("click", function () {
    //butonun click eventi olsun, tıklandığında parent elementini silsin
    var deletedListElement = this.parentElement;
    deletedListElement.remove();
  });
  return img;
}

//mevcutta var olan list elemanları için click eventi
var crossElements = document.querySelectorAll("img");
crossElements.forEach(function (x) {
  x.addEventListener("click", function () {
    x.parentElement.remove();
  });
});

var listItems = document.querySelectorAll("li");

listItems.forEach(function (x) {
  x.addEventListener("click", function () {
    if (x.classList.contains("checked")) {
      x.classList.remove("checked");
    } else {
      x.classList.add("checked");
    }
  });
});


function eventListElement(liElementi)
{   
    liElementi.addEventListener('click', function(){
        if(liElementi.classList.contains('checked')){
            liElementi.classList.remove('checked');
        }
        else{
            liElementi.classList.add('checked');
        }
    })
    return liElementi;
} 
