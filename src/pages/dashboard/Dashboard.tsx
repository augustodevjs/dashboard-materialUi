import React from "react";
import { DetailsTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";

export const Dashboard: React.FC = () => {
  return (
    <LayoutBase title="Página inicial" toolbars={<DetailsTools />}>
      Testando
    </LayoutBase>
  );
};
