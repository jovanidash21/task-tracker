import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation/Index';
import Error from './Error/Index';
import Header from './Header/Index';
import Body from './Body/Index';
import Footer from './Footer/Index';

class App extends Component {
    render() {
        const { userDataFetch } = this.props;

        if (userDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled) {
            const [user] = userDataFetch.value;

            return(
                <div>
                    <Header user={user} />
                    <Body user={user} />
                    <Footer user={user} />
                </div>
            )
        }
    }
}

export default connect(() => {
    return {
        userDataFetch: `/api/user`
    }
})(App);