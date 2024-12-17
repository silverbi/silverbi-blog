import { careers } from "./careers.map";
import { CareerDetailTypes } from "@/types/feature/abouts";
import { cn } from "@/utils/styles";
import { Text } from "@components/ui";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";

interface RenderedCareerCardProps {
  item: CareerDetailTypes;
  mode?: "left" | "right";
}

interface CareerSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const CareerSection = ({ scrollYProgress }: CareerSectionProps) => {
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.5, 1], [5, 0]);

  const gradients = ["bg-gradient-to-b from-[#0E5CFF] to-[#794296]", "bg-gradient-to-b from-[#794296] to-[#DE2A34]"];

  const RenderedCareerTitleCard = ({ item, mode }: RenderedCareerCardProps) => {
    const paddingStyle = mode === "left" ? "pr-8" : "pl-8";
    const itemsStyle = mode === "left" ? "items-end" : "items-start";

    return (
      <div className={cn("v-stack gap-1 mx-6", paddingStyle, itemsStyle)}>
        {/** 작업 기간 */}
        <Text bold variant={"body-1"}>
          {item.startDate} - {item.startDate}
        </Text>
        {/** 역할 */}
        {item.role.map((role, index) => (
          <Text key={index} variant={"body-3"} color={"always-white"} className={"opacity-60"}>
            {role}
          </Text>
        ))}
      </div>
    );
  };

  const RenderedCareerDescriptionCard = ({ item, mode }: RenderedCareerCardProps) => {
    const paddingStyle = mode === "left" ? "pr-8 pl-3" : "pl-8 pr-3";
    const roundedStyle = mode === "left" ? "rounded-r-none" : "rounded-l-none";
    const justifyStyle = mode === "left" ? "flex-row" : "flex-row-reverse";
    const marginStyle = mode === "left" ? "ml-6" : "-ml-6";

    return (
      <div className={"v-stack gap-8 items-start w-[35vw] max-w-[700px]"}>
        <div className={cn("h-stack  w-full h-fit", justifyStyle, marginStyle)}>
          <div className={cn("w-full h-1 rounded-full bg-always-white", roundedStyle)} />
          <div className={cn("w-12 h-12 aspect-square rounded-full bg-none border-always-white border-8")} />
        </div>

        <div className={cn("v-stack items-start gap-4 mx-4", paddingStyle)}>
          {/** 타이틀 */}
          <Text variant={"subtitle-2"} bold>
            {item.title}
          </Text>
          {/** 내용 */}
          <ul className={"v-stack items-start ml-8"}>
            {item.description.map((description, index) => (
              <li key={index} className={"body-2 list-disc"}>
                {description.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      id={"career-section"}
      style={{ scale, rotate }}
      className={"sticky v-stack top-0 h-fit-content overflow-y-hidden bg-always-black"}
    >
      {careers.map((items, index) => (
        <div key={index} className={"v-stack w-full"}>
          <div className={"w-full py-24 bg-[#232323] v-stack gap-2"}>
            {/** 재직 기간 */}
            <Text color={"always-white"} variant={"body-1"}>
              {items.period}
            </Text>
            {/** 작업 기간 */}
            <Text color={"always-white"} variant={"title-1"} bold>
              {items.company}
            </Text>
            {/** 역할 */}
            <div className={"v-stack"}>
              {items.role.map((role, index) => (
                <Text key={index} color={"always-white"} variant={"body-3"} className={"opacity-60 leading-snug"}>
                  {role}
                </Text>
              ))}
            </div>
          </div>

          <div className={"relative v-stack justify-center w-full h-fit gap-32 pt-32 pb-64 max-w-xl"}>
            {/** 그라데이션 선 */}
            <div className={cn("top-0 absolute h-full mx-auto w-8", `${gradients[index]}`)} />

            {items.career.map((item, index) => (
              <div key={item.title} className={"h-stack items-start w-full z-10"}>
                <div className={"flex flex-1 justify-end"}>
                  {index % 2 === 0 ? (
                    <RenderedCareerTitleCard item={item} mode={"left"} />
                  ) : (
                    <RenderedCareerDescriptionCard item={item} mode={"left"} />
                  )}
                </div>
                <div className={"flex flex-1 justify-start"}>
                  {index % 2 !== 0 ? (
                    <RenderedCareerTitleCard item={item} mode={"right"} />
                  ) : (
                    <RenderedCareerDescriptionCard item={item} mode={"right"} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className={"absolute w-full h-20 bg-gradient-to-t from-[#000000] to-[#79429600] bottom-0 z-20"} />
    </motion.div>
  );
};

export default CareerSection;
