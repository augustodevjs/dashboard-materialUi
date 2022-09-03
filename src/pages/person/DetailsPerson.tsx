import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LinearProgress } from "@mui/material";

import { DetailsTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
import { deleteById, getById } from "../../shared/services";

export const DetailsPerson: React.FC = () => {
  const { id = "nova" } = useParams<"id">();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

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
      {isLoading && <LinearProgress variant="indeterminate" />}

      <p>Detalhes de Pessoa</p>
    </LayoutBase>
  );
};
