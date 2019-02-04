import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Ex mei duis iuvaret. Eam ne percipitur adversarium consequuntur, ea rebum accumsan suscipit sit, meis causae audire est id. Mea eruditi fastidii officiis cu. In dicat audire sit, est molestie appareat maiestatis ea.',
      'An iudico pertinacia vim, ius falli euismod ut, has sint vide ea. An mea deserunt expetendis eloquentiam, mea decore dicunt necessitatibus ea. Nam ei volutpat mnesarchum, mea inani forensibus ne, mel eu adhuc nominavi postulant.',
      'Cu est soleat dictas, mea nostro accumsan evertitur te, an sea modo utinam graece. No adhuc intellegat eam, mel equidem scaevola insolens eu. Ei esse persecuti sea, ne detracto platonem mei.'
    ],
    linkto: ['http://sales/b','http://sales/m', 'http://sales/s'],
    delay:[500, 0, 500]
  }

  showBoxes: = () => (
    this.state.prices.map =>((box, i) => (
      <Zoom delay={this.state.delay[i]} key=[i]>
        <div className='pricing_item'>
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton 
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))



  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_selection">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            boxes
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing;
