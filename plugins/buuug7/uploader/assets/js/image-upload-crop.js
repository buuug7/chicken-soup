$(document).on('ajaxSetup', function (event, context) {
    // Enable AJAX handling of Flash messages on all AJAX requests
    context.options.flash = true

    // Enable the StripeLoadIndicator on all AJAX requests
    context.options.loading = $.oc.stripeLoadIndicator

    // Handle Error Messages by triggering a flashMsg of type error
    context.options.handleErrorMessage = function (message) {
        $.oc.flashMsg({text: message, class: 'error'})
    }

    // Handle Flash Messages by triggering a flashMsg of the message type
    context.options.handleFlashMessage = function (message, type) {
        $.oc.flashMsg({text: message, class: type})
    }
});

$(function () {

    var uploadPreview = document.querySelector('.image-upload-crop__upload-preview > img');
    var cropper = null;
    var cropDetail = null;
    var reader = null;
    var uploadFile = null;

    $('.image-upload-crop__form #image-file').on('change', function () {

        if (this.files.length == 0) {
            uploadPreview.src = '';
            return;
        }
        if (cropper) {
            cropper.destroy();
        }
        reader = new FileReader();
        reader.onload = function (e) {
            uploadPreview.src = e.target.result;
            uploadFile = e.target.result;
            cropper = new Cropper(uploadPreview, {
                aspectRatio: 1 / 1,
                crop: function (e) {
                    cropDetail = e.detail;
                    console.log(cropDetail);
                },
                preview: '.image-upload-crop__img-preview'
            });
        };
        reader.readAsDataURL(this.files[0]);
    });

    $('.image-upload-crop__crop-button').on('click', function (e) {
        $.request('onUploadAndCrop', {
                data: {
                    cropDetail: cropDetail,
                    uploadFile: uploadFile,
                }
            }
        );
    });
});