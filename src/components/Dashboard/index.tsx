import { Summary } from '../Summary';
import { Transactions } from '../Transactions';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary type="entry" value="10000" />
      <Transactions />
    </Container>
  );
};

