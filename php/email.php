<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $texto = addslashes($_POST['texto']);

    $para = "otaldodavy@gmail.com";
    $assunto = "Contato no site - davyperes.vercel";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Tel. Cel.: ".$telefone."\n"."Texto: ".$texto;

    $cabeca = "From: otaldodavy@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o E-mail");
    }
?>