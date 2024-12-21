import { activityList } from "./activity.map";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Text } from "@/app/components/ui";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ActivityTypes {
  title: string;
  thumbnail: string;
  tag: string[];
  description: string;
  link: string;
  images: string[];
  date: string;
}

interface ActivitySectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ActivitySection = ({ scrollYProgress }: ActivitySectionProps) => {
  const [activity, setActivity] = useState<ActivityTypes>(activityList[0]);
  const [isVisibleModal, setISVisibleModal] = useState<boolean>(false);

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const openModal = (items: ActivityTypes) => {
    setActivity(items);
    setISVisibleModal(true);
  };

  return (
    <div className={"h-fit overflow-y-hidden bg-always-black flex justify-center p-8"}>
      <div className={"v-stack w-full max-w-xl pb-48"}>
        <Text color={"always-white"} variant={"title-1"} bold>
          Activity
        </Text>
        <Text color={"always-white"} className={"mt-2 mb-24"}>
          그 동안 참여했던 여러 활동들
        </Text>

        <div className="grid gap-4 w-full max-w-[70vw]">
          {/* 첫 번째 줄 */}
          <div className="grid grid-cols-4 gap-4 h-64">
            <div className="col-span-1 relative overflow-hidden rounded-xl">
              <Image src="/assets/images/about-1.jpg" alt="about-image" fill className={"object-cover"} />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-xl">
              <Image src="/assets/images/about-2.png" alt="about-image" fill className={"object-cover"} />
            </div>
            <div className="col-span-1 relative overflow-hidden rounded-xl">
              <Image src="/assets/images/about-3.png" alt="about-image" fill className={"object-cover"} />
            </div>
          </div>

          {/* 두 번째 줄 */}
          <div className="grid grid-cols-4 gap-4 h-64">
            <div className="col-span-2 relative overflow-hidden rounded-xl">
              <Image src="/assets/images/about-4.png" alt="about-image" fill className={"object-cover"} />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-xl">
              <Image src="/assets/images/about-5.png" alt="about-image" fill className={"object-cover"} />
            </div>
          </div>
        </div>

        <div className={"h-stack gap-24 mt-48"}>
          {activityList.map((items, index) => {
            return (
              <button
                key={index}
                className={"w-fit h-fit relative bg-none cursor-pointer"}
                onClick={() => openModal(items)}
              >
                <div
                  className={
                    "border-4 border-always-white w-[320px] h-[320px] rounded-[1.5vw] v-stack relative justify-center overflow-hidden cursor-pointer"
                  }
                >
                  {/** 타이틀 */}
                  <Text
                    variant={"title-3"}
                    bold
                    className={"flex-wrap break-words text-center w-[180px] z-10 mt-12 font-bold"}
                  >
                    {items.title}
                  </Text>
                  {/** 썸네일 */}
                  <div className={"absolute overflow-hidden w-[320px] h-[320px]"}>
                    <Image
                      src={items.thumbnail}
                      alt={items.title}
                      fill
                      className={
                        "object-cover bottom-0 opacity-40 hover:opacity-60 hover:scale-110 transition-all duration-300 ease-out"
                      }
                    />
                  </div>
                </div>
                {/** 책갈피 */}
                <Image
                  src={"/assets/images/bookmark.svg"}
                  alt={"bookmark"}
                  width={26}
                  height={65}
                  className={"absolute z-30 -top-4 left-6"}
                />
              </button>
            );
          })}
        </div>

        {/** 모달 */}
        <AnimatePresence>
          {isVisibleModal && (
            <motion.div
              className={"fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000080] z-50"}
              onClick={() => setISVisibleModal(false)}
              initial={"initial"}
              animate={"isOpen"}
              exit={"exit"}
              variants={modalVariant}
            >
              <div
                className={"bg-always-white w-full max-w-[70vw] h-fit p-12 rounded-2xl z-10"}
                onClick={e => e.stopPropagation()}
              >
                <div className={"v-stack gap-3 w-full"}>
                  <Text variant={"title-3"} bold color={"always-black"}>
                    {activity.title}
                  </Text>
                  <Text color={"always-black"}>{activity.description}</Text>
                  <Carousel opts={{ loop: true }} className={"w-[80%] mt-8"}>
                    <CarouselContent>
                      {activity.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className={"relative w-full h-[40vh] overflow-hidden rounded-2xl"}>
                            <Image
                              src={`/assets/images/${image}`}
                              alt={activity.title}
                              fill
                              className={"object-cover"}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivitySection;
