import { PageHeader } from '../components/page-header/page-header';
import { PageFooter } from '../components/page-footer/page-footer';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default function Home() {
  return (
    <HomeWrapper>
      <PageHeader />
      <PageFooter />
    </HomeWrapper>
  );
}
