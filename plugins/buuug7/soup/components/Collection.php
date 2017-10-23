<?php namespace Buuug7\Soup\Components;

use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Redirect;
use October\Rain\Support\Facades\Flash;
use RainLab\User\Facades\Auth;
use Buuug7\Soup\Models\Collection as CollectionModel;

class Collection extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Collection Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'id' => [
                'title' => 'ID',
                'description' => 'the collection ID',
                'type' => 'string',
                'default' => '{{ :id }}',
            ],
        ];
    }

    public function onRun()
    {
        $this->page['collection'] = $this->loadCollection();
    }

    protected function loadCollection()
    {
        $id = $this->property('id');
        $collection = CollectionModel::find($id);
        return $collection;
    }

    /**
     * 创建集合
     * create collection
     */
    public function onCreateSoupCollection()
    {
        if (!Auth::check()) {
            return;
        }
        $user = Auth::getUser();
        $user->createdCollections()->add(new CollectionModel([
            'name' => post('name'),
            'description' => post('description'),
        ]));
        Flash::success('成功创建收藏夹');
        return Redirect::refresh();
    }

    /**
     * 创建集合并添加soup到其中
     * create collection and associate soup
     */
    public function onCreateAndAddToCollection()
    {
        if (!Auth::check()) {
            Flash::error('请登录后在收藏');
            return;
        }
        $user = Auth::getUser();

        $collection = $user->createdCollections()->create([
            'name' => post('name'),
            'description' => post('description'),
            'user_id' => $user->id,
        ]);
        $soupId = post('soup_id');
        $collectionId = $collection->id;

        if ($this->addSoupToCollection($collectionId, $soupId)) {
            Flash::success('成功创建收藏夹并收藏成功');
        } else {
            Flash::info('出错了!请稍后再试!');
        }
        return Redirect::refresh();
    }


    /**
     * add soup to collection
     */
    public function onAddSoupToCollection()
    {
        if (!Auth::check()) {
            Flash::error('请登录后在收藏!');
            return;
        }
        $user = Auth::getUser();

        $collectonId = post('collection_id');
        $soupId = post('soup_id');

        if ($this->addSoupToCollection($collectonId, $soupId)) {
            Flash::success('收藏成功!');
        } else {
            Flash::info('你已经收藏过了!');
        }

        return Redirect::refresh();
    }

    /*
     * remove soup from collection
     * */
    public function onRemoveSoupFromCollection()
    {
        if(!Auth::check()){
            Flash::error('请登录后在操作');
            return ;
        }
        $user = Auth::getUser();
        $collectionId = post('collection_id');
        $soupId = post('soup_id');
        $collection = CollectionModel::find($collectionId);
        if($collection){
            if($collection->hasCollectedSoup($soupId)){
                $collection->soups()->detach($soupId);
                Flash::success('成功移出');
                return Redirect::refresh();
            }else{
                //TODO::
                return Redirect::refresh();
            }
        }else{
            return Redirect::refresh();
        }
    }


    /**
     * help function
     * add soup to collection
     * @param $collectionId
     * @param $soupId
     * @return bool
     */
    protected function addSoupToCollection($collectionId, $soupId)
    {
        $collection = CollectionModel::find($collectionId);
        if ($collection->hasCollectedSoup($soupId)) {
            return false;
        } else {
            $collection->soups()->attach($soupId);
        }
        return true;
    }

    /**
     * add collection to user collectionList
     */
    public function onCollectedCollection()
    {
        if (!Auth::check()) {
            Flash::error('请登录后点击收藏');
            return;
        }
        $user = Auth::getUser();

        $collectonId = post('collection_id');
        $userId = $user->id;

        if ($this->addOrRemoveCollection($collectonId, $userId)) {
            Flash::success('收藏成功');
        } else {
            Flash::info('成功取消收藏!');
        }
        return Redirect::refresh();
    }

    /**
     * help function
     * add collection to user collectionList
     * @param $collectionId
     * @param $userId
     * @return bool
     */
    protected function addOrRemoveCollection($collectionId, $userId)
    {
        $collection = CollectionModel::find($collectionId);
        if ($collection->hasCollector($userId)) {
            $collection->collectors()->detach($userId);
            return false;
        } else {
            $collection->collectors()->attach($userId);
        }
        return true;
    }

    /*
     * update collection
     * */
    public function onUpdateCollection(){
        if(!Auth::check()){
            return ;
        }
        $user = Auth::getUser();
        $collection = CollectionModel::find(post('collectionId'));
        if(!$collection || $collection->user_id != $user->id){
            Flash::info('你没有权限更新');
            Return Redirect::refresh();
        }
        $collection->name = post('collectionName');
        $collection->description = post('collectionDescription');
        $collection->save();
        Flash::success('更新成功');
        Return Redirect::to('/soup/collection/'.$collection->id);
    }


    /**
     * delete collection
     */
    public function onDeleteCollection()
    {
        if (!Auth::check()) {
            return;
        }
        $user = Auth::getUser();

        $collection = CollectionModel::find(post('collection_id'));

        if (!$collection || $collection->user_id != $user->id) {
            Flash::info('你没有权限删除');
            return Redirect::refresh();
        }
        $collection->delete();
        Flash::success('成功删除!');
        return Redirect::to('user/created-collections');
    }
}
