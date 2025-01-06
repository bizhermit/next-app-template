"use client";

import { isEmpty } from "@/objects/string";
import { Dialog, useDialogRef } from "@/react/elements/dialog";
import { useFormItemRef } from "@/react/elements/form/item-ref";
import { TextBox } from "@/react/elements/form/items/text-box";
import { BadgeIcon, BookmarkIcon, ButtonIcon, CalendarIcon, CardIcon, CheckCircleIcon, CheckIcon, ChocolateMenuIcon, CircleFillIcon, CircleIcon, ClearAllIcon, ClockIcon, CloudDownloadIcon, CloudIcon, CloudUploadIcon, ContainerIcon, CrossCircleIcon, CrossIcon, DeleteBackIcon, DeleteIcon, DoubleDownIcon, DoubleLeftIcon, DoubleRightIcon, DoubleUpIcon, DownFillIcon, DownIcon, ElementIcon, ExclamationCircleIcon, ExclamationDiamondIcon, ExclamationIcon, ExclamationTriangleIcon, ExLinkIcon, FileAddIcon, FileIcon, FilterIcon, FolderAddIcon, FolderIcon, FormIcon, FormItemIcon, GearIcon, GridIcon, HeartFillIcon, HeartHalfFillIcon, HeartIcon, HomeIcon, HorizontalDividerIcon, KebabMenuIcon, LabelIcon, LeftIcon, LeftRightIcon, ListFilterIcon, ListIcon, LoadingIcon, MagnifyingGlassIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon, MailIcon, MeatballsMenuIcon, MenuIcon, MenuLeftIcon, MenuLeftRightIcon, MenuRightIcon, MinusCircleIcon, MinusIcon, NavContainerIcon, OrderListIcon, PinIcon, PlusCircleIcon, PlusIcon, PopupIcon, PowerIcon, QuestionCircleIcon, QuestionIcon, RedoIcon, ReloadIcon, RightIcon, SaveIcon, ShareIcon, SignInIcon, SignOutIcon, SlideContainerIcon, SmileIcon, SplitContainerIcon, StarFillIcon, StarHalfFillIcon, StarIcon, StepperIcon, SyncIcon, TabContainerIcon, TextBoxIcon, TodayIcon, TooltipIcon, TrashCanIcon, UndoIcon, UnloadIcon, UpDownIcon, UpFillIcon, UpIcon, UserAddIcon, UserIcon, UserMinusIcon, UsersIcon, VerticalDividerIcon } from "@/react/elements/icon";
import { useMemo, useState } from "react";
import css from "./page.module.scss";

const icons = [
  PlusIcon,
  PlusCircleIcon,
  MinusIcon,
  MinusCircleIcon,
  CrossIcon,
  CrossCircleIcon,
  MenuIcon,
  MenuLeftIcon,
  MenuRightIcon,
  MenuLeftRightIcon,
  KebabMenuIcon,
  MeatballsMenuIcon,
  ChocolateMenuIcon,
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
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
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
  FileIcon,
  FileAddIcon,
  ExclamationIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ExclamationDiamondIcon,
  QuestionIcon,
  QuestionCircleIcon,
  UserIcon,
  UserAddIcon,
  UserMinusIcon,
  UsersIcon,
  PowerIcon,
  TrashCanIcon,
  DeleteIcon,
  DeleteBackIcon,
  CheckIcon,
  CheckCircleIcon,
  ShareIcon,
  BookmarkIcon,
  GearIcon,
  GridIcon,
  PinIcon,
  MailIcon,
  StarIcon,
  StarFillIcon,
  StarHalfFillIcon,
  HeartIcon,
  HeartFillIcon,
  HeartHalfFillIcon,
  FilterIcon,
  ListFilterIcon,
];

const parseNameWithoutIcon = (name: string) => {
  return name.match(/(.*)Icon/)?.[1] || name;
};

const Page = () => {
  const filterText = useFormItemRef<string>();
  const [SelectedIcon, setSelectedIcon] = useState<React.JSX.Element | null>(null);
  const dialog = useDialogRef();

  const nodes = useMemo(() => {
    const ft = filterText.value?.toLowerCase();
    const filteredIcons = isEmpty(ft) ? icons : icons.filter((Icon) => {
      const name = parseNameWithoutIcon(Icon.name).toLowerCase();
      if (name.indexOf(ft) < 0) return false;
      return true;
    });
    return filteredIcons.map((Icon, i) => {
      const name = parseNameWithoutIcon(Icon.name);
      return (
        <div
          key={name}
          className={css.item}
          title={name}
          onClick={() => {
            setSelectedIcon(
              <div className={css.dialog}>
                <Icon className={css.big} />
                <div className={css.label}>
                  {name}
                </div>
              </div>
            );
            dialog.open();
          }}
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
    });
  }, [filterText.value]);

  return (
    <div className={css.main}>
      <div className={css.header}>
        <TextBox
          ref={filterText}
        />
        <div className={css.total}>
          : {nodes.length}
        </div>
      </div>
      <div className={css.table}>
        {nodes}
      </div>
      <Dialog ref={dialog}>
        {SelectedIcon && SelectedIcon}
      </Dialog>
    </div>
  );
};

export default Page;
