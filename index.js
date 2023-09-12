var field = document.querySelectorAll("#form-user-create [name]")
var user = {};

function addLine(dataUser) {
    var tabela = document.getElementById("tableUser").innerHTML = `
    <tr>
        <td>
            <img src="${user.photo}" alt="User Image" class="img-circle img-sm">
        </td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>Sim</td>
        <td>02/04/2018</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>
`;


}


document.querySelectorAll("#form-user-create").forEach(() => {

    this.addEventListener("submit", (event) => {

        event.preventDefault();

        field.forEach((field, index) => {

            if (field.name == "gender") {

                if (field.checked) {

                    user[field.name] = field.value;

                }

            } else {

                user[field.name] = field.value;

            }

        });

        addLine(user)
    });


})
