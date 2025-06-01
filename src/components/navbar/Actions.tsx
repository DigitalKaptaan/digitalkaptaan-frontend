import React from "react";
import navStyle from "@/styles/nav.module.css";
import { CustomButton } from "@/common";
type Props = {
  onAction: () => void;
};

const Actions: React.FC<Props> = ({ onAction }) => (
  <div className={navStyle.actions}>
    <CustomButton variant="primary" title="Click Me" onClick={onAction} />
  </div>
);

export default Actions;
