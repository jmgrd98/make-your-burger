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
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne:</label>
        <select name="carne" id="carne" v-model="carne" class="form-control">
          <option value="">Selecione a sua carne:</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
        </select>
      </div>
      <div class="input-container opcionais-container">
        <label id="opcionais-label" for="opcionais">Selecione os opcionais:</label>
        <div v-for="opcional in opcionaisData" :key="opcional.id" class="checkbox-container">
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
      paes: [],
      carnes: [],
      opcionaisData: [],
      nome: '',
      pao: '',
      carne: '',
      opcionais: [],
      message: '',
      status: "Solicitado",
    }
  },
  components: {
    Message
  },
  methods: {
    async getIngredients() {
      try {
        const paesResponse = await fetch("https://make-your-burger-server.onrender.com/ingredientes/paes");
        const carnesResponse = await fetch("https://make-your-burger-server.onrender.com/ingredientes/carnes");
        const opcionaisResponse = await fetch("https://make-your-burger-server.onrender.com/ingredientes/opcionais");
        
        this.paes = await paesResponse.json();
        this.carnes = await carnesResponse.json();
        this.opcionaisData = await opcionaisResponse.json();
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    },
    async createBurger() {
    try {
      const response = await fetch("https://make-your-burger-server.onrender.com/burgers", {
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

      if (!response.ok) {
        throw new Error('Failed to create burger');
      }

      const data = await response.json();
      this.msg = `Pedido nº ${data.id} realizado com sucesso!`;

      setTimeout(() => {
        this.msg = "";
      }, 3000);

      this.nome = '';
      this.carne = '';
      this.pao = '';
      this.opcionais = '';
    } catch (error) {
      console.error('Error creating burger:', error);
    }
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