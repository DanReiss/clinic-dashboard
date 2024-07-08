export default function Login() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="flex-1" />
      <div className="flex-1 grid items-center min-h-screen bg-p_white">
        <form className="flex flex-col gap-7 max-w-[35rem] w-[75%] m-auto">
          <div>
            <h1 className="login-title text-3xl text-p_orange font-medium my-1">Bem vindo(a) de volta!</h1>
            <h2 className="text-lg italic font-light my-1">Faça Log-in para continuar</h2>
          </div>
          <input type="text" placeholder="Email ou ID" className="block w-full border-2 border-p_graysecondary p-2 rounded" />
          <input type="text" placeholder="Senha" className="block w-full border-2 border-p_graysecondary p-2 rounded" />
          <div className="flex flex-row justify-between">
            <label>
              <input type="checkbox" className="mr-2" disabled />
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
