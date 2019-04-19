// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `

})

const containerb = document.querySelector("#myWishList")

document.querySelector("#thingPlace").addEventListener("click", event => {
    const toy = document.querySelector("#thing").value
    const store = document.querySelector("#place").value
    if (toy===""&&store==="") {
        alert("Hey dude, you didn't fill out either of these out.")
    } else if  (toy==="") {
        alert(`I'm sorry, what can I get at ${store}`) 
    } else if  (store === "") {
        alert(`Where the fuck can I get a ${toy}?`)
    }
     else {
    containerb.innerHTML = ""

    containerb.innerHTML +=`
    <article>
        <h2>Dude I really love the ${toy}s you can get at ${store}.</h2>
    </article>
    `
}})