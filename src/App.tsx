import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import cityapi from 'api/cityApi';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRoute } from 'components/Common';
import { useAppDispatch } from 'app/hooks';
import { Button } from '@material-ui/core';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    cityapi.getAll().then((response) => console.log(response.data));
  });
  return (
    <div>
      <Button onClick={() => dispatch(authActions.logout())} variant="contained" color="primary">
        Log out
      </Button>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
