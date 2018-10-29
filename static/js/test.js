$(function () {
    $('img').each(function () {
        var oldsrc = $(this).attr('src')
        var newsrc = "{% static '" + oldsrc + "' %}"
        $(this).attr('src', newsrc)
    })
    console.log($('body').html())
})

// window.onload = function () {
//     arry1 = document.getElementsByTagName("img")
//     for(var i in arry1){
//         var oldsrc = arry1[i].src
//         var newsrc = "{% static '" + oldsrc + "' %}"
//         arry1[i].src = newsrc
//     }
//     console.log('44444')
//     console.log(document.body.innerHTML)
// }