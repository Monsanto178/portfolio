<?php

namespace App\Http\Controllers;

use App\Jobs\ContactJob;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;

class ContactController extends Controller
{
    public function send() {
        // $toEmail = 'example@gmail.com';
        // $subject = 'Second Test';
        // $fromEmail = 'janeDoe@gmail.com';
        // $content = 'Hello my friend, this is the second test';

        // Mail::raw($content, function(Message $message) use($toEmail, $subject, $fromEmail, $content) {
        //     $message->to($toEmail)
        //     ->subject($subject)
        //     ->from($fromEmail);
        // });
        // return 'This was a success!';

        $toEmail = 'example@gmail.com';
        $subject = 'Second Test';
        $fromEmail = 'janeDoe@gmail.com';
        $content = 'Hello my friend, this is the second test';

        Mail::raw($content, function(Message $message) use($toEmail, $subject, $fromEmail, $content) {
            $message->to($toEmail)
            ->subject($subject)
            ->from($fromEmail);
        });
        return 'This was a success!';
    }

    public function sendMessage(Request $request) {
        Log::info('request', ['name' => $request->input('name')]);
        Log::info('request', ['mail' => $request->input('email')]);
        Log::info('request', ['content' => $request->input('content')]);
        try {
            $data = $request->validate([
                'name' => 'required|min:3|max:20',
                'email' => 'required|email',
                'content' => 'required|min:5|max:200'
            ]);
            Queue::push(new ContactJob($data));
            
            return response()->json(['message' => 'Message sent successfully!'], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            Log::error('validation error');

            return response()->json(['message' => 'Validation error.'], 422);
        } catch (\Throwable $e) {
            Log::error('some other error');

            return response()->json(['message' => 'Sorry. Something went wrong.'], 500);
        }
    }
}
