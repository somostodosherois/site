import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const red = {
    200: 'rgb(254 202 202)',
    400: 'rgb(248 113 113)',
    500: 'rgb(239 68 68)',
    600: 'rgb(220 38 38)',
    700: 'rgb(185 28 28)'
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${red[600]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent !important;
  width: 100%;
  padding: 12px;
  margin: 6px 6px;
  border: 1px solid ${red[600]};
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${red[200]};
  }

  &:focus {
    color: ${red[600]};
    border: 1px solid ${red[600]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${red[600]} !important;
    color: #fff !important;
    border: 1px solid ${red[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: transparent;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);

export default function TabsCustomized({ items, handleAmount }) {
  return (
    <TabsUnstyled defaultValue={30}>
      <TabsList>
        {items.map(({ label, value }, index) => (
            <Tab onChange={() => handleAmount(value)} key={index} value={value}>{label}</Tab>
        ))}
      </TabsList>
    </TabsUnstyled>
  );
}
