var onCategory = false;
var onLocation = false;

function PerubahanJumlahProduk(){
    var activeContainer = document.querySelectorAll(".container");
    var banyak_produk = document.getElementById('jumlah-produk-ditemukan')
    banyak_produk.innerText = activeContainer.length.toString() + " Produk ditemukan";
}

function filterProduct(value){
    var n_Kategori = 0;
    var n_Lokasi = 0;
    if(value == 'kategori'){
        var buttonsKategori = document.querySelectorAll(".btn-list-kategori");
        buttonsKategori.forEach((button)=>{
            var elements = document.querySelectorAll("." + button.id);
            if(button.checked){
                n_Kategori = n_Kategori + 1;
            }
            elements.forEach((element)=>{    
                if(button.checked){ // di eksekusi setelah checkbox diklik
                    if(onLocation != true){
                       element.classList.add("container");
                       element.classList.remove("hide");
                    }

                    else if(onLocation == true){
                        var buttonsLokasi = document.querySelectorAll(".btn-list-lokasi");
                        buttonsLokasi.forEach((buttonLokasi)=>{
                        if(buttonLokasi.checked){
                            if(element.classList.contains(button.id) && element.classList.contains(buttonLokasi.id)){
                                element.classList.add("container");
                                element.classList.remove("hide");
                            }
                        }
                        })
                    }

                }
                else if(!button.checked){ //executed ketika cb diklik ke mati
                    element.classList.add("hide");
                    element.classList.remove("container");
                }
            })
            
        })    


        if (n_Kategori > 0){
            onCategory =  true;    
        }
        else{
            onCategory = false;
        }
    }


    else if(value =='lokasi'){
        var buttonsLokasi = document.querySelectorAll(".btn-list-lokasi");
        buttonsLokasi.forEach((button)=>{
            var elements = document.querySelectorAll("." + button.id);
            if(button.checked){
                n_Lokasi = n_Lokasi + 1;
            }
            
            // alert(on); // element (card) yogyakarta, sleman, bantul, dll
            elements.forEach((element)=>{ //untuk memastikan apakah card harus dihide/show dari id yang dibawakan button (Cek dlu kondisi buttonnya apakah clicked or not)
                if(button.checked){ // ngecekin tombol lokasi satu satu
                    if(onCategory != true){
                        element.classList.add("container");
                        element.classList.remove("hide");
                    }
                    else if(onCategory == true){
                        var buttonsKategori = document.querySelectorAll(".btn-list-kategori");
                        buttonsKategori.forEach((buttonKategori)=>{
                        if(buttonKategori.checked){
                            if(element.classList.contains(button.id) && element.classList.contains(buttonKategori.id)){
                                element.classList.add("container");
                                element.classList.remove("hide");
                            }
                        }
                        })
                    }

                }
                else if(!button.checked){ //checkbox dimatiin
                    element.classList.add("hide");
                    element.classList.remove("container");
                }
            })
            
        })
        

        
        if (n_Lokasi > 0){
            onLocation =  true;
        }
        else{
            onLocation = false;
        }
    }
    // if(onCategory == true && onLocation == true){
    //     var buttons = document.querySelectorAll(".btn-list-kategori");
    // }
     
        
    var elements = document.querySelectorAll(".product");
    elements.forEach((element)=>{
        if((n_Kategori + n_Lokasi) == 0 && onLocation != true && onCategory !=true ){
            element.classList.add("container");
            element.classList.remove("hide");
        }
        if(onLocation == false && onCategory == true){
            var buttonsKategori = document.querySelectorAll(".btn-list-kategori");
            buttonsKategori.forEach((button)=>{
            var elements = document.querySelectorAll("." + button.id);
                elements.forEach((element)=>{
                    if(button.checked){
                        element.classList.add("container");
                        element.classList.remove("hide");
                    }
                    else if(!button.checked){
                        element.classList.add("hide");
                         element.classList.remove("container");
                    }
                })
            });
        }
        
        else if(onLocation == true && onCategory == false){
            var buttonsLokasi = document.querySelectorAll(".btn-list-lokasi");
            buttonsLokasi.forEach((button)=>{
            var elements = document.querySelectorAll("." + button.id);
                elements.forEach((element)=>{
                    if(button.checked){
                        element.classList.add("container");
                        element.classList.remove("hide");
                    }
                    else if(!button.checked){
                        element.classList.add("hide");
                         element.classList.remove("container");
                    }
                })
            });
        }
        
    })

    PerubahanJumlahProduk();
}

