import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Original works by Elizabeth Coxon</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/skeleton.jpeg'
              text='A study in perspective and on the skeleton'
              label='Skeleton - 2024'
              path='/gallery/skeleton'
            />
            <CardItem
              src='images/muscle.jpeg'
              text='Anatomy practice of the muscles'
              label='Muscle - 2024'
              path='/gallery/muscle'
            />
            <CardItem
              src='images/torsoStudy.jpeg'
              text='A study of the torso in a baroque style'
              label='Torso - 2024'
              path='/gallery/torso'
            />
            <CardItem
              src='images/handStudy.jpeg'
              text='A small study of the hand'
              label='Hand - 2021'
              path='/gallery/hand'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/berryStudy.jpeg'
              text='A study of berries'
              label='Berry - 2021'
              path='/gallery/berry'
            />
            <CardItem
              src='images/plantStudy.jpeg'
              text='A appreciation for the form of plants'
              label='Plant - 2021'
              path='/gallery/plant'
            />
            <CardItem
              src='images/thistleStudy.jpeg'
              text='A study of thistles'
              label='Thistle - 2021'
              path='/gallery/thistle'
            />
            </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/distort.jpeg'
              text='An experiment in samoiloff animation'
              label='Distort - 2024'
              path='/gallery/distort'
            />
            <CardItem
              src='images/handPrint1.jpeg'
              text='Hand print'
              label='Hand Blue - 2024'
              path='/gallery/handprintblue'
            />
            <CardItem
              src='images/handPrint2.jpeg'
              text='Hand print'
              label='Hand Pink - 2024'
              path='/gallery/handprintpink'
            />
            <CardItem
              src='images/handPrint3.jpeg'
              text='Hand print'
              label='Hand Yellow - 2024'
              path='/gallery/handprintyellow'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/allEyesOnYou.jpeg'
              text='A three technique printed study of mental state'
              label='All eyes on you - 2022'
              path='/gallery/alleyesonyou'
            />
            <CardItem
              src='images/allInYourHead.jpeg'
              text='An exploration of insanity'
              label='All in your head - 2021'
              path='/gallery/allInYourHead'
            />
            <CardItem
              src='images/lostMyself.jpeg'
              text='An exploration of disembodied thoughts'
              label='I seem to of lost myself- 2022'
              path='/gallery/lostmyself'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/limbs.jpeg'
              text='An appreciation for the human form'
              label='Limbs - 2023'
              path='/gallery/limbs'
            />
            <CardItem
              src='images/blue.jpeg'
              text='An exploration of the human form'
              label='Blue - 2023'
              path='/gallery/blue'
            />
            <CardItem
              src='images/blueAndRed.jpeg'
              text='An exploration of the human form'
              label='Blue and red - 2023'
              path='/gallery/blueandred'
            />
            <CardItem
              src='images/blueAndOrange.jpeg'
              text='An exploration of the human form'
              label='Blue and orange - 2020'
              path='/gallery/blueandorange'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/openHearted.jpeg'
              text='What love really feels like'
              label='Open hearted - 2020'
              path='/gallery/openhearted'
            />
            <CardItem
              src='images/cityScape.jpeg'
              text='The feeling of a city captured'
              label='City scape - 2021'
              path='/gallery/cityscape'
            />
            <CardItem
              src='images/welcomeHome.jpeg'
              text='How inviting the dark spaces can be'
              label='Welcome home - 2020'
              path='/gallery/welcomehome'
            />
            <CardItem
              src='images/slipped.jpeg'
              text='I slipped'
              label='slipped - 2020'
              path='/gallery/slipped'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/experiment1.jpeg'
              text='How it feels to be seen'
              label='Experiment 1 - 2021'
              path='/gallery/experientone'
            />
            <CardItem
              src='images/experiment2.jpeg'
              text='How it feels to be seen'
              label='Experiment 2 - 2021'
              path='/gallery/experienttwo'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
