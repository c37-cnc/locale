### Locales of C37 products

[![npm version](https://badge.fury.io/js/%40c37%2Flocale.svg)](https://badge.fury.io/js/%40c37%2Flocale)

In computing, internationalization and localization are means of adapting computer software to different languages, regional differences and technical requirements of a target market (locale). Internationalization is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text. Localization (which is potentially performed multiple times, for different locales) uses the infrastructure or flexibility provided by internationalization (which is ideally performed only once, or as an integral part of ongoing development). [wikipedia](https://en.wikipedia.org/wiki/Internationalization_and_localization)

`npm install @c37/locale --save`

### Estrutura dos Dados
- header - o cabecalho comum para todo o sistema/website/produto, **um header ira conter varios componentes**
    - component - o componente, **um componente ira conter varios fields**
        - field - o campo, **contem as seguintes opcoes de configuracao** 
            - display - 'd'
            - title - 't'
            - description - 'c'
        - field
        - field
- page - a pagina, **uma pagina ira conter varios componentes**
    - component
        - field
        - field
        - field
    - component
    - component 
- footer - o rodape comum para todo o sistema/website/produto, **um footer ira conter varios componentes**
    - component
        - field
        - field
        - field

```
{
    display: 'd',
    title: 't',
    description: 'c'
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