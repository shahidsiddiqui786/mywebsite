/// progress bar simulation
const wd = [100,70,90,70,80,60,90,60]

const array = document.getElementsByClassName('progressCustom')

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let e = 0.1
    let w= wd[i]

    setInterval(()=> {
        const comStyle1 = getComputedStyle(element)
        const width = parseFloat(comStyle1.getPropertyValue('--width')) || 0
        element.style.setProperty('--width', w > width ? width + e : width)
    }, 5)
}



// const githubApiUrl = "https://api.github.com/repos/shahidsiddiqui786/mywebsite/contents/assets"
// const imgUrl = "https://api.github.com/repos/shahidsiddiqui786/mywebsite/contents/assets/img"
const projectUrl = "https://api.github.com/repos/shahidsiddiqui786/mywebsite/contents/assets/projects"


let pro_list = document.getElementById('projects-list')
let y

fetch(projectUrl)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.forEach(ele => {
          fetch(ele.download_url)
          .then((res) => res.json())
          .then((projectInfo) => {
            console.log(projectInfo)
            y = '<div class="pad col-lg-6 col-12"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src=" ' +
            projectInfo.imageurl.src +
            '" alt="Avatar" class="img-modify" ></div><div class="flip-card-back"><h1>'+ 
            projectInfo.name + 
                '</h1><p>' +
                projectInfo.about +
                '</p></div></div></div><div class="pro-button"><a href="' +
                projectInfo.source +
                '" target="_blank" role="button" class="btn btn-primary">View Code</a><a href="' +
                projectInfo.webPage +
                '" target="_blank" role="button" class="btn btn-primary">Website</a></div></div>'
                pro_list.innerHTML += y
          })
        })
    })
    .catch((err) => {
       console.log(err)
    })
  
