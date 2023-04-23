const crewMembers = [
    {
      "name": "Douglas Hurley",
      "png": "../starter-code/assets/crew/image-douglas-hurley.png",
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "png": "../starter-code/assets/crew/image-mark-shuttleworth.png",
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "png": "../starter-code/assets/crew/image-victor-glover.png",
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "png": "../starter-code/assets/crew/image-anousheh-ansari.png",
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ];

const memberTitle = document.querySelector('#member-title');
const memberName = document.querySelector('#member-name');
const memberDescription = document.querySelector('#member-description');
const memberImg = document.querySelector('.crew-member-img');
const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => {
    let indexOfIndicator = [...indicators].indexOf(indicator);
    
    indicator.addEventListener('click', () => {
      const AnimationElements = [memberTitle, memberName, memberDescription, memberImg];

      for(var i =0; i < AnimationElements.length; i++){
        AnimationElements[i].style.animation = 'none';
        AnimationElements[i].offsetHeight;
      }

      for(var i = 0; i < indicators.length; i++){
  
        indicators[i].classList.remove('active');
      }   

      indicator.classList.add('active');

      memberImg.src = crewMembers[indexOfIndicator].png;
      memberImg.addEventListener('load', () => {
        memberImg.style.animation = 'member 1.4s';
      });


      memberTitle.innerHTML = crewMembers[indexOfIndicator].role;
      memberTitle.style.animation = 'member-title 1.3s';
      
      memberName.innerHTML = crewMembers[indexOfIndicator].name;
      memberName.style.animation = 'member-name 1.4s';

      memberDescription.innerHTML = crewMembers[indexOfIndicator].bio;
      memberDescription.style.animation = 'member-text 1.5s';





    })
});