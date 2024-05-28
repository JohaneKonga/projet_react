import React, { useEffect, useState } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import AuthLayout from 'layouts/auth';
// import isAuth from 'helper/isAuth';
import { connect } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login.page';

const App = ({ userAuth }) => {
  // const [authenticate, setAuthenticate] = useState(false)

  // useEffect(() => {
  //   setAuthenticate(isAuth());
  // }, [userAuth]);

  return (
    <HashRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* {authenticate ? ( */}
      <Switch>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Redirect from='/' to='/admin/dashboard' /> */}
      </Switch>
             {/* ) : ( */}
                 {/* <Switch>
                     <Route exact path="/auth/login" render={(props) => <AuthLayout {...props} />} />
                     <Redirect to="/auth/login" />
                 </Switch> */}
      {/* )} */}
    </HashRouter>
  )
}

const mapStateToProps = ({ LoginReducer }) => ({
  // userAuth: LoginReducer.userAuth,
  // loading: LoginReducer.loading,
  // error: LoginReducer.error,
});

export default connect(mapStateToProps)(App);
