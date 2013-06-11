function parseQueryString(queryString) {
  var queryObject = new Object();
  queryString = queryString.replace(/^.*\?(.+)$/,'$1');

  while ((pair = queryString.match(/([^=]+)=\'?([^\&\']*)\'?\&?/)) && pair[0].length) {
    queryString = queryString.substring( pair[0].length );

    if (/^\-?\d+$/.test(pair[2])) pair[2] = parseInt(pair[2]);
    queryObject[pair[1]] = pair[2];
  }

  return queryObject;
}