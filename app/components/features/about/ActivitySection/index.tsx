import { activityList } from "./activity.map";
import { Text } from "@/app/components/ui";
import { MotionValue } from "framer-motion";
import Image from "next/image";

interface ActivitySectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ActivitySection = ({ scrollYProgress }: ActivitySectionProps) => {
  return (
    <div className={"h-fit overflow-y-hidden bg-always-black flex justify-center p-8"}>
      <div className={"v-stack max-w-xl pb-48"}>
        <Text color={"always-white"} variant={"title-1"} bold>
          Activity
        </Text>
        <Text color={"always-white"} className={"mt-2 mb-24"}>
          그 동안 참여했던 여러 활동들
        </Text>

        <div className={"h-stack gap-24"}>
          {activityList.map((items, index) => {
            return (
              <div key={index} className={"w-fit h-fit relative"}>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;
