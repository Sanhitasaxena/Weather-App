// aqcuiring dom elements
const cityName = document.getElementById('input')
const container = document.getElementById('result')

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
        const Temp = Number(data.list[0].main.temp - 273.15).toFixed(1) + "°C"
        console.log(Temp)
        const minTemp = Number(data.list[0].main.temp_min - 273.15).toFixed(1) + "°C"
        console.log(minTemp)
        const maxTemp = Number(data.list[0].main.temp_max - 273.15).toFixed(1) + "°C"
        console.log(maxTemp)
        
        // this function appends the data into html fields
        const fetchedData = [cityName, image, description, Temp, minTemp, maxTemp]
        appendFunction(fetchedData)
    })
 
}   
 
appendFunction = (fetchedData) =>{
   
     clearFields()
     const Name = fetchedData[0]
     const cityNameDiv = document.createElement('p')
     cityNameDiv.innerHTML = "Name of the City: "+`<b>${Name.value}</b>`

    const descriptionDiv = document.createElement('p')
    descriptionDiv.innerHTML = "Description of Weather: "+`<b>${fetchedData[2]}</b>`

    const tempDiv = document.createElement('p')
    tempDiv.innerHTML = "Current Temperature :"+`<b>${fetchedData[3]}</b>`
    
    const minTempDiv = document.createElement('p')
    minTempDiv.innerHTML = "Expected minimum temperature: "+`<b>${fetchedData[4]}</b>`
    
    const maxTempDiv = document.createElement('P')
    maxTempDiv.innerHTML = "Expected maximum temperature: "+`<b>${fetchedData[5]}</b>`
    
    // appending elements
    document.getElementById('name-of-city').appendChild(cityNameDiv)
    document.getElementById('desc-of-temp').appendChild(descriptionDiv)
    document.getElementById('temp').appendChild(tempDiv)
    document.getElementById('temp-min').appendChild(minTempDiv)
    document.getElementById('temp-max').appendChild(maxTempDiv)
  
}

function clearFields(){
    document.getElementById('name-of-city').innerHTML = ''
    document.getElementById('desc-of-temp').innerHTML = ''
    document.getElementById('temp').innerHTML = ''
    document.getElementById('temp-min').innerHTML = ''
    document.getElementById('temp-max').innerHTML = ''
 
}
