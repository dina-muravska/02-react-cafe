import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import { Votes, VoteType } from "../types/votes";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((votes) => ({
      ...votes,
      [type]: votes[type] + 1,
    }));
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
    </div>
  );
}
