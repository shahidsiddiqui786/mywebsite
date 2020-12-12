const projects = [ "/group-chat-meet.json","/clock.json","/readbook.json","/portfolio.json","/covid-19.json"]
const projetsBaseUrl = "http://127.0.0.1:5500/assets/projects";

let y;
let pro_list = document.getElementById('projects-list');
function getUsersArray() {
     projects.map((project) =>
      fetch(`${projetsBaseUrl + project}`)
        .then((res) => res.json())
        .then((data) => {
                y = '<div class="pad col-lg-6 col-12"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src=" ' +
                    data.imageurl.src +
                '" alt="Avatar" class="img-modify" ></div><div class="flip-card-back"><h1>'+ 
                    data.name + 
                    '</h1><p>' +
                    data.about +
                    '</p></div></div></div><div class="pro-button"><a href="' +
                    data.source +
                    '" target="_blank" role="button" class="btn btn-primary">View Code</a><a href="' +
                    data.webPage +
                    '" target="_blank" role="button" class="btn btn-primary">Website</a></div></div>'
                    pro_list.innerHTML += y
                })
        .catch((error) => console.log(error))
        .catch((error) => console.log(error))
    );
  }
  
  getUsersArray();
  