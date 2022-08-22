import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { ListingTools } from "../../shared/components";
import { useDebounce } from "../../shared/hooks";
import { LayoutBase } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/api/pessoas/pessoasServices";

export const ListingPerson: React.FC = () => {
  const { debounce } = useDebounce(3000, false);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PessoasService.getAll(1, search).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        }
        console.log(result);
      });
    });
  }, [search]);

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
