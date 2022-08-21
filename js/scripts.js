//Write your pseduo code first! 
//Coding from Celsius to Fahrenheit
//Need the value in Celsius
//Convert value to Fahrenheit
//Input to DOM

document.querySelector('#convert').addEventListener('click', convert)


function convert(){
    const celTemp  = document.querySelector('input').value

    let newTemp = (celTemp * 9/5) + 32 
    if( newTemp <= 58){
        document.querySelector('h2').innerText = `${newTemp}℉`
        document.querySelector('p').innerText = `It's cold out. You should bundle up🧥🧤🧣.`
        // document.querySelector('body').style.background = 'rgba(82, 135, 196)'
        document.querySelector('body').style.background = 'url(https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.color = 'rgba(0,0,0,.8)'
    }else if(newTemp > 58 && newTemp <= 68){
        document.querySelector('h2').innerText = `${newTemp}℉`
        document.querySelector('p').innerText = `Some coffee☕ or hot chocolate🔥🍫, please!`
        // document.querySelector('body').style.background = 'rgba(1, 57, 121)'

        document.querySelector('body').style.background = 'url(https://images.unsplash.com/photo-1483536999439-9c9c911cc1a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.color = 'rgba(255, 107, 1)'
    }else if(newTemp > 68 && newTemp <= 85){
        document.querySelector('h2').innerText = `${newTemp}℉`
        document.querySelector('p').innerText = `This type of weather🌞makes it all better😎!`
        // document.querySelector('body').style.background = 'rgba(243, 255, 14)'
        // document.querySelector('body').style.color = '#fff'
        document.querySelector('body').style.background = 'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.color = 'rgba(95, 1, 141)'
    }else if(newTemp > 85 && newTemp <= 100){
        document.querySelector('h2').innerText = `${newTemp}℉`
        document.querySelector('p').innerText = `Find the nearest pool 🏊‍♀️😁.`
        // document.querySelector('body').style.background = 'rgba(222, 93, 0)'
        // document.querySelector('body').style.color = '#fff'
        document.querySelector('body').style.background = 'url(https://images.unsplash.com/photo-1506359585186-16ff29581308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9vbCUyMHBhcnR5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.color = 'rgba(10,10,10)'
    }else{
        document.querySelector('h2').innerText = `${newTemp}℉`
        document.querySelector('p').innerText = `Just pray you don't melt 🔥🔥🔥.`
        // document.querySelector('body').style.background = 'rgba(255, 20,20)'
        // document.querySelector('body').style.color = '#fff'
        document.querySelector('body').style.background = 'url(https://images.unsplash.com/photo-1504370805625-d32c54b16100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)'
        document.querySelector('body').style.backgroundRepeat = 'no-repeat'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.color = 'rgba(10,10,10)'
    }
}
