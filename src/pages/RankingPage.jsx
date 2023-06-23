import React, { useState } from 'react';
import RankingForm from '../components/ranking/RankingForm';
import RankingList from '../components/ranking/RankingList';
import WrapperPage from '../components/WrapperPage';

const RankingPage = () => {
  const [openRankingForm, setOpenRankingForm] = useState(true);
  const [reload, setReload] = useState(0);

  return (
    <>
      <WrapperPage>
        <RankingList setOpenRankingForm={setOpenRankingForm} reload={reload} />
        {openRankingForm && (
          <RankingForm
            setOpenRankingForm={setOpenRankingForm}
            reload={reload}
            setReload={setReload}
          />
        )}
      </WrapperPage>
    </>
  );
};

export default RankingPage;
