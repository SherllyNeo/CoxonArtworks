import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC bits of work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/skeleton.jpeg'
              text='Anatomy Practice'
              label='Skeletal anatomy'
              path='/gallery/skeleton'
            />
            <CardItem
              src='/images/muscle.jpeg'
              text='Anatomy practice of the muscles'
              label='Muscular anatomy'
              path='/gallery'
            />
            <CardItem
              src='/images/muscle.jpeg'
              text='Anatomy practice of the muscles'
              label='Muscular anatomy'
              path='/gallery'
            />
            <CardItem
              src='/images/muscle.jpeg'
              text='Anatomy practice of the muscles'
              label='Muscular anatomy'
              path='/gallery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/cannibal.jpeg'
              text='Floating ody'
              label='The floating body'
              path='/gallery'
            />
            <CardItem
              src='/images/baroque.jpeg'
              text='Very good style'
              label='Baroque art'
              path='/gallery'
            />
            <CardItem
              src='/images/baroque.jpeg'
              text='Very good style'
              label='Baroque art'
              path='/gallery'
            />
            <CardItem
              src='/images/baroque.jpeg'
              text='Very good style'
              label='Baroque art'
              path='/gallery'
            />
            <CardItem
              src='/images/baroque.jpeg'
              text='Very good style'
              label='Baroque art'
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
