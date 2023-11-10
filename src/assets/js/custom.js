/** 
  * Template Name: Home Property
  * Version: 1.0  
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  

  1. FIXED NAVBAR 
  2. AGENTS SLIDER
  3. TESTIMONIAL SLIDER  
  4. CLIENT BRAND SLIDER (SLICK SLIDER)
  5. TOP SLIDER (SLICK SLIDER)
  6. LATEST PRODUCT SLIDER (SLICK SLIDER)
  7. HOVER DROPDOWN MENU
  8. ADVANCE SEARCH FILTER  (noUiSlider SLIDER)
  9. MIXIT FILTER ( FOR GALLERY ) 
  10. FANCYBOX ( FOR PORTFOLIO POPUP VIEW )
  11. SCROLL TOP BUTTON
  12. PRELOADER
  13. GRID AND LIST LAYOUT CHANGER 
  14.RELATED ITEM SLIDER (SLICK SLIDER)

  //payment js
  
**/
// call api tỉnh thành vn
// fetch('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
//   .then(response => response.json())
//   .then(data => {
//     let provinces = data.data.data;
//     provinces.map(value => document.getElementById('provinces').innerHTML += `<option value='${value.code}'>${value.name}</option>`);
//   })
//   .catch(error => {
//     console.error('Lỗi khi gọi API:', error);
//   });

// function fetchDistricts (provincesID) {
//   fetch(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provincesID}&limit=-1`)
//     .then(response => response.json())
//     .then(data => {
//       let districts = data.data.data;
//       document.getElementById('districts').innerHTML = `<option value=''>Select Districts</option>`;
//       if (districts !== undefined) {
//         districts.map(value => document.getElementById('districts').innerHTML += `<option value='${value.code}'>${value.name}</option>`);
//       }
//     })
//     .catch(error => {
//       console.error('Lỗi khi gọi API:', error);
//     });
// }

// function fetchWards (districtsID) {
//   fetch(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtsID}&limit=-1`)
//     .then(response => response.json())
//     .then(data => {
//       let wards = data.data.data;
//       document.getElementById('wards').innerHTML = `<option value=''>Select Wards</option>`;
//       if (wards !== undefined) {
//         wards.map(value => document.getElementById('wards').innerHTML += `<option value='${value.code}'>${value.name}</option>`);
//       }
//     })
//     .catch(error => {
//       console.error('Lỗi khi gọi API:', error);
//     });
// }

// function getProvinces (event) {
//   fetchDistricts(event.target.value);
//   document.getElementById('wards').innerHTML = `<option value=''>Select Wards</option>`;
// }

// function getDistricts (event) {
//   fetchWards(event.target.value);
// }
var selectedButtonId = null;
var selectedDate = null;
var selectedPushPackage = null;
function toggleList(listId) {
  var listContainer = document.getElementById(listId);
  listContainer.style.display = (listContainer.style.display === 'block') ? 'none' : 'block';
}
function toggleSelection(buttonId) {
    var selectButton = document.getElementById(buttonId);

    if (selectedButtonId) {
        var previousButton = document.getElementById(selectedButtonId);
        previousButton.innerHTML = 'Chọn';
    }

    selectedButtonId = buttonId;

    if (selectButton.innerHTML === 'Chọn') {
        selectButton.innerHTML = 'Đã chọn';
    } else {
        selectButton.innerHTML = 'Chọn';
    }

    updatePayment();
}

function selectDate(element) {
    var allDates = document.querySelectorAll('.form-date');
    allDates.forEach(function(date) {
        date.classList.remove('selected');
    });

    if (element !== selectedDate) {
        element.classList.add('selected');
        selectedDate = element;
    } else {
        selectedDate = null;
    }

    updatePayment();
}

function selectPushPackage(element) {
    var allPackages = document.querySelectorAll('.automatic');
    allPackages.forEach(function(pkg) {
        pkg.classList.remove('selected');
    });

    if (element !== selectedPushPackage) {
        element.classList.add('selected');
        selectedPushPackage = element;
    } else {
        selectedPushPackage = null;
    }

    updatePayment();
}



