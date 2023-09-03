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

// Define the shape of the form data
interface FormData {
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
}

// Define the shape of a social media link
interface SocialMediaLink {
  name: string;
  url: string;
}

// Define the props for the GrantApplicationForm component
interface GrantApplicationFormProps {
  formData: FormData;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (e: SelectChangeEvent<string>) => void;
  handleSubmit: () => void;
}

const GrantApplicationForm: React.FC<GrantApplicationFormProps> = ({ formData, handleInputChange, handleSelectChange, handleSubmit }) => {
  // State to manage social media links
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([
    { name: '', url: '' }
  ]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
  };

// Function to handle social media input changes
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

  // Function to add a new social media link input field
  const addSocialMediaLink = () => {
    setSocialMediaLinks([...socialMediaLinks, { name: '', url: '' }]);
  };

  return (
    <Box sx={{ flexGrow: 1, pr: 2 }}>
      <form>
        {/* Dropdown for Grant Type */}
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

        {/* Text Field for Safe Address */}
        <TextField
          fullWidth
          label="Safe Address"
          name="safeAddress"
          value={formData.safeAddress}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

        {/* Text Field for Request Amount */}
        <TextField
          fullWidth
          label="Request Amount (in USDC)"
          name="requestAmount"
          value={formData.requestAmount}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

        {/* Checkbox for KYC Agreement */}
        <FormControlLabel
          control={
            <Checkbox
              name="kycAgreement"
              checked={formData.kycAgreement}
              onChange={handleCheckboxChange}
            />
          }
          label="KYC Agreement"
          sx={{ mb: 2 }}
        />

        {/* Checkbox for Terms and Conditions */}
        <FormControlLabel
          control={
            <Checkbox
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleCheckboxChange}
            />
          }
          label="Terms and Conditions"
          sx={{ mb: 2 }}
        />

        {/* Checkbox for Follow-up/Milestone Reports */}
        <FormControlLabel
          control={
            <Checkbox
              name="followUpReports"
              checked={formData.followUpReports}
              onChange={handleCheckboxChange}
            />
          }
          label="Agree to provide follow-up/milestone reports"
          sx={{ mb: 2 }}
        />

        {/* Text Field for Project Details */}
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
        {/* Dynamic Fields for Social Media Links */}
        {socialMediaLinks.map((link, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TextField
            label="Social Media Name"
            name={`socialMediaName${index}`}
            value={link.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialMediaInputChange(e, index)} // Explicitly cast the event type here
            sx={{ mr: 2 }}
            />
            <TextField
            label="Social Media URL"
            name={`socialMediaUrl${index}`}
            value={link.url}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialMediaInputChange(e, index)} // Explicitly cast the event type here
            />
        </Box>
        ))}
        <Button variant="text" onClick={addSocialMediaLink}>Add Social Media Link</Button>

        {/* Submit Button */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
        </Button>
      </form>
    </Box>
  );
};

export default GrantApplicationForm;
