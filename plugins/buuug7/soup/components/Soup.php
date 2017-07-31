<?php namespace Buuug7\Soup\Components;

use Buuug7\Soup\Models\Comment;
use Cms\Classes\ComponentBase;
use Buuug7\Soup\Models\Soup as SoupModel;
use October\Rain\Support\Facades\Flash;
use RainLab\User\Facades\Auth;

class Soup extends ComponentBase
{
    public $soup;

    public function componentDetails()
    {
        return [
            'name' => 'Soup Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'id' => [
                'title' => 'ID',
                'description' => 'the soup ID',
                'type' => 'string',
                'default' => '{{ :id }}',
            ],
        ];
    }

    public function onRun()
    {
        $this->soup = $this->page['soup'] = $this->loadSoup();
    }

    protected function loadSoup()
    {
        $id = $this->property('id');
        $soup = SoupModel::where('id', $id)->isPublished()->first();
        return $soup;
    }

    public function onPostComment()
    {
        if(!Auth::check()){
            return ;
        }
        $user=Auth::getUser();
        $comment=new Comment([
            'content' => post('content'),
            'user_id' => $user->id,
            'like_users' => [],
        ]);
        $soup=SoupModel::find(post('soup_id'));
        if(!$soup){
            return ;
        }
        $soup->comments()->save($comment);
        $this->page['comments']=[$comment];
        $this->page['soup']=$soup;
        Flash::success('成功发表评论');
    }

    public function onReplyComment(){
        //TODO
    }

    public function onLikeComment(){
        // TODO
    }


}
