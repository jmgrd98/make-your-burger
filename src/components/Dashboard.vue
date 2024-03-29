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
        <div>Ações:</div>
      </div>
      <div id="burger-table-rows">
        <div class="burger-table-row" v-for="burger in api.burgers" :key="burger.id">
          <div class="order-number">{{burger.id}}</div>
          <div>{{ burger.nome }}</div>
          <div>{{burger.pao}}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" :key="index">{{opcional}}</li>
            </ul>
          </div>
          <div id="status-container">
            <select name="status" class="status"  @change="updateBurger($event, burger.id)">
              <option value="">Selecione o status do burger:</option>
              <option v-for="s in api.status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{s.tipo}}</option>
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
      msg: '',
      api: {
        ingredientes: {
          paes: [],
          carnes: [],
          opcionais: []
        },
        status: [],
        burgers: []
      }
    }
  },
  components: {
    Message
  },
  methods: {
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'DELETE'
      });
      if (req.ok) {
        this.msg = `O pedido nº ${id} foi cancelado com sucesso!`;
        this.getPedidos();
      } else {
        console.error(`Failed to cancel order ${id}`);
      }
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
      if (req.ok) {
        const data = await req.json();
        this.msg = `O pedido nº ${data.id} foi atualizado para ${data.status}!`;
      } else {
        console.error(`Failed to update order ${id}`);
      }
    },
    async getPedidos() {
      const reqBurgers = await fetch('http://localhost:3000/burgers');
      const reqStatus = await fetch('http://localhost:3000/status');
      if (reqBurgers.ok && reqStatus.ok) {
        const dataBurgers = await reqBurgers.json();
        const dataStatus = await reqStatus.json();
        this.api.burgers = dataBurgers;
        this.api.status = dataStatus;
      } else {
        console.error('Failed to fetch orders or status');
      }
    }
  },
  mounted() {
    this.getPedidos();
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