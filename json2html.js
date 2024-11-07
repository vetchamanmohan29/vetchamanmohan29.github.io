export default function json2html(data) {
  // Extract all unique column headers from the data array
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Start building the HTML table with the required data attribute
  let html = `<table data-user="vetchamanmohan29@gmail.com">`;
  
  // Add table header
  html += "<thead><tr>";
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += "</tr></thead>";

  // Add table body
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    columns.forEach(col => {
      html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody></table>";

  return html;
}
