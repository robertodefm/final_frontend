
   <template>
    <div class="admin-view">
      <h2>Administración de CarbonFootprint</h2>
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Valor da pegada</th>
            <th>Email do Usuario</th>
            <th>Mensagem</th>
            <th>Acões</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in carbonFootprints" :key="record.id">
            <td>{{ record.id }}</td>
            <td>{{ record.footprint_value }}</td>
            <td>{{ record.email_user }}</td>
            <td>{{ record.message }}</td>
            <td>
              <button class="delete-button" @click="apagarRegistro(record.id)">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        carbonFootprints: [],
      };
    },
    mounted() {
      this.obterRegistros();
    },
    methods: {
      obterRegistros() {
        axios
          .get('http://localhost:3000/carbonfootprint')
          .then(response => {
            this.carbonFootprints = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      apagarRegistro(id) {
        axios
          .delete(`http://localhost:3000/carbonfootprint/${id}`)
          .then(() => {
            this.obterRegistros();
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
  <style>
  .admin-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .admin-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .admin-table th,
  .admin-table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  .admin-table th {
    background-color: #f2f2f2;
  }
  
  .delete-button {
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .delete-button:hover {
    background-color: #d32f2f;
  }
  </style>
  