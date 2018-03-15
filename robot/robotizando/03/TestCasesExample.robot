*** Settings ***
Resource          Resource.robot
Suite Teardown    Fechar Navegador

*** Test Case ***
Validar Acesso ao blog robotizandotestes
    Acessar blog robotizandotestes

Validar pesquisa de postagens
    Pesquisar a postagem "season premiere"
    Clicar no post "Season Premiere: Introdução ao Robot Framework" encontrado