import React from 'react';
import RankingForm from '../components/ranking/RankingForm';
import RankingList from '../components/ranking/RankingList';
import WrapperPage from '../components/WrapperPage';

const RankingPage = () => {
  return (
    <>
      <WrapperPage>
        <RankingList />
        <RankingForm />
      </WrapperPage>
    </>
  );
};

export default RankingPage;
