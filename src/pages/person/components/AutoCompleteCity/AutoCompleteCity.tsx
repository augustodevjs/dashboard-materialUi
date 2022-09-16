import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../../shared/hooks";
import { cityGetAll, personGetAll } from "../../../../shared/services";

interface IAutoCompleteOptions {
  id: number;
  label: string;
}

export const AutoCompleteCity: React.FC = () => {
  const { debounce } = useDebounce();

  const [options, setOptions] = useState<IAutoCompleteOptions[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(options);
  }, [options]);

  useEffect(() => {
    debounce(() => {
      cityGetAll(1).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          // alert(result.message);
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
  }, []);

  return (
    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label="Cidade" />}
    />
  );
};
