import { useEffect, useState } from 'react';
import Side from '../components/Side';
import '../Components.css';

function SideStart() {
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/cardinfo")
          .then((res) => res.json())
          .then((data) => {
              setCardInfo(data);
          })
    }, [])

  return (
    <div>
        <div className='container'>
            {cardInfo && cardInfo.map((dat) => {
            return (
                <Side
                 key={dat.id}
                 ide={dat.id}
                 title={dat.title}
                 text1={dat.text1}
                 text2={dat.text2}
                 text3={dat.text3}
                 im1={dat.image1}
                 im2={dat.image2}
                 im3={dat.image3}
                 side={dat.side}
                 left={dat.left}/>
            )
            })}
        </div>
    </div>
  )
}

export default SideStart