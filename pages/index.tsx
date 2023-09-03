import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GrantApplicationForm from '../components/forms';  // Make sure this path is correct
import { SelectChangeEvent } from '@mui/material/Select';

interface GrantApplicationFormProps {
  formData: {
    grantType: string;
    safeAddress: string;
    requestAmount: string;
    kycAgreement: boolean;
    termsAndConditions: boolean;
    followUpReports: boolean;
    projectDetails: string;
    problemSolving: string;
    ecosystemBenefit: string;
    valueProposition: string;
    differentiation: string;
    links: string;
    teamMembers: string;
    teamExperience: string;
    milestones: string;
    fundingRequirements: string;
    priorFunding: string;
    impact: string;
    ethereumContribution: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (e: SelectChangeEvent<string>) => void;
  handleSubmit: () => void;
}

const Home: NextPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    grantType: '',
    safeAddress: '',
    requestAmount: '',
    kycAgreement: false,
    termsAndConditions: false,
    followUpReports: false,
    projectDetails: '',
    problemSolving: '',
    ecosystemBenefit: '',
    valueProposition: '',
    differentiation: '',
    links: '',
    teamMembers: '',
    teamExperience: '',
    milestones: '',
    fundingRequirements: '',
    priorFunding: '',
    impact: '',
    ethereumContribution: ''
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle select changes
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function for form submission
  const handleSubmit = () => {
    console.log('Form submitted', formData);
  };

  return (
    <div>
      <Head>
        <title>Grant Attestoor</title>
        <meta content="Your app description here" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      {/* Material UI AppBar for header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grant Attestoor
          </Typography>
          {/* Rainbow Wallet button */}
          <Box sx={{ flexGrow: 0 }}>
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        <Box sx={{ display: 'flex', mt: 4 }}>
          {/* Form Section */}
          <GrantApplicationForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
          />
          {/* JSON Viewer Section */}
          <Box sx={{ flexGrow: 0, pl: 2 }}>
            <Typography variant="h6">JSON Output</Typography>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Home;
