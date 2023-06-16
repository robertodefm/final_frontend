

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
        <button @click="calcularPegadaCarbono" class="btn btn-primary mt-4">Calcular</button>
        <div v-if="resultado !== null" class="resultado">
            <h3 class="resultado-titulo">Sua pegada de carbono é:</h3>
            <p class="resultado-valor">{{ resultado }} kg CO2/ano</p>
            <button @click="guardarCalculo" class="btn btn-success mt-4">Guardar Cálculo</button>
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
import { useStore } from 'pinia';

export default {
    setup() {
        const store = useStore('carbonfootprintStore')
        const perguntas = ref([
            { id: 'tv', texto: 'TVs', imagem: 'https://img.freepik.com/vector-gratis/television-vintage_23-2147503075.jpg?w=740&t=st=1686869366~exp=1686869966~hmac=61c37647d50baae3d8d4371533e8d1fa1079d70bbcf52c524450a9a4da58017d', pegadaCarbonoAnual: 35 },
            { id: 'computadores', texto: 'Computadores', imagem: 'https://img.freepik.com/vector-gratis/videoconferencia-trabajo-remoto-ilustracion-pantalla-plana-portatil-grupo-colegas-personas-conectadas_88138-548.jpg?size=626&ext=jpg&ga=GA1.2.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 180 },
            { id: 'consolas', texto: 'Consoles de videogame', imagem: 'https://img.freepik.com/vector-gratis/conjunto-elementos-entretenimiento-videojuegos_1284-45758.jpg?size=626&ext=jpg&ga=GA1.1.795727531.1686753706&semt=ais', pegadaCarbonoAnual: 250 },
            { id: 'secador', texto: 'Secadores', imagem: 'https://img.freepik.com/iconos-gratis/secador-pelo_318-935956.jpg?size=626&ext=jpg&ga=GA1.2.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 25 },
            { id: 'lampadas', texto: 'Lâmpadas', imagem: 'https://img.freepik.com/vector-premium/iconos-contorno-bombilla_53562-7484.jpg?size=626&ext=jpg&ga=GA1.2.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 15 },
            { id: 'ar_condicionado', texto: 'Aparelhos de ar condicionado', imagem: 'https://img.freepik.com/vector-gratis/aire-acondicionado-viento-frio-control-remoto_107791-2881.jpg?w=1380&t=st=1686869565~exp=1686870165~hmac=ccde4353f0e1499b08f23946981c43181c497c3ea0e4d2ea04ce177c943e23dc', pegadaCarbonoAnual: 300 },
            { id: 'ventiladores', texto: 'Ventiladores', imagem: 'https://img.freepik.com/vector-gratis/mujer-calor-verano-dibujada-mano-fondo-ventilador_23-2149417822.jpg?size=626&ext=jpg&ga=GA1.1.795727531.1686753706&semt=sph', pegadaCarbonoAnual: 17 },
        ]);

        const respostas = ref({});
        const resultado = ref(null);

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

            resultado.value = total.toFixed(2);
        };

        const guardarCalculo = () => {
            const usuario = store.user;
            const calculo = {
                usuario,
                resultado: resultado.value,
            };
            store.guardarCalculo(calculo);
        };
        return {
            perguntas,
            respostas,
            resultado,
            calcularPegadaCarbono,
            guardarCalculo
        };
    },
};
</script>
   