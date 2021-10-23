const Data = [
  {
      projectName: "New Admin Design",
      startDate: "2019-05-02",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg",
      progress: 100
  },
  {
      projectName: "Landing Page Design",
      startDate: "2019-06-04",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg",
      progress: 78
  },
  {
      projectName: "Multipurpose Landing Template",
      startDate: "2019-06-06",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg",
      progress: 100
  },{
      projectName: "Blog Template Design",
      startDate: "2019-05-07",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      progress: 100
  },
  {
      projectName: "Brand Logo Design",
      startDate: "2019-06-08",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg",
      progress: 54
  },
  {
      projectName: "Redesign - Landing Page",
      startDate: "2019-06-10",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg",
      progress: 41
  },
  {
      projectName: "Redesign - Dashboard",
      startDate: "2019-05-12",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg",
      progress: 100
  },
  {
      projectName: "Landing Page Design",
      startDate: "2019-06-13",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
      progress: 84
  },
  {
      projectName: "Multipurpose Landing Template",
      startDate: "2019-06-15",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg",
      progress: 100
  }
]


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  let th = document.createElement('th')
  let text = document.createTextNode('Actions')
  th.appendChild(text)
  row.appendChild(th)
}
  
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
        if(typeof element[key] === 'string' && element[key].includes('https://')) {
            let cell = row.insertCell()
            let image = document.createElement('img')
            image.src = element[key]
            cell.appendChild(image)
        } else if(typeof element[key] === 'number') {
            let cell = row.insertCell()
            let div = document.createElement('div')
            let innerDiv = document.createElement('div')
            innerDiv.style.width = element[key] + "%";
            div.appendChild(innerDiv)
            cell.appendChild(div)
        } else {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
    let cell = row.insertCell();
    let newCell = row.insertCell(-1);
    let edit = document.createElement('button')
    edit.addEventListener('click', () => {
      console.log('Hello')
    })
    let remove = document.createElement('button')
    remove.addEventListener('click', () => {
      table.deleteRow(1)
    })
    cell.appendChild(edit);
    newCell.appendChild(remove)
  }
}
  
let table = document.querySelector("table");
let data = Object.keys(Data[0]);
generateTableHead(table, data);
generateTable(table, Data);
  

function addData(event) {
  const newData = []
  const obj = {};
  event.preventDefault()
  const getData = document.querySelectorAll('#addData input')
  console.log(getData[1].value)
  obj.projectName = getData[0].value
  obj.startDate = getData[1].value
  obj.status = getData[2].value < 100 ? 'Pending' : 'Completed'
  obj.members = "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
  obj.progress = parseInt(getData[2].value)
  newData.push(obj)
  generateTable(table, newData);
}


const searchInput = document.querySelector('#searchForm')
function searchTable(event) {
  event.preventDefault()
  const res = []
  let val = event.target.value
  for(let element of Data) {
    if(element.projectName.toLowerCase() === val.toLowerCase()) {
      res.push(element)
    }
  }
  let oldTable = document.querySelector('table')
  oldTable.innerHTML = ""
  generateTableHead(table, data)
  generateTable(table, res)
}

