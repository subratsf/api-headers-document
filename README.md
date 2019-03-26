# api-headers-document

[![Published on NPM](https://img.shields.io/npm/v/@api-components/api-headers-document.svg)](https://www.npmjs.com/package/@api-components/api-headers-document)

[![Build Status](https://travis-ci.org/api-components/api-headers-document.svg?branch=stage)](https://travis-ci.org/api-components/api-headers-document)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/api-components/api-headers-document)

 ## &lt;api-headers-document&gt;

Documentation component for API headers based on AMF data model.

 ```html
 <api-headers-document></api-headers-document>
 ```

 ### API components

 This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

 ## Usage

 ### Installation
 ```
 npm install --save @api-components/api-headers-document
 ```

 ### In an html file

 ```html
 <html>
   <head>
     <script type="module">
       import './node_modules/@api-components/api-headers-document/api-headers-document.js';
     </script>
   </head>
   <body>
     <api-headers-document></api-headers-document>
   </body>
 </html>
 ```

 ### In a Polymer 3 element

 ```js
 import {PolymerElement, html} from './node_modules/@polymer/polymer';
 import './node_modules/@api-components/api-headers-document/api-headers-document.js';

 class SampleElement extends PolymerElement {
   static get template() {
     return html`
     <api-headers-document></api-headers-document>
     `;
   }
 }
 customElements.define('sample-element', SampleElement);
 ```

 ### Installation

 ```sh
 git clone https://github.com/api-components/api-headers-document
 cd api-url-editor
 npm install
 npm install -g polymer-cli
 ```

 ### Running the demo locally

 ```sh
 polymer serve --npm
 open http://127.0.0.1:<port>/demo/
 ```

 ### Running the tests
 ```sh
 polymer test --npm
 ```
