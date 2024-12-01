import ProjectList from "../ProjectList";
import { ProjectPreviewCard } from "../ProjectPreviewCard";
import { temp } from "./mock.data";
import { Button, Title } from "@components/ui";
import Link from "next/link";

export function ProjectListPreview() {
  return (
    <div className={"flex w-full flex-col py-20 gap-20"}>
      <div className={"flex w-full justify-between items-center"}>
        <Title>프로젝트</Title>

        <Button variant={"outline"}>
          <Link href="/project">더보기</Link>
        </Button>
      </div>

      <ProjectList list={temp} />
    </div>
  );
}
