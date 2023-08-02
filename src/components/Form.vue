<template>
  <div class="main-container">
    <Message :msg="msg" v-show="msg"/>

    <form id="form" @submit.prevent="createBurger">
      <div class="input-container">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome" v-model="nome" class="form-control" placeholder="Digite seu nome">
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao" class="form-control">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in api.ingredientes.paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne:</label>
        <select name="carne" id="carne" v-model="carne" class="form-control">
          <option value="">Selecione a sua carne:</option>
          <option v-for="carne in api.ingredientes.carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
        </select>
      </div>
      <div class="input-container opcionais-container">
        <label id="opcionais-label" for="opcionais">Selecione os opcionais:</label>
          <div v-for="opcional in api.ingredientes.opcionais" :key="opcional.id"  class="checbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo"/>
            <span>{{opcional.tipo}}</span>
          </div>
      </div>
      <div class="input-container">
        <label for="message">Mensagem:</label>
        <textarea name="message" id="message" class="form-control" v-model="message" placeholder="Digite sua mensagem"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="submit-btn">Fazer pedido</button>
      </div>
    </form>
  </div>
</template>

<script>
import Message from "@/components/Message";

export default {
  name: 'Form',
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisData: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      message: '',
      status: "Solicitado",
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
  },
  components: {
    Message
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();
      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisData = data.opcionais;
    },
    async createBurger(e) {

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: this.nome,
          pao: this.pao,
          carne: this.carne,
          opcionais: this.opcionais,
          status: this.status,
          message: this.message
        })
      });

      const data = await req.json();
      this.msg = `Pedido nº ${data.id} realizado com sucesso!`;

      setTimeout(() => {
        this.msg = "";
        console.log(this.msg);
      }, 3000);

      this.nome = '';
      this.carne = '';
      this.pao = '';
      this.opcionais = '';

      console.log(data);
    }
  },
  mounted() {
    this.getIngredients();
  }
}
</script>

<style>

#form{
  max-width: 400px;
  margin: 0 auto;
}

.input-container{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input, select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-label{
  width: 100%;
}

.checkbox-container{
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input{
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn{
  width: 100%;
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
}

.submit-btn:hover{
  background-color: transparent;
  color: #222;
}

</style>