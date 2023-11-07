import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import "./App.css";
import FormLogo from "./assets/form-logo.png";

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, "a senha deve ter no mínimo 6 dígitos").required('A senha é obrigatório'),
    confirmPassword: yup.string().required('Confirmar a senha é obrigatório').oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required()

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});

function onSubmit(userData) {
  
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="imagem-logo" />

      <label>
        Nome
        <input {...register("name", { required: true })} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>

      <label>
        E-mail
        <input {...register("email",{ required: true })} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>

      <label>
        Senha
        <input type="password" {...register("password" ,{ required: true })} />
        {errors.password && <span>{errors.password.message}</span>}
      </label>

      <label>
        Confirmar Senha
        <input type="password"{...register("confirmPassword" ,{ required: true })} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </label>

      <button type="submit">Cadastrar-se</button>
    </form>
  );
}

export default App;
