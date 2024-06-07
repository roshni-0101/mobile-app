let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1509868918748-a554ad25f858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "roshu",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Writer and music lover exploring the world through words and melodies. Sharing my journey in writing and discovering new tunes. Passionate about storytelling and creating memorable experiences. 📧    ",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 3,
    location: "Pune, India",
    name: "Shivika",
    age: 25,
    interests: [
      {
        icon: `<i class="ri-brush-fill"></i>`,
        interest: "Painting",
      },
      {
       icon: `<i class="ri-music-2-fill"></i>`,
       interest: "Music",
      },
    ],
    bio: "Painter sharing my artistic journey through colors and canvases. Follow for a splash of inspiration and creativity. Join me in exploring the world of art! 🎨  ",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 8,
    location: "Bangalore, India",
    name: "vani",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-football-fill"></i>`,
        interest: "Sport",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "Sports enthusiast and athlete sharing my journey on and off the field. Passionate about fitness, competition, and teamwork. Follow for training tips, game highlights, and inspiration. 🏅 ",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1586770802838-e524ec9018a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1554350342-84cbb65fd7c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D ",
    pendingMessage: 10,
    location: "Delhi, India",
    name: "Avinya",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-phone-camera-fill"></i>`,
        interest: "Photography",
      },
      {
        icon: `<i class="ri-plane-fill"></i>`,
        interest: "Travelling",
      },
    ],
    bio: "Travel photographer capturing the world's beauty through my lens. Sharing adventures and stunning visuals from around the globe. Passionate about exploring new places and cultures. 🌍📷 ",
    isFriend: null,
  },
];
function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating  = false; 

function setData(index){
  select(".proImg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;
  let clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}
        <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
      </div>`;
  });
  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[index].bio;

}

(function setInitial() {
  select(".mainCard img").src = users[curr].displayPic;
  select(".incomingCard img").src = users[curr + 1]?.displayPic

  setData(curr);
  curr = 2;
})();

function imgChange() {
  if(!isAnimating){ 
    isAnimating = true;
  let tl = gsap.timeline({
    onComplete: function () {
      isAnimating = false;
      let main = select(".mainCard");
      let incoming = select(".incomingCard");

      incoming.classList.remove("z-[2]");
      incoming.classList.add("z-[3]");
      incoming.classList.remove("incomingCard");

      main.classList.remove("z-[3]");
      main.classList.add("z-[2]");
     
      gsap.set(main,{
        scale:1,
        opacity:1
      });


      if(curr === users.length)  curr = 0;
      select(".mainCard img").src = users[curr].displayPic;
      curr++;

      main.classList.remove("mainCard");
      incoming.classList.add("mainCard");
      main.classList.add("incomingCard");

    },
  });

  tl.to(
    ".mainCard",
    {
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: 0.9,
    },
    "a" )
  .from(
    ".incomingCard",
    {
      scale: 0.9,
      opacity: 0,
      ease: Circ,
      duration: 1.1,
    },
    "a" )
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imgChange();
  setData(curr-1)
  gsap.from(".details .element" ,{
    y:"100%",
    stagger:.06,
    ease:Power4.easeInOut,
    duration:1.5
}) 

});

accept.addEventListener("click", function () {
  imgChange();
  setData(curr-1)
  gsap.from(".details .element" ,{
    y:"100%",
    stagger:.06,
    ease:Power4.easeInOut,
    duration:1.5
}) 

});


(
  function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
      let div = document.createElement("div");
      div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
      div.appendChild(element);
      select(".details").appendChild(div);
  
    })
  }
)();
 












