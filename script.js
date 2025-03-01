const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const genertateJoke = async () => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEL.innerHTML = data.joke

}

// const genertateJoke=()=>{
//     const config={
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com',config)
//     .then(res=>res.json())
//     .then(data=>{
//         jokeEL.innerHTML=data.joke
//     })

// }
jokeBtn.addEventListener('click', genertateJoke)
genertateJoke()