import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h2>Gameplay Modes</h2>
      <h5>In the Dungeon Mode, players can send Heroes to the dungeons and have them battle monsters and bosses to claim Theerinium Coin (THED coins).</h5>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mirage of infinity</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>An infinite dungeon where Theringars can battle endlessly at the cost of stamina. Stamina refills overtime or with stamina potions</p>
            </li>

          </ul>
        </article>
{/* Webdev */}
        <article className="service">
          <div className="service__head">
            <h3>Story Mode</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>To fight against the newly awakened ancient demon, Theringars take up arms and take the fight to the dungeons of chaos. The game tells a story of this conflict across 5 dungeons and 2 realms.</p>
            </li>

          </ul>
        </article>
{/* Other */}
        <article className="service">
          <div className="service__head">
            <h3>the pit of might and sorrow(PVP):</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>A realm unbeknownst to mens consciousness where theringars can engage in 1VS1 duels and climb the ranks to glory, … and maybe uncover the mysteries of this god-forsaken place.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services