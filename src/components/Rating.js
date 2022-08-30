import React from 'react'
import { FaStarHalf, FaStar} from 'react-icons/fa'

const Rating = ({value, text, color}) => {

    if(value === 5){
        return(<div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <span>{text}</span>
        </div>) 
    }
    if(value >= 4.5){
        return(<div><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/> <span>{text}</span>
        </div>) 
    }
    if(value === 4){
        return(<div><FaStar/><FaStar/><FaStar/><FaStar/> <span>{text}</span>
        </div>) 
    }
    if(value >= 3.5){
        return(<div><FaStar/><FaStar/><FaStar/><FaStarHalf/> <span>{text}</span>
        </div>) 
    }
    if(value === 3){
        return(<div><FaStar/><FaStar/><FaStar/> <span>{text}</span>
        </div>) 
    }
    if(value >= 2.5){
        return(<div><FaStar/><FaStar/><FaStarHalf/> <span>{text}</span>
        </div>) 
    }
    if(value === 2){
        return(<div><FaStar/><FaStar/> <span>{text}</span>
        </div>) 
    }
    if(value >= 1.5){
        return(<div><FaStar/><FaStarHalf/> <span>{text}</span>
        </div>) 
    }
    if(value === 1){
        return(<div><FaStar/> <span>{text}</span>
        </div>) 
    }
    return (
        <div className='rating'>
        </div>
    )
}

export default Rating