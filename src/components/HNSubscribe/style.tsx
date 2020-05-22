import styled from 'styled-components'
import theme from '~/components/Theme'
import { Small } from '~/components/Typography'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${theme.space[3]};
  padding: ${theme.space[4]};
  background: var(--bg-inset);
  width: 100%;
  border-radius: 8px;
  margin-top: 32px;

  @media (max-width: ${theme.breakpoints[5]}) {
    margin-left: -16px;
    margin-right: -16px;
    width: calc(100% + 32px);
    border-radius: 0;
    border-top: 1px solid var(--border-primary);
    border-bottom: 1px solid var(--border-primary);
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: ${theme.space[3]};

  button {
    display: flex;
    align-self: flex-end;
    height: 48px;
  }

  @media (max-width: ${theme.breakpoints[4]}) {
    grid-template-columns: 1fr;
  }
`

export const Success = styled.div`
  padding: ${theme.space[2]} ${theme.space[4]};
  border: 1px solid var(--accent-green);
  color: var(--text-on-primary);
  font-weight: ${theme.fontWeights.link};
  background: var(--accent-green);
  border-radius: 4px;
  text-align: center;
  font-size: ${theme.fontSizes[1]};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
`

export const Error = styled(Small)`
  color: var(--accent-red);
  padding-right: ${theme.space[4]};
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSizes[0]};
  color: var(--text-quaternary);

  span {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`
