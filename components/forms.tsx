import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, FieldArray, FieldArrayRenderProps } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Checkbox,
  Button,
  Box,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent
} from '@mui/material';
import { styled } from '@mui/material/styles';

export type FormData = {
  grantType: string;
  safeAddress: string;
  requestAmount: string;
  projectDetails: string;
  problemSolving: string;
  ecosystemBenefit: string;
  valueProposition: string;
  differentiation: string;
  teamExperience: string;
  kycAgreement: boolean;
  termsAndConditions: boolean;
  followUpReports: boolean;
  socialMediaLinks: { name: string; url: string }[];
  teamMembers: TeamMember[];
  milestones: { summary: string; month: string; year: string; fundingRequired: string }[];
  priorFunding: { source: string; amount: string }[];
};

export type TeamMember = {
  name: string;
  primarySocialMedia: string;
  link: string;
  ethAddressOrENS: string;
};

const validationSchema = Yup.object({
  grantType: Yup.string().required('Required'),
  safeAddress: Yup.string().required('Required'),
  requestAmount: Yup.string().required('Required'),
  projectDetails: Yup.string().required('Required'),
  problemSolving: Yup.string().required('Required'),
  ecosystemBenefit: Yup.string().required('Required'),
  valueProposition: Yup.string().required('Required'),
  differentiation: Yup.string().required('Required'),
  teamExperience: Yup.string().required('Required'),
  kycAgreement: Yup.boolean().oneOf([true], 'Must accept KYC Agreement'),
  termsAndConditions: Yup.boolean().oneOf([true], 'Must accept Terms and Conditions'),
  followUpReports: Yup.boolean().oneOf([true], 'Must accept Follow-up/Milestone Reports'),
});

interface GrantApplicationFormProps {
  formData: FormData;
  handleSubmit: (values: FormData) => void; // Keep only this one
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (e: SelectChangeEvent<string>) => void;
  handleSocialMediaLinkChange: (newLinks: { name: string, url: string }[]) => void;
  handleTeamMemberChange: (newTeamMembers: TeamMember[]) => void;
}

