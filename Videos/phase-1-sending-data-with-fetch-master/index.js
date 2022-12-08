// Add your code here
const url= 'http://localhost:3000/users';

function submitData(name,email){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept':"application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
       .then(response => response.json())

       
       .then((Object)=>{document.body.innerHTML=Object["id"]})


       .catch(error=>{document.body.innerHTML= error.message});

}