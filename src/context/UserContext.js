import {
  createContext,
  useState,
} from 'react'

export const UserContext =
  createContext()

export function UserProvider({
  children,
}) {
  const [usuario, setUsuario] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [senha, setSenha] =
    useState('')

  const [peso, setPeso] =
    useState('72')

  const [altura, setAltura] =
    useState('1.78')

  const [objetivo, setObjetivo] =
    useState('Hipertrofia 💪')

  const [dieta, setDieta] =
    useState(
      'Nenhuma dieta selecionada'
    )

  const [metaAgua, setMetaAgua] =
    useState(2000)

  const [
    aguaConsumida,
    setAguaConsumida,
  ] = useState(0)

  const [cronograma, setCronograma] =
    useState({})

  const [
    historicoPeso,
    setHistoricoPeso,
  ] = useState([])

  const pesoNumero =
    parseFloat(
      peso.toString().replace(
        ',',
        '.'
      )
    ) || 0

  const alturaNumero =
    parseFloat(
      altura.toString().replace(
        ',',
        '.'
      )
    ) || 0

  const imc =
    alturaNumero > 0
      ? (
          pesoNumero /
          (alturaNumero *
            alturaNumero)
        ).toFixed(1)
      : 0

  return (
    <UserContext.Provider
      value={{
        usuario,
        setUsuario,

        email,
        setEmail,

        senha,
        setSenha,

        peso,
        setPeso,

        altura,
        setAltura,

        objetivo,
        setObjetivo,

        dieta,
        setDieta,

        metaAgua,
        setMetaAgua,

        aguaConsumida,
        setAguaConsumida,

        cronograma,
        setCronograma,

        historicoPeso,
        setHistoricoPeso,

        imc,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}