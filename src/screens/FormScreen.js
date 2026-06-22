import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import {
  useState,
  useContext,
} from 'react'

import Header from '../components/Header'

import {
  UserContext,
} from '../context/UserContext'

export default function FormScreen() {
  const {
    peso,
    setPeso,
    altura,
    setAltura,
    objetivo,
    setObjetivo,
    cronograma,
    setCronograma,
  } = useContext(UserContext)

  const [dia, setDia] =
    useState('segunda')

  const [tipoTreino, setTipoTreino] =
    useState('Peito + Ombro + Tríceps')

  const [treino, setTreino] =
    useState('')

  const exercicios = {
    'Peito + Ombro + Tríceps': [
      'Supino reto',
      'Supino inclinado',
      'Crucifixo',
      'Desenvolvimento militar',
      'Elevação lateral',
      'Tríceps corda',
      'Rosca testa',
    ],

    'Costas + Bíceps': [
      'Barra fixa',
      'Remada curvada',
      'Puxada frontal',
      'Remada cavalinho',
      'Rosca direta',
      'Rosca Scott',
      'Rosca alternada',
    ],

    'Perna Completa': [
      'Agachamento livre',
      'Leg Press',
      'Hack Squat',
      'Extensora',
      'Flexora',
      'Stiff',
      'Afundo',
    ],

    Upper: [
      'Supino reto',
      'Barra fixa',
      'Remada curvada',
      'Desenvolvimento militar',
      'Rosca direta',
      'Tríceps corda',
    ],

    Push: [
      'Supino inclinado',
      'Crucifixo',
      'Desenvolvimento militar',
      'Elevação lateral',
      'Tríceps corda',
    ],

    Pull: [
      'Barra fixa',
      'Remada curvada',
      'Puxada frontal',
      'Rosca Scott',
      'Rosca direta',
    ],

    Braços: [
      'Rosca direta',
      'Rosca Scott',
      'Rosca alternada',
      'Tríceps corda',
      'Rosca testa',
    ],
  }

  function salvarTreino() {
    setCronograma({
      ...cronograma,
      [dia]: tipoTreino,
    })

    setTreino(`
DIA 📅

${dia.toUpperCase()}

━━━━━━━━━━━━━━

TREINO 💪

${tipoTreino}

━━━━━━━━━━━━━━

EXERCÍCIOS

• ${exercicios[
      tipoTreino
    ].join('\n• ')}
`)
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          '#0F172A',
      }}
    >
      <Header title='Montar Treino' />

      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          Peso
        </Text>

        <TextInput
          value={peso}
          onChangeText={setPeso}
          style={{
            backgroundColor:
              '#1E293B',
            color: '#fff',
            padding: 15,
            borderRadius: 12,
            marginTop: 10,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}
        >
          Altura
        </Text>

        <TextInput
          value={altura}
          onChangeText={setAltura}
          style={{
            backgroundColor:
              '#1E293B',
            color: '#fff',
            padding: 15,
            borderRadius: 12,
            marginTop: 10,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Objetivo
        </Text>

        <TouchableOpacity
          onPress={() =>
            setObjetivo(
              'Hipertrofia 💪'
            )
          }
          style={{
            backgroundColor:
              objetivo ===
              'Hipertrofia 💪'
                ? '#2563EB'
                : '#1E293B',
            padding: 15,
            borderRadius: 12,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign:
                'center',
            }}
          >
            Hipertrofia 💪
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            setObjetivo(
              'Emagrecimento 🔥'
            )
          }
          style={{
            backgroundColor:
              objetivo ===
              'Emagrecimento 🔥'
                ? '#2563EB'
                : '#1E293B',
            padding: 15,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign:
                'center',
            }}
          >
            Emagrecimento 🔥
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Dia da Semana 📅
        </Text>

        {[
          'segunda',
          'terca',
          'quarta',
          'quinta',
          'sexta',
          'sabado',
          'domingo',
        ].map(item => (
          <TouchableOpacity
            key={item}
            onPress={() =>
              setDia(item)
            }
            style={{
              backgroundColor:
                dia === item
                  ? '#2563EB'
                  : '#1E293B',
              padding: 14,
              borderRadius: 12,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                color: '#fff',
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Tipo de Treino 💪
        </Text>

        {Object.keys(
          exercicios
        ).map(item => (
          <TouchableOpacity
            key={item}
            onPress={() =>
              setTipoTreino(
                item
              )
            }
            style={{
              backgroundColor:
                tipoTreino ===
                item
                  ? '#22C55E'
                  : '#1E293B',
              padding: 14,
              borderRadius: 12,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                color: '#fff',
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={salvarTreino}
          style={{
            backgroundColor:
              '#F59E0B',
            padding: 18,
            borderRadius: 12,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              textAlign:
                'center',
              fontWeight:
                'bold',
            }}
          >
            SALVAR TREINO
          </Text>
        </TouchableOpacity>

        {treino !== '' && (
          <View
            style={{
              backgroundColor:
                '#1E293B',
              padding: 20,
              borderRadius: 15,
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                color: '#fff',
                lineHeight: 28,
              }}
            >
              {treino}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}