function customRender(reactElement,container){

    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)

    */
   
    /*
    The propblem in uppercode is that agar props ke andar bohot sare element hote to,
     kya ham har time setAttribute krte har element ke liye. Nhi
     so ham loop chla dege and key pass krdenge [prop] , wo 1,2,3,...... increase hoti rhegi aur attribute set hota rhega
     */


   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
        if(prop==="children") continue;

        domElement.setAttribute(prop,reactElement.props[prop])

   }
    container.appendChild(domElement)


}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

