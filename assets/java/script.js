let locationKnow = [
    {
      name: "Dublin Airport",
      image: "assets/images/DUB.jpg",
      location: [" Dublin Southside", "Dublin Centre", "Dublin Airport", "Dublin West"],
    },
    {
      name: "Glasnevin Cemetery",
      image: "assets/images/Glasnevin.jpg",
      location: ["Kilmainham Gaol", "Glasnevin Cemetery", "Dublin Castle", "St. Patrick`s Cathedral"],
    },
    {
        name: "Kilmainham Gaol",
        image: "assets/images/Gaol.jpg",
        location: ["St. Patrick`s Cathedral", "Kilmainham Gaol", "Temple Bar", "Dublin Castle"],
      },
    {
      name: "Guinness Storehouse",
      image: "assets/images/Guinness.jpg",
      location: ["Dublin Castle", "Guinness Storehouse","Trinity College", "Temple Bar"],
    },
    {
        name: "Dublin Castle",
        image: "assets/images/Castle.jpg",
        location: ["St. Patrick`s Cathedral", "Dublin Castle", "Temple Bar", "Kilmainham Gaol"],
    },
    {
        name: "Botanic Gardens",
        image: "assets/images/Botanic.jpg",
        location: ["Kilmainham Gaol", "Temple Bar", "Botanic Gardens", "St. Patrick`s Cathedral"],
      },
    {
        name: "St. Patrick`s Cathedral",
        image: "assets/images/StPatrick.jpg",
        location: ["Guinness Storehouse", "Dublin Castle", "St. Patrick`s Cathedral" ,"Trinity College"],
    },
    {
        name: "Trinity College",
        image: "assets/images/Trinity.jpg",
        location: ["Trinity College", "Temple Bar", "Guinness Storehouse", "Kilmainham Gaol"],
    },
    {
        name: "Jameson Distillery",
        image: "assets/images/Jameson.jpg",
        location: ["Kilmainham Gaol", "Jameson Distillery", "Dublin Castle", "St. Patrick`s Cathedral"],
      },
    {
        name: "Temple Bar",
        image: "assets/images/Tbar.jpg",
        location: ["Temple Bar", "Trinity College", "Kilmainham Gaol", "Guinness Storehouse"],
    },
  ];


  function bookDublin(name) {

    let div = document.getElementById("div-location");
    div.innerHTML += `
      <button class="guess-option" onclick="clickIt('${name}')">
          ${name}
      </button>`;
}


let gameArea = document.getElementById("check-dublin");

function correct(){
    gameArea.style.backgroundColor = "rgba(96, 255, 199, 1)";
    alert("That's RIGHT!")
  }

function wrong(){
    gameArea.style.backgroundColor = "rgba(255, 166, 164, 1)";
    alert("That's WRONG!")

  }

function addGood() {

    let yourScor = parseInt(document.getElementById("marked").innerText);
    document.getElementById("marked").innerText = ++yourScor;
    

}


function addWrong() {

    let yourScor = parseInt(document.getElementById("un-marked").innerText);
    document.getElementById("un-marked").innerText = ++yourScor;
   
    
}

let i = 0;
let road = 0;


  function whichImg() {
    let city = locationKnow[i];
    let image = document.getElementById("dublin-image-center");
    image.setAttribute('src', city.image);
    console.log(image.getAttribute("src"));
  
    let divLocation = document.getElementById("div-location");
    divLocation.innerHTML = "";
  
    city.location.forEach((option) => {
        bookDublin(option);
    });
  }
  
  function clickIt(option) {
    let city = locationKnow[i];
    let goodAnswer = city.name === option;
    if (goodAnswer) {
      i++;
      road++;
        correct();
        addGood();
        whichImg();
    } else {
        wrong();
        addWrong();
    }
}
whichImg();