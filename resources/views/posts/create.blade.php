<form action="{{route('posts.new')}}" method="post">
    <label for="image">Add Image</label>
    <input type="text" name="image" id="image">
    <label for="caption">Add a description</label>
    <textarea name="caption" id="caption"></textarea>
    <input class="bg-red-50" type="submit" value="Publish">
</form>