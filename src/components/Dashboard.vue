<template>
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
        <div class="burger-table-row">
          <div class="order-number">1</div>
          <div>João</div>
          <div>Pão de alho</div>
          <div>Picanha</div>
          <div>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </div>
<!--          <div>Mensagem</div>-->
          <div id="status-container">
            <select name="" id="">
              <option value="">Selecione o status do burger:</option>
            </select>
            <button class="delete-btn">Cancelar pedido</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
  flex-direction: column;
  gap: 5px;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
  max-width: 100%;
}

.delete-btn{
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