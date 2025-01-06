import { BadgeIcon, ButtonIcon, CalendarIcon, CardIcon, CircleFillIcon, CircleIcon, ClearAllIcon, ClockIcon, CloudDownloadIcon, CloudIcon, CloudUploadIcon, ContainerIcon, CrossIcon, DoubleDownIcon, DoubleLeftIcon, DoubleRightIcon, DoubleUpIcon, DownFillIcon, DownIcon, ElementIcon, ExLinkIcon, FolderAddIcon, FolderIcon, FormIcon, FormItemIcon, HomeIcon, HorizontalDividerIcon, LabelIcon, LeftIcon, LeftRightIcon, ListIcon, LoadingIcon, MagnifyingGlassIcon, MenuIcon, MenuLeftIcon, MenuLeftRightIcon, MenuRightIcon, MinusIcon, NavContainerIcon, OrderListIcon, PlusIcon, PopupIcon, RedoIcon, ReloadIcon, RightIcon, SaveIcon, SignInIcon, SignOutIcon, SlideContainerIcon, SmileIcon, SplitContainerIcon, StepperIcon, SyncIcon, TabContainerIcon, TextBoxIcon, TodayIcon, TooltipIcon, UndoIcon, UnloadIcon, UpDownIcon, UpFillIcon, UpIcon, VerticalDividerIcon } from "@/react/elements/icon";
import css from "./page.module.scss";

const icons = [
  PlusIcon,
  MinusIcon,
  CrossIcon,
  MenuIcon,
  MenuLeftIcon,
  MenuRightIcon,
  MenuLeftRightIcon,
  LeftIcon,
  DoubleLeftIcon,
  RightIcon,
  DoubleRightIcon,
  UpIcon,
  UpFillIcon,
  DoubleUpIcon,
  DownIcon,
  DownFillIcon,
  DoubleDownIcon,
  LeftRightIcon,
  UpDownIcon,
  CalendarIcon,
  TodayIcon,
  ClockIcon,
  ListIcon,
  OrderListIcon,
  SaveIcon,
  UndoIcon,
  RedoIcon,
  ClearAllIcon,
  CloudIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CircleIcon,
  CircleFillIcon,
  ReloadIcon,
  UnloadIcon,
  SyncIcon,
  HomeIcon,
  ElementIcon,
  SmileIcon,
  ButtonIcon,
  ExLinkIcon,
  ContainerIcon,
  NavContainerIcon,
  PopupIcon,
  FormIcon,
  FormItemIcon,
  MagnifyingGlassIcon,
  TextBoxIcon,
  TabContainerIcon,
  SlideContainerIcon,
  SplitContainerIcon,
  LoadingIcon,
  LabelIcon,
  StepperIcon,
  VerticalDividerIcon,
  HorizontalDividerIcon,
  TooltipIcon,
  BadgeIcon,
  CardIcon,
  SignInIcon,
  SignOutIcon,
  FolderIcon,
  FolderAddIcon,
];

const Page = () => {
  return (
    <div className={css.main}>
      <div className={css.table}>
        {icons.map((Icon, i) => {
          const name = Icon.name.match(/(.*)Icon/)?.[1] || Icon.name;
          return (
            <div
              key={name}
              className={css.item}
              title={name}
            >
              <div className={css.index}>
                {i + 1}
              </div>
              <div className={css.label}>
                {name}
              </div>
              <div className={css.icon}>
                <Icon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
