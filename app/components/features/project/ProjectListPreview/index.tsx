import { ProjectPreviewCard } from "../ProjectPreviewCard";
import { temp } from "./mock.data";
import { Title } from "@/app/components/commons/Title";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export function ProjectListPreview() {
  return (
    <div className={"flex w-full flex-col py-20 gap-20"}>
      <div className={"flex w-full justify-between items-center"}>
        <Title>프로젝트</Title>

        <Button variant={"outline"}>
          <Link href="/tech">더보기</Link>
        </Button>
      </div>

      <div className={"grid grid-cols-4 grid-rows-3 gap-4 w-full h-[60vw] max-h-[690px]"}>
        <ProjectPreviewCard className={"col-span-1 row-span-1"} items={temp[0]} />
        <ProjectPreviewCard className="col-span-3 row-span-1" items={temp[1]} />

        <ProjectPreviewCard className="col-span-2 row-span-2" items={temp[2]} />

        <ProjectPreviewCard className="col-span-1 row-span-1" items={temp[3]} />
        <ProjectPreviewCard className="col-span-1 row-span-2" items={temp[4]} />
        <ProjectPreviewCard className="col-span-1 row-span-1" items={temp[6]} />
      </div>
    </div>
  );
}
