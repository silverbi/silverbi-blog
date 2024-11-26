import ProjectList from "../ProjectList";
import { temp } from "./mock.data";
import { Title } from "@/app/components/commons/Title";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export interface ProjectListPreviewProps {
  title: string;
  handleClickMore: () => void;
}

export function ProjectListPreview({ title, handleClickMore }: ProjectListPreviewProps) {
  return (
    <div className={"flex w-full flex-col gap-24 py-20"}>
      <div className={"flex w-full justify-between items-center"}>
        <Title>프로젝트</Title>

        <Button variant={"outline"}>
          <Link href="/tech">더보기</Link>
        </Button>
      </div>

      <ProjectList list={temp} count={3} />
    </div>
  );
}
