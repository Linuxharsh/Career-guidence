const collegeList = [
  
  { name:'IIT Delhi', location:'Delhi', fees:'15 LPA' },
   { name:'NIT', location:'Mumbai', fees:'35 LPA' },
    { name:'BITS', location:'Kanpur', fees:'55 LPA' },
    { name:'KG COLLAGE', location:'Noida', fees:'65 LPA' },
    { name:'LPU', location:'Greater Noida', fees:'20 LPA' },
];
const list = document.getElementById('list');

college.forEach(college => {
  const li = document.createElement('li');
  li.innerHTML = `<b>${college.name}</br><br>
  Location: ${college.location}<br>
  fees:${college.fees}
   `;
   list.appendChild(li);
});

logaction('collegelist.js loaded');