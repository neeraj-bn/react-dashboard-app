import React from 'react';
import { Box, Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BarChart2, Users, FileText, Calculator } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Counter', icon: <Calculator size={18} /> },
    { path: '/form', label: 'User Form', icon: <Users size={18} /> },
    { path: '/editor', label: 'Editor', icon: <FileText size={18} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <BarChart2 size={18} /> },
  ];

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      zIndex={1000}
      px={4}
      py={2}
    >
      <Flex justify="center" gap={4}>
        {navItems.map(({ path, label, icon }) => (
          <Button
            key={path}
            onClick={() => navigate(path)}
            colorScheme={isActive(path) ? 'blue' : 'gray'}
            variant={isActive(path) ? 'solid' : 'ghost'}
            leftIcon={icon}
            size="md"
          >
            {label}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Navigation;