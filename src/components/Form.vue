<template>
  <div class="main-container">
    <h1>Componente de mensagem</h1>

    <form id="form">
      <div class="input-container">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome" v-model="nome" class="form-control" placeholder="Digite seu nome">
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao" class="form-control" placeholder="Digite seu e-mail">
          <option value="">Selecione o seu pão</option>
          <option value="integral">Integral</option>
          <option value="integral">Integral</option>
          <option value="integral">Integral</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne:</label>
        <select name="carne" id="carne" v-model="carne" class="form-control" placeholder="Digite seu e-mail">
          <option value="">Selecione a sua carne:</option>
          <option value="maminha">Maminha</option>
          <option value="carne">carne</option>
          <option value="carne">carne</option>
        </select>
      </div>
      <div class="input-container opcionais-container">
        <label id="opcionais-label" for="opcionais">Selecione os opcionais:</label>
          <div class="checbox-container">
            <input type="checkbox" name="opcionais" v-model="opcionais" value="salame"/>
            <span>Salame</span>
          </div>
      </div>
      <div class="input-container">
        <label for="message">Mensagem:</label>
        <textarea name="message" id="message" class="form-control" placeholder="Digite sua mensagem"></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="submit-btn">Fazer pedido</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      nome: '',
      pao: '',
      carne: ''
    }
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