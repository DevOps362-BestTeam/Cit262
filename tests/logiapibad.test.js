import fetch from 'node-fetch';

it ("should get login token", async () => {//assync allows us to read from the database by moving on and come back

    const loginResponse = await fetch('https://dev.stedi.me/login', { //await fetch allows it move on while getting the data 

        method:'POST', //method : POST says to give information to the server
        headers:{
        'content-type':'application/text'
        },

        body:JSON.stringify({//makes the following into JSON text to be read by the server
            "userName": "may21011@byui.edu",// intentionally gave a wrong email so it would give a wrong access
            "password": "completejunk"
        })
    })
    expect(loginResponse.status).toBe(401); //means authorized
    

})