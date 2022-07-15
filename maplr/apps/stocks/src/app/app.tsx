import styled from 'styled-components';
import NxWelcome from './nx-welcome';

import { UiKit } from '@maplr/ui-kit';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <UiKit></UiKit>
      <NxWelcome title="stocks" />
    </StyledApp>
  );
}

export default App;
