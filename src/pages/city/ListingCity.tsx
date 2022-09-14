import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Paper,
  LinearProgress,
  Pagination,
  IconButton,
  Icon,
} from "@mui/material";

import { useDebounce } from "../../shared/hooks";
import { LayoutBase } from "../../shared/layouts";
import { IListagemCidades } from "../../shared/types";
import { Environment } from "../../shared/environment";
import { ListingTools } from "../../shared/components";
import { cityDeleteById, cityGetAll } from "../../shared/services";

export const ListingCity: React.FC = () => {
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();

  const [rows, setRows] = useState<IListagemCidades[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  const page = useMemo(() => {
    return Number(searchParams.get("page") || "1");
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      cityGetAll(page, search).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        }
        setRows(result.data);
        setTotalCount(result.totalCount);
      });
    });
  }, [search, page]);

  const handleDelete = (id: number) => {
    cityDeleteById(id).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      }

      const filteredRows = rows.filter((row) => row.id !== id);
      setRows(filteredRows);
      alert("Registro apagado com sucesso!");
    });
  };

  return (
    <LayoutBase
      title="Listagem de Cidades"
      toolbars={
        <ListingTools
          showInputSearch
          textButtonNew="Nova"
          textSearch={search}
          onClickNew={() => navigate("/cidades/detalhe/nova")}
          onChangeInputSearch={(text) =>
            setSearchParams({ search: text, page: "1" }, { replace: true })
          }
        />
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={100}>Ações</TableCell>
              <TableCell>Nome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <IconButton size="small" onClick={() => handleDelete(row.id)}>
                    <Icon>delete</Icon>
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => navigate(`/cidades/detalhe/${row.id}`)}
                  >
                    <Icon>edit</Icon>
                  </IconButton>
                </TableCell>
                <TableCell>{row.nome}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {totalCount === 0 && !isLoading && (
            <caption>{Environment.LISTAGEM_VAZIA}</caption>
          )}

          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress variant="indeterminate" />
                </TableCell>
              </TableRow>
            )}

            {totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS && (
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination
                    page={page}
                    count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                    onChange={(_, newPage) =>
                      setSearchParams(
                        { search, page: newPage.toString() },
                        { replace: true }
                      )
                    }
                  />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBase>
  );
};
