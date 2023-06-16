

<template>
    <div class="container my-4">
        <h2 class="mb-4">Calculadora de Pegada de Carbono</h2>
        <div class="form-group">
            <label class="titulo">Quantidade destes equipamentos em casa</label>
            <div v-for="pergunta in perguntas" :key="pergunta.id" class="pergunta">
                <div class="pergunta-header">
                    <img :src="pergunta.imagem" :alt="pergunta.texto" class="pergunta-imagem">
                    <label class="pergunta-nome">{{ pergunta.texto }}</label>
                </div>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" v-model="respostas[pergunta.id]">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label class="titulo">Meio de transporte:</label>
            <select class="form-control" v-model="respostas.transporte">
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="transporte_publico">Transporte público</option>
            </select>
        </div>
        <button @click="calcularPegadaCarbono" class="btn btn-success mt-4">Calcular</button>
        <div v-if="resultado !== null" class="resultado d-flex flex-column align-items-center">
            <h3 class="resultado-titulo ">Sua pegada de carbono é:</h3>
            <p class="resultado-valor">{{ resultado }} kg CO2/ano</p>
            <p class="resultado-titulo">Recomendaçao: <br> {{ message }}</p>
            <button @click="saveResultToHistory" class="btn btn-success mt-4">Guardar resultado en historial</button>
            <button @click="resetTest" class="btn btn-success mt-4">Reiniciar TEST</button>
            
        </div>
    </div>
</template>
  
