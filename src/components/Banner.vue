<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
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

#main-banner{
  background-image: url('../../public/img/burger.jpg');
  background-position: 0 -250px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#main-banner h1{
  color: #fff;
  text-align: center;
  font-size: 60px;
  /*background-color: #222;*/
  padding: 20px 40px;
}
</style>