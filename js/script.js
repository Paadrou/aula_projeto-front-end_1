usuarios = []

function cadastrar() {

    document.getElementById('nomecoincide').style.display = 'none'
    document.getElementById('senhacoincidecad').style.display = 'none'
    document.getElementById('senhacoincidecad2').style.display = 'none'
    document.getElementById('coincidecd').style.display = 'none'

    let camposenha = document.getElementById('inputsenha')
    let campoemail = document.getElementById('inputemail')

    let senha = camposenha.value
    let email = campoemail.value

    let posnome = usuarios.indexOf(nome)

    let user = { email, senha }

    if (nome == null || nome == "") {
        document.getElementById('nomecoincide').style.display = 'inline'
    }
    if (senha == null || senha == "") {
        document.getElementById('senhacoincidecad').style.display = 'inline'
    }
    if (repitasenha == null || repitasenha == "") {
        document.getElementById('senhacoincidecad2').style.display = 'inline'
    }
    else if (senha != null && senha != "" && nome != null && nome != "") {
        if (posnome == -1) {

            if (repitasenha == senha) {

                camporepitasenha.value = null
                camposenha.value = null
                camponome.value = null
                usuarios.push(user)
                alert("Usuário Cadastrado com Sucesso!")

            } else {

                document.getElementById('coincidecd').style.display = 'inline'

            }
        }
    }
}
