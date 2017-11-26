//import React, { Component } from 'react';



//   class Popup extends React.Component {
//   render() {
//     return (
//       <div className='popup'>
//         <div className='popup_inner'>
//            <form>
//             <div className="form-group">
//               <h4>Email</h4>
//               <input type="email" placeholder="Enter Email Address" />
//             </div>
//             <div className="form-group">
//               <h4>Passward</h4>
//               <input type="password" className="form-control" />
//             </div>
//             <button className="btn btn-block" type="button" onClick={this.handleSubmit}>
//               Login
//             </button>
//           </form>
//         <button onClick={this.props.closePopup}>close me</button>
//         </div>
//       </div>
//     );
//   }
// }
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showPopup: false
//     };
//   }
//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }
//   render() {
//     return (
//       <div className='app'>
//         <button onClick={this.togglePopup.bind(this)}>Log In/ Sign Up</button>
//         {this.state.showPopup ? 
//           <Popup
//             text='Close Me'
//             closePopup={this.togglePopup.bind(this)}
//           />
//           : null
//         }
//       </div>
//     );
//   }
// };

import React, { Component } from 'react'

class Page extends Component {

  constructor (props) {
    super(props)
    this.state = { modalActive: false }
  }

  openModal = () => {
    this.setState({ modalActive: true })
  }

  closeModal = () => {
    this.setState({ modalActive: false })
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal}>Open modal</button>

        {this.state.modalActive && (
          <div className='modalDialog'>
            <a title='Close' onClick={this.closeModal}>X</a>
            <h2>Modal</h2>
            <p>This is a sample modal</p>
          </div>
        )}
      </div>
    )
  }
}


export default Page;