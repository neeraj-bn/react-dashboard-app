import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { Button, VStack, Text, Box } from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const backgroundProps = useSpring({
    from: { height: '0%' },
    to: { height: `${Math.min(count * 2, 100)}%` },
    config: { tension: 120, friction: 14 },
  });

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => Math.max(0, prev - 1));
  const handleReset = () => setCount(0);

  return (
    <Box position="relative" h="100vh" overflow="hidden">
      <animated.div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'linear-gradient(to top, #4299E1, #90CDF4)',
          ...backgroundProps,
        }}
      />
      
      <VStack
        spacing={6}
        position="relative"
        zIndex={1}
        pt={20}
        align="center"
      >
        <Text fontSize="6xl" fontWeight="bold" color="black">
          {count}
        </Text>
        
        <Box display="flex" gap={4}>
          <Button
            leftIcon={<Plus />}
            colorScheme="blue"
            onClick={handleIncrement}
          >
            Increment
          </Button>
          
          <Button
            leftIcon={<Minus />}
            colorScheme="red"
            onClick={handleDecrement}
          >
            Decrement
          </Button>
          
          <Button
            leftIcon={<RotateCcw />}
            colorScheme="gray"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Counter;