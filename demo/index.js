import { html, render } from 'lit-html';
import { LitElement } from 'lit-element';
import { ApiDemoPageBase } from '@advanced-rest-client/arc-demo-helper/ApiDemoPage.js';
import '@api-components/raml-aware/raml-aware.js';
import '@api-components/api-navigation/api-navigation.js';
import '../api-headers-document.js';

import { AmfHelperMixin } from '@api-components/amf-helper-mixin/amf-helper-mixin.js';
class DemoElement extends AmfHelperMixin(LitElement) {}

window.customElements.define('demo-element', DemoElement);
class ApiDemo extends ApiDemoPageBase {
  constructor() {
    super();
    this.hasData = false;
  }

  get hasData() {
    return this._hasData;
  }

  set hasData(value) {
    this._setObservableProperty('hasData', value);
  }

  get headers() {
    return this._headers;
  }

  set headers(value) {
    this._setObservableProperty('headers', value);
  }

  get helper() {
    return document.getElementById('helper');
  }

  _navChanged(e) {
    const { selected, type } = e.detail;

    if (type === 'method') {
      this.setData(selected);
    } else {
      this.hasData = false;
    }
  }

  setData(id) {
    const helper = this.helper;
    const webApi = helper._computeWebApi(this.amf);
    const method = helper._computeMethodModel(webApi, id);
    const expects = helper._computeExpects(method);
    const headers = helper._computeHeaders(expects);
    this.headers = headers;
    this.hasData = true;
  }

  render() {
    render(html `
    ${this.headerTemplate()}
    <raml-aware .api="${this.amf}" scope="model"></raml-aware>

    <section role="main" class="centered card">
      ${this._apiNavigationTemplate()}
      ${this.hasData ?
        html`<api-headers-document opened aware="model" .headers="${this.headers}"></api-headers-document>` :
        html`<p>Select a HTTP method in the navigation to see the demo.</p>`}
    </section>

    <demo-element id="helper" .amf="${this.amf}"></demo-element>`, document.querySelector('#demo'));
  }
}
const instance = new ApiDemo();
instance.render();
window._demo = instance;
