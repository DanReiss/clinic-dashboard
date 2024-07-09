"use client"
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Context } from '@/context/AuthContext';

export default function Login() {
  const router = useRouter();
  const { handleSubmit, register } = useForm();
  const [formData, setFormData] = useState();
  const { authenticated, handleLogin } = useContext(Context);


  useEffect(() => {
    if(authenticated){
      router.push('/dashboard')
    }
  }, [authenticated])

  const onSubmitForm = async (data) => {
    const {username, password} = data;
    setFormData(data);
    const {status} = await handleLogin(data);
    
    if (status === 'success') {
      router.push('/dashboard');
    } else {
      console.error('Login failed');
    }
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="flex-1" />
      <div className="flex-1 grid items-center min-h-screen bg-p_white">
        <form className="flex flex-col gap-7 max-w-[35rem] w-[75%] m-auto" onSubmit={handleSubmit((data) => onSubmitForm(data))}>
          <div>
            <h1 className="login-title text-3xl text-p_orange font-medium my-1">Bem vindo(a) de volta!</h1>
            <h2 className="text-lg italic font-light my-1">Faça Log-in para continuar</h2>
          </div>
          <input {...register('username', { required: true })} type="text" placeholder="Nome de usuário" className="block w-full border-2 border-p_graysecondary p-2 rounded" />
          <input {...register('password', { required: true })} type="text" placeholder="Senha" className="block w-full border-2 border-p_graysecondary p-2 rounded" />
          <div className="flex flex-row justify-between">
            <label>
              <input {...register('remember')} type="checkbox" className="mr-2"/>
              Remember Me
            </label>
            <a href="/recovery" className="underline">Esqueceu a Senha?</a>
          </div>
          <button type="submit" className="w-[10rem] m-auto text-p_white bg-p_orange border-2 border-p_graysecondary p-2 rounded-full">Enviar</button>
        </form>
      </div>
    </main>
  );
}
