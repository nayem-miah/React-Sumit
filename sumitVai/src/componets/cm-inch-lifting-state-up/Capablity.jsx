import React, { Component } from 'react'

export default class Capablity extends Component {
  render() {

    const {result} = this.props;

    if ( result >= 165.1){

      return <h5>আপনি বাংলাদেশ সেনাবাহিনীতে যোগদানের জন্য আবেদন করতে পারবেন</h5>
  
    } else{
      return <h5>আপনি বাংলাদেশ সেনাবাহিনীতে যোগদানের জন্য আবেদন করতে পারবেন না</h5>
    }
  }
}






// //this function also works like the above class 

// import React from 'react'

// export default function Capablity({result}) {
 
//   if ( result >= 165.1){

//     return <h5>আপনি বাংলাদেশ সেনাবাহিনীতে যোগদানের জন্য আবেদন করতে পারবেন</h5>

//   } else{
//     return <h5>আপনি বাংলাদেশ সেনাবাহিনীতে যোগদানের জন্য আবেদন করতে পারবেন না</h5>
//   }

// }