function clearFilter(){
    var buttonsKategori = document.querySelectorAll(".clear");
    const dropdown = document.querySelector('.dropdown');
    const options = dropdown.querySelectorAll('.menu li');
    // const caret = dropdown.querySelector('.caret');
    const selected = dropdown.querySelector('.selected');
    // const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    var banyak_kos = document.getElementsByClassName("product container kos");
    var banyak_tanah = document.getElementsByClassName("product container tanah");
    var banyak_bangunan = document.getElementsByClassName("product container bangunan");
    buttonsKategori.forEach((button)=>{
        var elements = document.querySelectorAll("." + button.id);
        elements.forEach((element)=>{
            element.classList.add("container");
            element.classList.remove("hide");
        })
        button.checked = false;
        n_Kategori = 0;
        n_Lokasi = 0; 
        onLocation = false;
        onCategory = false;
                //buat function checkboxnya jadi unchecked
    })

    options.forEach((option)=>{
        option.classList.remove('active');
    })
    selected.innerHTML = "Luas / Harga";
    menu.classList.remove('menu-open');


    var previousProduct;
    if(banyak_kos.length > 0){
        for(i=0;i<banyak_kos.length;i++){
            if(i==0){
                banyak_kos.item(i).id = banyak_kos.item(i).className;
                var currentProduct = document.getElementById(banyak_kos.item(i).id);
                var parent = currentProduct.parentNode;
                parent.insertBefore(currentProduct,parent.firstChild)
                previousProduct = currentProduct;
                // alert(banyak_kos.item(i).className);
            }
            else{
                banyak_kos.item(i).id = banyak_kos.item(i).className
                var currentProduct = document.getElementById(banyak_kos.item(i).id);
                parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                previousProduct = currentProduct;
            }
        }
        
        for(i=0;i<banyak_tanah.length;i++){
            banyak_tanah.item(i).id = banyak_tanah.item(i).className
            var currentProduct = document.getElementById(banyak_tanah.item(i).id);
            parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
            previousProduct = currentProduct;
    
            // alert(banyak_tanah.item(i).className);
        }
        for(i=0;i<banyak_bangunan.length;i++){
            banyak_bangunan.item(i).id = banyak_bangunan.item(i).className
            var currentProduct = document.getElementById(banyak_bangunan.item(i).id);
            parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
            previousProduct = currentProduct;
        }
    }
    else{
        if(banyak_tanah.length > 0){
            for(i=0;i<banyak_tanah.length;i++){
                if(i==0){
                    banyak_tanah.item(i).id = banyak_tanah.item(i).className;
                    var currentProduct = document.getElementById(banyak_tanah.item(i).id);
                    var parent = currentProduct.parentNode;
                    parent.insertBefore(currentProduct,parent.firstChild)
                    previousProduct = currentProduct;
                    // alert(banyak_tanah.item(i).className);
                }
                else{
                    banyak_tanah.item(i).id = banyak_tanah.item(i).className
                    var currentProduct = document.getElementById(banyak_tanah.item(i).id);
                    parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                    previousProduct = currentProduct;
                }
        
                // alert(banyak_tanah.item(i).className);
            }
            for(i=0;i<banyak_bangunan.length;i++){
                banyak_bangunan.item(i).id = banyak_bangunan.item(i).className
                var currentProduct = document.getElementById(banyak_bangunan.item(i).id);
                parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                previousProduct = currentProduct;
            }
        }
        else{
            if(banyak_bangunan.length > 0){
                for(i=0;i<banyak_bangunan.length;i++){
                    if(i==0){
                        banyak_bangunan.item(i).id = banyak_bangunan.item(i).className;
                        var currentProduct = document.getElementById(banyak_bangunan.item(i).id);
                        var parent = currentProduct.parentNode;
                        parent.insertBefore(currentProduct,parent.firstChild)
                        previousProduct = currentProduct;
                        // alert(banyak_bangunan.item(i).className);
                    }
                    else{
                        banyak_bangunan.item(i).id = banyak_bangunan.item(i).className
                        var currentProduct = document.getElementById(banyak_bangunan.item(i).id);
                        parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                        previousProduct = currentProduct;
                    }
                    // alert(banyak_tanah.item(i).className);
                }
            }
        }
    }
    PerubahanJumlahProduk();
}




function DropDown(){
    const dropdown = document.querySelector('.dropdown');
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    // alert('tes');
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
}


