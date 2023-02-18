let serials = [
{
"name": "Maze runner",
"country": "U.S.A",
"box office": "$348.3 million"
},
{
"name": "Hacksaw ridge",
"country": "U.S.A",
"box office": "$175 million"
},
{
"name": "Green book",
"country": "U.S.A",
"box office": "$321 million"
}
]
let sum = 0;

for (let i = 0; i < serials.length; i++) {
  document.writeln(`<div class="count">
  <p>${serials[i]["name"]}: country: ${serials[i]["country"]}, box office: ${serials[i]["box office"]}<br><p/>
  </div>`)
}
