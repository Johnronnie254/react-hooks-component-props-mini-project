import React from "react"

function Header (){
return (
    <Headerdetails name ="John Ronnie Blog"/>
)
}
function Headerdetails (prop){
    return <h1>{prop.name}</h1>
}

export default Header;