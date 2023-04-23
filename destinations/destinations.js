const destinations = [
    {
      "name": "Moon",
      "png": "../starter-code/assets/destination/image-moon.png",
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },

    {
      "name": "Mars",
      "png": "../starter-code/assets/destination/image-mars.png",
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! yeah, I was amazed too, it's one of the most beautiful planet!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },

    {
      "name": "Europa",
      "png": "../starter-code/assets/destination/image-europa.png",
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. what are you waiting for?",
      "distance": "628 mil. km",
      "travel": "3 years"
    },

    {
      "name": "Titan",
      "png": "../starter-code/assets/destination/image-titan.png",
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. is not that Amazing?",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ];

const locations = document.querySelectorAll('.locations h4');
const locationImg = document.querySelector('.destination-img');
const locationName = document.querySelector('#location-name');
const locationInfo = document.querySelector('#location-info');
const distanceStat = document.querySelector('.distance-stat')
const timeStat = document.querySelector('.time-stat')
const locationDistance = document.querySelector('#distance');
const locationTime = document.querySelector('#days');
const stats = document.querySelector('.stats');


locations.forEach(location => {
    let indexOfLocation = [...locations].indexOf(location);
    
    location.addEventListener('click', () => {
      const AnimationElements = [locationImg, locationName, locationInfo, locationDistance, locationTime, stats];

      for(var i =0; i < AnimationElements.length; i++){
        AnimationElements[i].style.animation = 'none';
        AnimationElements[i].offsetHeight;
      }

      for(var i = 0; i < locations.length; i++){
  
        locations[i].classList.remove('active');
      }   

      location.classList.add('active');

      locationImg.src = destinations[indexOfLocation].png;
      locationImg.addEventListener('load', () => {
        locationImg.style.animation = 'location 1s';
      });

      locationName.innerHTML = destinations[indexOfLocation].name;
      locationName.style.animation = 'location-name 1s';
      stats.style.animation = 'location-name 1.9s';

      locationInfo.innerHTML = destinations[indexOfLocation].description;
      locationInfo.style.animation = 'location-info 1.2s';
      
      locationDistance.innerHTML = destinations[indexOfLocation].distance;
      locationDistance.style.animation = 'distance-stat 1.3s';

      locationTime.innerHTML = destinations[indexOfLocation].travel;
      locationTime.style.animation = 'time-stat 1.4s';
    });
  }); 