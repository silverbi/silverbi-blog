import { temp } from "./mock.data";
import { Title } from "@/app/components/commons/Title";
import { TechList } from "@/app/components/features/tech/TechList";
import { Button } from "@/app/components/ui/button";

export interface TechListPreviewProps {
  handleClickMore: () => void;
}

export const TechListPreview = ({ handleClickMore }: TechListPreviewProps) => {
  return (
    <div className={"flex w-full flex-col gap-24"}>
      <Title>Tech</Title>

      <Button onClick={handleClickMore}>더보기</Button>

      <TechList list={temp} />
    </div>
  );
};

export default TechListPreview;
