// aqcuiring dom elements
const cityName = document.getElementById('input')

// function to be called when "Get Weather" button is clicked
function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=98449fd177033a44e594241446ca15bf`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const image = document.getElementById("image").src = " http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png"
        console.log(image)
        const description = data.list[0].weather[0].description
        console.log(description)
        const Temp = Number(data.list[0].main.temp - 273.15).toFixed(1) + "°"
        console.log(Temp)
        const minTemp = Number(data.list[0].main.temp_min - 273.15).toFixed(1) + "°"
        console.log(minTemp)
        const maxTemp = Number(data.list[0].main.temp_max - 273.15).toFixed(1) + "°"
        console.log(maxTemp)
        
        // this function appends the data into html fields
        const fetchedData = [cityName, image, description, Temp, minTemp, maxTemp]
        appendFunction(fetchedData)
    })
 
}   
 
appendFunction = (fetchedData) =>{
     const Name = fetchedData[0]
     const cityNameDiv = document.createElement('p')
     cityNameDiv.innerHTML = "Name of the City: "+Name.value

    const descriptionDiv = document.createElement('p')
    descriptionDiv.innerHTML = "Description of Weather: "+fetchedData[2]

    const tempDiv = document.createElement('p')
    tempDiv.innerHTML = "Current Temperature :"+fetchedData[3]
    
    const minTempDiv = document.createElement('p')
    minTempDiv.innerHTML = "Expected minimum temperature: "+fetchedData[4]
    
    const maxTempDiv = document.createElement('P')
    maxTempDiv.innerHTML = "Expected maximum temperature: "+fetchedData[5]
    
    // appending elements
    document.getElementById('name-of-city').appendChild(cityNameDiv)
    document.getElementById('desc-of-temp').appendChild(descriptionDiv)
    document.getElementById('temp').appendChild(tempDiv)
    document.getElementById('temp-min').appendChild(minTempDiv)
    document.getElementById('temp-max').appendChild(maxTempDiv)
   
}
