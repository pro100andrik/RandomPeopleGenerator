import React from 'react';
import UserInfo from './components/UserInfo';
import UserInfoPlaseholder from './components/UserInfoPlaseholder';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = ({
      user: null,
      isLoading: false,
      errorMessage: null
    })
  }

  generateNewPerson = () => {
    this.setState ({
      isLoading: true,
      errorMessage: null
    })

    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(newUser => {
        console.log(newUser.results[0])
        this.setState({
          user: newUser.results[0],
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          errorMessage: err
        })
        console.log(err)});
  }


  render(){
    return(
      <div className='main-wrapper'>
        <div className='main-container'>

          <div className='tittle-and-controlls'>
            <div> Welcome to "Random People Generator" </div>
            <div> To start generation press button "Generate" </div>
            <button onClick={this.generateNewPerson}> Generate </button>
          </div>

        <div className='user-info'>
          {this.state.user === null
            ?
            this.state.isLoading
              ?
            null
              :
            'No user generated yet'
            :
          this.state.isLoading
            ?
          <UserInfoPlaseholder />
            :
          <UserInfo user={this.state.user}/>
        }

          {/* {this.state.isLoading ? 'loading' : null} */}

        </div>

        </div>
      </div>
    )
  }
}

export default App;
