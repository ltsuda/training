*** Settings ***
Library             SeleniumLibrary

*** Variable ***
${BROWSER}          chrome
${URL}              https://robotizandotestes.blogspot.com.br/
${HEADER}           Header1
${SEARCH_ICON}      css=.search-expand.touch-icon-button
${SEARCH_FIELD}     css=.search-input>input
${SEARCH_BUTTON}    css=.search-action.flat-button
${POST_LINK}        xpath=.//*[@id="Blog1"]/div[1]/article/div/div/h3/a
${POST_TITLE}       xpath=.//*[@id="Blog1"]/div/article/div[1]/div/h3


*** Keywords ***
#GIVEN
Que esteja na tela HOME do blog robotizando testes
    Acessar blog robotiandotestes

Que esteja na tela de resultado da pesquisa pela postagem "${TITLE_POST}"
    Verificar resultado da pesquisa                ${TITLE_POST}

#WHEN
Pesquisar pela palavra "${TERM}"
    Pesquisar a postagem pela palavra "${TERM}"

Clicar no link da postagem
    Clicar no post encontrado

#THEN
A postagem "${TITLE_POST}" deve ser listada no resultado da pesquisa
    Verificar resultado da pesquisa                ${TITLE_POST}

A tela da postagem "${TITLE_POST}" deve ser mostrada
    Verificar tela da postagem                     ${TITLE_POST}

#STEPS
Acessar blog robotiandotestes
    Open Browser                                   ${URL}                ${BROWSER}
    Wait Until Element Is Visible                  ${HEADER}
    Title Should Be                                Robotizando Testes

Pesquisar a postagem pela palavra "${TERM}"
    Click Element                                  ${SEARCH_ICON}
    Input Text                                     ${SEARCH_FIELD}       ${TERM}
    Click Element                                  ${SEARCH_BUTTON}
    Wait Until Element Is Visible                  ${POST_LINK}

Verificar resultado da pesquisa
    [Arguments]                                    ${TITLE_POST}
    Page Should Contain                            ${TITLE_POST}

Clicar no post encontrado
    Click Element                                  ${POST_LINK}

Verificar tela da postagem
    [Arguments]                                    ${TITLE_POST}
    Wait Until Element Is Visible                  ${POST_TITLE}
    Title Should Be                                ${TITLE_POST}

Fechar Navegador
    Close Browser