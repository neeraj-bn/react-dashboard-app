import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const userData = useSelector((state: RootState) => state.user.userData);

  const userGrowthData = {
    labels: userData.map((_, index) => `User ${index + 1}`),
    datasets: [
      {
        label: 'User Growth',
        data: userData.map((_, index) => index + 1),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Dashboard</Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        <Box p={4} borderWidth={1} borderRadius="lg">
          <Heading size="md" mb={4}>User Growth Trend</Heading>
          <Line data={userGrowthData} />
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;