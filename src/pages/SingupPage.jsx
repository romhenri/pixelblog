import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'

const SingupPage = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    console.log(displayName, email, password, confirmPassword);
    console.log(user);
  } 

  return (
    <main>
      <section className='simple'>
        <h2>Cadastre-se</h2>

        <form onSubmit={handleSubmit}>

          <Input
            label="Nome:"
            placeholder={"Nome de exbição"}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          required/>

          <Input
            label="Email:"
            type="email"
            placeholder={"Email para registro"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>

          <Input
            label="Senha:"
            type="password"
            placeholder={"Insira sua senha"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>

          <Input
            label="Confirme sua senha:"
            type="password"
            placeholder={"Insira sua senha novamente"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
        
          <label>Use uma senha Forte!</label>

          <div>
            {error && <p className='error'>{error}</p>}
          </div>

          <ButtonsLine>
            <Button text={"Continuar sem Conta"} bg="transparent"
					className="btn-b"/>
            <Button text={"Cadastrar"}/>
          </ButtonsLine>
        </form>
      
      </section>

    </main>
  )
}

export default SingupPage