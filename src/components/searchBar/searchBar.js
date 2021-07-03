const input = document.getElementById('myInput');
let display = document.createElement('div');
display.innerHTML = 'No Records Found !!!';

display.classList.add('no-data');

input.addEventListener('keyup', () => {
  const filter = input.value.toUpperCase();
  const table = document.getElementById('table');
  const rows = table.getElementsByTagName('tr');
  const tableBody = document.getElementById('tbody');
  let i;
  let j;
  let noDataFound = true;
  for (i = 1; i < rows.length; i += 1) {
    const cells = rows[i].getElementsByTagName('td');
    let rowContainsFilter = false;
    for (j = 0; j < 4; j += 1) {
      if (cells[j]) {
        if (cells[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          rowContainsFilter = true;
          noDataFound = false;
        }
      }
    }
 
    if (!rowContainsFilter) {
      rows[i].style.display = 'none';
    } else {
      rows[i].style.display = '';
    }
  }
  if (noDataFound === true) {
    tableBody.appendChild(display);
  } else {
    tableBody.removeChild(display);
  }
});
