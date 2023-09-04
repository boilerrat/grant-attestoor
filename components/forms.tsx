import React, { useState, ChangeEvent } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  SelectChangeEvent,
} from '@mui/material';

{/*///////////////////////////////////////////////////////////////////
///////////////Define the shape of the form data//////////////////////
///////////////////////////////////////////////////////////////////*/} 

interface FormData {
  grantType: string;
  safeAddress: string;
  requestAmount: string;
  projectDetails: string;
  problemSolving: string;
  ecosystemBenefit: string;
  valueProposition: string;
  differentiation: string;
  teamMembers: string;
  teamExperience: string;
  milestones: string;
  fundingRequirements: string;
  priorFunding: string;
  links: string;
  kycAgreement: boolean;
  termsAndConditions: boolean;
  followUpReports: boolean;
}
{/*///////////////////////////////////////////////////////////////////
///////////////Define the shape of a social media link////////////////
///////////////////////////////////////////////////////////////////*/} 

interface SocialMediaLink {
  name: string;
  url: string;
}
{/*///////////////////////////////////////////////////////////////////
//////Define the props for the GrantApplicationForm component/////////
///////////////////////////////////////////////////////////////////*/} 

interface GrantApplicationFormProps {
  formData: FormData;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (e: SelectChangeEvent<string>) => void;
  handleSubmit: () => void;
}

const GrantApplicationForm: React.FC<GrantApplicationFormProps> = ({ formData, handleInputChange, handleSelectChange, handleSubmit }) => {

{/*///////////////////////////////////////////////////////////////////
/////////////// State to manage social media links////////////////////
///////////////////////////////////////////////////////////////////*/} 

  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([
    { name: '', url: '' }
  ]);

{/*///////////////////////////////////////////////////////////////////
/////////////// Function to handle checkbox changes///////////////////
///////////////////////////////////////////////////////////////////*/}

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
  };

{/*///////////////////////////////////////////////////////////////////
//////////// Function to handle social media input changes////////////
///////////////////////////////////////////////////////////////////*/}

const handleSocialMediaInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const newLinks = [...socialMediaLinks];
    if (name.includes('Name')) {
      newLinks[index].name = value;
    } else {
      newLinks[index].url = value;
    }
    setSocialMediaLinks(newLinks);
  };

{/*///////////////////////////////////////////////////////////////////
/////////Function to add a new social media link input field//////////
///////////////////////////////////////////////////////////////////*/}

  const addSocialMediaLink = () => {
    setSocialMediaLinks([...socialMediaLinks, { name: '', url: '' }]);
  };

  return (
    <Box sx={{ flexGrow: 1, pr: 2 }}>
      <form>

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Dropdown for Grant Type////////////////////////////////
/////////////////////////////////////////////////////////////////////*/}

        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>What type of Grant are you applying for?</InputLabel>
          <Select
            label="What type of Grant are you applying for?"
            name="grantType"
            value={formData.grantType}
            onChange={handleSelectChange}
          >
            <MenuItem value="Builder">Builder</MenuItem>
            <MenuItem value="Research">Research</MenuItem>
            <MenuItem value="Governance">Governance</MenuItem>
            <MenuItem value="Growth">Growth</MenuItem>
          </Select>
        </FormControl>

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Safe Address////////////////////////////
/////////////////////////////////////////////////////////////////////*/}

        <TextField
          fullWidth
          label="Safe Address"
          name="safeAddress"
          value={formData.safeAddress}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

{/*///////////////////////////////////////////////////////////////////// 
////////////////Text Field for Request Amount///////////////////////////
/////////////////////////////////////////////////////////////////////*/}

        <TextField
          fullWidth
          label="Request Amount (in USDC)"
          name="requestAmount"
          value={formData.requestAmount}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Project Details/////////////////////////
/////////////////////////////////////////////////////////////////////*/}        

        <TextField
          fullWidth
          label="Provide a brief description of your project? (300 word max)"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Problem Solving/////////////////////////
/////////////////////////////////////////////////////////////////////*/}

        <TextField
          fullWidth
          label="What problem is your project solving? Why is that important? (300 word max)"
          name="problemSolving"
          value={formData.problemSolving}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Ecosystem Benefit///////////////////////
/////////////////////////////////////////////////////////////////////*/}        

        <TextField
          fullWidth
          label="How does this project Benifit our Ecosystem? (300 word max)"
          name="ecosystemBenefit"
          value={formData.ecosystemBenefit}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Value Proposition///////////////////////
/////////////////////////////////////////////////////////////////////*/}        

<TextField
          fullWidth
          label="What would you define as your projects 'value proposition'? (100 word max)"
          name="valueProposition"
          value={formData.valueProposition}
          onChange={handleInputChange}
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Differentiation/////////////////////////
/////////////////////////////////////////////////////////////////////*/}        

<TextField
          fullWidth
          label="What would you define as your projects 'value proposition'? (100 word max)"
          name="differentiation"
          value={formData.differentiation}
          onChange={handleInputChange}
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Team Memebers Placeholder//////////////////////////////
/////////////////////////////////////////////////////////////////////*/} 

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Text Field for Team Experience/////////////////////////
/////////////////////////////////////////////////////////////////////*/}        

<TextField
          fullWidth
          label="What would you define as your projects 'value proposition'? (100 word max)"
          name="teamExperience"
          value={formData.teamExperience}
          onChange={handleInputChange}
          multiline
          rows={2}
          sx={{ mb: 2 }}
        />


{/*///////////////////////////////////////////////////////////////////// 
/////////////////Milestones Placeholder/////////////////////////////////
/////////////////////////////////////////////////////////////////////*/}        

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Prior Funding Placeholder//////////////////////////////
/////////////////////////////////////////////////////////////////////*/}  

{/*///////////////////////////////////////////////////////////////////// 
///////////////Dynamic Fields for Social Media Links ///////////////////
/////////////////////////////////////////////////////////////////////*/} 

        {/* Dynamic Fields for Social Media Links */}
        {socialMediaLinks.map((link, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            label="Social Media Name"
            name={`socialMediaName${index}`}
            value={link.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialMediaInputChange(e, index)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Social Media URL"
            name={`socialMediaUrl${index}`}
            value={link.url}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialMediaInputChange(e, index)}
          />
        </Box>
      ))}

{/*///////////////////////////////////////////////////////////////////// 
/////////////////Add Social Media Link" Button//////////////////////////
/////////////////////////////////////////////////////////////////////*/}      

      <Button variant="contained" color="primary" onClick={addSocialMediaLink}>
        Add Social Media Link
      </Button>

      {/* Line Break */}
      <br />

{/*///////////////////////////////////////////////////////////////////// 
/////////////////////////////Checkboxes/////////////////////////////////
/////////////////////////////////////////////////////////////////////*/}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="kycAgreement"
              checked={formData.kycAgreement}
              onChange={handleCheckboxChange}
            />
          }
          label="KYC Agreement"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleCheckboxChange}
            />
          }
          label="Terms and Conditions"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="followUpReports"
              checked={formData.followUpReports}
              onChange={handleCheckboxChange}
            />
          }
          label="Follow-up/Milestone Reports"
        />
      </Box>

{/*///////////////////////////////////////////////////////////////////// 
///////////////////////////Submit Button////////////////////////////////
/////////////////////////////////////////////////////////////////////*/}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  </Box>
  );
};

export default GrantApplicationForm;
