<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <img src="IMG/" logo width="40vh">
          <router-link to="/" class="navbar-brand">Home</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/produtos" class="nav-link active" aria-current="page">Produtos</router-link>
                <ul class="submenu">
                  <li><router-link to="/racao">Ração</router-link></li>
                  <li><router-link to="/acessorios">Acessórios</router-link></li>
                </ul>
              </li>
              <li class="nav-formulario">
                <router-link to="/servicos" class="nav-link active" aria-current="page">Serviços Pet</router-link>
              </li>
              <li class="nav-login">
                <router-link to="/cadastro" class="nav-link active">Cadastro</router-link>
              </li>
              <li class="nav-login">
                <router-link to="/login" class="nav-link active">Login</router-link>
              </li>
              <li class="nav2-item">
                <router-link to="/meucarrinho" class="nav-link active">
                  <img src="carrinhoComprar.png" alt="Carrinho" width="40">
                </router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="Buscar" placeholder="Buscar Eventos " aria-label="Buscar">
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="produto1.jpg" class="card-img-top" alt="Produto 1">
            <div class="card-body">
              <h5 class="card-title">Produto 1</h5>
              <p class="card-text">Descrição do Produto 1</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="produto2.jpg" class="card-img-top" alt="Produto 2">
            <div class="card-body">
              <h5 class="card-title">Produto 2</h5>
              <p class="card-text">Descrição do Produto 2</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="produto3.jpg" class="card-img-top" alt="Produto 3">
            <div class="card-body">
              <h5 class="card-title">Produto 3</h5>
              <p class="card-text">Descrição do Produto 3</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <router-link to="/sobre" class="linkmenu">Quem Somos</router-link>
<router-link to="/termos" class="linkmenu">Termos e Políticas</router-link>
<router-link to="/etica" class="linkmenu">Ética e Conduta</router-link>
<router-link to="/contato" class="linkmenu">
  <img src="telefone.png" alt="Contato" width="20">
</router-link>
<router-link to="/redes-sociais" class="linkmenu">Siga-nos</router-link>
  </footer>
</template>

<script>
export default {
  name: "acessoriosPage",
};
</script>
