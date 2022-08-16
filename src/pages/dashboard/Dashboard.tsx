import React from "react";
import { Toolbar } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";

export const Dashboard: React.FC = () => {
  return (
    <LayoutBase
      title="Página inicial"
      toolbars={(
        <Toolbar
          showInputSearch
          textButtonNew="Nova"
        />
      )}
    >
      Testando
    </LayoutBase>
  );
};
