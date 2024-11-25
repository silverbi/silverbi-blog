"use client";

import { TechListPreview } from "@/app/components/features/tech/TechListPreview";
import { Text } from "@/app/components/ui/text";
import { PageContainer } from "@/app/layouts/PageContainer";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleClickMore = () => {
    router.push("/tech");
  };

  return (
    <RootLayout>
      <PageContainer className="gap-28">
        <Text color={"accent"} variant={"head-2"}>
          SILVERBI BLOG
        </Text>
        <Image
          priority
          src={"/assets/images/landing-thumbnail.webp"}
          alt={"블로그 메인 랜딩 이미지"}
          width={980}
          height={560}
        />

        <div className={"mb-48 flex w-full flex-col items-center gap-24"}>
          <TechListPreview handleClickMore={handleClickMore} />
          {/* <ProjectListPreviewSection title={"Projects"} handleClickMore={handleClickMore} /> */}
        </div>
      </PageContainer>
    </RootLayout>
  );
};

export default Home;
