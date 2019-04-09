var results =
[
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate"
        }, 
        {
            "name": "Yavin IV", 
            "rotation_period": "24", 
            "orbital_period": "4818", 
            "diameter": "10200", 
            "climate": "temperate, tropical"
        }, 
        {
            "name": "Hoth", 
            "rotation_period": "23", 
            "orbital_period": "549", 
            "diameter": "7200", 
            "climate": "frozen"
        }, 
        {
            "name": "Dagobah", 
            "rotation_period": "23", 
            "orbital_period": "341", 
            "diameter": "8900", 
            "climate": "murky"
        }, 
        {
            "name": "Bespin", 
            "rotation_period": "12", 
            "orbital_period": "5110", 
            "diameter": "118000", 
            "climate": "temperate"
        }, 
        {
            "name": "Endor", 
            "rotation_period": "18", 
            "orbital_period": "402", 
            "diameter": "4900", 
            "climate": "temperate"
        }, 
        {
            "name": "Naboo", 
            "rotation_period": "26", 
            "orbital_period": "312", 
            "diameter": "12120", 
            "climate": "temperate"
        }, 
        {
            "name": "Coruscant", 
            "rotation_period": "24", 
            "orbital_period": "368", 
            "diameter": "12240", 
            "climate": "temperate"
        }, 
        {
            "name": "Kamino", 
            "rotation_period": "27", 
            "orbital_period": "463", 
            "diameter": "19720", 
            "climate": "temperate"
        }, 
        {
            "name": "Geonosis", 
            "rotation_period": "30", 
            "orbital_period": "256", 
            "diameter": "11370", 
            "climate": "temperate, arid"
        }
    ]

const isi = document.getElementById('konten')
for(var i=0;i<results.length;i++){
    var tr = '<tr>';
    tr+='<td>'+results[i].name+'</td><td>'+results[i].rotation_period+'</td><td>'+results[i].orbital_period+'</td><td>'+results[i].diameter+'</td><td>'+results[i].climate;
    tbody.innerHTML+=tr;
}

const button = document.getElementById('cari');
button.addEventListener('click', function(){
     tbody.innerHTML = "<tr>" + "<th>"+ "Name" + "<th>" + "Rotation " + "<th>" + "Orbital " + "<th>" + "Diameter"+ "<th>" + "climate"
    var resultsname = results.filter(key => key.orbital_period === document.getElementById('input').value);
    for (let i = 0; i < resultsname.length; i++){
        let tr = "<tr>";
        tr += "<td>" + resultsname[i].name + "<td>" + resultsname[i].rotation_period + "<td>" + resultsname[i].orbital_period + "<td>" + resultsname[i].diameter+ "<td>" + resultsname[i].climate;
        tbody.innerHTML += tr;   
    }
})