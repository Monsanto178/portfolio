<?php

namespace App\Jobs;

use App\Mail\ContactMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class ContactJob implements ShouldQueue
{
    use Queueable;
    protected $data;
    /**
     * Create a new job instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to(env('MAIL_TO_ADDRESS'))->send(new ContactMail($this->data));
    }
}
