var form = document.getElementById('form')

form.addEventListener('submit', (error) => {

	error.preventDefault()

var name = document.getElementById('name').value
var body = document.getElementById('body').value
var password = document.getElementById('password').value
var number = document.getElementById('number').value

//fetch post request
fetch("https://jsonplaceholder.typicode.com/users", {
method:'POST',
body:JSON.stringify({
	title:name,
	body:body,
	password:password,
	number:number
}),
headers:{
	'Content-type':'application/json; charset=UTF-8',
},
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((e)=>console.log(e))
})



	// var results = document.getElementById('results')

	// results.innerHTML = `<p>the title is ${data.title}<p>
	// <p>the body is ${data.body}<p>

	// `


	