<style>
.titulo {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.pergunta {
    margin-bottom: 20px;
}

.pergunta-header {
    display: flex;
    align-items: center;
}

.pergunta-imagem {
    width: 150px;
    height: 150px;
    margin-right: 10px;
}

.pergunta-nome {
    font-size: 16px;
}

.resultado {
    margin-top: 20px;
}

.resultado-titulo {
    font-size: 20px;
    font-weight: bold;
}

.resultado-valor {
    font-size: 24px;
    color: green;
}
</style>
  
<script>
import { ref } from 'vue';
import { useCarbonFootprintStore } from '@/stores/carbonFootprintStore.js'
import { useUserStore } from '@/stores/usersStore.js'
import axiosInstance from '/api.js';

export default {
    setup() {

        const carbonFootprintStore = useCarbonFootprintStore()
        const userStore = useUserStore()
        
        const resetTest = () =>{
            respostas.value = {};
        resultado.value = null;
        message.value = getRandomMessage();
        randomIndex.value = generateRandomIndex(randomIndex.value);
      message.value = messages[randomIndex.value];
        }

        const saveResultToHistory = () => {
            const user = userStore.getUser // objeto del usuario logueado desde la store user
            const result = resultado /*  resultado de la calculadora de huella de carbono */
            
            const userEmail = userStore.$state.user.email;
            carbonFootprintStore.setResult(result)
            carbonFootprintStore.setMessage(message)
            carbonFootprintStore.addToHistory(userEmail)

            const newCarbonFootprint = {
                email_user: userStore.$state.user.email,
                footprint_value: resultado.value,
                message: message.value
            };

            axiosInstance.post('/carbonfootprint', newCarbonFootprint)
                .then(response => {

                    console.log(response.data);
                })
                .catch(error => {

                    console.error(error);
                });
        }
        const perguntas = ref([
            { id: 'tv', texto: 'TVs', imagem: 'https://img.freepik.com/vector-gratis/television-vintage_23-2147503075.jpg?w=740&t=st=1686869366~exp=1686869966~hmac=61c37647d50baae3d8d4371533e8d1fa1079d70bbcf52c524450a9a4da58017d', pegadaCarbonoAnual: 35 },
            { id: 'computadores', texto: 'Computadores', imagem: 'https://img.freepik.com/vector-gratis/videoconferencia-trabajo-remoto-ilustracion-pantalla-plana-portatil-grupo-colegas-personas-conectadas_88138-548.jpg?size=626&ext=jpg&ga=GA1.2.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 180 },
            { id: 'consolas', texto: 'Consoles de videogame', imagem: 'https://img.freepik.com/vector-gratis/conjunto-elementos-entretenimiento-videojuegos_1284-45758.jpg?size=626&ext=jpg&ga=GA1.1.795727531.1686753706&semt=ais', pegadaCarbonoAnual: 250 },
            { id: 'secador', texto: 'Secadores', imagem: 'https://img.freepik.com/iconos-gratis/secador-pelo_318-935956.jpg?size=626&ext=jpg&ga=GA1.2.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 25 },
            { id: 'lampadas', texto: 'Lâmpadas', imagem: 'https://img.freepik.com/vector-premium/iconos-contorno-bombilla_53562-7484.jpg?size=626&ext=jpg&ga=GA1.2.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 15 },
            { id: 'ar_condicionado', texto: 'Aparelhos de ar condicionado', imagem: 'https://img.freepik.com/vector-gratis/aire-acondicionado-viento-frio-control-remoto_107791-2881.jpg?w=1380&t=st=1686869565~exp=1686870165~hmac=ccde4353f0e1499b08f23946981c43181c497c3ea0e4d2ea04ce177c943e23dc', pegadaCarbonoAnual: 300 },
            { id: 'ventiladores', texto: 'Ventiladores', imagem: 'https://img.freepik.com/vector-gratis/mujer-calor-verano-dibujada-mano-fondo-ventilador_23-2149417822.jpg?size=626&ext=jpg&ga=GA1.1.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 17 },
        ]);

        const messages = [
      'Separe os seus resíduos de acordo com a sua composição e coloque no respetivo contentor – o ambiente agradece.',
      'Junte a roupa que precisa de lavar durante períodos mais longos para evitar fazer máquinas de roupa abaixo da capacidade e não fazer lavagens desnecessárias.',
      'Não se esqueça de fechar a torneira quando não precisar da água a correr. Aplique este conselho também quando lava as mãos e os dentes.',
      'Sempre que possível, evite deslocar-se de carro ou transportes. Explore as alternativas disponíveis na sua cidade. As bicicletas ou trotinetes elétricas são duas opções amigas do ambiente, económicas e bastante práticas.',
      'A longo prazo, o investimento em marcas amigas do ambiente pode ser bastante benéfico para si e para o planeta.',
      'Levar para o supermercado ou para as suas compras sacos reutilizáveis é crucial para uma redução do consumo de plástico.',
      'Evite comprar garrafões de plástico cada vez que vai ao supermercado, se pode beber a água da torneira de sua casa.',
      'Experimente fazer voluntariado numa organização sem fins lucrativos que se dedica à luta da preservação do ambiente, vai estar mais preparado para começar a fazer alterações nos seus hábitos diários e para espalhar a palavra aos seus amigos e família.',
      'Pode fazer uma doação a uma instituição que apoie o ambiente e que esteja dedicada a encontrar soluções para preservar o planeta.'
    ];

        const respostas = ref({});
        const resultado = ref(null);
        // const message = ref(null);
        const randomIndex = ref(Math.floor(Math.random() * messages.length));
        const message = ref(messages[randomIndex.value]);

        const calcularPegadaCarbono = () => {
            let total = 0;

            for (const pergunta in respostas.value) {
                if (respostas.value.hasOwnProperty(pergunta)) {
                    const quantidade = respostas.value[pergunta];
                    const produto = perguntas.value.find((item) => item.id === pergunta);
                    if (produto) {
                        total += quantidade * produto.pegadaCarbonoAnual;
                    }
                }
            }
            if (respostas.value.transporte === 'carro') {
                total += 2300;
            } else if (respostas.value.transporte === 'moto') {
                total += 1000;
            }

            // message.value = randomMessage;
            resultado.value = total.toFixed(2);
            randomIndex.value = generateRandomIndex(randomIndex.value);
      message.value = messages[randomIndex.value];

        };

        const generateRandomIndex = (currentIndex) => {
      let newIndex = Math.floor(Math.random() * messages.length);
      while (newIndex === currentIndex) {
        newIndex = Math.floor(Math.random() * messages.length);
      }
      return newIndex;
    };

        const getRandomMessage = () => {

           
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    };


        return {
            perguntas,
            respostas,
            resultado,
            calcularPegadaCarbono,
            saveResultToHistory,
            message,
            resetTest
        };
    },
};
</script>
   