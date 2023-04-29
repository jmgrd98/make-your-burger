<template>
  <Message :msg="msg" v-show="msg"/>
  <div id="burger-table">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#: </div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
<!--        <div>Mensagem:</div>-->
        <div>Ações:</div>
      </div>
      <div id="burger-table-rows">
        <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <div class="order-number">{{burger.id}}</div>
          <div>{{ burger.nome }}</div>
          <div>{{burger.pao}}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" :key="index">{{opcional}}</li>
            </ul>
          </div>
<!--          <div>Mensagem</div>-->
          <div id="status-container">
            <select name="status" class="status"  @change="updateBurger($event, burger.id)">
              <option value="">Selecione o status do burger:</option>
              <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{s.tipo}}</option>
            </select>
            <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message";
export default {
  name: 'Dashboard',
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: []
    }
  },
  components: {
    Message
  },
  methods: {
    async getPedidos() {
      const req = await fetch('http://localhost:3000/burgers');
      const data = await req.json();
      this.burgers = data;

      this.getStatus();
    },
      async getStatus() {
        const req = await fetch('http://localhost:3000/status');
        const data = await req.json();
        this.status = data;
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'DELETE'
      });
      const data = await req.json();
      this.burgers = data;

      this.msg = `O pedido nº ${id} foi cancelado com sucesso!`;

      this.getPedidos();
    },
    async updateBurger(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({status: option})
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: dataJson
      });
      const data = await req.json();
      this.msg = `O pedido nº ${data.id} foi atualizado para ${data.status}!`;
      console.log(data);
    }
  },
  mounted() {
    this.getPedidos();
  },
  api: {
    "ingredientes": {
      "paes": [
        {
          "id": 1,
          "tipo": "Italiano Branco"
        },
        {
          "id": 2,
          "tipo": "3 Queijos"
        },
        {
          "id": 3,
          "tipo": "Parmesão e Orégano"
        },
        {
          "id": 4,
          "tipo": "Integral"
        }
      ],
      "carnes": [
        {
          "id": 1,
          "tipo": "Maminha"
        },
        {
          "id": 2,
          "tipo": "Alcatra"
        },
        {
          "id": 3,
          "tipo": "Picanha"
        },
        {
          "id": 4,
          "tipo": "Veggie burger"
        }
      ],
      "opcionais": [
        {
          "id": 1,
          "tipo": "Bacon"
        },
        {
          "id": 2,
          "tipo": "Cheddar"
        },
        {
          "id": 3,
          "tipo": "Salame"
        },
        {
          "id": 4,
          "tipo": "Tomate"
        },
        {
          "id": 4,
          "tipo": "Cebola roxa"
        },
        {
          "id": 4,
          "tipo": "Pepino"
        }
      ]
    },
    "status": [
      {
        "id": 1,
        "tipo": "Solicitado"
      },
      {
        "id": 2,
        "tipo": "Em produção"
      },
      {
        "id": 3,
        "tipo": "Finalizado"
      }
    ],
    "burgers": [
      {
        "nome": "Joao Marcelo Guerra Ribeiro Dantas",
        "pao": "3 Queijos",
        "carne": "Alcatra",
        "opcionais": [],
        "status": "Em produção",
        "message": "",
        "id": 1
      }
    ]
  }
}
</script>

<style scoped>

#burger-table{
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading > div,
.burger-table-row > div {
  width: 19%;
  text-align: center;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

#status-container{
  display: flex;
  gap: 5px;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
  max-width: 50%;
  height: 50px;
}

.delete-btn{
  height: 50px;
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .3s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>