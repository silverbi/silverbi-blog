import { RootLayout } from "@components/layouts";

const My = () => {
  return (
    <RootLayout>
      <div />
      {/* <Container className="my-32">
        <div className={"flex w-full items-center justify-between"}>
          <Title>My</Title>
        </div>

        <div className={"mt-20 flex w-full flex-col gap-12"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex gap-2"}>
              <Button size={"SM"} tag={"TERTIARY"}>
                필터
              </Button>
              <Button size={"SM"} tag={"TERTIARY"}>
                검색
              </Button>
            </div>

            <Link href={"/my/blog/create"}>
              <Button size={"SM"}>새 글 작성하기</Button>
            </Link>
          </div>

          <BlogTable />
        </div>
      </Container> */}
    </RootLayout>
  );
};

export default My;
