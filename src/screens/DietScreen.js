import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import {
  useContext,
} from 'react'

import Header from '../components/Header'

import {
  UserContext,
} from '../context/UserContext'

export default function DietScreen() {
  const {
    objetivo,
    dieta,
    setDieta,
  } = useContext(UserContext)

  const dietasHipertrofia = [
    {
      nome:
        'Plano Massa 1 💪',

      texto:
        'Café da manhã: 3 ovos + pão integral + banana\n\nLanche: Iogurte com aveia\n\nAlmoço: Arroz, feijão, frango grelhado e batata\n\nLanche: Vitamina de banana\n\nJantar: Carne magra com arroz',
    },

    {
      nome:
        'Plano Massa 2 💪',

      texto:
        'Café da manhã: Pão integral + ovos\n\nLanche: Uvas\n\nAlmoço: Carne magra, arroz e legumes\n\nLanche: Banana\n\nJantar: Macarrão integral com frango',
    },

    {
      nome:
        'Plano Massa 3 💪',

      texto:
        'Café da manhã: 4 ovos + pão integral + banana\n\nLanche: Iogurte com aveia\n\nAlmoço: Arroz, feijão, frango e batata-doce\n\nLanche: Vitamina de banana\n\nJantar: Carne magra com arroz',
    },
  ]

  const dietasEmagrecer = [
    {
      nome:
        'Plano Definição 1 🔥',

      texto:
        'Café da manhã: 2 ovos mexidos + pão integral\n\nLanche: Banana\n\nAlmoço: Arroz integral, feijão, frango grelhado e salada\n\nLanche: Iogurte natural\n\nJantar: Omelete com tomate',
    },

    {
      nome:
        'Plano Definição 2 🔥',

      texto:
        'Café da manhã: Vitamina de banana com aveia\n\nLanche: Maçã\n\nAlmoço: Frango grelhado, arroz e legumes\n\nLanche: Castanhas\n\nJantar: Sopa de legumes',
    },

    {
      nome:
        'Plano Definição 3 🔥',

      texto:
        'Café da manhã: Tapioca com frango\n\nLanche: Mamão\n\nAlmoço: Frango grelhado e legumes\n\nLanche: Iogurte natural\n\nJantar: Salada completa',
    },
  ]

  const dietas =
    objetivo ===
    'Emagrecimento 🔥'
      ? dietasEmagrecer
      : dietasHipertrofia

  function selecionarDieta(
    dietaSelecionada
  ) {
    setDieta(
      dietaSelecionada.texto
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          '#0F172A',
      }}
    >
      <Header title='Dietas' />

      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          Dietas Recomendadas
        </Text>

        <Text
          style={{
            color: '#94A3B8',
            marginBottom: 25,
            fontSize: 16,
          }}
        >
          Objetivo atual:
          {' '}
          {objetivo}
        </Text>

        {dietas.map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                selecionarDieta(
                  item
                )
              }
              style={{
                backgroundColor:
                  '#1E293B',
                padding: 22,
                borderRadius: 24,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  fontWeight:
                    'bold',
                  marginBottom: 15,
                }}
              >
                {item.nome}
              </Text>

              <Text
                style={{
                  color: '#CBD5E1',
                  fontSize: 17,
                  lineHeight: 28,
                }}
              >
                {item.texto}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>
    </View>
  )
}