function updatePayment() {
    var tinThuong = { gia: 2160, thongTin: 'Tin thường' };
    var vipBac = { gia: 49050, thongTin: 'VIP Bạc' };
    var vipVang = { gia: 106380, thongTin: 'VIP Vàng' };
    var vipKimCuong = { gia: 200000, thongTin: 'VIP Kim Cương' };

    var typeElement = document.getElementById('type');
    var priceElement = document.getElementById('price');
    var daysElement = document.getElementById('days');
    var feeElement = document.getElementById('fee');
    var totalElement = document.getElementById('total');

    var selectedType;
    var selectedPrice;

    switch (selectedButtonId) {
        case 'selectButton1':
            selectedType = tinThuong;
            break;
        case 'selectButton2':
            selectedType = vipBac;
            break;
        case 'selectButton3':
            selectedType = vipVang;
            break;
        case 'selectButton4':
            selectedType = vipKimCuong;
            break;
        default:
            selectedType = tinThuong;
            break;
    }

    var selectedDays;
    var selectedDateElement = document.querySelector('.form-date.selected h6');
    if (selectedDateElement) {
        selectedDays = parseInt(selectedDateElement.innerText);
    } else {
        selectedDays = 7;
    }

    selectedPrice = selectedType.gia * selectedDays;
    var fee = selectedPrice;

    fee = Math.round(fee * 100) / 100;

    typeElement.innerText = selectedType.thongTin;
    priceElement.innerText = selectedType.gia + ' đ/ngày';
    daysElement.innerText = selectedDays + ' ngày';
    feeElement.innerText = fee.toFixed(2) + ' đ';

    // Lấy các phần tử của Gói Đẩy tin tự động
    var pushPackageElement = document.getElementById('pushPackagePayment');
    var pushPackageRow = document.getElementById('pushPackageRow');
    var pushPackagePriceElement = document.getElementById('pushPackagePrice');
    var pushPackageTotalElement = document.getElementById('pushPackageTotal');

    // Kiểm tra xem có Gói Đẩy tin tự động được chọn không
    if (selectedPushPackage) {
        var pushPackagePrice = parseFloat(selectedPushPackage.querySelector('.ttt p:first-child').innerText.replace('đ', '').replace('.', '').replace(',', '.'));
        pushPackageElement.style.display = 'block'; // Hiển thị dòng thanh toán cho Gói Đẩy tin tự động
        pushPackagePriceElement.innerText = pushPackagePrice.toFixed(2) + ' đ';
        var total = fee + pushPackagePrice;
        pushPackageTotalElement.innerText = total.toFixed(2) + ' đ';
        pushPackageRow.style.display = 'table-row'; // Hiển thị dòng thanh toán cho Gói Đẩy tin tự động
    } else {
        pushPackageElement.style.display = 'none'; // Ẩn dòng thanh toán cho Gói Đẩy tin tự động
        pushPackageRow.style.display = 'none'; // Ẩn dòng thanh toán cho Gói Đẩy tin tự động
    }

    totalElement.innerText = (fee + (pushPackagePrice || 0)).toFixed(2) + ' đ';
}

