import React from 'react'
import './home.css'
// import resume from '/Users/adesuwa/Desktop/my-react-app/react-portfolio/src/assest/Aiwerioghene_Adesuwa CV.pdf'

const Home = () => {
  return (
    <div className='introduction'>
      <h1 className='introduction_name'>Front-End Web Developer</h1>
      <p className='introduction-p'>Adesuwa Aiwerioghene</p>
      <p className='introduction-p'> Welcome to my Portfolio</p>
      {/* <a href='resume' > cv</a> */}
    </div>
  )
}

export default Home