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


    var previewDiv = $('.image-upload-crop__upload-preview'),
        submitButton = $('.image-upload-crop__crop-button'),
        fileId = $('.image-upload-crop__upload-file #model-id').val(),
        cropper = null,
        cropperDetail = null,
        reader = null,
        uploadImage = null,
        allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];

    $('.image-upload-crop__upload-file #image-file').on('change', function () {
        if (this.files.length === 0) {
            return;
        }
        if (allowedMimeTypes.indexOf(this.files[0].type) === -1) {
            alert('不允许的文件类型');
            return;
        }
        if (cropper) {
            cropper.destroy();
        }
        reader = new FileReader();
        reader.onload = function (e) {
            var img = $('<img />', {
                src: e.target.result,
            });
            previewDiv.empty();
            img.appendTo(previewDiv);
            uploadImage = e.target.result;
            cropper = new Cropper(document.querySelector('.image-upload-crop__upload-preview > img'), {
                aspectRatio: 1 / 1,
                crop: function (e) {
                    cropperDetail = e.detail;
                    console.log(cropperDetail);
                },
            });
        }
        reader.readAsDataURL(this.files[0]);
    });


    submitButton.on('click', function (e) {
        e.preventDefault();
        var elem = $(this);
        if (!cropperDetail && !uploadImage) {
            alert('请选择上传文件');
            return;
        }
        elem.attr('disabled', true)
            .html('<i class="fa fa-spinner fa-pulse"></i>');
        $.request('onUploadAndCrop', {
            data:{
                cropperDetail: cropperDetail,
                uploadImage: uploadImage,
                fileId: fileId,
            }
        });
    });

});