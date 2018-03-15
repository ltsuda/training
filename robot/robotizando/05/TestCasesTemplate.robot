*** Settings ***
Resource    ResourceBDD.robot
Resource    BDD-keywords.robot
Suite Setup   Acessar blog robotizandotestes
Suite Teardown    Fechar Navegador
Test Template   Validar pesquisa de postagens

*** Test Cases ***               Busca         Título do Post

Pesquisar Post Premiere         introdução    Season Premiere: Introdução ao Robot Framework
Pesquisar Post Editores         visual code   Season Editores - Ep. 02: Visual Studio Code
Pesquisar Post Tutoriais Ep.01  windows       Season Mobile com Appium - Ep.01: Instalação Windows

*** Keywords ***
Validar pesquisa de postagens
    [Arguments]   ${TERM}   ${TITLE_POST}
    Pesquisar a postagem pela palavra "${TERM}"
    Verificar resultado da pesquisa   ${TITLE_POST}
    Clicar no post encontrado
    Verificar tela da postagem   ${TITLE_POST}
