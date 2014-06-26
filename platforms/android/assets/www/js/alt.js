var json = JSON.parse('[{"Name":"Band","Date":"Aug 14th, 2012","Albums":[{"Name":"Generic Name"},{"Name":"Something Else!!"}]},{"Name":"Other Guys","Date":"Aug 22nd, 2012","Albums":[{"Name":"Album One"}]}]');
var source = $("#resultados").html();
var template = Handlebars.compile(source);
console.log(template(json));
$("#partidos").html(template(json));
