<template>
  <div id="burger-table">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#: </div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Mensagem:</div>
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
          <div>Mensagem</div>
          <div>
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

</style>