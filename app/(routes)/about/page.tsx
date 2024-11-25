import CareersSection from "@/app/components/templates/CareersSection";
import ExperienceSection from "@/app/components/templates/ExperienceSection";
import IntroduceSection from "@/app/components/templates/IntroduceSection";
import StackSection from "@/app/components/templates/StackSection";
import RootLayout from "@/app/layouts/RootLayout";

const About = () => {
  return (
    <RootLayout>
      <IntroduceSection />
      <CareersSection />
      <ExperienceSection />
      <StackSection />
    </RootLayout>
  );
};

export default About;
