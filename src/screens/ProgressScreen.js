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

export default function ProgressScreen() {
  const {
    historicoPeso,
    setHistoricoPeso,

    metaAgua,
    setMetaAgua,

    aguaConsumida,
    setAguaConsumida,
  } = useContext(UserContext)

  const [pesoSemana, setPesoSemana] =
    useState('')

  const [novaMeta, setNovaMeta] =
    useState(
      String(metaAgua)
    )

  function adicionarPeso() {
    if (!pesoSemana) return

    const novoRegistro = {
      semana:
        historicoPeso.length + 1,

      peso: Number(
        pesoSemana
      ),
    }

    setHistoricoPeso([
      ...historicoPeso,
      novoRegistro,
    ])

    setPesoSemana('')
  }

  function limparHistorico() {
    setHistoricoPeso([])
  }

  const pesoInicial =
    historicoPeso.length > 0
      ? historicoPeso[0].peso
      : 0

  const pesoAtual =
    historicoPeso.length > 0
      ? historicoPeso[
          historicoPeso.length - 1
        ].peso
      : 0

  const diferenca =
    pesoAtual - pesoInicial

  const porcentagem =
    metaAgua > 0
      ? Math.min(
          (
            aguaConsumida /
            metaAgua
          ) * 100,
          100
        )
      : 0

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          '#0F172A',
      }}
    >
      <Header title='Evolução' />

      <ScrollView
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            💧 Controle de Água
          </Text>

          <TextInput
            value={novaMeta}
            onChangeText={
              setNovaMeta
            }
            keyboardType='numeric'
            placeholder='Meta em ml'
            placeholderTextColor='#94A3B8'
            style={{
              backgroundColor:
                '#0F172A',
              color: '#fff',
              padding: 15,
              borderRadius: 12,
              marginBottom: 10,
            }}
          />

          <TouchableOpacity
            onPress={() =>
              setMetaAgua(
                Number(
                  novaMeta
                )
              )
            }
            style={{
              backgroundColor:
                '#2563EB',
              padding: 15,
              borderRadius: 12,
              marginBottom: 15,
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
              SALVAR META
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: '#fff',
              fontSize: 18,
            }}
          >
            {aguaConsumida} / {metaAgua} ml
          </Text>

          <View
            style={{
              height: 18,
              backgroundColor:
                '#334155',
              borderRadius: 20,
              marginTop: 15,
              overflow:
                'hidden',
            }}
          >
            <View
              style={{
                height: '100%',
                width:
                  `${porcentagem}%`,
                backgroundColor:
                  '#22C55E',
              }}
            />
          </View>

          <Text
            style={{
              color: '#CBD5E1',
              marginTop: 10,
            }}
          >
            {Math.round(
              porcentagem
            )}
            % concluído
          </Text>

          {aguaConsumida >=
            metaAgua &&
            metaAgua > 0 && (
              <Text
                style={{
                  color:
                    '#22C55E',
                  fontWeight:
                    'bold',
                  marginTop: 10,
                }}
              >
                🎉 Meta atingida!
              </Text>
            )}

          <View
            style={{
              flexDirection:
                'row',
              justifyContent:
                'space-between',
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                setAguaConsumida(
                  aguaConsumida +
                    250
                )
              }
            >
              <Text
                style={{
                  color:
                    '#60A5FA',
                  fontWeight:
                    'bold',
                }}
              >
                +250ml
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setAguaConsumida(
                  aguaConsumida +
                    500
                )
              }
            >
              <Text
                style={{
                  color:
                    '#60A5FA',
                  fontWeight:
                    'bold',
                }}
              >
                +500ml
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setAguaConsumida(
                  0
                )
              }
            >
              <Text
                style={{
                  color:
                    '#EF4444',
                  fontWeight:
                    'bold',
                }}
              >
                Zerar
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Registrar Peso
          </Text>

          <TextInput
            value={pesoSemana}
            onChangeText={
              setPesoSemana
            }
            keyboardType='numeric'
            placeholder='Ex: 75'
            placeholderTextColor='#94A3B8'
            style={{
              backgroundColor:
                '#0F172A',
              color: '#fff',
              padding: 15,
              borderRadius: 12,
              marginBottom: 15,
            }}
          />

          <TouchableOpacity
            onPress={
              adicionarPeso
            }
            style={{
              backgroundColor:
                '#22C55E',
              padding: 15,
              borderRadius: 12,
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
              SALVAR PESO
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor:
              '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            Resumo
          </Text>

          <Text
            style={{
              color: '#CBD5E1',
              lineHeight: 30,
            }}
          >
            Peso Inicial:
            {' '}
            {pesoInicial}kg

            {'\n'}

            Peso Atual:
            {' '}
            {pesoAtual}kg

            {'\n'}

            Evolução:
            {' '}
            {diferenca > 0
              ? `+${diferenca}kg 📈`
              : diferenca < 0
              ? `${diferenca}kg 📉`
              : '0kg'}
          </Text>
        </View>

        <TouchableOpacity
          onPress={
            limparHistorico
          }
          style={{
            backgroundColor:
              '#DC2626',
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
              fontWeight:
                'bold',
            }}
          >
            APAGAR HISTÓRICO 🗑️
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}