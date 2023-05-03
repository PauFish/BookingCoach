!function(e,t){function a(){}var n,i,r,o,s,l,d,c,u,f,p,m,y,v,h=".26680508",_=e.head;"function"==typeof[].indexOf&&_&&(t.a2a=t.a2a||{},n=t.a2a_config=t.a2a_config||{},u=(i=e.currentScript)&&i.src?i.src:"",NodeList&&NodeList.prototype.forEach&&(t.a2a.init=function(t,a){void 0===a&&(a=n);var i=":not([data-a2a-url]):not(.a2a_target)";e.querySelectorAll(".a2a_dd"+i+",.a2a_kit"+i).forEach((function(e){e.matches(".a2a_kit .a2a_dd"),e.a2a_index||null!==e.getAttribute("data-a2a-url")||e.matches(".a2a_kit .a2a_dd")||(e.dataset.a2aUrl=a.linkurl||"",a.linkname&&(e.dataset.a2aTitle=a.linkname))})),delete n.linkurl,delete n.linkname},t.a2a_init=t.a2a.init,!i||i.async||i.defer||t.a2a.init("page",{linkurl:n.linkurl,linkname:n.linkname})),t.a2a.page||(t.a2a.page=!0,r=[],["init_all","svg_css"].forEach((function(e){t.a2a[e]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];r.push([e,t])}})),p=(v=n.static_server)?v+"/":"https://static.addtoany.com/menu/",f=u&&-1!==u.split("/")[2].indexOf("addtoany"),o=(f=(o=!v&&f?u:p).match(/^[^?#]+\//))?f[0]:o,s=function(t,a,n){void 0===t&&(t=o+"eso"+h+".js"),void 0===a&&(a=!1);var r=e.createElement((n=void 0!==n&&n)?"link":"script"),l="module";(n=(n?(n="preload",r.href=t,r.rel=a?l+n:n,a||(r.as="script")):(r.src=t,a&&(r.type=l,r.onerror=function(){return s()})),i&&i.nonce?i.nonce:null))&&(r.nonce=n),_.appendChild(r)},d="a2a_sm_ifr",c=function(){var n,i,r,o;i="a2a_menu_container",n=e.getElementById(i),t.a2a.main=l=n||e.createElement("div"),l.id!=i&&(l.style.position="static",e.body.insertBefore(l,null)),t.addEventListener("message",(function(a){var n;".addtoany.com"===a.origin.substr(-13)&&"object"==typeof(a=a.data)&&a.a2a&&(a.h1&&(t.a2a.h1=!0),"function"==typeof(n=t.a2a.userServices)?n(a.user_services):t.a2a.userServices=a.user_services,e.getElementById(d).style.display="none")})),n=e.createElement("iframe"),i=e.createElement("div"),r=n.style,o=i.style,n.id=d,r.width=r.height=o.width=o.height="1px",r.top=r.left=r.border="0",r.position=o.position="absolute",r.zIndex=o.zIndex="100000",n.title="AddToAny Utility Frame",n.setAttribute("transparency","true"),n.setAttribute("allowTransparency","true"),n.setAttribute("frameBorder","0"),n.src="https://static.addtoany.com/menu/sm.24.html#type=core&event=load",o.top="0",o.visibility="hidden",l.insertBefore(i,null),i.insertBefore(n,null),c=a},e.body&&c(),"function"==typeof(u="".matchAll)&&u.toString().includes("[native code]")?(f=p+(v?"":"svg/"),s((u=o+(v?"":"modules/"))+"core"+h+".js",!0),p=document.createElement("link").relList.supports("modulepreload"),n.overlays&&n.overlays.length&&p&&s(u+"overlays"+h+".js",!0,!0),e.querySelector('.a2a_dd:empty,.a2a_kit [class*="a2a_button_"]:empty')&&t.a2a.h1&&s(f+"icons.31.svg.js",!1,!0)):s(),m=function(e){var a=t.a2a.core;"function"!=typeof a||e?e?e():t.a2a.core=function(e){return m(e)}:a()},v=function(){y||(y=!0,c(),m(),r.forEach((function(e){var a;(a=t.a2a)[e[0]].apply(a,e[1])})))},"loading"!==e.readyState?v():(e.addEventListener("readystatechange",v),e.addEventListener("DOMContentLoaded",v))))}(document,window);

$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             hotel_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your hotel name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        message: 'Please supply a vaild phone number with country code'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 3,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 1,
                    },
                    notEmpty: {
                        message: 'Please supply your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            country: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your country name'
                    }
                }
            },
            
            comment: {
                validators: {
                      stringLength: {
                        min: 4,
                        max: 250,
                        message:'Please enter at least 5 characters and no more than 250'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            
        });
});
