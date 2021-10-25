import React from 'react';
import fire from './config/fire';
/*
logout() 
{

}
*/
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>You are Logged in.!</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;