



//  handel header

let hidenamee =  document.getElementById('getele');
let getele2 = document.getElementById('getele2');

let imge = document.getElementById('imge');

//  custimize header
let headerTop = document.getElementById('headerTop');
let headerBottom = document.getElementById('headerBottom');


window.onscroll = function() {

    console.log(window.scrollY);
// ippppppppppp[[]]

    if (window.scrollY <= 150) {  
        imge.classList.add("perfil");

        hidenamee.classList.add("hidename");
        getele2.classList.add("hidename");
    } else {
        // imge.classList.remove("perfil");
        imge.classList.add("hideperfil");

        hidenamee.classList.remove("hidename");
        hidenamee.classList.add("name");

        getele2.classList.remove("hidename");
        getele2.classList.add("desc");
    }


    if(window.scrollY >= 650 ) {
        headerTop.classList.add('headerTop');
        headerBottom.classList.add('headerBottom');
    } else {
        headerTop.classList.remove('headerTop');
        headerBottom.classList.remove('headerBottom');

    }
};