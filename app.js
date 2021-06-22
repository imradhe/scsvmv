    var images = document.querySelector('.images')
    var i = 1
    function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
    while (i<=277) {
        images.innerHTML += '<div class="col-sm-2 col-6 p-2 text-center"><img id="11199A'+padLeadingZeros(i, 3)+'" src="http://14.139.187.51/studentsportal/photos/11199A'+padLeadingZeros(i, 3)+'.jpg" onerror="this.src=\'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png\'" height="120px"><p class="text-white">11199A'+padLeadingZeros(i, 3)+'</p></div>'        
        i++
    }
    
    var j = 1
    while (j<=29) {
        images.innerHTML += '<div class="col-sm-2 col-6 p-2 text-center"><img id="11199M'+padLeadingZeros(j, 3)+'" src="http://14.139.187.51/studentsportal/photos/11199M'+padLeadingZeros(j, 3)+'.jpg" onerror="this.src=\'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png\'" height="120px"><p class="text-white">11199M'+padLeadingZeros(j, 3)+'</p></div>'        
        j++
    }