// Lấy tất cả các phần tử có class 'push-times'
var pushTimesElements = document.querySelectorAll('.push-times');
// Gán sự kiện click cho từng phần tử
pushTimesElements.forEach(function (element) {
    element.addEventListener('click', function () {
        // Bỏ lớp 'active' từ tất cả các phần tử
        pushTimesElements.forEach(function (el) {
            el.classList.remove('active');
        });

        // Thêm lớp 'active' cho phần tử đang được click
        element.classList.add('active');
    });
});
jQuery(function($){


  /* ----------------------------------------------------------- */
  /*  1. FIXED NAVBAR 
  /* ----------------------------------------------------------- */
    

  jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 200) {
        jQuery('.main-navbar').addClass('navbar-fixed-top');
        
      } else {
          jQuery('.main-navbar').removeClass('navbar-fixed-top');          
      }
  });
  
  /* ----------------------------------------------------------- */
  /*  2. AGENTS SLIDER
  /* ----------------------------------------------------------- */    

    jQuery('.aa-agents-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  /* ----------------------------------------------------------- */
  /*  3. TESTIMONIAL SLIDER 
  /* ----------------------------------------------------------- */    

    jQuery('.aa-testimonial-slider').slick({
        dots: false,      
        infinite: true,
        speed: 500,      
        cssEase: 'linear'
      });

  /* ----------------------------------------------------------- */
  /*  4. CLIENT BRAND SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */  

   jQuery('.aa-client-brand-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  
  /* ----------------------------------------------------------- */
  /*  5. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.aa-top-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
    
  /* ----------------------------------------------------------- */
  /*  6. LATEST PRODUCT SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.aa-properties-details-img').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,      
      cssEase: 'linear'
    });

      
  /* ----------------------------------------------------------- */
  /*  7. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */ 
  
  // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

 
  /* ----------------------------------------------------------- */
  /* 8. ADVANCE SEARCH FILTER  (noUiSlider SLIDER)
  /* ----------------------------------------------------------- */        

    jQuery(function(){
      if(jQuery('body').is('.aa-price-range')){
        // FOR AREA SECTION
       var skipSlider = document.getElementById('aa-sqrfeet-range');
        noUiSlider.create(skipSlider, {
            range: {
              'min': 0,
              '10%': 100,
              '20%': 200,
              '30%': 300,
              '40%': 400,
              '50%': 500,
              '60%': 600,
              '70%': 700,
              '80%': 800,
              '90%': 900,
              'max': 1000

            },
            snap: true,
            connect: true,
            start: [200, 700]
        });
        // for value print
        var skipValues = [
          document.getElementById('skip-value-lower'),
          document.getElementById('skip-value-upper')
        ];

        skipSlider.noUiSlider.on('update', function( values, handle ) {
          skipValues[handle].innerHTML = values[handle];
        });

        // FOR PRICE SECTION

        var skipSlider2 = document.getElementById('aa-price-range');
        noUiSlider.create(skipSlider2, {
            range: {
                'min': 0,
                '10%': 100,
                '20%': 200,
                '30%': 300,
                '40%': 400,
                '50%': 500,
                '60%': 600,
                '70%': 700,
                '80%': 800,
                '90%': 900,
                'max': 1000
            },
            snap: true,
            connect: true,
            start: [200, 700]
        });
        // for value print
        var skipValues2 = [
          document.getElementById('skip-value-lower2'),
          document.getElementById('skip-value-upper2')
        ];

        skipSlider2.noUiSlider.on('update', function( values, handle ) {
          skipValues2[handle].innerHTML = values[handle];
        });
      }
    });

  /* ----------------------------------------------------------- */
  /*  9. MIXIT FILTER ( FOR GALLERY ) 
  /* ----------------------------------------------------------- */  

    jQuery(function(){
      jQuery('#mixit-container').mixItUp();
    });

  /* ----------------------------------------------------------- */
  /*  10. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
  /* ----------------------------------------------------------- */ 
      
    jQuery(document).ready(function() {
      jQuery(".fancybox").fancybox();
    });  
   
    
  /* ----------------------------------------------------------- */
  /*  11. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* ----------------------------------------------------------- */
  /*  12. PRELOADER
  /* ----------------------------------------------------------- */

   jQuery(window).load(function() { // makes sure the whole site is loaded      
      jQuery('#aa-preloader-area').delay(300).fadeOut('slow'); // will fade out      
    })
   


  /* ----------------------------------------------------------- */
  /*  13. GRID AND LIST LAYOUT CHANGER 
  /* ----------------------------------------------------------- */

  jQuery("#aa-list-properties").click(function(e){
    e.preventDefault(e);
    jQuery(".aa-properties-nav").addClass("aa-list-view");
  });
  jQuery("#aa-grid-properties").click(function(e){
    e.preventDefault(e);
    jQuery(".aa-properties-nav").removeClass("aa-list-view");
  });


  /* ----------------------------------------------------------- */
  /*  14. RELATED ITEM SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.aa-related-item-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }); 

 
});

