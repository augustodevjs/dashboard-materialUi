import React from "react";
import { ListingTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";

export const Dashboard: React.FC = () => {
  return (
    <LayoutBase
      title="Página inicial"
      toolbars={<ListingTools showInputSearch textButtonNew="Nova" />}
    >
      Testando
    </LayoutBase>
  );
};
