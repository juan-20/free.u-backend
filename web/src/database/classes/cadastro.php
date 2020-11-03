<?php
// inicia a session
session_start();

// coneção com BD:
include('conexao.php');

if(isset($_POST['usuario'])){

    // checa se já existe esse usuario
$sql = "select COUNT(*) NOME from USER where NOME ='$nome' ";

$result = mysqli_query($conexao, $sql);

$row = mysqli_fetch_assoc($result);

foreach($row as $cont){
    echo $cont . '<br>';

}

// identifica se o user já existe
if ($cont >= 1 ){
    header('Location: ../pages/erro.html');
    exit;
}else{
    // instanciando o insert
    $sql = "INSERT INTO usuario (nome_cliente, email_cliente, telefone_cliente, senha_cliente, data_nasc)
     VALUES                     ('$nome','$email', '$telefone', '$senha', '$dt')";
    echo ($sql);
    
    echo("parabens");

    
// insere a informação no bd
// login bem-sucedido
if ($conexao->query($sql) === true){
    $_SESSION['status_cadatro'] = true;
}

$conexao->close();

}

}






?>