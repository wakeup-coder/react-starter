import React from 'react';
import { styled, Button as MuiButton } from '@mui/material';

const CustomButton = styled(MuiButton)({
  padding: '12px 48px',
  backgroundColor: '#48e59b',
  borderRadius: '9999px',
  color: 'rgba(0, 0, 0, 0.8)',
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: 'Roboto Mono',
  lineHeight: 1,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#48e59b',
  },
});

export interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<CustomButtonProps> = ({ children, onClick }) => (
  <CustomButton disableElevation onClick={onClick}>
    {children}
  </CustomButton>
);

export default Button;
