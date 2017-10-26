<?php namespace Buuug7\Uploader\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use October\Rain\Exception\ApplicationException;
use RainLab\User\Facades\Auth;
use System\Models\File;

class ImageUploader extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'ImageUploader Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onUploadImage(){

        if(!Input::hasFile('file')){
            throw new ApplicationException('File miss from request');
        }
        $uploadFile = Input::file('file');

        $validation = Validator::make(
            ['file' => $uploadFile,],
            ['file' => 'mimes:jpeg,png',]
        );

        if($validation->fails()){
            throw new ValidationException($validation);
        }

        $file = new File;
        $file->data= $uploadFile;
        $file->is_public = true;
        $file->save();
        $user = Auth::getUser();
        $user->avatar()->add($file);
    }

    public function onRemoveImage(){
        $file_id =post('file_id');
        $user = Auth::getUser();
        if($file_id && ($file =File::find($file_id))){
            $user->avatar()->remove($file);
        }
    }
}
