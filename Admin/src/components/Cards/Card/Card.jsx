import React from 'react'
import {RiLuggageDepositFill} from 'react-icons/ri'
import {FiDollarSign} from 'react-icons/fi'
import {BsPeopleFill,BsThreeDots} from 'react-icons/bs'
import { AiOutlineArrowUp,AiOutlineArrowDown } from 'react-icons/ai';

import './Card.css'

const Card = ({card}) => {
  return (
    <div className='Card-container'>
        <div className='Card-container-up'>
          <h2>{card.title}</h2>
          <BsThreeDots />
        </div>
        <div className='Card-container-middle'>
          {card.id === 1 ? 
          <div className='deposit'>
            <RiLuggageDepositFill />
          </div> 
          : card.id === 2 ?
          <div className='interest'>
            <FiDollarSign /> 
          </div>
          : <div className='clients'>
            <BsPeopleFill />
          </div> }
          <div className='card-amount-container'>
            <h2>{card.amount}</h2>
            <div>
              {(card.amount/card.lastIncome).toFixed(2)} %
              <div className='arrow-container'>
                {(card.amount/card.lastIncome).toFixed(2) > 1 ? 
                <span className='increase'>
                  <AiOutlineArrowUp />
                  <span>Increase</span>
                </span> : 
                <span className='decrease'>
                  <AiOutlineArrowDown />
                  <span>Decrease</span>
                </span>}
                </div>
            </div>
          </div>
        </div>
        <span className='Card-container-bottom'>Pendant ce mois-ci.</span>
    </div>
  )
}

export default Card