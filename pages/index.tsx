import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GrantApplicationForm, { FormData, TeamMember } from '../components/forms';  // Import FormData from forms.tsx
import { SelectChangeEvent } from '@mui/material/Select';

// Removed the FormData interface definition from here

const Home: NextPage = () => {
  // Initialize form data state
  const [formData, setFormData] = useState<FormData>({
    grantType: '',
    safeAddress: '',
    requestAmount: '',
    projectDetails: '',
    problemSolving: '',
    ecosystemBenefit: '',
    valueProposition: '',
    differentiation: '',
    teamMembers: [],
    teamExperience: '',
    milestones: '',
    fundingRequirements: '',
    priorFunding: '',
    links: [],
    kycAgreement: false,
    termsAndConditions: false,
    followUpReports: false,
  });

  // Function to handle changes in social media links
  const handleSocialMediaLinkChange = (newLinks: { platform: string, url: string }[]) => {
    setFormData({
      ...formData,
      links: newLinks
    });
  };

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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

  // Function to handle team member changes
  const handleTeamMemberChange = (newTeamMembers: TeamMember[]) => {
    setFormData({
      ...formData,
      teamMembers: newTeamMembers
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

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grant Attestoor
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>

      <main>
      <Box sx={{ display: 'flex', mt: 4 }}>
          <GrantApplicationForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            handleSocialMediaLinkChange={handleSocialMediaLinkChange}
            handleTeamMemberChange={handleTeamMemberChange}  // Pass the new function here
          />
          <Box sx={{ flexGrow: 0, pl: 2, maxWidth: '30%', wordWrap: 'break-word' }}>
            <Typography variant="h6">JSON Output</Typography>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default Home;
