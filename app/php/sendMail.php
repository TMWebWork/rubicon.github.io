<?php
if ($_POST) {
//    $to = "rubiconepro@gmail.com"; // поменять на свой электронный адрес
    $to = "vafonin@icmark.ru";
    $from = 'info@rubiconpro.ru';
    $subject = 'summer-it-club-rubicone.ru';
    $message = " \r\n";
    if($_POST["age"] != ''){
        $message .= "Возраст: " .$_POST["age"]. "<br>\r\n";
        $message .= "Телефон: " .$_POST["phone"]. "<br>\r\n";
        $message .= "Форма: " .$_POST["form-name"]. "<br>\r\n";
    } else {
        $message .= "Телефон: " .$_POST["phone"]. "<br><br>\r\n";
        $message .= "Форма: " .$_POST["form-name"]. "<br>\r\n";
    }
    if (isset($_POST['utm_source'])) {
        $message .= "<br>\r\n" . "utm_source: " . $_POST['utm_source'] . "<br>\r\n";
        $message .= "utm_medium: " . $_POST['utm_medium'] . "<br>\r\n";
        $message .= "utm_campaign: " . $_POST['utm_campaign'] . "<br>\r\n";
        $message .= "utm_term: " . $_POST['utm_term'] . "<br>\r\n";
    }
    $message .= "\r\n";
    $boundary = md5(date('r', time()));
    $filesize = '';
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
--$boundary
Content-Type: text/html; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";

    /* AMO.CRM */

    /*
    $_REQUEST = array_merge($_REQUEST, $_COOKIE);
    $url_delivery_amo = 'https://apicrm.ru/amo/domain/it-academy-deti.rubiconpro.ru/send.php';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url_delivery_amo);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $_REQUEST);
    curl_setopt($curl,CURLOPT_HEADER,false);
    curl_exec($curl);
    curl_close($curl); #Заверашем сеанс cURL
    */

    /* /AMO.CRM */
    if (mail($to, $subject, $message, $headers)) {
        echo $_POST['name'].', Ваше сообщение получено, спасибо!';
    } else {
        echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
    }
}
?>