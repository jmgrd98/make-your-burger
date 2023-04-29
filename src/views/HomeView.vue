<template>
  <Banner/>
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue';
import Form from '@/components/Form.vue';

export default {

  name: 'HomeView',
  components: {
    Banner,
    Form
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
