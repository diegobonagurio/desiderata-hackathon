import React from 'react';

import { Container, LineBorder } from './styles';

interface LineProps {
  title?: string;
}

const LineGreen: React.FC<LineProps> = ({ title }) => {
  return (
    <Container>
      <LineBorder />
    </Container>
  );
}

export default LineGreen;