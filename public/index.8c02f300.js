let e=document.querySelector(".categories .right"),t=document.querySelector(".angle-small-left"),i=document.querySelector(".angle-small-right"),l=5;window.addEventListener("resize",function(){this.document.body.clientWidth<738?l=8:this.document.body.clientWidth<484&&(l=11)}),window.addEventListener("load",function(){e.scrollLeft=0,t.style.visibility="hidden"}),t.addEventListener("click",function(){let o=(e.scrollWidth-e.clientWidth)/l;e.scrollLeft-=o+10,i.style.visibility="visible",e.scrollLeft-o<=0&&(t.style.visibility="hidden")}),i.addEventListener("click",function(){let o=e.scrollWidth-e.clientWidth,c=o/l;e.scrollLeft+=c+10,t.style.visibility="visible",e.scrollLeft+c>=o&&(i.style.visibility="hidden")}),e.addEventListener("scroll",()=>{0==e.scrollLeft?t.style.visibility="hidden":e.scrollLeft>0&&(t.style.visibility="visible");let l=e.scrollWidth-e.clientWidth;e.scrollLeft<l?i.style.visibility="visible":e.scrollLeft>=l&&(i.style.visibility="hidden")});let o=document.querySelector(".header-section .top-header-section .left .search-box"),c=document.querySelector(".header-section .top-header-section .left .search-box .search-input");function n(){o.clientWidth<254?c.placeholder="Search images":c.placeholder="Search high-resolution images"}c.addEventListener("focus",function(){o.style.border="1px solid #d1d1d1",o.style.backgroundColor="white"}),c.addEventListener("blur",function(){o.style.border="1px solid transparent",o.style.backgroundColor="#eee"}),window.addEventListener("resize",n),n();let r=document.querySelectorAll(".categories .js-on-click-effect");r[0].style.borderBottom="2px solid black",r[0].style.color="#111",r.forEach(function(e){e.addEventListener("click",function(){imageSearchBoxs.forEach(function(e){e.value=""}),r.forEach(function(e){e.style.borderBottom="2px solid transparent",e.style.color="defualt",e.style.color="#767676"}),e.style.borderBottom="2px solid black",e.style.color="#111"})}),r.forEach(e=>{e.addEventListener("mouseover",function(){e.style.color="#111"})}),r.forEach(e=>{e.addEventListener("mouseout",function(){"2px solid black"!=e.style.borderBottom&&(e.style.color="#767676")})}),document.querySelector(".header-section .top-header-section .left .branding").addEventListener("click",function(){location.reload(),imageSearchBoxs.forEach(function(e){e.value=""})});
//# sourceMappingURL=index.8c02f300.js.map
