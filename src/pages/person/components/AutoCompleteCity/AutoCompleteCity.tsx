import { useEffect, useMemo, useState } from "react";

import { Autocomplete, CircularProgress, TextField } from "@mui/material";

import { useDebounce } from "../../../../shared/hooks";
import { cityGetAll } from "../../../../shared/services";

interface IAutoCompleteOptions {
  id: number;
  label: string;
}

interface IAutoCompleteCityProps {
  isExternalLoading?: boolean;
}

export const AutoCompleteCity: React.FC<IAutoCompleteCityProps> = ({
  isExternalLoading = false,
}) => {
  const { debounce } = useDebounce();

  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const [options, setOptions] = useState<IAutoCompleteOptions[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      cityGetAll(1, search).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          setOptions(
            result.data.map((cidade) => ({
              id: cidade.id,
              label: cidade.nome,
            }))
          );
        }
      });
    });
  }, [search]);

  const autoCompleteSelectedOption = useMemo(() => {
    if (!selectedId) return null;

    const selectedOption = options.find((option) => option.id === selectedId);
    if (!selectedOption) return null;

    return selectedOption;
  }, [selectedId, options]);

  return (
    <Autocomplete
      openText="Abrir"
      closeText="Fechar"
      noOptionsText="Sem opções"
      loadingText="Carregando..."
      clearText="Limpar"
      disablePortal
      loading={isLoading}
      disabled={isExternalLoading}
      popupIcon={
        isExternalLoading || isLoading ? (
          <CircularProgress size={28} />
        ) : undefined
      }
      value={autoCompleteSelectedOption}
      onInputChange={(_, newValue) => {
        setSearch(newValue);
      }}
      onChange={(_, newValue) => {
        setSelectedId(newValue?.id);
        setSearch("");
      }}
      options={options}
      renderInput={(params) => <TextField {...params} label="Cidade" />}
    />
  );
};
