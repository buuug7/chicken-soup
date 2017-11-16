<?php namespace Buuug7\Uploader\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Redirect;
use October\Rain\Database\Attach\Resizer;
use October\Rain\Exception\ApplicationException;
use System\Models\File;

class ImageUploader extends ComponentBase
{
    public $imageWidth;
    public $imageHeight;
    public $model;
    public $attribute;

    public function componentDetails()
    {
        return [
            'name' => 'ImageUploader Component',
            'description' => 'Upload an image and crop'
        ];
    }

    public function defineProperties()
    {
        return [
            'modelClass' => [
                'title' => 'Model class',
                'description' => 'model class to bind',
                'type' => 'string',
                'default' => '\Rainlab\User\Models\User',
            ],
            'modelField' => [
                'title' => 'Model Field',
                'description' => 'model field to bind',
                'type' => 'string',
                'default' => 'avatar',
            ],

            'identifierValue' => [
                'title' => 'Identifier value',
                'description' => 'identifier value to load the record from the database.',
                'type' => 'string',
                'default' => '{{ :id }}',
            ],

            'imageWidth' => [
                'title' => 'Image width',
                'description' => 'Enter an amount in pixels, eg: 100',
                'default' => '100',
                'type' => 'string',
            ],

            'imageHeight' => [
                'title' => 'Image height',
                'description' => 'Enter an amount in pixels, eg: 100',
                'default' => '100',
                'type' => 'string',
            ],

        ];
    }

    public function init()
    {
        $this->imageWidth = $this->property('imageWidth');
        $this->imageHeight = $this->property('imageHeight');
        $this->bindModel();
    }

    /*
     * bind model
     * parse className and bind to $this->model
     * */
    public function bindModel()
    {
        $className = $this->property('modelClass');
        $modelField = $this->property('modelField');
        $identifierValue = $this->property('identifierValue');

        $model = new $className();
        $model = $model->where('id', $identifierValue)->first();

        if (!$model) {
            throw new ApplicationException('bind model error!');
        }

        $this->model = $model;
        $this->attribute = $modelField;
    }

    public function onRun()
    {
        $this->addCss('assets/vendor/cropperjs/dist/cropper.min.css');
        $this->addCss('assets/scss/image-upload-crop.css');
        $this->addJs('assets/vendor/cropperjs/dist/cropper.min.js');
        $this->addJs('assets/js/image-upload-crop.js');
    }

    public function onUploadAndCrop()
    {
        $uploadFile = post('uploadFile');

        $cropDetail = post('cropDetail');

        $base64 = explode(',', $uploadFile);

        if (!$uploadFile) {
            throw new ApplicationException('File miss from request');
        }

        $file = new File();

        $file->fromData(base64_decode($base64[1]), 'avatar.png');

        $this->model->{$this->attribute}()->save($file);

        $userOriginAvatarPath = $this->model->{$this->attribute}->getLocalPath();

        Resizer::open($userOriginAvatarPath)->crop(
            $cropDetail['x'],
            $cropDetail['y'],
            $cropDetail['width'],
            $cropDetail['height']
        )->save($userOriginAvatarPath);

        Resizer::open($userOriginAvatarPath)
            ->resize($this->imageWidth, $this->imageHeight, [
                'mode' => 'auto',
                'offset' => [0, 0],
                'sharpen' => 0,
                'interlace' => true,
                'quality' => 90,
                'extension' => 'auto',
            ])->save($userOriginAvatarPath);

        return Redirect::refresh();
    }

    public function onRemoveImage()
    {
        $id = post('id');

        if ($id && ($file = File::find($id))) {
            $this->model->{$this->attribute}()->remove($file);
        }
        return Redirect::refresh();
    }
}
