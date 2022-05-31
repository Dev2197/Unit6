// Initialize and add the map
function initMap() {
    
    const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {lat:28.7041, lng:77.1025},
          });

          google.maps.event.addListener(map,"click",
           function(event)
           {
               addmaker(event.latLng)
               console.log(event.latLng.lat(),event.latLng.lng())
           }
          )
    
    
    addmaker({ lat: 17.3850, lng: 78.4867 })
    addmaker({ lat: 19.0760, lng: 72.8777 })
    addmaker({ lat: 22.5726, lng: 88.3639 })
    // addmaker({ lat: 12.9716, lng: 77.5946 })
    // addmaker({ lat: 28.7041, lng: 77.1025 })
    function addmaker(coordinates)
    {
        
        const marker = new google.maps.Marker({
            position: coordinates,
            map: map,
          });
    }


  }
  
  window.initMap = initMap;