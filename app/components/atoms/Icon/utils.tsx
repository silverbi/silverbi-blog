import { IconName } from "@components/atoms/Icon/types";
import { Sizes } from "@components/atoms/IconButton/types";
import { ObjectValues } from "@utils/typeHelpers/objectValues";
import { Colors } from "@styles/themes/types";

import SilverbiSymbolIcon from "@assets/icons/icon-silverbi-symbol.svg";
import MenuIcon from "@assets/icons/icon-menu.svg";
import InstagramLogoIcon from "@assets/icons/icon-instagram-logo.svg";
import LinkedinLogoIcon from "@assets/icons/icon-linkedin-logo.svg";
import GithubLogoIcon from "@assets/icons/icon-github-logo.svg";
import StickerCircleIcon from "@assets/icons/icon-sticker-circle.svg";
import MarkerPinIcon from "@assets/icons/icon-marker-pin.svg";
import HeartRoundedIcon from "@assets/icons/icon-heart-rounded.svg";
import CheckCircleIcon from "@assets/icons/icon-check-circle.svg";
import ShareIcon from "@assets/icons/icon-share.svg";
import HomeIcon from "@assets/icons/icon-home.svg";
import LockIcon from "@assets/icons/icon-lock.svg";
import TextBoldIcon from "@assets/icons/icon-text-bold.svg";
import TextItalicIcon from "@assets/icons/icon-text-italic.svg";
import TextUnderlineIcon from "@assets/icons/icon-text-underline.svg";
import TextStrikeIcon from "@assets/icons/icon-text-strike.svg";
import TextAlignCenterIcon from "@assets/icons/icon-text-align-center.svg";
import TextAlignJustifyIcon from "@assets/icons/icon-text-align-justify.svg";
import TextAlignLeftIcon from "@assets/icons/icon-text-align-left.svg";
import TextAlignRightIcon from "@assets/icons/icon-text-align-right.svg";
import ArrowDownIcon from "@assets/icons/icon-arrow-down.svg";
import ArrowLeftIcon from "@assets/icons/icon-arrow-left.svg";
import ArrowRightIcon from "@assets/icons/icon-arrow-right.svg";
import ArrowUpIcon from "@assets/icons/icon-arrow-up.svg";
import ChevronDownIcon from "@assets/icons/icon-chevron-down.svg";
import ChevronUpIcon from "@assets/icons/icon-chevron-up.svg";
import ChevronLeftIcon from "@assets/icons/icon-chevron-left.svg";
import ChevronRightIcon from "@assets/icons/icon-chevron-right.svg";
import RocketIcon from "@assets/icons/icon-rocket.svg";
import ImageIcon from "@assets/icons/icon-image.svg";
import LinkIcon from "@assets/icons/icon-link.svg";
import SettingIcon from "@assets/icons/icon-settings.svg";
import TextReverseRightIcon from "@assets/icons/icon-text-reverse-right.svg";
import TextReverseLeftIcon from "@assets/icons/icon-text-reverse-left.svg";
import CodeBrowserIcon from "@assets/icons/icon-code-browser.svg";
import LayoutAltIcon from "@assets/icons/icon-layout-alt.svg";
import HorizontalBarChartIcon from "@assets/icons/icon-horizontal-bar-chart.svg";
import LeftIndentIcon from "@assets/icons/icon-left-indent.svg";
import RightIndentIcon from "@assets/icons/icon-right-indent.svg";
import TextLetterSpacingIcon from "@assets/icons/icon-text-letter-spacing.svg";
import BarChartIcon from "@assets/icons/icon-bar-chart.svg";
import TextHeadingIcon from "@assets/icons/icon-text-heading.svg";
import UserCircleIcon from "@assets/icons/icon-user-circle.svg";
import TextLineHeightIcon from "@assets/icons/icon-text-line-height.svg";
import LogoutIcon from "@assets/icons/icon-logout.svg";
import DotpointsIcon from "@assets/icons/icon-dotpoints.svg";
import ToolIcon from "@assets/icons/icon-tool.svg";
import BoxIcon from "@assets/icons/icon-box.svg";
import LoginIcon from "@assets/icons/icon-login.svg";
import FolderCodeIcon from "@assets/icons/icon-folder-code.svg";
import SearchIcon from "@assets/icons/icon-search.svg";
import TrashIcon from "@assets/icons/icon-trash.svg";
import CopyIcon from "@assets/icons/icon-copy.svg";
import CheckCircleBrokenIcon from "@assets/icons/icon-check-circle-broken.svg";
import EditIcon from "@assets/icons/icon-edit.svg";
import LockUnlocked from "@assets/icons/icon-lock-unlocked.svg";
import CalendarCheckIcon from "@assets/icons/icon-calendar-check.svg";
import AlarmClockIcon from "@assets/icons/icon-alarm-clock.svg";
import HeartRoundedFillIcon from "@assets/icons/icon-heart-rounded-fill.svg";
import UserIcon from "@assets/icons/icon-user.svg";
import XCloseIcon from "@assets/icons/icon-x-close.svg";
import BuildingIcon from "@assets/icons/icon-building.svg";
import InvertedTriangleIcon from "@assets/icons/icon-inverted-triangle.svg";
import TextTypeIcon from "@assets/icons/icon-text-type.svg";
import CodeSnippetIcon from "@assets/icons/icon-code-snippet.svg";
import SaveIcon from "@assets/icons/icon-save.svg";
import QuoteIcon from "@assets/icons/icon-quote.svg";
import VideoIcon from "@assets/icons/icon-video.svg";
import EmailIcon from "@assets/icons/icon-email.svg";
import DottedLineIcon from "@assets/icons/icon-dotted-line.svg";
import FootnoteIcon from "@assets/icons/icon-footnote.svg";
import NumberedList from "@assets/icons/icon-numbered-list.svg";

