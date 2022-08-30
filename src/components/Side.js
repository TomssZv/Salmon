import React, { useEffect } from 'react'
import '../Components.css';

function Side(props) {

    function handleClick() {
        if (props.ide === 1 || props.ide === 2) {
            document.getElementById(eval(4)).scrollIntoView()
        } else if (props.ide === 3 || props.ide === 4) {
            document.getElementById(eval(1)).scrollIntoView()
        }
        
        
    }

    let clas = props.title.toLowerCase() + ' ' + props.side + ' ' + 'cont'
    const left = props.left;
    const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
        </svg>;
    const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
        </svg>;


  return (
    <div id={props.ide} className={clas}>
        <button className='nav-side' onClick={handleClick}>
            {left ? (
                leftIcon
            ) : (
                rightIcon
            )}
        </button>
        <h1>{props.title}</h1>
        <div className='images'>
            <div className='image-cont first'>
                <img src={props.im1}></img>
            </div>
            <div className='image-cont second'>
                <img src={props.im2}></img>
            </div>
            <div className='image-cont third'>
                <img src={props.im3}></img>
            </div>
        </div>
        <p className='text t1'>{props.text1}</p>
        <p className='text t2'>{props.text2}</p>
        <p className='text t3'>{props.text3}</p>
    </div>
  )
}

export default Side