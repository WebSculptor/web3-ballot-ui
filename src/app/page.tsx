import DelegateUser from "@/components/shared/DeligateUser";
import MaxContainer from "@/components/shared/MaxContainer";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <MaxContainer>
        <DelegateUser />
      </MaxContainer>
    </div>
  );
}
