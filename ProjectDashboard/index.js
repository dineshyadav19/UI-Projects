//import { Data } from "./Data.js";

const Data = [
  {
      projectName: "New Admin Design",
      startDate: "02/5/2019",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg"
    //   [
    //       {
    //           //name: "Design",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg"
    //       }
    //   ]
    ,
      progress: 100
  },
  {
      projectName: "Landing Page Design",
      startDate: "04/6/2019",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg"
    //   [
    //       {
    //           //name: "Design",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg"
    //       }
    //   ],
      ,progress: 78
  },
  {
      projectName: "Multipurpose Landing Template",
      startDate: "06/6/2019",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
    //   [
    //       {
    //           //name: "Template",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
    //       }
    //   ]
      ,
      progress: 100
  },{
      projectName: "Blog Template Design",
      startDate: "07/5/2019",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
    //   [
    //       {
    //           //name: "Design",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
    //       }
    //   ],
      ,progress: 100
  },
  {
      projectName: "Brand Logo Design",
      startDate: "08/6/2019",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg"
    //   [
    //       {
    //           //name: "Design",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg"
    //       }
    //   ],
      ,progress: 54
  },
  {
      projectName: "Redesign - Landing Page",
      startDate: "10/6/2019",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg"
    //   [
    //       {
    //           //name: "Redesign",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-6.jpg"
    //       }
    //   ],
      ,progress: 41
  },
  {
      projectName: "Redesign - Dashboard",
      startDate: "12/5/2019",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
    //   [
    //       {
    //           //name: "Redesign",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-7.jpg"
    //       }
    //   ],
      ,progress: 100
  },
  {
      projectName: "Landing Page Design",
      startDate: "13/6/2019",
      status: "Pending",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"
    //   [
    //       {
    //           //name: "Design",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-8.jpg"
    //       }
    //   ],
      ,progress: 84
  },
  {
      projectName: "Multipurpose Landing Template",
      startDate: "15/6/2019",
      status: "Completed",
      members: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg"
    //   [
    //       {
    //           //name: "Template",
    //           avatarUrl: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-9.jpg"
    //       }
    //   ],
      ,progress: 100
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
  const obj = {};
  event.preventDefault()
  const getData = document.querySelectorAll('input')
  obj.projectName = getData[0].value
  obj.startDate = getData[1].value
  obj.status = getData[2].value < 100 ? 'Pending' : 'Completed'
  obj.members = "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg"
  obj.progress = parseInt(getData[2].value)
  Data.push(obj)
  data = Object.keys(Data[0]);
  generateTable(table, Data);
}




