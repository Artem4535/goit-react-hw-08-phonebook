import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageRegister from 'Page/PageRegister';
import PageLogin from 'Page/PageLogin';
import PageContacts from 'Page/PageContacts';
import HomePage from 'Page/HomePage';
import { getUserIsRefresh } from 'redux/auth/selectors';
import { refreshUserData } from 'redux/auth/operation';
import PrivateRout from './PrivateRout';
import PublicRoute from './PublicRoute';

export function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getUserIsRefresh);
  console.log('isRefreshingUser:', isRefreshingUser);

  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch]);

  return (
    <>
      {!isRefreshingUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <PublicRoute component={<PageLogin />} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={<PublicRoute component={<PageRegister />} />}
            />
            <Route
              path="contacts"
              element={
                <PrivateRout component={<PageContacts />} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
      {/* <Section>
        <FormHandler />
      </Section>
      <Section>
        <Filter />
        {loadingStatus && !error && <b>Request in progress...</b>}
        <Contacts title={'Contacts'} />
      </Section> */}
    </>
  );
}