export const changeTypeToIconComponent = (type: IconName) => {
  switch (type) {
    case IconName.SILVERBI_SYMBOL:
      return SilverbiSymbolIcon;
    case IconName.MENU:
      return MenuIcon;
    case IconName.INSTAGRAM_LOGO:
      return InstagramLogoIcon;
    case IconName.LINKEDIN_LOGO:
      return LinkedinLogoIcon;
    case IconName.GITHUB_LOGO:
      return GithubLogoIcon;
    case IconName.STICKER_CIRCLE:
      return StickerCircleIcon;
    case IconName.MARKER_PIN:
      return MarkerPinIcon;
    case IconName.HEART_ROUNDED:
      return HeartRoundedIcon;
    case IconName.NUMBERED_LIST:
      return NumberedList;
    case IconName.HEART_ROUNDED_FILL:
      return HeartRoundedFillIcon;
    case IconName.ALARM_CLOCK:
      return AlarmClockIcon;
    case IconName.CALENDAR_CHECK:
      return CalendarCheckIcon;
    case IconName.CHECK_CIRCLE:
      return CheckCircleIcon;
    case IconName.SHARE:
      return ShareIcon;
    case IconName.USER:
      return UserIcon;
    case IconName.HOME:
      return HomeIcon;
    case IconName.LOCK:
      return LockIcon;
    case IconName.TEXT_BOLD:
      return TextBoldIcon;
    case IconName.TEXT_ITALIC:
      return TextItalicIcon;
    case IconName.TEXT_UNDERLINE:
      return TextUnderlineIcon;
    case IconName.TEXT_STRIKE:
      return TextStrikeIcon;
    case IconName.TEXT_ALIGN_CENTER:
      return TextAlignCenterIcon;
    case IconName.TEXT_ALIGN_JUSTIFY:
      return TextAlignJustifyIcon;
    case IconName.TEXT_ALIGN_LEFT:
      return TextAlignLeftIcon;
    case IconName.TEXT_ALIGN_RIGHT:
      return TextAlignRightIcon;
    case IconName.ARROW_DOWN:
      return ArrowDownIcon;
    case IconName.ARROW_LEFT:
      return ArrowLeftIcon;
    case IconName.ARROW_RIGHT:
      return ArrowRightIcon;
    case IconName.ARROW_UP:
      return ArrowUpIcon;
    case IconName.CHEVRON_DOWN:
      return ChevronDownIcon;
    case IconName.CHEVRON_RIGHT:
      return ChevronRightIcon;
    case IconName.CHEVRON_UP:
      return ChevronUpIcon;
    case IconName.CHEVRON_LEFT:
      return ChevronLeftIcon;
    case IconName.ROCKET:
      return RocketIcon;
    case IconName.IMAGE:
      return ImageIcon;
    case IconName.LINK:
      return LinkIcon;
    case IconName.SETTING:
      return SettingIcon;
    case IconName.BUILDING:
      return BuildingIcon;
    case IconName.TEXT_REVERSE_LEFT:
      return TextReverseLeftIcon;
    case IconName.TEXT_REVERSE_RIGHT:
      return TextReverseRightIcon;
    case IconName.CODE_BROWSER:
      return CodeBrowserIcon;
    case IconName.LAYOUT_ALT:
      return LayoutAltIcon;
    case IconName.HORIZONTAL_BAR_CHART:
      return HorizontalBarChartIcon;
    case IconName.LEFT_INDENT:
      return LeftIndentIcon;
    case IconName.RIGHT_INDENT:
      return RightIndentIcon;
    case IconName.TEXT_LETTER_SPACING:
      return TextLetterSpacingIcon;
    case IconName.X_CLOSE:
      return XCloseIcon;
    case IconName.BAR_CHART:
      return BarChartIcon;
    case IconName.TEXT_HEADING:
      return TextHeadingIcon;
    case IconName.USER_CIRCLE:
      return UserCircleIcon;
    case IconName.TEXT_LINE_HEIGHT:
      return TextLineHeightIcon;
    case IconName.LOGOUT:
      return LogoutIcon;
    case IconName.DOTPOINTS:
      return DotpointsIcon;
    case IconName.TOOL:
      return ToolIcon;
    case IconName.BOX:
      return BoxIcon;
    case IconName.LOGIN:
      return LoginIcon;
    case IconName.FOLDER_CODE:
      return FolderCodeIcon;
    case IconName.SEARCH:
      return SearchIcon;
    case IconName.TRASH:
      return TrashIcon;
    case IconName.COPY:
      return CopyIcon;
    case IconName.CHECK_CIRCLE_BROKEN:
      return CheckCircleBrokenIcon;
    case IconName.EDIT:
      return EditIcon;
    case IconName.LOCK_UNLOCKED:
      return LockUnlocked;
    case IconName.INVERTED_TRIANGLE:
      return InvertedTriangleIcon;
    case IconName.TEXT_TYPE:
      return TextTypeIcon;
    case IconName.CODE_SNIPPET:
      return CodeSnippetIcon;
    case IconName.SAVE:
      return SaveIcon;
    case IconName.QUOTE:
      return QuoteIcon;
    case IconName.VIDEO:
      return VideoIcon;
    case IconName.EMAIL:
      return EmailIcon;
    case IconName.DOTTED_LINE:
      return DottedLineIcon;
    case IconName.FOOTNOTE:
      return FootnoteIcon;
    default:
      return null;
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
