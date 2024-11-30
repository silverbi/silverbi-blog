export interface RetrospectListProps {
  retrospects: any[];
}

export const RetrospectList = ({ retrospects }: RetrospectListProps) => {
  return (
    <div className={"grid w-full grid-cols-3 gap-3"}>
      {/* {retrospects.map((retrospect, index) => (
        <RetrospectCard key={index} retrospect={retrospect} />
      ))} */}
    </div>
  );
};

export default RetrospectList;
