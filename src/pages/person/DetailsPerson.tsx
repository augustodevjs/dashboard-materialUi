import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PersonForm } from "../../pages";
import { useTForm } from "../../shared/hooks";
import { IFormPerson } from "../../shared/types";
import { LayoutBase } from "../../shared/layouts";
import { DetailsTools } from "../../shared/components";
import { personFormValidationSchema } from "../../shared/validators";
import {
  personCreate,
  personDeleteById,
  personGetById,
  personUpdateById,
} from "../../shared/services";

export const DetailsPerson: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<IFormPerson>({
    resolver: yupResolver(personFormValidationSchema),
    mode: "onBlur",
  });

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id = "nova" } = useParams<"id">();
  const { save, saveAndClose, isSaveAndClose } = useTForm();

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);
      setTimeout(() => {
        personGetById(Number(id)).then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
            navigate("/pessoas");
          } else {
            setName(result.nomeCompleto);
            form.reset(result);
          }
        });
      }, 300);
    } else {
      form.reset();
    }
  }, [id]);

  const onSubmit = (data: IFormPerson) => {
    if (id === "nova") {
      personCreate(data).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          if (isSaveAndClose()) {
            navigate("/pessoas");
          } else {
            navigate(`/pessoas/detalhe/${result}`);
          }
        }
      });
    } else {
      setIsLoading(true);

      personUpdateById(Number(id), { id: Number(id), ...data }).then(
        (result) => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            setIsLoading(false);

            if (isSaveAndClose()) {
              navigate("/pessoas");
            } else {
              setName(data.nomeCompleto);
            }
          }
        }
      );
    }
  };

  const handleDelete = (id: number) => {
    personDeleteById(id).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      }

      alert("Dado apagado com sucesso");
      navigate("/pessoas");
    });
  };

  return (
    <LayoutBase
      title={
        id !== "nova" && isLoading
          ? "Carregando..."
          : id !== "nova" && !isLoading
          ? name
          : "Nova Pessoa"
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
            navigate("/pessoas/detalhe/nova");
          }}
          onClickBack={() => {
            navigate("/pessoas");
          }}
        />
      }
    >
      <FormProvider {...form}>
        <PersonForm onSubmit={onSubmit} isLoading={isLoading} />
      </FormProvider>
    </LayoutBase>
  );
};
