import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { addUser, setUnsavedChanges } from '../store/userSlice';
import type { RootState } from '../store';
import type { UserData } from '../types';

const UserForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const unsavedChanges = useSelector((state: RootState) => state.user.unsavedChanges);

  const [formData, setFormData] = useState<Omit<UserData, 'id'>>({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [unsavedChanges]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    dispatch(setUnsavedChanges(true));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const userData: UserData = {
      ...formData,
      id: crypto.randomUUID(),
    };

    dispatch(addUser(userData));
    
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
    });

    toast({
      title: 'Success',
      description: 'User data saved successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
          >
            Save User Data
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UserForm;