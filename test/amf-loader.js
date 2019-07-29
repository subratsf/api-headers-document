export const AmfLoader = {};
AmfLoader.load = async function(endpointIndex, methodIndex, compact) {
  endpointIndex = endpointIndex || 0;
  methodIndex = methodIndex || 0;
  const file = '/demo-api' + (compact ? '-compact' : '') + '.json';
  const url = location.protocol + '//' + location.host + '/base/demo/' + file;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (e) => {
      let data;
      try {
        data = JSON.parse(e.target.response);
        /* istanbul ignore next */
      } catch (e) {
        /* istanbul ignore next */
        reject(e);
        return;
      }
      const original = data;
      if (data instanceof Array) {
        data = data[0];
      }
      const encKey = compact ? 'doc:encodes' : 'http://a.ml/vocabularies/document#encodes';
      let encodes = data[encKey];
      if (encodes instanceof Array) {
        encodes = encodes[0];
      }
      const endKey = compact ? 'raml-http:endpoint' : 'http://a.ml/vocabularies/http#endpoint';
      let endpoints = encodes[endKey];
      if (endpoints && !(endpoints instanceof Array)) {
        endpoints = [endpoints];
      }
      const endpoint = endpoints[endpointIndex];
      const opKey = compact ? 'hydra:supportedOperation':
        'http://www.w3.org/ns/hydra/core#supportedOperation';
      let methods = endpoint[opKey];
      /* istanbul ignore if */
      if (methods && !(methods instanceof Array)) {
        methods = [methods];
      }
      const method = methods[methodIndex];
      const expKey = compact ? 'hydra:expects' : 'http://www.w3.org/ns/hydra/core#expects';
      let request = method[expKey];
      /* istanbul ignore if */
      if (request instanceof Array) {
        request = request[0];
      }
      const heKey = compact ? 'raml-http:header' : 'http://a.ml/vocabularies/http#header';
      let headers = request[heKey];
      if (headers && !(headers instanceof Array)) {
        headers = [headers];
      }
      resolve([original, headers]);
    });
    /* istanbul ignore next */
    xhr.addEventListener('error',
      () => reject(new Error('Unable to load model file')));
    xhr.open('GET', url);
    xhr.send();
  });
};
