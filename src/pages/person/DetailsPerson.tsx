import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { PersonForm } from "../../pages";
import { useTForm } from "../../shared/hooks";
import { IFormData } from "../../shared/types";
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
  const form = useForm<IFormData>({
    resolver: yupResolver(personFormValidationSchema),
    mode: "onChange",
  });

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id = "nova" } = useParams<"id">();
  const { save, saveAndClose, isSaveAndClose } = useTForm();

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);

      personGetById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate("/person");
        } else {
          setName(result.nomeCompleto);
          form.reset(result);
        }
      });
    } else {
      form.reset({
        email: "",
        nomeCompleto: "",
        cidadeId: "",
      });
    }
  }, [id]);

  const onSubmit = (data: IFormData) => {
    setIsLoading(true);

    if (id === "nova") {
      personCreate(data).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          if (isSaveAndClose()) {
            navigate("/person");
          } else {
            navigate(`/pessoas/detalhe/${result}`);
          }
        }
      });
    } else {
      personUpdateById(Number(id), { id: Number(id), ...data }).then(
        (result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            if (isSaveAndClose()) {
              navigate("/person");
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
      navigate("/person");
    });
  };

  return (
    <LayoutBase
      title={id === "nova" ? "Nova Pessoa" : name}
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
            navigate("/person");
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
