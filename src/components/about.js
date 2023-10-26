import React from "react"

function About (props){
const {
  aboutText = "I am excited to do this on react. React be good to me",
  imgSrc = "https://via.placeholder.com/215",
  imgText = "blog logo"
} = props

return(
<aside>
  <img src={imgSrc} alt = {imgText}/>
  <p>{aboutText}</p>
</aside>

)
}

export default About;