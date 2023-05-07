function addweekly() {
    var groupinp = document.createElement('div');
    groupinp.setAttribute("class", "checknbox");


        const newcheck = document.createElement('input');
        newcheck.setAttribute("type", "checkbox");
        newcheck.setAttribute("class", "checkntask");

        var input = document.getElementById('input').value;
        const newtask = document.createElement('p');
        const task = document.createTextNode(input);
        newtask.appendChild(task);
        newtask.setAttribute("class", "checkntask");




    groupinp.appendChild(newcheck)
    groupinp.appendChild(newtask)


    document.getElementById("addtskbtn").appendChild(groupinp);
}