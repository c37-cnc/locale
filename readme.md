### Locales of C37 products

[![npm version](https://badge.fury.io/js/%40c37%2Flocale.svg)](https://badge.fury.io/js/%40c37%2Flocale)

In computing, internationalization and localization are means of adapting computer software to different languages, regional differences and technical requirements of a target market (locale). Internationalization is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text. Localization (which is potentially performed multiple times, for different locales) uses the infrastructure or flexibility provided by internationalization (which is ideally performed only once, or as an integral part of ongoing development). [wikipedia](https://en.wikipedia.org/wiki/Internationalization_and_localization)

`npm install @c37/locale --save`

### Estrutura dos Dados
- header - o cabecalho do sistema/website/produto - **um header ira conter varios componentes**
    - component
    - component - **um componente ira conter varios fields**
        - field
        - field
        - field
    - component
- messages - as menssagens do sistema/website/produto - **uma messages ira conter tipos**
    - warning - **menssagem do tipo aviso**
        - field
        - field
        - field
    - validation - **menssagem do tipo validacao**
        - field
        - field
        - field
- page - **uma pagina ira conter varios componentes**
    - component
    - component
    - component
- page
- page
- footer - o rodape do sistema/website/produto - **um footer ira conter varios componentes**
    - component
    - component
    - component

#### Field - Opcoes de configuracao
```
{
    display: 'd', // o valor para a apresentacao na tela
    title: 't', // um title para o hint/tooltip
    description: 'c' // uma descricao para o hint/tooltip
}
```

### References
- [Internationalizing Your App](https://developer.chrome.com/webstore/i18n)
- [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/)
- [Internationalization and localization](https://en.wikipedia.org/wiki/Internationalization_and_localization)
- [Localização vs. Internacionalização](https://www.w3.org/International/questions/qa-i18n)

### Tools
- [Guid](https://guid-dcyuu0shhmrn.runkit.sh/)
- [npm - Working with Teams & Orgs](https://docs.npmjs.com/misc/orgs)
- [npm - Publishing an Org Scoped Package](https://www.npmjs.com/docs/orgs/publishing-an-org-scoped-package.html)

## License
Copyright (c) C37. All rights reserved.

Licensed under the [CC-BY-SA-4.0](LICENSE.txt) License.