import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import { PersonForm } from "../../pages";
import { IFormData } from "../../shared/types";
import { LayoutBase } from "../../shared/layouts";
import { DetailsTools } from "../../shared/components";
import { create, deleteById, getById, updateById } from "../../shared/services";

export const DetailsPerson: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<IFormData>();
  const { id = "nova" } = useParams<"id">();

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);

      getById(Number(id)).then((result) => {
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
      create(data).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        }

        navigate(`/pessoas/detalhe/${result}`);
      });
    } else {
      updateById(Number(id), { id: Number(id), ...data }).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        }

        setName(data.nomeCompleto);
      });
    }
  };

  const handleDelete = (id: number) => {
    deleteById(id).then((result) => {
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
          onClickSaveAndClose={() => navigate("/person")}
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
