// Types for compiled templates
declare module 'car-filter/templates/*' { 
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
