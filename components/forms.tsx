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

{/*===========================================================*/}
{/*}=========== Define the shape of the form data ============*/}
{/*}==========================================================*/}

export interface FormData {
  grantType: string;
  safeAddress: string;
  requestAmount: string;
  projectDetails: string;
  problemSolving: string;
  ecosystemBenefit: string;
  valueProposition: string;
  differentiation: string;
  teamMembers: TeamMember[];
  teamExperience: string;
  milestones: Milestone[];
  priorFunding: FundingDetail[];
  links: { platform: string, url: string }[];
  kycAgreement: boolean;
  termsAndConditions: boolean;
  followUpReports: boolean;
}

{/*===========================================================*/}
//======== Define the shape of a social media link ===========
{/*===========================================================*/}

export interface SocialMediaLink {
  name: string;
  url: string;
}

{/*===========================================================*/}
// Define the shape of a team member
{/*===========================================================*/}

export interface TeamMember {
  name: string;
  primarySocialMedia: string;
  link: string;
  ethAddressOrENS: string;
}

{/*===========================================================*/}
// Define the shape of milestones
{/*===========================================================*/}

export interface Milestone {
  summary: string;
  month: string;
  year: string;  
  fundingRequired: string;
}

{/*===========================================================*/}
// Define Shape of Prior funding detail
{/*===========================================================*/}

export interface FundingDetail {
  source: string;
  amount: string;
}

{/*===========================================================*/}
// Define the props for the GrantApplicationForm component
{/*===========================================================*/}

interface GrantApplicationFormProps {
  formData: FormData;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (e: SelectChangeEvent<string>) => void;
  handleSubmit: () => void;
  handleSocialMediaLinkChange: (newLinks: { platform: string, url: string }[]) => void;
  handleTeamMemberChange: (newTeamMembers: TeamMember[]) => void;
}

const GrantApplicationForm: React.FC<GrantApplicationFormProps> = ({ formData, handleInputChange, handleSelectChange, handleSubmit, handleSocialMediaLinkChange, handleTeamMemberChange }) => {

  {/*===========================================================*/}
  // State to manage social media links
  {/*===========================================================*/}

  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([
    { name: '', url: '' }
  ]);

  {/*===========================================================*/}
  // State to manage team members
  {/*===========================================================*/}

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', primarySocialMedia: '', link: '', ethAddressOrENS: '' }
  ]);

  {/*===========================================================*/}
  // Function to handle checkbox changes
  {/*===========================================================*/}

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
  };

{/*===========================================================*/}  
  // Function to handle social media input changes
{/*===========================================================*/}

  const handleSocialMediaInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const newLinks = [...socialMediaLinks];
    if (name.includes('Name')) {
      newLinks[index].name = value;
    } else {
      newLinks[index].url = value;
    }
    setSocialMediaLinks(newLinks);
    const updatedLinks = newLinks.map(link => ({
      platform: link.name,
      url: link.url
    }));
    handleSocialMediaLinkChange(updatedLinks);
  };

{/*===========================================================*/}
  // Function to handle team member input changes
{/*===========================================================*/}

  const handleTeamMemberInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const newTeamMembers = [...teamMembers];
    // Use type assertion here
    newTeamMembers[index][name as keyof TeamMember] = value;
    setTeamMembers(newTeamMembers);
    handleTeamMemberChange(newTeamMembers);
  };

{/*===========================================================*/}
  // Function to add a new social media link input field
{/*===========================================================*/}

  const addSocialMediaLink = () => {
    setSocialMediaLinks([...socialMediaLinks, { name: '', url: '' }]);
  };

{/*===========================================================*/}  
  // Function to add a new team member input field
{/*===========================================================*/}

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', primarySocialMedia: '', link: '', ethAddressOrENS: '' }]);
  };

{/*===========================================================*/}  
  // Add this state to manage milestones
{/*===========================================================*/}

const [milestones, setMilestones] = useState<Milestone[]>([
  { summary: '', month: '', year: '', fundingRequired: '' }
]);

{/*===========================================================*/}
// Add this function to handle milestone input changes
{/*===========================================================*/}

const handleMilestoneInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
  const { name, value } = e.target;
  const newMilestones = [...milestones];
  newMilestones[index][name as keyof Milestone] = value;
  setMilestones(newMilestones);
{/*===========================================================*/}
  // Update the parent component's state
{/*===========================================================*/}

  handleInputChange({ target: { name: 'milestones', value: newMilestones } } as any);
};

{/*===========================================================*/}
// Add this function to add a new milestone input field
{/*===========================================================*/}

const addMilestone = () => {
  setMilestones([...milestones, { summary: '', month: '', year: '', fundingRequired: '' }]);
};

{/*===========================================================*/}
// Add this state to manage prior funding details
{/*===========================================================*/}

const [priorFundingDetails, setPriorFundingDetails] = useState<FundingDetail[]>([
  { source: '', amount: '' }
]);

{/*===========================================================*/}
// Function to add a new funding detail
{/*===========================================================*/}

const addFundingDetail = () => {
  setPriorFundingDetails([...priorFundingDetails, { source: '', amount: '' }]);
};

{/*===========================================================*/}
// Function to handle prior funding input changes
{/*===========================================================*/}

const handlePriorFundingInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
  const { name, value } = e.target;
  const newFundingDetails = [...priorFundingDetails];
  newFundingDetails[index][name as keyof FundingDetail] = value;
  setPriorFundingDetails(newFundingDetails);
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

{/*===========================================================*/}
        {/* Text Field for Safe Address */}
{/*===========================================================*/}

        <TextField
          fullWidth
          label="Safe Address"
          name="safeAddress"
          value={formData.safeAddress}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

{/*===========================================================*/}
        {/* Text Field for Request Amount */}
{/*===========================================================*/}

        <TextField
          fullWidth
          label="Request Amount (in USDC)"
          name="requestAmount"
          value={formData.requestAmount}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

{/*===========================================================*/}
        {/* Text Field for Project Details */}
{/*===========================================================*/}

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

{/*===========================================================*/}
        {/* Text Field for Problem Solving */}
{/*===========================================================*/}

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

{/*===========================================================*/}
        {/* Text Field for Ecosystem Benefit */}
{/*===========================================================*/}

        <TextField
          fullWidth
          label="How does this project Benefit our Ecosystem? (300 word max)"
          name="ecosystemBenefit"
          value={formData.ecosystemBenefit}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

{/*===========================================================*/}
        {/* Text Field for Value Proposition */}
{/*===========================================================*/}

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

{/*===========================================================*/}
        {/* Text Field for Differentiation */}
{/*===========================================================*/}

        <TextField
          fullWidth
          label="What differentiates your projects from others? Who is your competition? (300 word max)"
          name="differentiation"
          value={formData.differentiation}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

{/*===========================================================*/}
        {/* Text Field for Team Experience */}
{/*===========================================================*/}

        <TextField
          fullWidth
          label="Briefly describe your team's experience, listing some projects they have worked on. (300 word max)"
          name="teamExperience"
          value={formData.teamExperience}
          onChange={handleInputChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

{/*===========================================================*/}
        {/* Dynamic Fields for Social Media Links */}
{/*===========================================================*/}

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

{/*===========================================================*/}
        {/* "Add Social Media Link" Button */}
{/*===========================================================*/}

        <Button variant="outlined" color="primary" onClick={addSocialMediaLink}>
          Add Social Media Link
        </Button>

        {/* Line Break */}
        <br />

{/*===========================================================*/}
        {/* Dynamic Fields for Team Members */}
{/*===========================================================*/}

        {teamMembers.map((member, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={member.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleTeamMemberInputChange(e, index)}
              sx={{ mb: 1 }}
            />
            <TextField
              label="Primary Social Media Contact"
              name="primarySocialMedia"
              value={member.primarySocialMedia}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleTeamMemberInputChange(e, index)}
              sx={{ mb: 1 }}
            />
            <TextField
              label="Link"
              name="link"
              value={member.link}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleTeamMemberInputChange(e, index)}
              sx={{ mb: 1 }}
            />
            <TextField
              label="Ethereum Address or ENS"
              name="ethAddressOrENS"
              value={member.ethAddressOrENS}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleTeamMemberInputChange(e, index)}
              sx={{ mb: 1 }}
            />
          </Box>
        ))}

{/*===========================================================*/}
        {/* "Add Team Member" Button */}
{/*===========================================================*/}

        <Button variant="contained" color="primary" onClick={addTeamMember}>
          Add Team Member
        </Button>

{/*===========================================================*/}
        {/*  Add Milestones section*/}
{/*===========================================================*/}
        
        {milestones.map((milestone, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            <TextField
              label="Milestone Summary"
              name="summary"
              value={milestone.summary}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleMilestoneInputChange(e, index)}
              sx={{ mb: 1 }}
            />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                label="Milestone Month"
                name="month"
                value={milestone.month}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleMilestoneInputChange(e, index)}
                sx={{ mb: 1, width: '48%' }}
              />
              <TextField
                label="Milestone Year"
                name="year"
                value={milestone.year}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleMilestoneInputChange(e, index)}
                sx={{ mb: 1, width: '48%' }}
              />
            </Box>
            <TextField
              label="Funding Required (in USDC)"
              name="fundingRequired"
              value={milestone.fundingRequired}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleMilestoneInputChange(e, index)}
              sx={{ mb: 1 }}
            />
          </Box>
        ))}

{/*===========================================================*/}
        {/* "Add Milestone" Button */}
{/*===========================================================*/}

        <Button variant="contained" color="primary" onClick={addMilestone}>
          Add Milestone
        </Button>
                {priorFundingDetails.map((funding, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            {/* New fields for Funding Source and Funding Amount */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                label="Funding Source"
                name="source"
                value={funding.source}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handlePriorFundingInputChange(e, index)}
                sx={{ mb: 1, width: '48%' }}
              />
              <TextField
                label="Funding Amount"
                name="amount"
                value={funding.amount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handlePriorFundingInputChange(e, index)}
                sx={{ mb: 1, width: '48%' }}
              />
            </Box>
          </Box>
        ))}

{/*===========================================================*/}        
          {/* Add funding source button */}
{/*===========================================================*/}

        <Button variant="contained" color="primary" onClick={addFundingDetail}>
          Add Funding Detail
        </Button>

{/*===========================================================*/}
        {/* Checkboxes */}
{/*===========================================================*/}

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

{/*===========================================================*/}
        {/* Submit Button */}
{/*===========================================================*/}        
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default GrantApplicationForm;
