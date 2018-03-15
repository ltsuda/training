*** Settings ***
Library             SeleniumLibrary

*** Variable ***
${BROWSER}          chrome
${URL}              https://robotizandotestes.blogspot.com.br/
${HEADER}           Header1
${SEARCH_ICON}      css=.search-expand.touch-icon-button
${SEARCH_FIELD}     css=.search-input>input
${SEARCH_BUTTON}    css=.search-action.flat-button
${POST_LINK}        xpath=.//*[@id="Blog1"]/div/b/i/article/div/div/h3/a
${POST_TITLE}       xpath=.//*[@id="Blog1"]/div/article/div[1]/div/h3

*** Keywords ***
Acessar blog robotizandotestes
    Open Browser                     ${URL} ${BROWSER}
    Wait Until Element Is Visible    ${HEADER}
    Title Should Be                  Robotizando Testes

Pesquisar a postagem "${TERM}"
    Click Element                    ${SEARCH_ICON}
    Input Text                       ${SEARCH_FIELD}       ${TERM}
    Click Element                    ${SEARCH_BUTTON}
    Wait Until Element Is Visible    ${POST_LINK}

Clicar no post "${TITLE}" encontrado
    Click Element                    ${POST_LINK}
    Wait Until Element Is Visible    ${POST_TITLE}
    Title Should Be                  ${TITLE}

Fechar Navegador
    Close Browser