function UrutkanBerdasar(value){
    const products = document.querySelectorAll('.product');
    const dropdown = document.querySelector('.dropdown');
    const caret = dropdown.querySelector('.caret');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    var hargaProductsSort = Array.from( [].map.call(document.querySelectorAll('.harga-produk'), function(el) {
        return el.innerHTML.replace('Rp','').replace('M','');
    }));

    var luasProductsSort = Array.from( [].map.call(document.querySelectorAll('.luas-produk'), function(el) {
        return el.innerHTML.replace('m2','').replace("<b>Luas</b> : ","");
    }));
    // ngecekin apakah ini filter
    options.forEach((option)=>{
        if(option.id == value){
            selected.innerHTML = option.innerHTML;
            caret.classList.remove('caret-rotate');
            if(!option.classList.contains('active')){
                option.classList.add('active');
            
                if(value == 'harga-termurah')
                {
                    let sorted = hargaProductsSort.sort((a,b)=> b-a);
                    
                    for(let i = 0; i<sorted.length;i++ ){ // 4 kali 1.7 1.9 2 3
                        var previousProduct;
                        for(let j = 0; j < products.length;j++ ){ // 4 kali
                            var hargaClass = products[j].querySelector(".harga-produk").textContent.replace('Rp','').replace('M','');
                            if(sorted[i] == hargaClass){
                                if(i > 0 ){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                                    previousProduct = currentProduct;
                                    products[j].id = '';
                                }
                                else if(i==0){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    var previousProduct = currentProduct;
                                    var parent = currentProduct.parentNode;
                                    parent.insertBefore(currentProduct,parent.firstChild) // parentnya ngikutin parent utama mreka
                                    products[j].id = '';
                                }
                            }
                        }
                    }
                }
                else if(value == 'harga-termahal')
                {
                    let sorted = hargaProductsSort.sort((a,b)=> a-b);
                    for(let i = 0; i<sorted.length;i++ ){ // 4 kali 1.7 1.9 2 3
                        var previousProduct;
                        for(let j = 0; j < products.length;j++ ){ // 4 kali
                            var hargaClass = products[j].querySelector(".harga-produk").textContent.replace('Rp','').replace('M','');
                            if(sorted[i] == hargaClass){
                                if(i != 0 ){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                                    previousProduct = currentProduct;
                                    products[j].id = '';
                                }
                                else if(i==0){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    var previousProduct = currentProduct;
                                    var parent = currentProduct.parentNode;
                                    parent.insertBefore(currentProduct,parent.firstChild) // parentnya ngikutin parent utama mreka
                                    products[j].id = '';
                                }
                            }
                        }
                    }
                }
                else if(value == 'luas-terkecil')
                {
                    let sorted = luasProductsSort.sort((a,b)=> b-a);
                    
                    for(let i = 0; i<sorted.length;i++ ){ // 4 kali 1.7 1.9 2 3
                        var previousProduct;
                        for(let j = 0; j < products.length;j++ ){ // 4 kali
                            var luasClass = products[j].querySelector(".luas-produk").textContent.replace('Luas : ','').replace('m2','');
                            if(sorted[i] == luasClass){
                                if(i != 0 ){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                                    previousProduct = currentProduct;
                                    products[j].id = '';
                                }
                                else if(i==0){
                                    products[j].id = products[j].classList

                                    var currentProduct = document.getElementById(products[j].id);
                                    var previousProduct = currentProduct;
                                    var parent = currentProduct.parentNode;
                                    parent.insertBefore(currentProduct,parent.firstChild) // parentnya ngikutin parent utama mreka
                                    products[j].id = '';
                                }
                            }
                        }
                    }
                }
                else if(value == 'luas-terbesar')
                {
                    let sorted = luasProductsSort.sort((a,b)=> a-b);
                    
                    for(let i = 0; i<sorted.length;i++ ){ // 4 kali 1.7 1.9 2 3
                        var previousProduct;
                        for(let j = 0; j < products.length;j++ ){ // 4 kali
                            var luasClass = products[j].querySelector(".luas-produk").textContent.replace('Luas : ','').replace('m2','');
                            if(sorted[i] == luasClass){
                                if(i != 0 ){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    parent.insertBefore(currentProduct,previousProduct);//parentnya ngikutin product yang sebelumnya
                                    previousProduct = currentProduct;
                                    products[j].id = '';
                                }
                                else if(i==0){
                                    products[j].id = products[j].classList
                                    var currentProduct = document.getElementById(products[j].id);
                                    var previousProduct = currentProduct;
                                    var parent = currentProduct.parentNode;
                                    parent.insertBefore(currentProduct,parent.firstChild) // parentnya ngikutin parent utama mreka
                                    products[j].id = '';
                                }
                            }
                        }
                    }
                }
            }
        
        }
        else{
            option.classList.remove('active');
        }


    })

    
}

function DropDownMenu(){
    // const dropdown = document.querySelector('.nav-dropdown');
    const menu = document.querySelector('.nav-menu');
    // alert('tes');
    menu.classList.toggle('nav-menu-open');
}


