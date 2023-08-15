import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'

const SingupPage = () => {
  return (
    <main>

      <section className='simple'>
        <h2>Cadastre-se</h2>

        <form action="">

          <Input label="Nome:" placeholder={"Nome de exbição"} required/>

          <Input label="Email:" type="email" placeholder={"Email para registro"} required/>

          <Input label="Senha:" type="password" placeholder={"Insira sua senha"} required/>

          <Input label="Confirme sua senha:" type="password" placeholder={"Insira sua senha novamente"} required/>
        
          <label>Use uma senha Forte!</label>

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