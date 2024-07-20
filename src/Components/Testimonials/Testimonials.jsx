import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{

    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref = {slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="" />
                <div>
                  <h3>Willian Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to purse my degree at Edusity was one of 
              the best decesions I've ever made. The supportive 
              community, state-of-the-art facilitis, and commitment 
              to academic excellence have truley exceedes my expectations</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="" />
                <div>
                  <h3>Willian Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to purse my degree at Edusity was one of 
              the best decesions I've ever made. The supportive 
              community, state-of-the-art facilitis, and commitment 
              to academic excellence have truley exceedes my expectations</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="" />
                <div>
                  <h3>Willian Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to purse my degree at Edusity was one of 
              the best decesions I've ever made. The supportive 
              community, state-of-the-art facilitis, and commitment 
              to academic excellence have truley exceedes my expectations</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="" />
                <div>
                  <h3>Willian Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to purse my degree at Edusity was one of 
              the best decesions I've ever made. The supportive 
              community, state-of-the-art facilitis, and commitment 
              to academic excellence have truley exceedes my expectations</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials