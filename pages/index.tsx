import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GrantApplicationForm, { FormData, TeamMember } from '../components/forms';
import { SelectChangeEvent } from '@mui/material/Select';
import { keccak256 } from 'viem';

const Home: NextPage = () => {
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
    milestones: [],
    priorFunding: [],
    socialMediaLinks: [],
    kycAgreement: false,
    termsAndConditions: false,
    followUpReports: false,
  });

  const [hashOutput, setHashOutput] = useState<string>('');

  useEffect(() => {
    const formDataJSON = JSON.stringify(formData);
    const formDataBuffer = new TextEncoder().encode(formDataJSON);
    const hashHex = keccak256(formDataBuffer);
    setHashOutput(hashHex);
  }, [formData]);

  const handleSocialMediaLinkChange = (newLinks: { name: string, url: string }[]) => {
    setFormData({ ...formData, socialMediaLinks: newLinks });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTeamMemberChange = (newTeamMembers: TeamMember[]) => {
    setFormData({ ...formData, teamMembers: newTeamMembers });
  };

  const handleSubmit = (values: FormData) => {
    console.log('Form submitted', values);
    setFormData(values); // Update the formData state
  };

  return (
    <div>
      <Head>
        <title>Grant Attestoor</title>
        <meta content="Grant application platform" name="description" />
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
          handleSubmit={handleSubmit} // Pass the handleSubmit function
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          handleSocialMediaLinkChange={handleSocialMediaLinkChange}
          handleTeamMemberChange={handleTeamMemberChange}
        />

          <Box sx={{ flexGrow: 0, pl: 2, maxWidth: '30%', wordWrap: 'break-word' }}>
            <Typography variant="h6">JSON Output</Typography>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <Typography variant="h6">Hash Output</Typography>
            <pre>{hashOutput}</pre>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Home;
