'use strict';

const products = [
  {id:1,name:'Studio Wireless Headphones',category:'Tech',price:89,compareAt:119,rating:4.9,reviews:128,badge:'BESTSELLER',image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',description:'Your own little world, in full color. Rich, balanced sound meets all-day comfort in a clean, considered design made for commutes, focus sessions, and everything between.',details:'Up to 35-hour battery · Soft-touch finish · USB-C charging',featured:1,newest:10},
  {id:2,name:'Everyday Runner Sneakers',category:'Style',price:74,compareAt:null,rating:4.8,reviews:94,badge:'JUST IN',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',description:'A little lift for wherever the day takes you. An easy, versatile silhouette with a comfortable feel and a pop of color to keep things interesting.',details:'Lightweight build · Cushioned sole · Everyday profile',featured:2,newest:12},
  {id:3,name:'Minimalist Everyday Watch',category:'Style',price:110,compareAt:140,rating:4.9,reviews:76,badge:'NOVA PICK',image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',description:'The finishing touch that never tries too hard. A pared-back dial, clean lines, and a versatile silhouette that moves easily from a slow Sunday to your busiest day.',details:'Minimal dial · Adjustable strap · Gift-ready packaging',featured:3,newest:8},
  {id:4,name:'Daybreak Utility Backpack',category:'Style',price:68,compareAt:null,rating:4.7,reviews:63,badge:null,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',description:'Everything in its place, without the bulk. Thoughtful compartments and a streamlined profile make this the grab-and-go bag you will keep by the door.',details:'Roomy main compartment · Padded laptop sleeve · Adjustable straps',featured:4,newest:7},
  {id:5,name:'Soft Glow Table Lamp',category:'Home',price:58,compareAt:72,rating:4.8,reviews:51,badge:'LOW STOCK',image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',description:'A warmer corner, instantly. This sculptural lamp brings a soft glow and a calm little moment to bedside tables, desks, and reading nooks.',details:'Warm ambient light · Compact footprint · Modern silhouette',featured:5,newest:6},
  {id:6,name:'Weekend Frame Sunglasses',category:'Style',price:42,compareAt:null,rating:4.6,reviews:38,badge:null,image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',description:'A forever shape for sunny days. Easy to wear, easy to pair, and just the right amount of statement for weekends away or a coffee run.',details:'UV-protective lenses · Lightweight frame · Protective pouch',featured:6,newest:9},
  {id:7,name:'Sunday Ceramic Mug Set',category:'Home',price:34,compareAt:null,rating:4.9,reviews:112,badge:'SET OF 2',image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85',description:'Make the first sip your favorite part. A thoughtfully shaped mug set for slow mornings, long catch-ups, and the ritual of a really good cup.',details:'Set of 2 · Comfortable handle · Dishwasher safe',featured:7,newest:4},
  {id:8,name:'Pocket Bluetooth Speaker',category:'Tech',price:49,compareAt:59,rating:4.7,reviews:87,badge:null,image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',description:'Bring a little soundtrack along. Compact enough for a tote, with clear, room-filling sound that makes kitchen dancing a perfectly valid plan.',details:'Bluetooth connection · Portable design · USB-C charging',featured:8,newest:5},
  {id:9,name:'Curve Lounge Chair',category:'Home',price:189,compareAt:null,rating:4.8,reviews:29,badge:'DESIGN PICK',image:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85',description:'A reason to stay a little longer. Clean geometry, soft curves, and an easy-to-style profile turn the quiet corner into your favorite place in the room.',details:'Sculpted profile · Supportive seat · Modern neutral finish',featured:9,newest:3},
  {id:10,name:'Point & Go Digital Camera',category:'Tech',price:129,compareAt:159,rating:4.6,reviews:42,badge:'JUST IN',image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',description:'For the moments you want to keep. A playful, take-anywhere camera that encourages you to slow down, look closer, and make memories off your phone.',details:'Compact body · Wrist strap included · Simple controls',featured:10,newest:11},
  {id:11,name:'Daily Carry Tote',category:'Tech',price:39,compareAt:null,rating:4.8,reviews:68,badge:null,image:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',description:'The extra pair of hands you wish you had. Roomy, unfussy, and ready for your laptop, market finds, gym kit, and all the little things the day brings.',details:'Spacious interior · Reinforced handles · Easy everyday carry',featured:11,newest:2},
  {id:12,name:'Reset Ritual Skincare Kit',category:'Wellness',price:56,compareAt:69,rating:4.9,reviews:73,badge:'GIFTABLE',image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85',description:'A gentler start and a softer landing. A curated little routine for the daily reset: simple essentials that make looking after yourself feel less like a task.',details:'Three-piece set · Travel-friendly · Thoughtful gift box',featured:12,newest:1},
  {id:13,name:'Cloud Key Mechanical Keyboard',category:'Tech',price:96,compareAt:null,rating:4.7,reviews:55,badge:'DESK FAVORITE',image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85',description:'Make the desk your happy place. A satisfying typing feel and clean design make long work sessions feel a little more considered.',details:'Tactile typing feel · Compact footprint · Clean modern finish',featured:13,newest:13},
  {id:14,name:'Canvas Weekender Bag',category:'Wellness',price:84,compareAt:98,rating:4.8,reviews:41,badge:null,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',description:'A quick overnight or a long weekend, all sorted. A roomy, dependable carryall designed to make packing up and heading out feel effortless.',details:'Roomy main compartment · Easy-carry handles · Travel-ready shape',featured:14,newest:14}
];

const STORAGE = {cart:'nova_store_cart_v1', wishlist:'nova_store_wishlist_v1'};
const FREE_SHIPPING = 75;
let activeCategory = 'All';
let activeSearch = '';
let showSavedOnly = false;
let sortMode = 'featured';
let appliedCoupon = false;
let cart = readStorage(STORAGE.cart, {});
let wishlist = new Set(readStorage(STORAGE.wishlist, []));
let lastFocusedElement = null;

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function readStorage(key, fallback){try{const value=JSON.parse(localStorage.getItem(key));return value ?? fallback;}catch{return fallback;}}
function writeStorage(key, value){try{localStorage.setItem(key,JSON.stringify(value));}catch{/* Browsing can continue if storage is unavailable. */}}
function productById(id){return products.find(p=>p.id===Number(id));}
function cartQuantity(){return Object.values(cart).reduce((sum,entry)=>sum+Number(entry.quantity||0),0);}
function cartSubtotal(){return Object.entries(cart).reduce((sum,[id,entry])=>{const p=productById(id);return sum+(p?p.price*Number(entry.quantity||0):0);},0);}
function discountAmount(){return appliedCoupon?cartSubtotal()*.10:0;}
function cartTotal(){return Math.max(0,cartSubtotal()-discountAmount());}

const svg = {
  heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 10-8.8 10S3.2 14 3.2 8.8A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.5Z"/></svg>',
  plus:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  bag:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 12H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>'
};

function getFilteredProducts(){
  let list = products.filter(p => activeCategory==='All' || p.category===activeCategory);
  if(showSavedOnly) list = list.filter(p=>wishlist.has(p.id));
  const query = activeSearch.trim().toLowerCase();
  if(query) list = list.filter(p => `${p.name} ${p.category} ${p.description} ${p.details}`.toLowerCase().includes(query));
  if(sortMode==='price-low') list.sort((a,b)=>a.price-b.price);
  else if(sortMode==='price-high') list.sort((a,b)=>b.price-a.price);
  else if(sortMode==='rating') list.sort((a,b)=>b.rating-a.rating || b.reviews-a.reviews);
  else if(sortMode==='newest') list.sort((a,b)=>b.newest-a.newest);
  else list.sort((a,b)=>a.featured-b.featured);
  return list;
}

function renderProducts(){
  const list=getFilteredProducts();
  $('#productGrid').innerHTML=list.map((p,index)=>{
    const saved=wishlist.has(p.id);
    const badgeClass=p.badge==='BESTSELLER'||p.badge==='NOVA PICK'?'badge-dark':'';
    return `<article class="product-card" style="animation-delay:${Math.min(index,8)*35}ms">
      <div class="product-media">
        <button class="product-image-button" data-quick-view="${p.id}" aria-label="View ${escapeHTML(p.name)} details"><img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy"></button>
        ${p.badge?`<span class="product-badge ${badgeClass}">${escapeHTML(p.badge)}</span>`:''}
        <button class="wishlist-toggle ${saved?'is-saved':''}" data-wishlist="${p.id}" aria-label="${saved?'Remove':'Add'} ${escapeHTML(p.name)} ${saved?'from':'to'} saved items" aria-pressed="${saved}">${svg.heart}</button>
        <button class="quick-view-button" data-quick-view="${p.id}">Quick look <span aria-hidden="true">↗</span></button>
      </div>
      <div class="product-card-info">
        <div class="product-category-line"><span class="product-category">${escapeHTML(p.category)}</span><span class="product-rating" aria-label="Rated ${p.rating} out of 5">★ <span>${p.rating} (${p.reviews})</span></span></div>
        <div class="product-title-row"><button class="product-title" data-quick-view="${p.id}">${escapeHTML(p.name)}</button></div>
        <div class="product-price"><strong>${money(p.price)}</strong>${p.compareAt?`<del>${money(p.compareAt)}</del>`:''}<button class="add-button" data-add-cart="${p.id}" aria-label="Add ${escapeHTML(p.name)} to bag">${svg.plus}</button></div>
      </div>
    </article>`;
  }).join('');
  $('#productGrid').hidden=list.length===0;
  $('#emptyState').hidden=list.length!==0;
  $('#resultsSummary').innerHTML=`Showing <strong>${list.length}</strong> ${showSavedOnly?'saved':'thoughtfully picked'} ${list.length===1?'thing':'things'}${activeSearch?` for <strong>“${escapeHTML(activeSearch)}”</strong>`:''}`;
  $('#clearFiltersButton').hidden=!(activeCategory!=='All'||activeSearch||showSavedOnly||sortMode!=='featured');
  $$('.category-pill').forEach(btn=>btn.classList.toggle('selected',btn.dataset.category===activeCategory));
  $$('.nav-link').forEach(link=>link.classList.toggle('active',link.dataset.navCategory===activeCategory || (!link.dataset.navCategory&&link.textContent.trim()==='Shop all'&&activeCategory==='All')));
  const categoryCounts={All:products.length};
  products.forEach(p=>categoryCounts[p.category]=(categoryCounts[p.category]||0)+1);
  $$('[data-count-for]').forEach(el=>el.textContent=categoryCounts[el.dataset.countFor]||0);
}

function renderHeaderCounts(){
  $('#cartCount').textContent=cartQuantity();
  $('#savedCount').textContent=wishlist.size;
  $('#drawerItemCount').textContent=`(${cartQuantity()})`;
  $('#savedButton').classList.toggle('has-saved',wishlist.size>0);
}
function toggleWishlist(id){
  const p=productById(id); if(!p)return;
  if(wishlist.has(p.id)){wishlist.delete(p.id);toast(`${p.name} removed from saved items.`);}else{wishlist.add(p.id);toast(`${p.name} saved for later.`);}
  writeStorage(STORAGE.wishlist,[...wishlist]);
  if(showSavedOnly)renderProducts();else updateWishlistButtons();
  renderHeaderCounts();
}
function updateWishlistButtons(){
  $$('[data-wishlist]').forEach(btn=>{const id=Number(btn.dataset.wishlist);const saved=wishlist.has(id);btn.classList.toggle('is-saved',saved);btn.setAttribute('aria-pressed',String(saved));btn.setAttribute('aria-label',`${saved?'Remove':'Add'} ${productById(id)?.name||'item'} ${saved?'from':'to'} saved items`);});
}
function addToCart(id,quantity=1){
  const p=productById(id);if(!p)return;
  if(!cart[p.id])cart[p.id]={quantity:0};cart[p.id].quantity+=quantity;
  writeStorage(STORAGE.cart,cart);renderHeaderCounts();renderCart();toast(`${p.name} added to your bag.`);
}
function changeQuantity(id,delta){
  const entry=cart[id];if(!entry)return;
  entry.quantity=Number(entry.quantity)+delta;
  if(entry.quantity<=0)delete cart[id];
  writeStorage(STORAGE.cart,cart);renderHeaderCounts();renderCart();
}
function removeFromCart(id){const p=productById(id);delete cart[id];writeStorage(STORAGE.cart,cart);renderHeaderCounts();renderCart();toast(`${p?.name||'Item'} removed from your bag.`);}
function renderCart(){
  const entries=Object.entries(cart).filter(([id,e])=>productById(id)&&e.quantity>0);
  const empty=entries.length===0;
  $('#cartEmpty').hidden=!empty;$('#cartItems').hidden=empty;$('#drawerFooter').hidden=empty;
  $('#cartItems').innerHTML=entries.map(([id,entry])=>{const p=productById(id);return `<div class="cart-item"><div class="cart-item-image"><img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy"></div><div class="cart-item-info"><small>${escapeHTML(p.category)}</small><strong>${escapeHTML(p.name)}</strong><span class="cart-unit-price">${money(p.price)} each</span><div class="quantity-control"><button data-quantity="${id}" data-delta="-1" aria-label="Decrease ${escapeHTML(p.name)} quantity">−</button><span>${entry.quantity}</span><button data-quantity="${id}" data-delta="1" aria-label="Increase ${escapeHTML(p.name)} quantity">+</button></div></div><div class="cart-item-end"><strong>${money(p.price*entry.quantity)}</strong><button class="remove-item" data-remove-cart="${id}">Remove</button></div></div>`;}).join('');
  const subtotal=cartSubtotal();const total=cartTotal();
  $('#subtotalValue').textContent=money(subtotal);$('#discountValue').textContent=`−${money(discountAmount())}`;$('#discountRow').hidden=!appliedCoupon;
  $('#discountLabel').textContent=appliedCoupon?'(NOVA10)':'';
  $('#totalValue').textContent=money(total);$('#shippingValue').textContent=subtotal>=FREE_SHIPPING?'Free':'Calculated at checkout';
  const remaining=Math.max(0,FREE_SHIPPING-subtotal);$('#shippingProgressCopy').innerHTML=remaining>0?`You're <strong>${money(remaining)} away</strong> from free shipping.`:'<strong>You unlocked free shipping. Nice work!</strong>';
  $('#shippingProgressBar').style.width=`${Math.min(100,subtotal/FREE_SHIPPING*100)}%`;
  if(empty){appliedCoupon=false;$('#couponInput').value='';$('#couponMessage').innerHTML='Try <strong>NOVA10</strong> for 10% off.';}
  renderHeaderCounts();
}
function openCart(){closeAllModals(false);lastFocusedElement=document.activeElement;$('#overlay').hidden=false;$('#cartDrawer').hidden=false;document.body.classList.add('no-scroll');renderCart();$('#closeCartButton').focus();}
function closeCart(){if($('#cartDrawer').hidden)return;$('#cartDrawer').hidden=true;syncOverlay();if(lastFocusedElement&&lastFocusedElement.focus)lastFocusedElement.focus();}
function syncOverlay(){const anyOpen=!$('#cartDrawer').hidden||!$('#quickViewModal').hidden||!$('#checkoutModal').hidden||!$('#successModal').hidden;$('#overlay').hidden=!anyOpen;document.body.classList.toggle('no-scroll',anyOpen);}
function closeAllModals(clearFocus=true){$('#cartDrawer').hidden=true;$('#quickViewModal').hidden=true;$('#checkoutModal').hidden=true;$('#successModal').hidden=true;syncOverlay();if(clearFocus&&lastFocusedElement?.focus)lastFocusedElement.focus();}
function openQuickView(id){const p=productById(id);if(!p)return;closeAllModals(false);lastFocusedElement=document.activeElement;$('#quickViewContent').innerHTML=`<div class="quick-view-image"><img src="${p.image}" alt="${escapeHTML(p.name)}"></div><div class="quick-view-details"><span class="product-category">${escapeHTML(p.category)} · THOUGHTFULLY PICKED</span><h2>${escapeHTML(p.name)}</h2><div class="quick-view-rating">★★★★★ <span>${p.rating} · ${p.reviews} reviews</span></div><div class="quick-view-price">${money(p.price)} ${p.compareAt?`<del>${money(p.compareAt)}</del>`:''}</div><p>${escapeHTML(p.description)}</p><div class="product-meta">✳ &nbsp; ${escapeHTML(p.details)}</div><button class="button button-dark quick-view-add" data-add-cart="${p.id}">Add to bag — ${money(p.price)} <span>↗</span></button><button class="quick-view-wish" data-wishlist="${p.id}">${wishlist.has(p.id)?'♥ Saved to your favorites':'♡ Save this little find'}</button></div>`;$('#quickViewModal').hidden=false;syncOverlay();$('#closeQuickViewButton').focus();}
function openCheckout(){if(cartQuantity()===0){toast('Your bag is empty. Find a little something first.');return;}closeAllModals(false);$('#checkoutTotal').textContent=money(cartTotal());$('#checkoutModal').hidden=false;syncOverlay();$('#checkoutModal input[name="firstName"]').focus();}
function showSuccess(){closeAllModals(false);const orderId=`NV-${Math.floor(100000+Math.random()*900000)}`;$('#demoOrderNumber').textContent=orderId;$('#successMessage').textContent=`Your demo order total is ${money(cartTotal())}. This is a preview only; no payment was taken and no order will be shipped.`;$('#successModal').hidden=false;syncOverlay();$('#closeSuccessButton').focus();}
function toast(message){const node=document.createElement('div');node.className='toast';node.innerHTML=`<span class="toast-icon">✓</span><span>${escapeHTML(message)}</span>`;$('#toastRegion').append(node);setTimeout(()=>{node.classList.add('toast-out');setTimeout(()=>node.remove(),220);},2800);}
function setCategory(category){activeCategory=category;showSavedOnly=false;renderProducts();$('#mainNav').classList.remove('is-open');$('#mobileMenuButton').setAttribute('aria-expanded','false');}
function resetFilters(){activeCategory='All';activeSearch='';showSavedOnly=false;sortMode='featured';$('#searchInput').value='';$('#sortSelect').value='featured';renderProducts();}

$('#categoryPills').addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(btn)setCategory(btn.dataset.category);});
$('#sortSelect').addEventListener('change',e=>{sortMode=e.target.value;renderProducts();});
$('#searchInput').addEventListener('input',e=>{activeSearch=e.target.value;renderProducts();});
$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Escape'){e.target.value='';activeSearch='';renderProducts();e.target.blur();}});
$('#productGrid').addEventListener('click',e=>{
  const wish=e.target.closest('[data-wishlist]');if(wish){toggleWishlist(wish.dataset.wishlist);return;}
  const add=e.target.closest('[data-add-cart]');if(add){addToCart(add.dataset.addCart);return;}
  const quick=e.target.closest('[data-quick-view]');if(quick)openQuickView(quick.dataset.quickView);
});
$('#quickViewContent').addEventListener('click',e=>{const wish=e.target.closest('[data-wishlist]');if(wish){const id=Number(wish.dataset.wishlist);toggleWishlist(id);const button=$('[data-wishlist]',$('#quickViewContent'));if(button)button.textContent=wishlist.has(id)?'♥ Saved to your favorites':'♡ Save this little find';return;}const add=e.target.closest('[data-add-cart]');if(add){addToCart(add.dataset.addCart);closeAllModals();openCart();}});
$('#cartItems').addEventListener('click',e=>{const quantity=e.target.closest('[data-quantity]');if(quantity){changeQuantity(quantity.dataset.quantity,Number(quantity.dataset.delta));return;}const remove=e.target.closest('[data-remove-cart]');if(remove)removeFromCart(remove.dataset.removeCart);});
$('#openCartButton').addEventListener('click',openCart);$('#closeCartButton').addEventListener('click',closeCart);$('#continueShoppingButton').addEventListener('click',()=>{closeCart();$('#shop').scrollIntoView({behavior:'smooth'});});
$('#overlay').addEventListener('click',()=>closeAllModals());$('#closeQuickViewButton').addEventListener('click',()=>closeAllModals());$('#closeCheckoutButton').addEventListener('click',()=>closeAllModals());$('#closeSuccessButton').addEventListener('click',()=>closeAllModals());$('#finishOrderButton').addEventListener('click',()=>{closeAllModals();$('#shop').scrollIntoView({behavior:'smooth'});});
$('#checkoutButton').addEventListener('click',openCheckout);
$('#applyCouponButton').addEventListener('click',()=>{const code=$('#couponInput').value.trim().toUpperCase();if(code==='NOVA10'){appliedCoupon=true;$('#couponMessage').textContent='Nice! Your 10% discount is applied.';$('#couponMessage').style.color='#637d25';renderCart();toast('NOVA10 applied — 10% off your items.');}else{appliedCoupon=false;$('#couponMessage').textContent=code?'That code did not work. Try NOVA10.':'Enter a code first, then apply it.';$('#couponMessage').style.color='#a64b3c';renderCart();}});
$('#couponInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('#applyCouponButton').click();}});
$('#checkoutForm').addEventListener('submit',e=>{e.preventDefault();if(!e.currentTarget.reportValidity())return;if(cartQuantity()===0){closeAllModals();toast('Your bag is empty.');return;}cart={};appliedCoupon=false;writeStorage(STORAGE.cart,cart);renderHeaderCounts();renderCart();e.currentTarget.reset();showSuccess();});
$('#savedButton').addEventListener('click',()=>{showSavedOnly=!showSavedOnly;activeCategory='All';renderProducts();if(showSavedOnly)$('#shop').scrollIntoView({behavior:'smooth'});});
$('#clearFiltersButton').addEventListener('click',resetFilters);$('#resetSearchButton').addEventListener('click',resetFilters);
$('#mobileMenuButton').addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('is-open');$('#mobileMenuButton').setAttribute('aria-expanded',String(open));});
$$('[data-nav-category]').forEach(link=>link.addEventListener('click',()=>setCategory(link.dataset.navCategory)));
$$('[data-featured-category]').forEach(link=>link.addEventListener('click',()=>setCategory(link.dataset.featuredCategory)));
$$('[data-footer-category]').forEach(link=>link.addEventListener('click',()=>setCategory(link.dataset.footerCategory)));
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();const email=$('#newsletterEmail').value.trim();if(!email)return;toast('You’re on the list. Check your inbox for the good stuff!');e.currentTarget.reset();});
$('#currentYear').textContent=new Date().getFullYear();
document.addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#searchInput').focus();$('#searchInput').select();}
  if(e.key==='Escape'){
    if(!$('#successModal').hidden||!$('#checkoutModal').hidden||!$('#quickViewModal').hidden||!$('#cartDrawer').hidden)closeAllModals();
    $('#mainNav').classList.remove('is-open');$('#mobileMenuButton').setAttribute('aria-expanded','false');
  }
});

renderProducts();renderHeaderCounts();renderCart();
