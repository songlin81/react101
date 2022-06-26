//import React, { PureComponent } from 'react';
import React from 'react';

// class Title extends React.Component{

//   // Option (1)
//   shouldComponentUpdate(nextProps, nextState){
//     return this.props.title !== nextProps.title
//   }
//   // end of Option (1)

//   render () {
//     console.log("From Title...");
//     return (
//       <div>
//         Title: {this.props.title}
//       </div>
//     )
//   }
// }

// Option (2)
// class Title extends PureComponent{
//   render () {
//     console.log("From Title...");
//     return (
//       <div>
//         Title: {this.props.title}
//       </div>
//     )
//   }
// }
// end of Option (2)

// Option (3)
const Title = React.memo((props) => {
    console.log("From Title...");
    return (
      <div>
        Title: {props.title}
      </div>
    )
})
// end of Option (3)

export default Title;