import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { LogIn } from 'lucide-react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser, setError } from '../store/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const auth = getAuth();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authFunction = isSignUp ? createUserWithEmailAndPassword : signInWithEmailAndPassword;
      const { user } = await authFunction(auth, email, password);
      
      dispatch(setUser({
        uid: user.uid,
        email: user.email || '',
      }));
      
      toast({
        title: isSignUp ? 'Account created.' : 'Login successful',
        status: 'success',
        duration: 3000,
      });
      
      navigate('/');
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(setError(errorMessage));
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
      <Box w="full" maxW="md" p={8} bg="white" borderRadius="lg" boxShadow="lg">
        <VStack spacing={6}>
          <LogIn size={48} strokeWidth={1.5} />
          <Heading size="lg">{isSignUp ? 'Create Account' : 'Welcome Back'}</Heading>
          
          <form onSubmit={handleAuth} style={{ width: '100%' }}>
            <VStack spacing={4} w="full">
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                size="lg"
                leftIcon={<LogIn size={20} />}
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </VStack>
          </form>

          <Text>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Button
              variant="link"
              colorScheme="blue"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;