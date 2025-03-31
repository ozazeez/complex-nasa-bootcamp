// https://openweathermap.org/current
let getInfo = document.querySelector('button').addEventListener('click', getTemperature)
function getTemperature() {
    fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for(let i = 0; i <= 10; i++ ){
                const col = document.createElement('tr')
                col.innerHTML = `<td>${data[i].city}</td>
                <td>${data[i].center}</td>`
                document.querySelector('table').appendChild('col')
                
                    
            }
            })
                .catch(err => {
                    console.log(`error ${err}`)
                })
        
}

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9cecef43acb52d2de11ead743237c55a`)
//                     .then(res => res.json())
//                     .then(data =>
//                         data.array.forEach(element => {

//                         }))
