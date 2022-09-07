import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DetailsTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
import { deleteById, getById } from "../../shared/services";

import { useForm, FormProvider } from "react-hook-form";
import { PersonForm } from "./person-form/person-form";

interface IFormData {
  email: string;
  cityId: string;
  fullName: string;
}

export const DetailsPerson: React.FC = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id = "nova" } = useParams<"id">();
  const navigate = useNavigate();

  const form = useForm<IFormData>();

  const onSubmit = (data: IFormData) => console.log(data);

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);

      getById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate("/person");
          return;
        }

        setName(result.nomeCompleto);
        console.log(result);
      });
    }
  }, []);

  const handleSave = () => {
    console.log("Save");
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
          onClickSave={handleSave}
          onClickDelete={() => handleDelete(Number(id))}
          onClickSaveAndClose={handleSave}
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
        <PersonForm onSubmit={onSubmit} />
      </FormProvider>
    </LayoutBase>
  );
};
