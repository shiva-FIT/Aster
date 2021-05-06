// jQuery Validation
$(function() {
  
  $("form[name='registration']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        number: true,
        minlength: 9,
        maxlength:11
      },
      checkbox: {
        required: true
      }
    },
    messages: {
      name: "Please enter your firstname",
      phone: "Please enter your valid phone number",
      checkbox: "Please check the checkbox",
      email: "Please enter a valid email address"
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
});


// DOM manupulation script
$(document).ready(function(){
 
  let JSONData1 = [
    {
      mainHeading:'Pediatric BMT',
      imagePath:'./images/doc.png',
      docterName:'Dr. Vijay Agarwal',
      doctorDegree:'MD, MRCP, PhD,CCT',
      docterDescription:'Lead & Sr. Consultant - Medical Oncology & Haematology',
      docter_text:'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. '
    }, {
      mainHeading:'Pediatric BMT',
      imagePath:'./images/doc.png',
      docterName:'Dr. Vijay Agarwal',
      doctorDegree:'MD, MRCP, PhD,CCT',
      docterDescription:'Lead & Sr. Consultant - Medical Oncology & Haematology',
      docter_text:'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. '
    }, {
      mainHeading:'Pediatric BMT',
      imagePath:'./images/doc.png',
      docterName:'Dr. Vijay Agarwal',
      doctorDegree:'MD, MRCP, PhD,CCT',
      docterDescription:'Lead & Sr. Consultant - Medical Oncology & Haematology',
      docter_text:'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. '
    },{
      mainHeading:'Pediatric BMT',
      imagePath:'./images/doc.png',
      docterName:'Dr. Vijay Agarwal',
      doctorDegree:'MD, MRCP, PhD,CCT',
      docterDescription:'Lead & Sr. Consultant - Medical Oncology & Haematology',
      docter_text:'Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. '
    }
  ]

  let JSONData2 = [
    {
      imagePath:'./images/1.png',
      deficiencyText:'Failure to thrive – not gaining weight and height as per the age norms'
    },{
      imagePath:'./images/2.png',
      deficiencyText:'Infections warranting multiple hospitalizations'
    },{
      imagePath:'./images/3.png',
      deficiencyText:'Requirement of intravenous antibiotics to clear infections'
    },{
      imagePath:'./images/4.png',
      deficiencyText:'2 or more episodes of pneumonia'
    },{
      imagePath:'./images/5.png',
      deficiencyText:'Family history of death of children at young age due to immune deficiency '
    },{
      imagePath:'./images/6.png',
      deficiencyText:'Repeated episodes of diarrhea'
    },{
      imagePath:'./images/7.png',
      deficiencyText:'2 or more episodes of sinus infections within a year'
    },{
      imagePath:'./images/8.png',
      deficiencyText:'2 or more episodes of ear discharge'
    },{
      imagePath:'./images/9.png',
      deficiencyText:'Repeated skin infections'
    },{
      imagePath:'./images/10.png',
      deficiencyText:'Repeated abscess formation (liver abscess, brain abscess)'
    }
  ]

  let JSONData3 = [
    {
      imagePath:'./images/test.png',
      imagePath2:'./images/quote.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },{
      imagePath2:'./images/quote.png',
      imagePath:'./images/test.png',
      testimonialName:'John Doe',
      testimonialQualification:'Softwere Engineer',
      testimonialText:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    }

  ]

  var dynamicData1 = JSONData1.map((elm, key)=>{
    return(
      `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-1" >
        <div class="doctor_profile_box">
          <h4>${elm.mainHeading}</h4>
          <div class="doc_img my-4">
            <img src="${elm.imagePath}">
          </div>
          <div class="doc_details">
            <h5>${elm.docterName}</h5>
            <p class="doc_deg">${elm.doctorDegree}</p> 
            <p>${elm.docterDescription}</p>
          </div>
          <div class="border_line"></div>
          <div class="doc_text">${elm.docter_text}</div>
          <div class="know_more mt-4" id="know_more${key}">
            <button onclick="knowMore()">Know More</button>
          </div>
          <div id="km_01" style="display: none;">
            <p>More details comming soon...</p>
          </div>
          <div id="km_${key}" class="" style="display:none">
            <p>Details loading...</p>
          </div>
        </div>
      </div>`
      )
  })

  var dynamicData2 = JSONData2.map((elm, key) => {
    return (
        `<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-3">
          <div class="deficiency_icon_box">
            <div class="icon_div">
              <img src="${elm.imagePath}">
            </div>
            <div class="text_div">${elm.deficiencyText}</div>
          </div>
        </div>`
      )
  })

  var dynamicData3 = JSONData3.map((elm, key) => {
    return (
        `<div class="carousel-item flex-fill col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 py-5" id="itemDiv${key}">
          <div class="testimonials_block">
            <div class="media media_height">
              <img class="mr-3" src="${elm.imagePath}" alt="Generic placeholder image">
              <div class="media-body">
                <h5 class="m-0">${elm.testimonialName}</h5>
                <p>${elm.testimonialQualification}</p>
              </div>
              <img src="${elm.imagePath2}" class="quote">
            </div>
            <p class="testimonials_text">${elm.testimonialText}</p>
          </div>
        </div>`
      )
  })

  

  console.log(dynamicData1);
  console.log(dynamicData2);
  console.log(dynamicData3);


  $('#docter_container').append(dynamicData1);
  $('#immune_container').append(dynamicData2);
  $('#carousal_container').append(dynamicData3);

  $("#itemDiv0").addClass("active");

  // Doctors block know more button script
  $("#know_more0 button").click(function() {
    $("#km_0").show();
    $("#know_more0").hide();
  })
  $("#know_more1 button").click(function() {
    $("#km_1").show();
    $("#know_more1").hide();
  })
  $("#know_more2 button").click(function() {
    $("#km_2").show();
    $("#know_more2").hide();
  })
  $("#know_more3 button").click(function() {
    $("#km_3").show();
    $("#know_more3").hide();
  })

})





// Developed at agap2
// Based on:
// http://www.codeply.com/go/s3I9ivCBYH/multi-carousel-single-slide-bootstrap-4

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
  let $e = $(e.relatedTarget),
      itemsPerSlide = 3,
      totalItems = $('.carousel-item', this).length,
      $itemsContainer = $('.carousel-inner', this),
      it = itemsPerSlide - (totalItems - $e.index());
  if (it > 0) {
    for (var i = 0; i < it; i++) {
      $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
        // append slides to the end/beginning
        appendTo($itemsContainer);
    }
  }
});
