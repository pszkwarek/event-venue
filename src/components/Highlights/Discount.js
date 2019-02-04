import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton'

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={() => this.percentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          
          <Slide right>
            <div className="discount">
              <h3>Purchase tickets before April 4th</h3>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

              <MyButton 
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
             
            </div>
          </Slide>
          
        </div>
      </div>
    )
  }
}

export default Discount;

