import Select from 'react-select';
import styled from 'styled-components';

export const CustomSelect = styled(Select)
  .attrs({
    styles: {
      control: () => ({
        borderRadius: 'var(--raddi)',
        border: 'none',
        height: '50px',
        display: 'flex',
      }),
      option: () => ({
        cursor: 'pointer',
        padding: '0.4rem',
      }),
    },
  })`
      background-color: ${(props) => props.theme.background};
      width: 200px;
      border-radius: var(--raddi);
      font-family: var(--family);
      border: none;
      & input {
        padding-left: 0.25rem;
        
      }

      & > * {
        color: ${(props) => props.theme.color} !important;
      }

      & > div[id] {
        color: ${(props) => props.theme.color} !important;
        background-color:  ${(props) => props.theme.background};
      }
    `;
