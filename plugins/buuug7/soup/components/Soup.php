<?php namespace Buuug7\Soup\Components;

use Buuug7\Soup\Models\Comment;
use Cms\Classes\ComponentBase;
use Buuug7\Soup\Models\Soup as SoupModel;
use Illuminate\Support\Facades\Redirect;
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
            'commentLimitNumber' => [
                'title' => 'Comment Limit Number',
                'description' => 'comment limit number',
                'type' => 'string',
                'default' => '10',
            ],
        ];
    }

    public function onRun()
    {
        $this->soup = $this->page['soup'] = $this->loadSoup();
        $this->page['comments'] = $this->loadComments();
        $this->page['commentLimitNumber'] = $this->property('commentLimitNumber');
    }

    protected function loadSoup()
    {
        $id = $this->property('id');
        $soup = SoupModel::where('id', $id)->isPublished()->first();
        return $soup;
    }

    protected function loadComments()
    {
        $id = $this->property('id');
        $limit = $this->property('commentLimitNumber');
        $soup = SoupModel::where('id', $id)->isPublished()->first();
        $comments = $soup->comments()->offset(0)->limit($limit)->get();
        return $comments;
    }

    public function onLoadMoreComments()
    {
        $offset = post('offset');
        $id = $this->property('id');
        $soup = SoupModel::where('id', $id)->isPublished()->first();
        $count = $soup->comments()->count();
        if ($count >= $offset) {
            $comments = $soup->comments()
                ->offset($offset)
                ->limit($this->property('commentLimitNumber'))
                ->get();
            $this->page['offset'] = $offset + $this->property('commentLimitNumber');
            $this->page['comments'] = $comments;
        } else {
            $this->page['offset'] = $count;
            $this->page['comments'] = [];
            $this->page['noMoreComments'] = true;
        }

    }

    public function onPostComment()
    {
        if (!Auth::check()) {
            return;
        }
        $user = Auth::getUser();
        $soup = SoupModel::find(post('soup_id'));
        if (!$soup) {
            return;
        }
        $comment = new Comment([
            'content' => post('content'),
            'user_id' => $user->id,
        ]);
        $soup->comments()->save($comment);
        $this->page['comments'] = [$comment];
        $this->page['soup'] = $soup;
        $this->page['user'] = $user;
        Flash::success('成功发表评论');
    }

    /**
     * 回复评论
     * Reply comments
     */
    public function onReplyComment()
    {
        if (!Auth::check()) {
            Flash::info('登陆后可以回复评论');
            return;
        }
        $user = Auth::getUser();

        $soup = SoupModel::find(post('soup_id'));
        if (!$soup) {
            return;
        }
        $comment = new Comment([
            'content' => post('content'),
            'user_id' => $user->id,
            'target_comment_id' => post('target_comment_id'),
            'target_user_id' => post('target_user_id'),
        ]);

        $soup->comments()->save($comment);
        $this->page['comments'] = [$comment];
        $this->page['soup'] = $soup;
        $this->page['user'] = $user;
        Flash::success('成功回复评论');
    }


    /**
     * 点赞评论
     *  thumbs up comment
     */
    public function onLikeComment()
    {
        if (!Auth::check()) {
            flash::info('登陆后可以点赞');
            return;
        }

        $user = Auth::getUser();
        $commentId = post('comment_id');
        $comment = Comment::find($commentId);
        if (!$comment) {
            return;
        }

        $exists = $comment->hasLikeComment();

        if (!$exists) {
            // if not attach  user
            $comment->likeUsers()->attach($user);
        } else {
            // else detach user
            $comment->likeUsers()->detach($user);
        }

        $this->page['comment'] = $comment;
    }

    public function onDeleteComment()
    {
        $comment = Comment::find(post('id'));
        if(!$comment){
            return Redirect::refresh();
        }
        $comment->delete();
        Flash::success('成功删除评论');
        return Redirect::refresh();

    }


}
