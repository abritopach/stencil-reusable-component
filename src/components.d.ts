/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface MyMaraudersMap {
    /**
    * The first name
    */
    'reader': string;
  }
  interface MyMaraudersMapAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'reader'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'MyMaraudersMap': Components.MyMaraudersMap;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'my-marauders-map': Components.MyMaraudersMapAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyMaraudersMapElement extends Components.MyMaraudersMap, HTMLStencilElement {}
  var HTMLMyMaraudersMapElement: {
    prototype: HTMLMyMaraudersMapElement;
    new (): HTMLMyMaraudersMapElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'my-marauders-map': HTMLMyMaraudersMapElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'my-marauders-map': HTMLMyMaraudersMapElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}