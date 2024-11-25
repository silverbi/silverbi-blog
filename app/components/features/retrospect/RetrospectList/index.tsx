import RetrospectCard from "components/molecules/RetrospectCard";
import React from "react";
import { RetrospectTypes } from "types/postTypes";

export interface RetrospectListProps {
  retrospects: RetrospectTypes[];
}

export const RetrospectList = ({ retrospects }: RetrospectListProps) => {
  return (
    <div className={"grid w-full grid-cols-3 gap-3"}>
      {retrospects.map((retrospect, index) => (
        <RetrospectCard key={index} retrospect={retrospect} />
      ))}
    </div>
  );
};

export default RetrospectList;
