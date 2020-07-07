// import React from 'react'
// import FadeIn from 'react-fade-in'
// import Lottie from 'react-lottie'
// import ReactLoading from 'react-loading'
// import 'bootstrap/dist/css/bootstrap.css'
// import axios from 'axios'

// export default class Loading extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       done: undefined
//     }
//   }

//   componentDidMount () {
//     setTimeout(() => {
//       axios
//         .get('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(json => this.setState({ done: true }))
//     }, 1200)
//   }

//   render () {
//     return (
//       <div>
//         {!this.state.done ? (
//           <ReactLoading type='bars' color='white' />
//         ) : (
//           <h1>hello world</h1>
//         )}
//       </div>
//     )
//   }
// }
