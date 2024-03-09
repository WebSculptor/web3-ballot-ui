"use client";

import useIsChairPerson from "@/hooks";
import MaxContainer from "./MaxContainer";
import RightToVote from "./RightToVote";

export default function Header() {
  const isChairPerson = useIsChairPerson();

  return (
    <header className="w-full py-1 backdrop-blur-3xl sticky top-0 inset-x-0">
      <MaxContainer className="w-full py-2 flex items-center justify-between">
        <h1>Ballot</h1>

        <div className="flex items-center gap-4">
          <w3m-button />
          {isChairPerson && <RightToVote />}
        </div>
      </MaxContainer>
    </header>
  );
}
