import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';
import Navigation from './components/Navigation';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <>
                    <Navigation />
                    <Box pt="60px">
                      <Counter />
                    </Box>
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/form"
              element={
                <PrivateRoute>
                  <>
                    <Navigation />
                    <Box pt="60px">
                      <UserForm />
                    </Box>
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/editor"
              element={
                <PrivateRoute>
                  <>
                    <Navigation />
                    <Box pt="60px">
                      <RichTextEditor />
                    </Box>
                  </>
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <>
                    <Navigation />
                    <Box pt="60px">
                      <Dashboard />
                    </Box>
                  </>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;