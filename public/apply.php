<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name        = isset($input['name'])        ? strip_tags(trim($input['name']))        : '';
$email       = isset($input['email'])       ? strip_tags(trim($input['email']))       : '';
$phone       = isset($input['phone'])       ? strip_tags(trim($input['phone']))       : '';
$resumeLink  = isset($input['resumeLink'])  ? strip_tags(trim($input['resumeLink']))  : '';
$coverLetter = isset($input['coverLetter']) ? strip_tags(trim($input['coverLetter'])) : '';

if (!$name || !$email || !$resumeLink || !$coverLetter) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, resume link, and cover letter are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

$to      = 'info@oregonbicycleco.com'; // <-- replace with your email
$subject = 'New Job Application';
$body    = "Name: $name\n";
$body   .= "Email: $email\n";
if ($phone) $body .= "Phone: $phone\n";
$body   .= "Resume: $resumeLink\n";
$body   .= "\nCover Letter:\n$coverLetter";

$headers  = "From: no-reply@oregonbicycleco.com\r\n";
$headers .= "Reply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again.']);
}
