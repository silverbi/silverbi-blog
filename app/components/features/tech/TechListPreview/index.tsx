import { temp } from "./mock.data";
import { TechList } from "@components/features";
import { Button, Title } from "@components/ui";
import Link from "next/link";

export interface TechListPreviewProps {
  count?: number;
}

export const TechListPreview = ({ count = 6 }: TechListPreviewProps) => {
  return (
    <div className={"flex w-full flex-col gap-20"}>
      <div className={"flex w-full justify-between items-center"}>
        <Title>개발</Title>

        <Button variant={"outline"}>
          <Link href="/tech">더보기</Link>
        </Button>
      </div>

      <TechList list={temp} count={count} />
    </div>
  );
};

export default TechListPreview;
