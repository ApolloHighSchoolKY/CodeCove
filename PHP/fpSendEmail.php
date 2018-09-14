<?
  $message = filter_var($_POST['Test this on for size'], FILTER_SANITIZE_STRING);
  mail("nathan.roberts@stu.daviess.kyschools.us","Just to test",$message);
?>
