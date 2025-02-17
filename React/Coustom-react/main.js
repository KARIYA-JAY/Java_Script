function rander(ReactElement,root1){
    let el = document.createElement(ReactElement.type)
    el.innerHTML= ReactElement.childern
    el.setAttribute('href',ReactElement.props.href)
    root1.appendChild(el)
}

const ReactElement = {
    type : "a",
    props : { 
        href : "https://github.com/KARIYA-JAY",
    },
    childern: " hi it's my github Profile ."
}

const root1 = document.querySelector(".root")


rander(ReactElement,root1)