const GrantApplicationForm: React.FC<GrantApplicationFormProps> = ({
  formData,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  handleSocialMediaLinkChange,
  handleTeamMemberChange,
}) => {
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          {/* Dropdown for Grant Type */}
          <Box margin={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>What type of Grant are you applying for?</InputLabel>
            <Field
              as={Select}
              fullwidth
              name="grantType"
              label="What type of Grant are you applying for?"
            >
              <MenuItem value="Builder">Builder</MenuItem>
              <MenuItem value="Research">Research</MenuItem>
              <MenuItem value="Governance">Governance</MenuItem>
              <MenuItem value="Growth">Growth</MenuItem>
            </Field>
          </FormControl>
          </Box>
          {errors.grantType && touched.grantType ? <div>{errors.grantType}</div> : null}

          {/* Text Field for Safe Address */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="Safe Address"
            name="safeAddress"
          />
          {errors.safeAddress && touched.safeAddress ? <div>{errors.safeAddress}</div> : null}
          </Box>

          {/* Text Field for Request Amount */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="Request Amount (in USDC)"
            name="requestAmount"
          />
          {errors.requestAmount && touched.requestAmount ? <div>{errors.requestAmount}</div> : null}
          </Box>
          {/* Text Field for Project Details */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="Provide a brief description of your project? (300 word max)"
            name="projectDetails"
            multiline
            rows={4}
          />
          </Box>
          {errors.projectDetails && touched.projectDetails ? <div>{errors.projectDetails}</div> : null}

          {/* Text Field for Problem Solving */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="What problem is your project solving? Why is that important? (300 word max)"
            name="problemSolving"
            multiline
            rows={4}
          />
          </Box>
          {errors.problemSolving && touched.problemSolving ? <div>{errors.problemSolving}</div> : null}

          {/* Text Field for Ecosystem Benefit */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="How does this project Benefit our Ecosystem? (300 word max)"
            name="ecosystemBenefit"
            multiline
            rows={4}
          />
          </Box>
          {errors.ecosystemBenefit && touched.ecosystemBenefit ? <div>{errors.ecosystemBenefit}</div> : null}

          {/* Text Field for Value Proposition */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="What would you define as your projects 'value proposition'? (100 word max)"
            name="valueProposition"
            multiline
            rows={2}
          />
          </Box>
          {errors.valueProposition && touched.valueProposition ? <div>{errors.valueProposition}</div> : null}

          {/* Text Field for Differentiation */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="What differentiates your projects from others? Who is your competition? (300 word max)"
            name="differentiation"
            multiline
            rows={4}
          />
          </Box>
          {errors.differentiation && touched.differentiation ? <div>{errors.differentiation}</div> : null}

          {/* Text Field for Team Experience */}
          <Box margin={2}>
          <Field
            as={TextField}
            fullWidth
            label="Briefly describe your team's experience, listing some projects they have worked on. (300 word max)"
            name="teamExperience"
            multiline
            rows={4}
          />
          </Box>
          {errors.teamExperience && touched.teamExperience ? <div>{errors.teamExperience}</div> : null}

            {/* Dynamic Fields for Social Media Links */}
            <FieldArray
              name="socialMediaLinks"
              render={(arrayHelpers: FieldArrayRenderProps) => (
              <div>
                {values.socialMediaLinks && values.socialMediaLinks.length > 0 ? (
                  values.socialMediaLinks.map((link, index) => (
                    <div key={index}>
                      <Field
                        as={TextField}
                        name={`socialMediaLinks.${index}.name`}
                        label="Social Media Name"
                      />
                      <Field
                        as={TextField}
                        name={`socialMediaLinks.${index}.url`}
                        label="Social Media URL"
                      />
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                ) : null}
                <Button
                  type="button"
                  variant="outlined"
                  sx={{ margin: 2}}
                  onClick={() => arrayHelpers.push({ name: '', url: '' })}
                >
                  Add Social Media Link
                </Button>
              </div>
            )}
          />

          {/* Dynamic Fields for Team Members */}
          <FieldArray
            name="teamMembers"
            render={(arrayHelpers: FieldArrayRenderProps) => (
              <div>
                {values.teamMembers && values.teamMembers.length > 0 ? (
                  values.teamMembers.map((member, index) => (
                    <div key={index}>
                      <Field
                        as={TextField}
                        name={`teamMembers.${index}.name`}
                        label="Name"
                      />
                      <Field
                        as={TextField}
                        name={`teamMembers.${index}.primarySocialMedia`}
                        label="Primary Social Media Contact"
                      />
                      <Field
                        as={TextField}
                        name={`teamMembers.${index}.link`}
                        label="Link"
                      />
                      <Field
                        as={TextField}
                        name={`teamMembers.${index}.ethAddressOrENS`}
                        label="Ethereum Address or ENS"
                      />
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                ) : null}
                <Button
                  type="button"
                  variant="outlined"
                  sx={{ margin: 2}}
                  onClick={() => arrayHelpers.push({ name: '', primarySocialMedia: '', link: '', ethAddressOrENS: '' })}
                >
                  Add Team Member
                </Button>
              </div>
            )}
          />
            {/* Dynamic Fields for Milestones */}
            <FieldArray
            name="milestones"
            render={(arrayHelpers: FieldArrayRenderProps) => (
              <div>
                {values.milestones && values.milestones.length > 0 ? (
                  values.milestones.map((milestone, index) => (
                    <div key={index}>
                      <Field
                        as={TextField}
                        name={`milestones.${index}.summary`}
                        label="Milestone Description"
                      />
                      {/* You can use a date picker here */}
                      <Field
                        as={TextField}
                        name={`milestones.${index}.month`}
                        label="Month"
                      />
                      <Field
                        as={TextField}
                        name={`milestones.${index}.year`}
                        label="Year"
                      />
                      <Field
                        as={TextField}
                        name={`milestones.${index}.fundingRequired`}
                        label="Funding Required (in USDC)"
                      />
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                ) : null}
                <Button
                  type="button"
                  variant="outlined"
                  sx={{ margin: 2}}
                  onClick={() => arrayHelpers.push({ summary: '', month: '', year: '', fundingRequired: '' })}
                >
                  Add Milestone
                </Button>
              </div>
            )}
          />

          {/* Dynamic Fields for Prior Funding */}
          <FieldArray
            name="priorFunding"
            render={(arrayHelpers: FieldArrayRenderProps) => (
              <div>
                {values.priorFunding && values.priorFunding.length > 0 ? (
                  values.priorFunding.map((funding, index) => (
                    <div key={index}>
                      <Field
                        as={TextField}
                        name={`priorFunding.${index}.source`}
                        label="Funding Organization"
                      />
                      <Field
                        as={TextField}
                        name={`priorFunding.${index}.amount`}
                        label="Amount Funded"
                      />
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                ) : null}
                <Button
                  type="button"
                  variant="outlined"
                  sx={{ margin: 2}}
                  onClick={() => arrayHelpers.push({ source: '', amount: '' })}
                >
                  Add Prior Funding
                </Button>
              </div>
            )}
          />
          {/* Checkboxes */}
          <FormControlLabel
            control={
              <Field
                type="checkbox"
                name="kycAgreement"
                as={Checkbox}
              />
            }
            label="KYC Agreement"
          />
          {errors.kycAgreement && touched.kycAgreement ? <div>{errors.kycAgreement}</div> : null}

          <FormControlLabel
            control={
              <Field
                type="checkbox"
                name="termsAndConditions"
                as={Checkbox}
              />
            }
            label="Terms and Conditions"
          />
          {errors.termsAndConditions && touched.termsAndConditions ? <div>{errors.termsAndConditions}</div> : null}

          <FormControlLabel
            control={
              <Field
                type="checkbox"
                name="followUpReports"
                as={Checkbox}
              />
            }
            label="Follow-up/Milestone Reports"
          />
          {errors.followUpReports && touched.followUpReports ? <div>{errors.followUpReports}</div> : null}

           <br />

          {/* Submit Button */}
          <Button type="submit"
          variant="contained"
          size="large"
          sx={{ margin: "5",
          bgcolor: "red",
          border: '3px solid black',
          }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default GrantApplicationForm;
