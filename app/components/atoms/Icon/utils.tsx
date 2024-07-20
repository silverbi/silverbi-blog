import { IconTypes, IconName } from "@components/atoms/Icon/types";
import { Sizes } from "@components/atoms/IconButton/types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";
import { Colors } from "@styles/themes/types";

import SilverbiSymbolIcon from "@assets/icons/silverbi-symbol.svg";
import MenuBarIcon from "@assets/icons/menu-bar.svg";
import InstagramLogoIcon from "@assets/icons/instagram-logo.svg";
import LinkedinLogoIcon from "@assets/icons/linkedin-logo.svg";
import GithubLogoIcon from "@assets/icons/github-logo.svg";
import ConcentricCircles from "@assets/icons/concentric-circles.svg";
import Map from "@assets/icons/map.svg";
import HeartOutline from "@assets/icons/icon-heart-outline.svg";
import Calendar from "@assets/icons/icon-calendar.svg";
import Clock from "@assets/icons/icon-clock.svg";
import CopyClipboardIcon from "@assets/icons/icon-copy-clipboard.svg";
import CheckCircleIcon from "@assets/icons/icon-check-circle.svg";
import ShareIcon from "@assets/icons/icon-share.svg";
import LikeFillIcon from "@assets/icons/icon-like-fill.svg";
import LikeOutlineIcon from "@assets/icons/icon-like-outline.svg";
import HeartFill from "@assets/icons/icon-heart-fill.svg";
import Profile from "@assets/icons/icon-profile.svg";
import FolderIcon from "@assets/icons/icon-folder.svg";
import GiftIcon from "@assets/icons/icon-gift.svg";
import HomeIcon from "@assets/icons/icon-home.svg";
import LockIcon from "@assets/icons/icon-lock.svg";
import PenIcon from "@assets/icons/icon-pen.svg";
import PinIcon from "@assets/icons/icon-pin.svg";
import ProfileCircleIcon from "@assets/icons/icon-profile-circle.svg";
import StarIcon from "@assets/icons/icon-star.svg";
import ProfileAcceptedIcon from "@assets/icons/icon-profile-accepted.svg";

export const changeTypeToIconComponent = (type: IconTypes) => {
  switch (type) {
    case IconName.SILVERBI_SYMBOL:
      return SilverbiSymbolIcon;
    case IconName.MENU_BAR:
      return MenuBarIcon;
    case IconName.INSTAGRAM_LOGO:
      return InstagramLogoIcon;
    case IconName.LINKEDIN_LOGO:
      return LinkedinLogoIcon;
    case IconName.GITHUB_LOGO:
      return GithubLogoIcon;
    case IconName.CONCENTRIC_CIRCLES:
      return ConcentricCircles;
    case IconName.MAP:
      return Map;
    case IconName.HEART_OUTLINE:
      return HeartOutline;
    case IconName.HEART_FILL:
      return HeartFill;
    case IconName.CLOCK:
      return Clock;
    case IconName.CALENDAR:
      return Calendar;
    case IconName.COPY_CLIPBOARD:
      return CopyClipboardIcon;
    case IconName.CHECK_CIRCLE:
      return CheckCircleIcon;
    case IconName.SHARE:
      return ShareIcon;
    case IconName.LIKE_OUTLINE:
      return LikeOutlineIcon;
    case IconName.LIKE_FILL:
      return LikeFillIcon;
    case IconName.PROFILE:
      return Profile;
    case IconName.FOLDER:
      return FolderIcon;
    case IconName.GIFT:
      return GiftIcon;
    case IconName.HOME:
      return HomeIcon;
    case IconName.LOCK:
      return LockIcon;
    case IconName.PEN:
      return PenIcon;
    case IconName.PIN:
      return PinIcon;
    case IconName.PROFILE_CIRCLE:
      return ProfileCircleIcon;
    case IconName.STAR:
      return StarIcon;
    case IconName.PROFILE_ACCEPTED:
      return ProfileAcceptedIcon;
    default:
      return "icon";
  }
};

export const changeTypeToSizeComponent = (type: keyof typeof Sizes) => {
  switch (type) {
    case Sizes.XS:
      return "w-4 h-4";
    case Sizes.SM:
      return "w-5 h-5";
    case Sizes.MD:
      return "w-7 h-7";
    case Sizes.LG:
      return "w-10 h-10";
    case Sizes.XL:
      return "w-12 h-12";
    default:
      return "w-8 h-8";
  }
};

export const changeColorToClassName = (color?: ObjectValues<typeof Colors>) => {
  switch (color) {
    case Colors.CONTENT_1:
      return "text-content-1";
    case Colors.CONTENT_2:
      return "text-content-2";
    case Colors.CONTENT_3:
      return "text-content-3";
    case Colors.CONTENT_PRIMARY:
      return "text-content-primary";
    case Colors.CONTENT_PRIMARY_DARK:
      return "text-content-primary-dark";
    case Colors.CONTENT_PRIMARY_LIGHT:
      return "text-content-primary-light";
    case Colors.CONTENT_SECONDARY:
      return "text-content-secondary";
    case Colors.CONTENT_SECONDARY_DARK:
      return "text-content-secondary-dark";
    case Colors.CONTENT_SECONDARY_LIGHT:
      return "text-content-secondary-light";
    case Colors.CONTENT_INVERSE_1:
      return "text-content-inverse-1";
    case Colors.CONTENT_INVERSE_2:
      return "text-content-inverse-2";
    case Colors.CONTENT_INVERSE_3:
      return "text-content-inverse-3";
    case Colors.CONTENT_DISABLED:
      return "text-content-disabled";
    case Colors.LINK_PRIMARY:
      return "text-link-content-primary";
    case Colors.LINK_ACTIVE:
      return "text-link-content-active";
    case Colors.LINK_DISABLED:
      return "text-link-content-disabled";
    case Colors.SEMANTIC_SUCCESS:
      return "text-semantic-success";
    default:
      return "text-content-1";
  }
};

export const changeFillToClassName = (fill?: ObjectValues<typeof Colors>) => {
  switch (fill) {
    case Colors.CONTENT_1:
      return "fill-content-1";
    case Colors.CONTENT_2:
      return "fill-content-2";
    case Colors.CONTENT_3:
      return "fill-content-3";
    case Colors.CONTENT_PRIMARY:
      return "fill-content-primary";
    case Colors.CONTENT_PRIMARY_DARK:
      return "fill-content-primary-dark";
    case Colors.CONTENT_PRIMARY_LIGHT:
      return "fill-content-primary-light";
    case Colors.CONTENT_SECONDARY:
      return "fill-content-secondary";
    case Colors.CONTENT_SECONDARY_DARK:
      return "fill-content-secondary-dark";
    case Colors.CONTENT_SECONDARY_LIGHT:
      return "fill-content-secondary-light";
    case Colors.CONTENT_INVERSE_1:
      return "fill-content-inverse-1";
    case Colors.CONTENT_INVERSE_2:
      return "fill-content-inverse-2";
    case Colors.CONTENT_INVERSE_3:
      return "fill-content-inverse-3";
    case Colors.CONTENT_DISABLED:
      return "fill-content-disabled";
    case Colors.LINK_PRIMARY:
      return "fill-content-primary";
    case Colors.LINK_ACTIVE:
      return "fill-content-active";
    case Colors.LINK_DISABLED:
      return "fill-content-disabled";
    case Colors.SEMANTIC_SUCCESS:
      return "fill-semantic-success";
    default:
      return "";
  }
};
