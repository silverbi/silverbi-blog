import { ImageTypes } from "@components/atoms/CustomImage/types";
import Avatar from "@assets/images/avatar.webp";
import LandingThumbnail from "@assets/images/landing-thumbnail.webp";
import ProjectDeepfall from "@assets/images/project-deepfall.webp";
import ProjectIdco from "@assets/images/project-idco.webp";
import ProjectMeetPet from "@assets/images/project-idco.webp";
import ProjectMichelinmyeon from "@assets/images/project-michelinmyeon.webp";
import ProjectSaefolder from "@assets/images/project-saefolder.webp";
import ProjectSilverbiBlog from "@assets/images/project-saefolder.webp";
import RetrospectThumbnail from "@assets/images/retrospect-thumbnail.webp";
import ProjectsThumbnail from "@assets/images/projects-thumbnail.webp";
import TechThumbnail from "@assets/images/retrospect-thumbnail.webp";

export const changeImageTagToPath = (tag: string) => {
  switch (tag) {
    case ImageTypes.LANDING_THUMBNAIL:
      return LandingThumbnail;
    case ImageTypes.TECH_THUMBNAIL:
      return TechThumbnail;
    case ImageTypes.PROJECTS_THUMBNAIL:
      return ProjectsThumbnail;
    case ImageTypes.AVATAR:
      return Avatar;
    case ImageTypes.PROJECT_MEETPET:
      return ProjectMeetPet;
    case ImageTypes.PROJECT_IDCO:
      return ProjectIdco;
    case ImageTypes.PROJECT_SAEFOLDER:
      return ProjectSaefolder;
    case ImageTypes.PROJECT_DEEPFALL:
      return ProjectDeepfall;
    case ImageTypes.PROJECT_MICHELINMYEON:
      return ProjectMichelinmyeon;
    case ImageTypes.PROJECT_SILVERBI_BLOG:
      return ProjectSilverbiBlog;
    case ImageTypes.RETROSPECT_THUMBNAIL:
      return RetrospectThumbnail;
    default:
      return "";
  }
};
