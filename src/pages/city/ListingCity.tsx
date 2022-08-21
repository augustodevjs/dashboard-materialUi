import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListingTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";

export const ListingCity: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  return (
    <LayoutBase
      title="Listagem de Cidades"
      toolbars={
        <ListingTools
          showInputSearch
          textButtonNew="Nova"
          textSearch={search}
          onChangeInputSearch={(text) =>
            setSearchParams({ search: text }, { replace: true })
          }
        />
      }
    >
      asd
    </LayoutBase>
  );
};
