let btnE1 = document.querySelector('button')
let emoji = document.querySelectorAll(".emoji")
let containerE1 = document.getElementById("containers")

let selectedrating = "";


emoji.forEach((Allemoji) =>{
    Allemoji.addEventListener('click', (event)=>{
        // console.log(event.target.innerText || event.target.parentNode.innerText);
        selectedrating = event.target.innerText || event.target.parentNode.innerText

        emoji.forEach((item)=>{
            item.classList.remove('active')
        })
        Allemoji.classList.add('active')
    })
})

btnE1.addEventListener('click',()=>{
    if (selectedrating !== "") {
        containerE1.innerHTML = `<strong>Thank You !</strong>
        <h3>Feedback : ${selectedrating}</h3>
        <p>we'll use your feedback to improve our customer support.</p>`
    }else{
        containerE1.innerHTML = `<h5>Sorry U Don't have choose any feedback. please choose it !</h5>`
    }
})