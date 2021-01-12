import { LitElement, TemplateResult, CSSResult } from 'lit-element';
import '@api-components/api-type-document/api-type-document.js';
import '@anypoint-web-components/anypoint-collapse/anypoint-collapse.js';
import '@advanced-rest-client/arc-icons/arc-icon.js';
import '@anypoint-web-components/anypoint-button/anypoint-button.js';

/**
 * `api-headers-document`
 *
 * A documentation for API headers.
 *
 * It uses [AMF](https://github.com/mulesoft/amf) json/ld model to render
 * the view.
 *
 * ## Example
 *
 * ```html
 * <api-headers-document headers="[...]" opened></api-headers-document>
 */
export declare class ApiHeadersDocument extends LitElement {
  get styles(): CSSResult;

  render(): TemplateResult;

  /**
   * Generated AMF json/ld model form the API spec.
   * The element assumes the object of the first array item to be a
   * type of `"http://raml.org/vocabularies/document#Document`
   * on AMF vocabulary.
   *
   * It is only useful for the element to resolve references.
   */
  amf: any;
  /**
   * The headers AMF model Array.
   */
  headers: any|any[];
  /**
   * Set to true to open the view.
   * Automatically set when the view is toggle from the UI.
   * @attribute
   */
  opened: boolean;
  /**
   * A property passed to the type document element to render a mobile friendly view.
   * @attribute
   */
  narrow: boolean;
  /**
   * Enables compatibility with Anypoint components.
   * @attribute
   */
  compatibility: boolean;
  /**
   * Type of the header in the documentation section.
   * Should be in range of 1 to 6.
   *
   * @default 2
   * @attribute
   */
  headerLevel: number;
  /**
   * Passed to `api-type-document`. Enables internal links rendering for types.
   * @attribute
   */
  graph: boolean;

  constructor();

  // Computes a label for the section toggle buttons.
  _computeToggleActionLabel(opened: boolean): string;

  // Computes class for the toggle's button icon.
  _computeToggleIconClass(opened: boolean): string;

  /**
   * Toggles the view.
   * Use `opened` property instead.
   */
  toggle(): void;
}
