$(document).ready(function(){
    $('#search').keyup(function(){
        var searchValue = ($('#search').val()).trim();
        // console.log(searchValue);
        if(searchValue != ''){
            $.getJSON('list.json', function(result){
                var list = result.list;
                // console.log(list);
                var options = {
                    shouldSort: true,
                    threshold: 0.6,
                    location: 0,
                    distance: 100,
                    maxPatternLength: 32,
                    minMatchCharLength: 1,
                    keys: [
                      "title",
                      "author.firstName",
                      "author.lastName"
                    ]
                  };
                  var fuse = new Fuse(list, options);
                  var searchResult = fuse.search(searchValue);
                  console.log(searchResult);
                    if(searchResult.length > 0){
                    $('#result').empty();
                    for(i =0; i < searchResult.length; i++){
                        $('#result').append('<div class="res"><h3>'+ searchResult[i].title + '</h3><p>' + searchResult[i].author.firstName + ' '+ searchResult[i].author.lastName +'</p></div>')
                    }
                }
                else{
                    $('#result').empty();
                    $('#result').html('No Result Found.');
                }
            })
        }
    })
})