document.write(`
<header>
        <nav class="navbar is-fixed-top" role="navigation " aria-label="main navigation" style="z-index: 1000;">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html ">
                    <img src="img/brand.png" alt="ETIB">
                </a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="nav" onclick="document.querySelector( '.navbar-menu').classList.toggle( 'is-active');">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="nav" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-arrowless has-text-weight-light" href="atividades.html">Atividades</a>
                        <div class="navbar-dropdown is-right">
                            <a class="navbar-item has-text-weight-light" href="atividades.html#minicursos">
                                Minicursos
                              </a>
                            <a class="navbar-item has-text-weight-light" href="atividades.html#palestras">
                                Palestras
                              </a>
                            <a class="navbar-item has-text-weight-light" href="atividades.html#comps">
                                Competições
                              </a>
                        </div>
                    </div>
                    <a class="navbar-item has-text-weight-light" href="programacao.html">Programação</a>
                    <a class="navbar-item has-text-weight-light" href="ajuda.html">Ajuda</a>
                </div>
            </div>
        </nav>
    </header>
`);
document.close();