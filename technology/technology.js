const technology = [
    {
        "name": "Launch vehicle",
        "images": {
          "portrait": "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
          "landscape": "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      },
      {
        "name": "Spaceport",
        "images": {
          "portrait": "../starter-code/assets/technology/image-spaceport-portrait.jpg",
          "landscape": "../starter-code/assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
      {
        "name": "Space capsule",
        "images": {
          "portrait": "../starter-code/assets/technology/image-space-capsule-portrait.jpg",
          "landscape": "../starter-code/assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      }
  ]

const infoIndicators = document.querySelectorAll('.information-indicator');
const technologyName = document.querySelector('#technology-name');
const technologyDescription = document.querySelector('#technology-description');
const technologyInfo = document.querySelector('.technology-info');
const technologyImg = document.querySelector('.technology-img');

infoIndicators.forEach(indicator => {
    let indexOfIndicator = [...infoIndicators].indexOf(indicator);
    
    indicator.addEventListener('click', () => {
      const AnimationElements = [technologyImg, technologyInfo];

      for(var i =0; i < AnimationElements.length; i++){
        AnimationElements[i].style.animation = 'none';
        AnimationElements[i].offsetHeight;
      }

      for(var i = 0; i < infoIndicators.length; i++){
        infoIndicators[i].classList.remove('active');
      }   

      indicator.classList.add('active');

      if(window.screen.width > 1065) {
        technologyImg.style.backgroundImage = `url('${technology[indexOfIndicator].images.portrait}')`;
        technologyImg.addEventListener('load', () => {
          technologyImg.style.animation = 'techno-img 2s';
          technologyName.innerHTML = technology[indexOfIndicator].name;
          technologyInfo.style.animation = 'techno 2s';
        });
      } else {
        technologyImg.style.backgroundImage = `url('${technology[indexOfIndicator].images.landscape}')`;
        technologyImg.addEventListener('load', () => {
          technologyImg.style.animation = 'techno-img 2s';
          technologyName.innerHTML = technology[indexOfIndicator].name;
          technologyInfo.style.animation = 'techno 2s';
        });
      }

    })
});
