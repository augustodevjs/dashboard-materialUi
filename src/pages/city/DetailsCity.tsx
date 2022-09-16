import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CityForm } from "../../pages";
import { useTForm } from "../../shared/hooks";
import { IFormCity } from "../../shared/types";
import { LayoutBase } from "../../shared/layouts";
import { DetailsTools } from "../../shared/components";
import { cityFormValidationSchema } from "../../shared/validators";

import {
  cityCreate,
  cityDeleteById,
  cityGetById,
  cityUpdateById,
} from "../../shared/services";

export const DetailsCity: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<IFormCity>({
    resolver: yupResolver(cityFormValidationSchema),
    mode: "onChange",
  });

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id = "nova" } = useParams<"id">();
  const { save, saveAndClose, isSaveAndClose } = useTForm();

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);
      setTimeout(() => {
        cityGetById(Number(id)).then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
            navigate("/cidades");
          } else {
            setName(result.nome);
            form.reset(result);
          }
        });
      }, 300);
    } else {
      form.reset({
        nome: "",
      });
    }
  }, [id]);

  const onSubmit = (data: IFormCity) => {
    setIsLoading(true);

    if (id === "nova") {
      cityCreate(data).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          if (isSaveAndClose()) {
            navigate("/cidades");
          } else {
            navigate(`/cidades/detalhe/${result}`);
          }
        }
      });
    } else {
      cityUpdateById(Number(id), { id: Number(id), ...data }).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          if (isSaveAndClose()) {
            navigate("/cidades");
            setName(data.nome);
          }
        }
      });
    }
  };

  const handleDelete = (id: number) => {
    cityDeleteById(id).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      }

      alert("Dado apagado com sucesso");
      navigate("/cidades");
    });
  };

  return (
    <LayoutBase
      title={
        id !== "nova" && isLoading
          ? "Carregando..."
          : id !== "nova" && !isLoading
          ? name
          : "Nova Cidade"
      }
      toolbars={
        <DetailsTools
          textButtonNew="Nova"
          showButtonSaveAndClose
          showButtonNew={id !== "nova"}
          showButtonDelete={id !== "nova"}
          onClickSave={save}
          onClickSaveAndClose={saveAndClose}
          onClickDelete={() => handleDelete(Number(id))}
          onClickNew={() => {
            navigate("/cidades/detalhe/nova");
          }}
          onClickBack={() => {
            navigate("/cidades");
          }}
        />
      }
    >
      <FormProvider {...form}>
        <CityForm onSubmit={onSubmit} isLoading={isLoading} />
      </FormProvider>
    </LayoutBase>
  );
};
